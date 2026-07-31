# 🚀 Deploiar Peter no Vercel com Proxy

## O que mudou?

Agora temos um **proxy Vercel** que resolve o problema de CORS:

```
Peter (navegador) 
    ↓
Proxy Vercel (seu servidor)
    ↓
API Anthropic
    ↓
Resposta volta pro Peter
```

---

## 📁 Arquivos necessários

```
peter-cabeca-teia/
├── index-proxy.html      ← App principal (NOVO!)
├── api/
│   └── chat.js          ← Proxy Vercel (NOVO!)
├── package.json         ← Config Node (NOVO!)
├── vercel.json          ← Config Vercel (NOVO!)
└── manifest.json        ← Já existe
```

---

## 🎯 Passo 1: Atualizar repositório GitHub

### No seu repositório GitHub:

1. **Clique em "Add file" → "Upload files"**

2. **Arraste estes arquivos NOVOS:**
   - `index-proxy.html`
   - `package.json`
   - `vercel.json`
   - Pasta `api/` com `chat.js` dentro

3. **Clique "Commit changes"**

---

## 🌐 Passo 2: Conectar ao Vercel

### Você vai ao Vercel direto:

1. Acesse [vercel.com](https://vercel.com)

2. **"Sign up"** (use sua conta GitHub se tiver)

3. Após login, clique **"Add New Project"**

4. Selecione **"Import Git Repository"**

5. Cole o link do seu repositório:
   ```
   https://github.com/SEU_USUARIO/peter-cabeca-teia
   ```

6. Clique **"Import"**

7. Vercel vai auto-detectar a configuração

8. Clique **"Deploy"** 🚀

---

## ✅ Passo 3: Acessar seu app

Depois de 1-2 minutos, o Vercel te dá um link:

```
https://seu-projeto.vercel.app
```

**Acesse:** `https://seu-projeto.vercel.app/index-proxy.html`

Ou renomeie `index-proxy.html` para `index.html` pra acessar direto!

---

## 🧪 Testar:

1. Abra o link no seu celular
2. Cole sua chave API Claude
3. Aperte o microfone
4. **Agora funciona SEM CORS!** ✨

---

## 📝 Alternativa: Fazer upload manual

Se preferir, pode fazer upload direto no Vercel:

1. No Vercel, clique "New Project"
2. "Skip Git"
3. Arraste a pasta `peter-cabeca-teia/` inteira
4. Deploy

---

## 🔧 Se der erro:

### "404 Not Found"
- Verifique se `api/chat.js` foi uploadado
- O arquivo deve estar em `api/chat.js`, não em outra pasta

### "Proxy não responde"
- Verifique se `vercel.json` tá correto
- Tente fazer novo deploy no Vercel

### "CORS ainda dá erro"
- Limpe cache do navegador (Ctrl+Shift+Del)
- Tente em modo incógnito

---

## 🎉 Pronto!

Seu Peter agora tá rodando **100% funcional** no Vercel, sem problemas de CORS!

**Qualquer dúvida, me chama!** 🕷️
