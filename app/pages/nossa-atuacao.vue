<template>
  <div>
    <Header />
    
    <!-- Seção 1: Como Funciona -->
    <section id="como-funciona" class="como-funciona-section py-12 py-md-16 bg-white">
      <v-container class="py-6 py-md-8">
        <v-row align="center">
          <!-- Coluna Esquerda: Textos -->
          <v-col cols="12" md="6" class="pr-md-12 px-4 px-md-6">
            <div class="mb-12">
              <div class="section-label text-secondary mb-2 animate-fade-in-up">
                {{ $t('nossaAtuacao.howItWorks.overline') }}
              </div>
              <h2 class="page-title text-primary mb-6 animate-fade-in-up delay-200">
                <strong>{{ $t('nossaAtuacao.howItWorks.title') }}</strong>
              </h2>
              <p class="intro-text text-grey-darken-2 animate-fade-in-up delay-300">
                {{ $t('nossaAtuacao.howItWorks.description') }}
              </p>
            </div>

            <div class="benefits-box pa-8 rounded-xl animate-fade-in-up delay-400">
              <h3 class="section-title text-primary mb-6">
                {{ $t('nossaAtuacao.howItWorks.whyPartner') }}
              </h3>
              <v-list class="bg-transparent stagger-container">
                <v-list-item class="px-0 mb-3 benefit-item align-start hover-slide-up">
                  <template #prepend>
                    <v-avatar color="secondary" size="32" class="mr-3 mt-1 flex-shrink-0 animate-pulse-soft">
                      <v-icon color="white" size="18">mdi-check-bold</v-icon>
                    </v-avatar>
                  </template>
                  <v-list-item-title class="body-text text-wrap">
                    <strong class="text-primary font-weight-bold">{{ $t('nossaAtuacao.howItWorks.benefits.quality.title') }}</strong> {{ $t('nossaAtuacao.howItWorks.benefits.quality.text') }}
                  </v-list-item-title>
                </v-list-item>

                <v-list-item class="px-0 mb-3 benefit-item align-start hover-slide-up">
                  <template #prepend>
                    <v-avatar color="secondary" size="32" class="mr-3 mt-1 flex-shrink-0 animate-pulse-soft">
                      <v-icon color="white" size="18">mdi-check-bold</v-icon>
                    </v-avatar>
                  </template>
                  <v-list-item-title class="body-text text-wrap">
                    <strong class="text-primary font-weight-bold">{{ $t('nossaAtuacao.howItWorks.benefits.diversity.title') }}</strong> {{ $t('nossaAtuacao.howItWorks.benefits.diversity.text') }}
                  </v-list-item-title>
                </v-list-item>

                <v-list-item class="px-0 mb-3 benefit-item align-start hover-slide-up">
                  <template #prepend>
                    <v-avatar color="secondary" size="32" class="mr-3 mt-1 flex-shrink-0 animate-pulse-soft">
                      <v-icon color="white" size="18">mdi-check-bold</v-icon>
                    </v-avatar>
                  </template>
                  <v-list-item-title class="body-text text-wrap">
                    <strong class="text-primary font-weight-bold">{{ $t('nossaAtuacao.howItWorks.benefits.technology.title') }}</strong> {{ $t('nossaAtuacao.howItWorks.benefits.technology.text') }}
                  </v-list-item-title>
                </v-list-item>

                <v-list-item class="px-0 benefit-item align-start hover-slide-up">
                  <template #prepend>
                    <v-avatar color="secondary" size="32" class="mr-3 mt-1 flex-shrink-0 animate-pulse-soft">
                      <v-icon color="white" size="18">mdi-check-bold</v-icon>
                    </v-avatar>
                  </template>
                  <v-list-item-title class="body-text text-wrap">
                    <strong class="text-primary font-weight-bold">{{ $t('nossaAtuacao.howItWorks.benefits.commitment.title') }}</strong> {{ $t('nossaAtuacao.howItWorks.benefits.commitment.text') }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </div>
          </v-col>

          <!-- Coluna Direita: Imagem -->
          <v-col cols="12" md="6" class="pl-md-8">
            <div class="image-wrapper animate-fade-in-right delay-500">
              <v-img
                src="https://imagens.inovebio.com/garota-propaganda.png"
                alt="Profissional da InoveBIO - Fornecimento de insumos para biodiesel"
                cover
                class="rounded-xl hover-lift card-zoom"
                aspect-ratio="4/5"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Seção 2: Diferenciais -->
    <section id="diferenciais" class="diferenciais-section py-16" style="background: linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%);">
      <v-container class="py-8">
        <!-- Título e Tópicos -->
        <v-row class="mb-16" align="center">
          <v-col cols="12" md="5">
            <div class="text-overline text-secondary font-weight-bold mb-2">
              {{ $t('nossaAtuacao.differentials.overline') }}
            </div>
            <h2 class="text-h2 font-weight-black text-primary" style="line-height: 1.2;">
              <strong>{{ $t('nossaAtuacao.differentials.title') }}</strong>
            </h2>
          </v-col>
          <v-col cols="12" md="7">
            <v-row class="stagger-container">
              <v-col cols="12" sm="6">
                <div class="diferencial-badge-new d-flex align-center pa-5 rounded-xl mb-4 hover-glow card-float">
                  <v-avatar color="secondary" size="44" class="mr-4 flex-shrink-0 animate-pulse-soft">
                    <v-icon size="24" color="white">mdi-star</v-icon>
                  </v-avatar>
                  <span class="body-text font-weight-bold text-primary">
                    {{ $t('nossaAtuacao.differentials.badges.quality') }}
                  </span>
                </div>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="diferencial-badge-new d-flex align-center pa-5 rounded-xl mb-4 hover-glow card-float">
                  <v-avatar color="secondary" size="44" class="mr-4 flex-shrink-0 animate-pulse-soft">
                    <v-icon size="24" color="white">mdi-star</v-icon>
                  </v-avatar>
                  <span class="body-text font-weight-bold text-primary">
                    {{ $t('nossaAtuacao.differentials.badges.sustainability') }}
                  </span>
                </div>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="diferencial-badge-new d-flex align-center pa-5 rounded-xl mb-4 hover-glow card-float">
                  <v-avatar color="secondary" size="44" class="mr-4 flex-shrink-0 animate-pulse-soft">
                    <v-icon size="24" color="white">mdi-star</v-icon>
                  </v-avatar>
                  <span class="body-text font-weight-bold text-primary">
                    {{ $t('nossaAtuacao.differentials.badges.innovation') }}
                  </span>
                </div>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="diferencial-badge-new d-flex align-center pa-5 rounded-xl mb-4 hover-glow card-float">
                  <v-avatar color="secondary" size="44" class="mr-4 flex-shrink-0 animate-pulse-soft">
                    <v-icon size="24" color="white">mdi-star</v-icon>
                  </v-avatar>
                  <span class="body-text font-weight-bold text-primary">
                    {{ $t('nossaAtuacao.differentials.badges.partnership') }}
                  </span>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <!-- Cards de Diferenciais -->
        <v-row>
          <v-col cols="12" md="4" v-for="(card, index) in cards" :key="index">
            <v-card class="differential-card-new pa-8" elevation="2">
              <div class="d-flex align-center mb-6">
                <v-avatar :color="card.color" size="64" class="mr-4 flex-shrink-0">
                  <v-icon size="36" color="white">{{ card.icon }}</v-icon>
                </v-avatar>
                <h3 class="text-h5 font-weight-bold text-primary" style="line-height: 1.2;">
                  {{ card.title }}
                </h3>
              </div>
              <p class="text-body-1 font-weight-regular text-grey-darken-1" style="line-height: 1.8;">
                {{ card.description }}
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// Meta tags dinâmicas para SEO
useHead({
  title: 'Nossa Atuação - Fornecimento de Insumos para Biodiesel',
  meta: [
    { 
      name: 'description', 
      content: 'Fornecemos insumos de alta qualidade para produção de biodiesel: óleos vegetais, gorduras animais e resíduos orgânicos. Processos avançados e compromisso ambiental.' 
    },
    { 
      name: 'keywords', 
      content: 'fornecimento biodiesel, insumos biodiesel, oleo vegetal, gordura animal, residuos organicos, transesterificacao, producao biodiesel, materia prima biodiesel, parceria biodiesel' 
    },
    { property: 'og:title', content: 'Nossa Atuação - Fornecimento de Insumos para Biodiesel | InoveBIO' },
    { property: 'og:description', content: 'Fornecemos insumos de alta qualidade para produção de biodiesel com processos avançados e compromisso ambiental.' },
    { property: 'og:url', content: 'https://inovebio.com.br/nossa-atuacao' },
    { name: 'twitter:title', content: 'Nossa Atuação - InoveBIO' },
    { name: 'twitter:description', content: 'Fornecimento de insumos para biodiesel com qualidade e sustentabilidade.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://inovebio.com.br/nossa-atuacao' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Fornecimento de Insumos para Biodiesel',
        'description': 'Fornecemos insumos de alta qualidade para produção de biodiesel',
        'provider': {
          '@type': 'Organization',
          'name': 'InoveBIO'
        },
        'areaServed': 'BR',
        'serviceType': 'Fornecimento de Matéria-Prima para Biodiesel',
        'offers': {
          '@type': 'Offer',
          'description': 'Óleos vegetais, gorduras animais e resíduos orgânicos para produção de biodiesel'
        }
      })
    }
  ]
})

const cards = computed(() => [
  {
    icon: 'mdi-recycle',
    color: 'primary',
    title: t('cards.rawMaterials.title'),
    description: t('cards.rawMaterials.description')
  },
  {
    icon: 'mdi-flask',
    color: 'secondary',
    title: t('cards.chemicalProcesses.title'),
    description: t('cards.chemicalProcesses.description')
  },
  {
    icon: 'mdi-earth',
    color: 'primary',
    title: t('cards.positiveImpact.title'),
    description: t('cards.positiveImpact.description')
  }
])
</script>

<style scoped>
.line-height-lg {
  line-height: 1.8;
}

.benefits-box {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-left: 4px solid #006400;
}

/* .benefit-item {
  transition: transform 0.2s ease;
}

.benefit-item:hover {
  transform: translateX(8px);
} */

.image-wrapper {
  position: relative;
}

.image-wrapper::before {
  content: '';
  position: absolute;
  top: -20px;
  right: -20px;
  width: 200px;
  height: 200px;
  background: rgba(255, 165, 0, 0.1);
  border-radius: 50%;
  z-index: -1;
}

.diferencial-badge {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 2px solid #e0e0e0;
  transition: all 0.3s ease;
}

.diferencial-badge:hover {
  border-color: #006400;
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 100, 0, 0.1);
}

.diferencial-badge-new {
  background: white;
  border: 2px solid #e0e0e0;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.diferencial-badge-new:hover {
  border-color: #FFA500;
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(255, 165, 0, 0.2);
}

.differential-card {
  height: 100%;
  border-radius: 20px;
  background: white;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.differential-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #FFA500 0%, #FFD700 100%);
}

.differential-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0, 100, 0, 0.15) !important;
}

.differential-card-new {
  height: 100%;
  border-radius: 20px;
  background: white;
  transition: all 0.3s ease;
  border-left: 4px solid #006400;
}

.differential-card-new:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0, 100, 0, 0.15) !important;
  border-left-color: #006400;
}

.v-list-item-title strong {
  color: #006400;
}

@media (max-width: 600px) {
  .differential-card {
    margin-bottom: 1.5rem;
  }

  .image-wrapper::before {
    display: none;
  }

  .benefits-box {
    padding: 1.5rem !important;
  }

  .benefit-item {
    margin-bottom: 0.75rem !important;
  }
}

@media (min-width: 600px) and (max-width: 960px) {
  .differential-card {
    margin-bottom: 24px;
  }

  .image-wrapper::before {
    display: none;
  }
}
</style>