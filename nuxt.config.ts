// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  srcDir: "app/",
  devtools: { enabled: true },

  modules: [
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxt/eslint",
    "vuetify-nuxt-module",
    "@nuxtjs/i18n",
    "@artmizu/nuxt-prometheus",
  ],

  // Configuração de variáveis de ambiente
  runtimeConfig: {
    // Chaves privadas (apenas no servidor) - Valores vêm do .env
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
    smtpSecure: process.env.SMTP_SECURE === "true",
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
    emailFrom: process.env.EMAIL_FROM,
    emailTo: process.env.EMAIL_TO,

    // Chaves públicas (disponíveis no cliente)
    public: {
      siteUrl: process.env.SITE_URL,
    },
  },

  // Configuração do i18n
  i18n: {
    locales: [
      {
        code: "pt",
        language: "pt-BR",
        file: "pt-BR.json",
        name: "Português",
      },
      {
        code: "en",
        language: "en-US",
        file: "en-US.json",
        name: "English",
      },
    ],
    defaultLocale: "pt",
    strategy: "prefix_except_default",
    langDir: "locales",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },

  // Configuração do CSS global
  css: [
    "~/assets/css/global.css",
    "~/assets/styles/typography.css",
    "~/assets/styles/animations.css",
  ],

  // Configuração do Vuetify
  vuetify: {
    moduleOptions: {
      /* opções específicas do módulo */
    },
    vuetifyOptions: {
      theme: {
        defaultTheme: "light",
        themes: {
          light: {
            colors: {
              primary: "#006400",
              secondary: "#FFA500",
              success: "#388E3C",
              error: "#D32F2F",
              info: "#1976D2",
              warning: "#F57C00",
              background: "#FFFFFF",
              surface: "#F5F5F5",
            },
          },
        },
      },
    },
  },

  // Configuração do Nuxt Fonts
  fonts: {
    defaults: {
      weights: [300, 400, 500, 600, 700],
      styles: ["normal", "italic"],
    },
    families: [
      {
        name: "Montserrat",
        provider: "google",
        weights: [300, 400, 500, 600, 700, 900],
      },
    ],
  },

  // Configuração do Vite
  vite: {
    server: {
      allowedHosts: ["altaria", "localhost"],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @font-face {
              font-display: swap;
            }
          `,
        },
      },
    },
  },

  // Configuração de SEO
  app: {
    head: {
      htmlAttrs: {
        lang: "pt-BR",
      },
      title: "InoveBIO - Biodiesel Sustentável | Energia Limpa e Renovável",
      titleTemplate: "%s | InoveBIO",
      link: [
        // Preconnect para origens externas críticas
        { rel: "preconnect", href: "https://imagens.inovebio.com" },
        { rel: "preconnect", href: "https://cdn.jsdelivr.net" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        // DNS prefetch para outras origens
        { rel: "dns-prefetch", href: "https://static.cloudflareinsights.com" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://inovebio.com.br" },
        {
          rel: "alternate",
          hreflang: "pt-BR",
          href: "https://inovebio.com.br",
        },
        {
          rel: "alternate",
          hreflang: "en",
          href: "https://inovebio.com.br/en",
        },
        {
          rel: "alternate",
          hreflang: "x-default",
          href: "https://inovebio.com.br",
        },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "InoveBIO transforma resíduos em biodiesel sustentável. Especialistas em fornecimento de insumos para produção de energia limpa e renovável. Parceiro ideal para economia circular.",
        },
        { name: "format-detection", content: "telephone=no" },
        { name: "author", content: "InoveBIO" },
        { name: "robots", content: "index, follow" },
        { name: "googlebot", content: "index, follow" },

        // Keywords
        {
          name: "keywords",
          content:
            "biodiesel, energia renovavel, energia limpa, sustentabilidade, economia circular, biocombustivel, oleo vegetal, gordura animal, residuos organicos, transesterificacao, biodiesel sustentavel, energia verde, combustivel renovavel",
        },

        // Open Graph / Facebook
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://inovebio.com.br" },
        { property: "og:site_name", content: "InoveBIO" },
        {
          property: "og:title",
          content:
            "InoveBIO - Biodiesel Sustentável | Energia Limpa e Renovável",
        },
        {
          property: "og:description",
          content:
            "Transformamos resíduos em biodiesel sustentável. Especialistas em fornecimento de insumos para produção de energia limpa e renovável.",
        },
        {
          property: "og:image",
          content: "https://inovebio.com.br/og-image.jpg",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:locale", content: "pt_BR" },
        { property: "og:locale:alternate", content: "en_US" },

        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:url", content: "https://inovebio.com.br" },
        { name: "twitter:title", content: "InoveBIO - Biodiesel Sustentável" },
        {
          name: "twitter:description",
          content:
            "Transformamos resíduos em biodiesel sustentável. Energia limpa e renovável.",
        },
        {
          name: "twitter:image",
          content: "https://inovebio.com.br/og-image.jpg",
        },

        // Outros
        { name: "theme-color", content: "#006400" },
        { name: "msapplication-TileColor", content: "#006400" },
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "InoveBIO",
            url: "https://inovebio.com.br",
            logo: "https://inovebio.com.br/logo.png",
            description:
              "Empresa especializada em fornecimento de insumos para produção de biodiesel sustentável.",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+55-11-4002-8922",
              contactType: "customer service",
              email: "contato@inovebio.com.br",
              availableLanguage: ["Portuguese", "English"],
            },
            sameAs: [
              "https://instagram.com/inovebio",
              "https://linkedin.com/company/inovebio",
              "https://facebook.com/inovebio",
            ],
            address: {
              "@type": "PostalAddress",
              addressCountry: "BR",
            },
          }),
        },
      ],
    },
  },
});