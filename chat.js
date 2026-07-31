// API proxy para Claude - resolve problema de CORS
// Deploy no Vercel automaticamente

export default async function handler(req, res) {
  // Permitir requisições de qualquer origem
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-API-Key, anthropic-version');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const { messages, apiKey, model = 'claude-3-5-sonnet-20241022', maxTokens = 1024 } = req.body;

    // Validar inputs
    if (!messages || !apiKey) {
      return res.status(400).json({ error: 'Faltam parâmetros (messages ou apiKey)' });
    }

    console.log('📡 Proxy recebeu requisição');
    console.log('🔑 Chave começa com:', apiKey.substring(0, 20) + '...');
    console.log('💬 Mensagens:', messages.length);

    // Fazer requisição pra Anthropic
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: model,
        max_tokens: maxTokens,
        messages: messages
      })
    });

    console.log('📊 Status da API Anthropic:', response.status);

    const data = await response.json();

    // Se tiver erro, passar pra frente
    if (!response.ok) {
      console.error('❌ Erro da API:', data);
      return res.status(response.status).json(data);
    }

    console.log('✅ Resposta recebida com sucesso');
    return res.status(200).json(data);

  } catch (error) {
    console.error('💥 Erro no proxy:', error);
    return res.status(500).json({ 
      error: 'Erro no servidor proxy',
      message: error.message 
    });
  }
}
