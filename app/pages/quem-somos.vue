<template>
  <div>
    <Header />
    
    <!-- Seção 1: História (O Início) -->
    <section id="historia" class="historia-section bg-primary">
      <v-row no-gutters class="fill-height">
        <!-- Coluna Esquerda: Imagem -->
        <v-col cols="12" md="6" class="pa-0">
          <div class="image-wrapper-historia">
            <v-img
              src="https://imagens.inovebio.com/litro-diesel.png"
              alt="Litro de biodiesel sustentável produzido pela InoveBIO"
              cover
              class="fill-height historia-image hover-scale card-zoom"
              min-height="600"
            />
          </div>
        </v-col>

        <!-- Coluna Direita: Texto com Fundo Verde -->
        <v-col cols="12" md="6" class="pa-0">
          <div class="historia-content">
            <v-container class="py-12 py-md-16 px-6 px-md-12">
              <div class="historia-text-wrapper">
                <div class="section-label text-secondary mb-4 animate-fade-in-up">
                  {{ $t('quemSomos.history.overline') }}
                </div>
                
                <h2 class="page-title text-white mb-10 animate-fade-in-up delay-200">
                  <strong>{{ $t('quemSomos.history.title') }}</strong>
                </h2>

                <div class="text-white historia-text">
                  <p class="intro-text mb-6 animate-fade-in-up delay-300">
                    {{ $t('quemSomos.history.text1') }}
                  </p>

                  <p class="intro-text mb-8 animate-fade-in-up delay-400">
                    {{ $t('quemSomos.history.text2') }}
                  </p>

                  <div class="quote-box mt-12 animate-fade-in-up delay-500">
                    <v-icon color="secondary" size="48" class="mb-3 animate-pulse-soft">mdi-format-quote-open</v-icon>
                    <p class="intro-text text-white font-weight-medium font-italic">
                      {{ $t('quemSomos.purpose.quote') }}
                    </p>
                  </div>
                </div>
              </div>
            </v-container>
          </div>
        </v-col>
      </v-row>
    </section>

    <!-- Divisor Laranja -->
    <v-divider class="divider-laranja" :thickness="4" color="secondary" />

    <!-- Seção 2: Missão, Visão e Valores -->
    <section id="missao-visao-valores" class="missao-visao-valores-section bg-primary">
      <v-container class="fill-height py-16">
        <div class="text-center mb-12">
          <div class="section-label text-secondary animate-fade-in-up">
            {{ $t('quemSomos.mvv.overline') }}
          </div>
          <h2 class="page-title text-white mt-4 animate-fade-in-up delay-200">
            <strong>{{ $t('quemSomos.mvv.title') }}</strong>
          </h2>
        </div>

        <v-row align="center" class="fill-height">
          <!-- Coluna 1: Missão e Visão -->
          <v-col cols="12" md="4" class="d-flex flex-column ga-8">
            <!-- Missão -->
            <div class="mvv-item pa-6 card-hover card-float animate-fade-in-left delay-300">
              <div class="d-flex align-center mb-4">
                <v-avatar color="secondary" size="56" class="mr-4 animate-pulse-soft">
                  <v-icon size="28" color="white">mdi-target</v-icon>
                </v-avatar>
                <h3 class="card-title text-white">
                  {{ $t('quemSomos.mvv.mission.title') }}
                </h3>
              </div>
              <p class="body-text text-white">
                {{ $t('quemSomos.mvv.mission.text') }}
              </p>
            </div>

            <!-- Visão -->
            <div class="mvv-item pa-6 card-hover card-float animate-fade-in-left delay-400">
              <div class="d-flex align-center mb-4">
                <v-avatar color="secondary" size="56" class="mr-4 animate-pulse-soft">
                  <v-icon size="28" color="white">mdi-eye</v-icon>
                </v-avatar>
                <h3 class="card-title text-white">
                  {{ $t('quemSomos.mvv.vision.title') }}
                </h3>
              </div>
              <p class="body-text text-white">
                {{ $t('quemSomos.mvv.vision.text') }}
              </p>
            </div>
          </v-col>

          <!-- Coluna 2: Imagem Central -->
          <v-col cols="12" md="4" class="d-flex align-center justify-center py-8 py-md-0">
            <v-img
              src="https://imagens.inovebio.com/missao-visao-e-valores.png"
              alt="Missão, Visão e Valores da InoveBIO"
              max-width="550"
              contain
              class="mx-auto float animate-scale-in delay-400 animate-breathe"
            />
          </v-col>

          <!-- Coluna 3: Valores -->
          <v-col cols="12" md="4">
            <div class="mvv-item pa-6 mb-8 card-hover card-float animate-fade-in-right delay-300">
              <div class="d-flex align-center mb-4">
                <v-avatar color="secondary" size="56" class="mr-4 animate-pulse-soft">
                  <v-icon size="28" color="white">mdi-star-four-points</v-icon>
                </v-avatar>
                <h3 class="card-title text-white">
                  {{ $t('quemSomos.mvv.values.title') }}
                </h3>
              </div>
              <div class="valores-lista d-flex flex-column ga-4 stagger-container">
                <div class="valor-item">
                  <div class="d-flex align-start">
                    <v-avatar color="secondary" size="32" class="mr-3 flex-shrink-0">
                      <v-icon size="16" color="white">mdi-check</v-icon>
                    </v-avatar>
                    <div>
                      <h4 class="body-text font-weight-bold text-secondary mb-1">
                        {{ $t('quemSomos.mvv.values.excellence.title') }}
                      </h4>
                      <p class="text-body-2 text-white">
                        {{ $t('quemSomos.mvv.values.excellence.text') }}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="valor-item">
                  <div class="d-flex align-start">
                    <v-avatar color="secondary" size="32" class="mr-3 flex-shrink-0">
                      <v-icon size="16" color="white">mdi-check</v-icon>
                    </v-avatar>
                    <div>
                      <h4 class="body-text font-weight-bold text-secondary mb-1">
                        {{ $t('quemSomos.mvv.values.innovation.title') }}
                      </h4>
                      <p class="text-body-2 text-white">
                        {{ $t('quemSomos.mvv.values.innovation.text') }}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="valor-item">
                  <div class="d-flex align-start">
                    <v-avatar color="secondary" size="32" class="mr-3 flex-shrink-0">
                      <v-icon size="16" color="white">mdi-check</v-icon>
                    </v-avatar>
                    <div>
                      <h4 class="body-text font-weight-bold text-secondary mb-1">
                        {{ $t('quemSomos.mvv.values.focus.title') }}
                      </h4>
                      <p class="text-body-2 text-white">
                        {{ $t('quemSomos.mvv.values.focus.text') }}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="valor-item">
                  <div class="d-flex align-start">
                    <v-avatar color="secondary" size="32" class="mr-3 flex-shrink-0">
                      <v-icon size="16" color="white">mdi-check</v-icon>
                    </v-avatar>
                    <div>
                      <h4 class="body-text font-weight-bold text-secondary mb-1">
                        {{ $t('quemSomos.mvv.values.partnerships.title') }}
                      </h4>
                      <p class="text-body-2 text-white">
                        {{ $t('quemSomos.mvv.values.partnerships.text') }}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="valor-item">
                  <div class="d-flex align-start">
                    <v-avatar color="secondary" size="32" class="mr-3 flex-shrink-0">
                      <v-icon size="16" color="white">mdi-check</v-icon>
                    </v-avatar>
                    <div>
                      <h4 class="body-text font-weight-bold text-secondary mb-1">
                        {{ $t('quemSomos.mvv.values.commitment.title') }}
                      </h4>
                      <p class="text-body-2 text-white">
                        {{ $t('quemSomos.mvv.values.commitment.text') }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Seção 3: Propósito -->
    <section id="proposito" class="proposito-section">
      <v-img
        src="https://imagens.inovebio.com/fundo-arara.png"
        alt="Arara - Biodiversidade e natureza preservada"
        cover
        class="proposito-background"
        min-height="100vh"
      >
        <!-- Overlay com Gradiente Verde -->
        <div class="proposito-overlay" />
        
        <!-- Conteúdo do Propósito -->
        <v-container class="fill-height py-16">
          <v-row align="center" justify="center" class="fill-height">
            <!-- Coluna Esquerda: Cards de Imagens -->
            <v-col cols="12" md="5" class="d-flex flex-column ga-6 px-4 px-md-8">
              <v-card 
                elevation="16" 
                class="proposito-card overflow-hidden hover-lift card-zoom animate-fade-in-left delay-200"
                rounded="xl"
              >
                <v-img
                  src="https://imagens.inovebio.com/fachada-empresa.png"
                  alt="Fachada da empresa InoveBIO"
                  aspect-ratio="16/10"
                  cover
                  class="hover-scale"
                />
              </v-card>
              
              <v-card 
                elevation="16" 
                class="proposito-card overflow-hidden hover-lift card-zoom animate-fade-in-left delay-400"
                rounded="xl"
              >
                <v-img
                  src="https://imagens.inovebio.com/tanque-combustivel.png"
                  alt="Tanque de armazenamento de biodiesel"
                  aspect-ratio="16/10"
                  cover
                  class="hover-scale"
                />
              </v-card>
            </v-col>

            <!-- Coluna Direita: Texto -->
            <v-col cols="12" md="7" class="pl-md-12">
              <div class="proposito-content pa-6 pa-md-8 animate-fade-in-right delay-300">
                <div class="section-label text-secondary mb-4 animate-fade-in-up">
                  {{ $t('quemSomos.purpose.prefix').toUpperCase() }}
                </div>
                
                <h2 class="page-title text-white mb-10 animate-fade-in-up delay-200">
                  <strong>{{ $t('quemSomos.purpose.title') }}</strong>
                </h2>

                <div class="text-white proposito-text">
                  <p class="intro-text mb-8 animate-fade-in-up delay-300">
                    {{ $t('quemSomos.purpose.text') }}
                  </p>

                  <div class="quote-box mt-12 animate-fade-in-up delay-400">
                    <v-icon color="secondary" size="48" class="mb-3 animate-pulse-soft">mdi-format-quote-open</v-icon>
                    <p class="intro-text text-white font-weight-medium font-italic">
                      {{ $t('quemSomos.purpose.statement') }}
                    </p>
                  </div>
                </div>
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
// Meta tags dinâmicas para SEO
useHead({
  title: 'Quem Somos - Nossa História, Missão e Valores',
  meta: [
    { 
      name: 'description', 
      content: 'Conheça a história da InoveBIO, nossa missão de transformar resíduos em biodiesel sustentável e os valores que nos guiam. Empresa especializada em insumos para energia renovável.' 
    },
    { 
      name: 'keywords', 
      content: 'historia inovebio, missao visao valores, empresa biodiesel, sustentabilidade, economia circular, energia renovavel, Fernando Inove, transesterificacao, oleo vegetal biodiesel' 
    },
    { property: 'og:title', content: 'Quem Somos - InoveBIO | Nossa História e Valores' },
    { property: 'og:description', content: 'Conheça a história da InoveBIO e nossa missão de transformar resíduos em biodiesel sustentável.' },
    { property: 'og:url', content: 'https://inovebio.com.br/quem-somos' },
    { name: 'twitter:title', content: 'Quem Somos - InoveBIO' },
    { name: 'twitter:description', content: 'Nossa história, missão e valores na produção de biodiesel sustentável.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://inovebio.com.br/quem-somos' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        'name': 'Quem Somos - InoveBIO',
        'description': 'História, missão, visão e valores da InoveBIO',
        'url': 'https://inovebio.com.br/quem-somos',
        'mainEntity': {
          '@type': 'Organization',
          'name': 'InoveBIO',
          'foundingDate': '2020',
          'founder': {
            '@type': 'Person',
            'name': 'Fernando'
          },
          'description': 'Empresa especializada no fornecimento de insumos para a produção de biodiesel'
        }
      })
    }
  ]
})
</script>

<style scoped>
/* Seção História */
.historia-section {
  min-height: 600px;
  background: linear-gradient(135deg, #006400 0%, #004d00 100%);
}

.historia-image {
  height: 100%;
  min-height: 600px;
}

.image-wrapper-historia {
  position: relative;
  height: 100%;
}

.historia-content {
  min-height: 600px;
  display: flex;
  align-items: center;
}

.historia-text-wrapper {
  max-width: 700px;
}

.historia-text {
  line-height: 1.8;
}

.historia-text strong {
  font-weight: 700;
}

.line-height-lg {
  line-height: 1.8;
}

.quote-box {
  border-left: 4px solid #FFA500;
  padding-left: 32px;
  background: rgba(255, 165, 0, 0.1);
  border-radius: 8px;
  padding: 24px;
  padding-left: 32px;
}

/* Seção Missão, Visão e Valores */
.missao-visao-valores-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #006400 0%, #004d00 100%);
}

.mvv-item {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.mvv-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(8px);
}

.valores-lista {
  margin-top: 0;
}

.valor-item {
  transition: all 0.2s ease;
}

.valor-item:hover {
  transform: translateX(4px);
}

.central-image-wrapper {
  position: relative;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Seção Propósito */
.proposito-section {
  min-height: 100vh;
  position: relative;
}

.proposito-background {
  position: relative;
}

.proposito-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 100, 0, 0.9) 0%,
    rgba(0, 100, 0, 0.75) 30%,
    rgba(0, 100, 0, 0.6) 60%,
    rgba(0, 100, 0, 0.4) 100%
  );
  z-index: 1;
}

.proposito-section .v-container {
  position: relative;
  z-index: 2;
}

.proposito-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 16px !important;
  position: relative;
  z-index: 2;
}

.proposito-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4) !important;
}

.proposito-content {
  max-width: 700px;
}

.proposito-text {
  max-width: 100%;
}

.quote-box {
  background: rgba(255, 165, 0, 0.15);
  border-left: 4px solid #FFA500;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  padding: 2rem;
}

/* Responsividade */
@media (max-width: 600px) {
  .historia-section {
    min-height: auto;
  }

  .historia-image {
    min-height: 300px;
  }

  .historia-content {
    min-height: auto;
  }

  .historia-text-wrapper {
    padding: 0;
  }

  .historia-text .intro-text {
    font-size: 0.95rem;
  }

  .quote-box {
    padding: 1.25rem;
    margin-top: 2rem !important;
  }

  .quote-box .intro-text {
    font-size: 0.9rem;
  }

  .missao-visao-valores-section {
    min-height: auto;
  }

  .mvv-item {
    padding: 1.25rem !important;
  }

  .proposito-section {
    min-height: auto;
  }

  .proposito-card {
    margin-bottom: 1rem;
  }

  .proposito-content {
    padding: 1.5rem !important;
  }
}

@media (min-width: 600px) and (max-width: 960px) {
  .historia-section {
    min-height: auto;
  }

  .historia-image {
    min-height: 400px;
  }

  .historia-content {
    min-height: auto;
    padding: 60px 0;
  }

  .quote-box {
    margin-top: 40px !important;
    padding: 1.5rem;
  }

  .missao-visao-valores-section {
    min-height: auto;
  }

  .proposito-section {
    min-height: auto;
  }

  .proposito-card {
    max-width: 400px;
    margin: 0 auto;
  }

  .proposito-content {
    padding: 40px 20px !important;
  }
}
</style>
