# 🌱 InoveBIO - Website Institucional

Website da InoveBIO - Empresa especializada em fornecimento de insumos para produção de biodiesel sustentável.

## 🚀 Tecnologias

- **Nuxt 3** - Framework Vue.js
- **Vuetify** - Componentes Material Design
- **TypeScript** - Tipagem estática
- **i18n** - Internacionalização (PT/EN)
- **Nodemailer** - Envio de emails via SMTP

## 📧 Sistema de Contato

O site possui formulários de contato integrados que enviam emails via SMTP:

### Configuração Rápida

```bash
# 1. Configure suas credenciais SMTP
./setup-email.sh

# OU copie manualmente
cp .env.example .env
nano .env

# 2. Inicie o projeto
npm install
npm run dev
```

### Provedores Suportados

- ✅ Gmail (Recomendado - 500 emails/dia grátis)
- ✅ Outlook/Hotmail (300 emails/dia grátis)
- ✅ Servidor SMTP próprio
- ✅ SendGrid, Mailgun, Amazon SES, etc.

### Documentação

- 📖 [QUICK_START.md](./QUICK_START.md) - Configuração em 3 minutos
- 📚 [EMAIL_SETUP.md](./EMAIL_SETUP.md) - Guia completo
- 📝 [CHANGELOG.md](./CHANGELOG.md) - Todas as alterações
- 👁️ [email-preview.html](./email-preview.html) - Preview do email

## 🎯 Funcionalidades

### Páginas
- `/` - Home com Hero Section
- `/quem-somos` - História, Missão, Visão e Valores
- `/nossa-atuacao` - Como funciona e Diferenciais
- `/contato` - Formulários para Cliente e Fornecedor

### Formulários de Contato
- **Formulário Cliente** - Para interessados em comprar biodiesel
- **Formulário Fornecedor** - Para fornecedores de resíduos/insumos
- Validação client-side e server-side
- Templates HTML profissionais
- Emails com branding InoveBIO

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/inove-bio-2.git
cd inove-bio-2

# Instale as dependências
npm install

# Configure o email (escolha uma opção)
./setup-email.sh  # Script interativo
# OU
cp .env.example .env && nano .env  # Manual

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse: http://localhost:3000

## 📦 Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento
npm run build    # Build para produção
npm run generate # Gerar site estático
npm run preview  # Preview da build
```

## 🔧 Configuração de Ambiente

### Variáveis Obrigatórias (.env)

```env
# Servidor SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-senha-de-app

# Emails
EMAIL_FROM=controller@inovebio.com.br
EMAIL_TO=controller@inovebio.com.br

# Site
SITE_URL=https://inovebio.com.br
```

### Gmail - Criar Senha de App

1. Acesse [myaccount.google.com/security](https://myaccount.google.com/security)
2. Ative "Verificação em duas etapas"
3. Procure "Senhas de app"
4. Crie senha para "Email" > "Outro" > "InoveBIO"
5. Use a senha de 16 caracteres no `.env`

## 🎨 Estrutura do Projeto

```
inove-bio-2/
├── app/
│   ├── components/     # Componentes Vue
│   ├── pages/          # Páginas (rotas)
│   ├── assets/         # CSS e estilos
│   └── app.vue         # Layout principal
├── i18n/
│   └── locales/        # Traduções (PT/EN)
├── server/
│   └── api/
│       └── contact.post.ts  # API de envio de email
├── public/             # Arquivos estáticos
├── .env.example        # Template de configuração
├── setup-email.sh      # Script de configuração
└── nuxt.config.ts      # Configuração Nuxt
```

## 🌐 Internacionalização

O site suporta Português (padrão) e Inglês:

- `/` - Português
- `/en/` - Inglês

Traduções em: `i18n/locales/`

## 🔒 Segurança

- ✅ Credenciais em variáveis de ambiente
- ✅ `.env` no `.gitignore`
- ✅ Validação server-side
- ✅ Sanitização de inputs
- ✅ SMTP com autenticação

## 📊 SEO

- ✅ Meta tags dinâmicas
- ✅ Open Graph (Facebook/Twitter)
- ✅ JSON-LD (Schema.org)
- ✅ Sitemap e robots.txt
- ✅ URLs amigáveis

## 🚀 Deploy

### Vercel / Netlify

```bash
npm run build
```

Configure as variáveis de ambiente no painel do provedor.

### VPS / Servidor Próprio

```bash
npm run build
npm run preview  # ou use PM2
```

## 🐛 Troubleshooting

### Email não envia
- Gmail: Use senha de app, não senha normal
- Verifique `.env` está configurado
- Reinicie servidor após alterar `.env`

### Erros TypeScript
```bash
npm run build  # Verifica erros
```

### Porta em uso
```bash
# Mude a porta ou mate o processo
npx kill-port 3000
```

## 📄 Licença

Propriedade de InoveBIO - Todos os direitos reservados.

## 🤝 Suporte

Para dúvidas sobre:
- **Configuração de email**: Veja [EMAIL_SETUP.md](./EMAIL_SETUP.md)
- **Início rápido**: Veja [QUICK_START.md](./QUICK_START.md)
- **Mudanças**: Veja [CHANGELOG.md](./CHANGELOG.md)

---

Desenvolvido com 💚 para um futuro mais sustentável
# inove-bio
