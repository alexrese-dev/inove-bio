<template>
  <div class="contato-page">
    <Header />

    <!-- Seção 1: Quero Ser Cliente - Fundo com Imagem -->
    <section id="cliente" class="section-cliente">
      <v-img
        src="https://imagens.inovebio.com/fundo-sustentabilidade.png"
        alt="Sustentabilidade e energia limpa"
        cover
        class="section-background-cliente"
        min-height="100vh"
      >
        <!-- Overlay Verde -->
        <div class="overlay-verde" />

        <v-container class="fill-height py-12 py-md-16">
          <!-- Texto Superior -->
          <v-row justify="center" class="mb-8 mb-md-12">
            <v-col cols="12" md="10" lg="8" class="text-center px-4">
              <div class="animate-fade-in-down">
                <div class="section-label text-secondary mb-4">
                  {{ $t('contato.cliente.label') }}
                </div>
                <h1 class="page-title text-white font-italic mb-6 animate-fade-in-up delay-100">
                  {{ $t('contato.cliente.title') }}
                </h1>
                <p class="intro-text text-white font-weight-medium animate-fade-in-up delay-200">
                  {{ $t('contato.cliente.intro') }}
                </p>
              </div>
            </v-col>
          </v-row>

          <!-- Imagem e Formulário -->
          <v-row align="center" class="mt-8">
            <!-- Coluna Esquerda: Imagem -->
            <v-col cols="12" lg="6" class="pr-lg-8">
              <div class="image-container animate-fade-in-left delay-300">
                <v-img
                  src="https://imagens.inovebio.com/maquina-lavoura.png"
                  alt="Máquina agrícola em campo de plantação"
                  cover
                  class="rounded-xl hover-lift"
                  aspect-ratio="4/3"
                />
              </div>
            </v-col>

            <!-- Coluna Direita: Formulário -->
            <v-col cols="12" lg="6" class="pl-lg-8">
              <div class="form-wrapper animate-fade-in-right delay-400">
                <ContactForm
                  :form-title="$t('contato.cliente.formTitle')"
                  submit-color="secondary"
                  title-color="#FFA500"
                  form-type="cliente"
                />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </section>

    <!-- Seção 2: Quero Ser Fornecedor - Com fundo de imagem e overlay amarelo -->
    <section id="fornecedor" class="section-fornecedor">
      <v-img
        src="https://imagens.inovebio.com/fundo-aperto-de-maos.png"
        alt="Parceria e aperto de mãos - Seja nosso fornecedor"
        cover
        class="section-background"
        min-height="100vh"
      >
        <!-- Overlay Amarelo/Laranja (igual página inicial) -->
        <div class="overlay-amarelo" />

        <!-- Conteúdo -->
        <v-container class="fill-height py-12 py-md-16">
          <v-row align="center" class="fill-height">
            <!-- Coluna Esquerda: Texto e Tópicos -->
            <v-col cols="12" lg="6" class="text-content pr-lg-8 px-4 px-md-6">
              <!-- Texto Superior -->
              <div class="mb-10">
                <div class="section-label text-primary mb-4 animate-fade-in-up">
                  {{ $t('contato.fornecedor.label') }}
                </div>
                
                <h1 class="page-title text-white font-italic mb-6 animate-fade-in-up delay-100">
                  {{ $t('contato.fornecedor.title') }}
                </h1>

                <p class="intro-text text-white mb-8 animate-fade-in-up delay-200">
                  {{ $t('contato.fornecedor.intro') }}
                </p>
              </div>

              <h3 class="section-title text-white mb-6 animate-fade-in-up delay-300">
                {{ $t('contato.fornecedor.whyTitle') }}
              </h3>

                <!-- 4 Tópicos -->
                <div class="topics-list stagger-container">
                  <div class="topic-item mb-4 animate-fade-in-up delay-400 hover-lift-sm">
                    <div class="d-flex align-start">
                      <v-avatar color="secondary" size="48" class="mr-4 mt-1 flex-shrink-0">
                        <v-icon color="white" size="24">mdi-currency-usd</v-icon>
                      </v-avatar>
                      <div>
                        <h4 class="body-text font-weight-bold text-white mb-2">
                          {{ $t('contato.fornecedor.topics.value.title') }}
                        </h4>
                        <p class="text-body-2 text-white opacity-95">
                          {{ $t('contato.fornecedor.topics.value.text') }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="topic-item mb-4 animate-fade-in-up delay-500 hover-lift-sm">
                    <div class="d-flex align-start">
                      <v-avatar color="secondary" size="48" class="mr-4 mt-1 flex-shrink-0">
                        <v-icon color="white" size="24">mdi-earth</v-icon>
                      </v-avatar>
                      <div>
                        <h4 class="body-text font-weight-bold text-white mb-2">
                          {{ $t('contato.fornecedor.topics.responsibility.title') }}
                        </h4>
                        <p class="text-body-2 text-white opacity-95">
                          {{ $t('contato.fornecedor.topics.responsibility.text') }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="topic-item mb-4 animate-fade-in-up delay-600 hover-lift-sm">
                    <div class="d-flex align-start">
                      <v-avatar color="secondary" size="48" class="mr-4 mt-1 flex-shrink-0">
                        <v-icon color="white" size="24">mdi-handshake</v-icon>
                      </v-avatar>
                      <div>
                        <h4 class="body-text font-weight-bold text-white mb-2">
                          {{ $t('contato.fornecedor.topics.partnership.title') }}
                        </h4>
                        <p class="text-body-2 text-white opacity-95">
                          {{ $t('contato.fornecedor.topics.partnership.text') }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="topic-item animate-fade-in-up delay-700 hover-lift-sm">
                    <div class="d-flex align-start">
                      <v-avatar color="secondary" size="48" class="mr-4 mt-1 flex-shrink-0">
                        <v-icon color="white" size="24">mdi-recycle</v-icon>
                      </v-avatar>
                      <div>
                        <h4 class="body-text font-weight-bold text-white mb-2">
                          {{ $t('contato.fornecedor.topics.cycle.title') }}
                        </h4>
                        <p class="text-body-2 text-white opacity-95">
                          {{ $t('contato.fornecedor.topics.cycle.text') }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            </v-col>

            <!-- Coluna Direita: Formulário -->
            <v-col cols="12" lg="6" class="pl-lg-8">
              <div class="form-wrapper animate-fade-in-right delay-800">
                <ContactForm
                  :form-title="$t('contato.fornecedor.formTitle')"
                  submit-color="primary"
                  title-color="#004d00"
                  form-type="fornecedor"
                />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

// Meta tags dinâmicas para SEO
useHead({
  title: 'Contato - Seja Nosso Cliente ou Fornecedor',
  meta: [
    { 
      name: 'description', 
      content: 'Entre em contato com a InoveBIO. Seja nosso cliente e adquira biodiesel sustentável ou seja nosso fornecedor de resíduos orgânicos, óleos vegetais e gorduras animais.' 
    },
    { 
      name: 'keywords', 
      content: 'contato inovebio, comprar biodiesel, vender residuos, fornecedor biodiesel, cliente biodiesel, parceria sustentavel, contato energia renovavel' 
    },
    { property: 'og:title', content: 'Contato - InoveBIO | Seja Nosso Cliente ou Fornecedor' },
    { property: 'og:description', content: 'Entre em contato: seja nosso cliente ou fornecedor. Parcerias sustentáveis para um futuro mais verde.' },
    { property: 'og:url', content: 'https://inovebio.com.br/contato' },
    { name: 'twitter:title', content: 'Contato - InoveBIO' },
    { name: 'twitter:description', content: 'Entre em contato e faça parte da economia circular.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://inovebio.com.br/contato' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        'name': 'Contato - InoveBIO',
        'description': 'Entre em contato com a InoveBIO',
        'url': 'https://inovebio.com.br/contato',
        'mainEntity': {
          '@type': 'Organization',
          'name': 'InoveBIO',
          'contactPoint': {
            '@type': 'ContactPoint',
            'telephone': '+55-11-4002-8922',
            'contactType': 'customer service',
            'email': 'contato@inovebio.com.br',
            'availableLanguage': ['Portuguese', 'English']
          }
        }
      })
    }
  ]
})

// Scroll para seção específica baseado no parâmetro tab
onMounted(() => {
  const tab = route.query.tab
  if (tab === 'fornecedor') {
    nextTick(() => {
      const element = document.getElementById('fornecedor')
      if (element) {
        const headerOffset = 100
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    })
  }
})
</script>

<style scoped>
.contato-page {
  background: #f5f5f5;
}

/* Seção Cliente - Com fundo de imagem */
.section-cliente {
  position: relative;
  min-height: 100vh;
}

.section-background-cliente {
  position: relative;
}

/* Overlay Verde sobre a imagem */
.overlay-verde {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 100, 0, 0.75) 0%,
    rgba(0, 77, 0, 0.80) 50%,
    rgba(0, 100, 0, 0.75) 100%
  );
  z-index: 1;
}

/* Garantir que o conteúdo fique acima do overlay */
.section-cliente .v-container {
  position: relative;
  z-index: 2;
}

.image-container {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

/* Seção Fornecedor - Com fundo de imagem */
.section-fornecedor {
  position: relative;
  min-height: 100vh;
}

.section-background {
  position: relative;
}

/* Overlay Amarelo/Laranja - Mais transparente */
.overlay-amarelo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(255, 165, 0, 0.65) 0%,
    rgba(255, 140, 0, 0.60) 50%,
    rgba(255, 160, 0, 0.70) 100%
  );
  z-index: 1;
}

/* Garantir que o conteúdo fique acima do overlay */
.section-fornecedor .v-container {
  position: relative;
  z-index: 2;
}

/* Texto Content */
.text-content {
  position: relative;
  z-index: 2;
}

/* Topics List */
.topics-list {
  position: relative;
}

.topic-item {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 16px;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.1);
}

.topic-item:hover {
  background: rgba(255, 165, 0, 0.2);
  transform: translateX(12px);
  box-shadow: 0 8px 24px rgba(255, 165, 0, 0.3);
}

.opacity-90 {
  opacity: 0.95;
}

.opacity-95 {
  opacity: 0.97;
}

.form-wrapper {
  padding: 24px;
}

.hover-lift-sm {
  transition: all 0.3s ease;
}

.hover-lift-sm:hover {
  transform: translateY(-4px);
}

/* Responsividade */
@media (max-width: 600px) {
  .section-cliente,
  .section-fornecedor {
    min-height: auto;
  }

  .image-container {
    margin-bottom: 1.5rem;
  }

  .form-wrapper {
    padding: 1rem;
    margin-top: 1.5rem;
  }

  .topic-item {
    padding: 12px;
    margin-bottom: 0.75rem !important;
  }

  .topic-item:hover {
    transform: translateX(6px);
  }

  .text-content {
    margin-bottom: 1.5rem;
  }
}

@media (min-width: 600px) and (max-width: 960px) {
  .section-fornecedor {
    min-height: auto;
    padding: 60px 0;
  }

  .text-content {
    margin-bottom: 2rem;
  }

  .image-overlay {
    padding: 1.5rem;
  }

  .form-wrapper {
    padding: 1.5rem;
  }
}
</style>
