# 🕷️ Peter - Cabeça de Teia

Assistente inteligente conversacional com IA, inspirado no Homem-Aranha da Marvel. Funciona como PWA (Progressive Web App) no seu celular.

## 🚀 Recursos

- 🎤 **Assistente de Voz** - Fale naturalmente com Peter
- 💬 **Conversa Contínua** - Mantém contexto durante toda a conversa
- ✏️ **Modo Desenho** - Desenhe e envie para análise de IA
- 📱 **Aplicativo PWA** - Instale como app nativo no celular
- 💾 **Armazenamento Local** - Seus dados ficam só no seu celular
- 🔒 **Privado e Seguro** - 100% seu, sem rastreamento

## 📲 Como Instalar como App

### No Android (Chrome):
1. Abra o site no Chrome
2. Toque no menu (⋮) → "Instalar app"
3. Confirme a instalação

### No iPhone/iPad (Safari):
1. Abra o site no Safari
2. Toque em "Compartilhar" → "Adicionar à Tela de Início"
3. Nomeie o app e confirme

### No Desktop (Chrome/Edge):
1. Clique no ícone de instalação na barra de endereço
2. Confirme

## ⚙️ Configuração

### Obter Chave API do Claude:

1. Acesse [console.anthropic.com](https://console.anthropic.com)
2. Faça login ou crie uma conta
3. Vá para "API Keys"
4. Clique em "Create Key"
5. Copie a chave
6. Cole no campo de API Key do Peter

**Nota**: Você pode usar o plano gratuito do Anthropic para começar!

## 🎯 Como Usar

1. **Abra o app Peter**
2. **Adicione sua chave API Claude** no campo no topo
3. **Aperte e segure o botão "Fale"** 🎤
4. **Fale sua pergunta/dúvida**
5. **Peter responde em voz e texto**

### Modo Desenho:
1. Toque no botão **✏️** no topo
2. Desenhe com o dedo
3. Toque em **📨 Enviar Desenho**
4. Peter analisará seu desenho

## 📁 Arquivos

```
peter-cabeca-teia/
├── index.html       # Aplicativo principal
├── manifest.json    # Configuração PWA
├── sw.js           # Service Worker (offline)
└── README.md       # Esta documentação
```

## 🌐 Deploy no GitHub Pages

### Passo 1: Criar Repositório
1. Vá para [github.com/new](https://github.com/new)
2. Nome do repositório: `peter-cabeca-teia`
3. Descrição: "Assistente inteligente com IA"
4. Marque "Public"
5. Clique "Create repository"

### Passo 2: Enviar Arquivos
**Opção A - Via GitHub Web (mais fácil):**
1. No repositório, clique em "Add file" → "Upload files"
2. Arraste os 4 arquivos (`index.html`, `manifest.json`, `sw.js`, `README.md`)
3. Clique "Commit changes"

**Opção B - Via Git (terminal):**
```bash
git clone https://github.com/SEU_USUARIO/peter-cabeca-teia.git
cd peter-cabeca-teia
# Copiar os 4 arquivos para a pasta
git add .
git commit -m "Initial commit"
git push origin main
```

### Passo 3: Ativar GitHub Pages
1. Vá para **Settings** do repositório
2. Procure por **Pages**
3. Em "Source", selecione **main** e **/root**
4. Clique "Save"
5. Aguarde alguns minutos

### Passo 4: Acessar seu App
Seu app estará em: `https://SEU_USUARIO.github.io/peter-cabeca-teia`

## 🌐 Alternativa: Deploy no Vercel (ainda mais fácil)

### Passo 1: Ir para Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Clique "Sign up" (pode usar GitHub)

### Passo 2: Deploy
1. Clique "New Project"
2. Selecione "Import Git Repository"
3. Cole: `https://github.com/SEU_USUARIO/peter-cabeca-teia`
4. Clique "Import"
5. Clique "Deploy"

Seu app estará em: `https://peter-cabeca-teia.vercel.app`

## 🔧 Troubleshooting

**"Reconhecimento de voz não funciona"**
- Use Chrome, Edge ou Safari (não Firefox)
- Permita acesso ao microfone

**"API retorna erro 401"**
- Verifique se a chave está correta
- Certifique-se que tem créditos no Anthropic

**"Desenho não funciona"**
- Use um navegador moderno
- Tente em tela cheia (landscape)

**"App não instala"**
- Certifique-se de usar HTTPS (GitHub Pages usa automaticamente)
- Tente em outro navegador

## 📝 Notas

- Seus dados são armazenados **apenas no seu celular**
- A conversa com IA usa a API do Claude (você controla custos)
- O app funciona **offline** para tudo exceto requisições à API

## 🤝 Feedback

Encontrou um bug? Quer sugerir uma melhoria?
Avise seu desenvolvedor!

---

**Feito com ❤️ por Peter - Seu Assistente Pessoal**
