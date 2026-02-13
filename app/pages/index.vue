<template>
  <div class="home-page">
    <Header />
    
    <!-- Hero Section de Tela Cheia -->
    <section class="hero-section">
      <!-- Imagem de Fundo -->
      <v-img
        src="https://imagens.inovebio.com/fundo-campo-plantacao.png"
        alt="Campo de plantação para produção de biodiesel sustentável"
        cover
        class="hero-background"
        height="100vh"
      >
        <!-- Overlay com Gradiente Verde -->
        <div class="hero-overlay" />
        
        <!-- Conteúdo da Hero Section -->
        <v-container class="fill-height">
          <v-row align="center" class="fill-height">
            <v-col cols="12" md="8" lg="7" class="px-4 px-md-6">
              <!-- Título com Pesos Diferentes -->
              <h1 class="hero-title text-white mb-6 mb-md-12">
                <span class="hero-word font-weight-regular font-italic" style="animation-delay: 0.1s">{{ $t('home.heroTitle1') }}</span>
                <span class="hero-word font-weight-bold" style="animation-delay: 0.2s"> {{ $t('home.heroTitle2') }}</span><br>
                <span class="hero-word font-weight-regular" style="animation-delay: 0.3s">{{ $t('home.heroTitle3') }}</span>
                <span class="hero-word font-weight-bold" style="animation-delay: 0.4s"> {{ $t('home.heroTitle4') }}</span>
              </h1>

              <!-- Botões CTA -->
              <div class="d-flex flex-column flex-sm-row ga-3 ga-sm-4 align-start cta-container">
                <!-- Botão 1: Quero Ser Cliente -->
                <v-btn
                  :to="localePath('/contato#cliente')"
                  color="primary"
                  :size="$vuetify.display.smAndDown ? 'large' : 'x-large'"
                  rounded="xl"
                  class="cta-button text-none px-6 px-sm-8 btn-bounce hover-glow"
                  :block="$vuetify.display.xs"
                  elevation="4"
                >
                  <span class="font-weight-bold text-white">{{ $t('home.btnClient') }}</span>
                  <v-icon end class="ml-2 ml-sm-3" color="white">mdi-arrow-right-thin-circle-outline</v-icon>
                </v-btn>

                <!-- Botão 2: Quero Ser Fornecedor -->
                <v-btn
                  :to="localePath('/contato#fornecedor')"
                  variant="outlined"
                  :size="$vuetify.display.smAndDown ? 'large' : 'x-large'"
                  rounded="xl"
                  color="white"
                  class="cta-button cta-button-outlined text-none px-6 px-sm-8 btn-bounce hover-border-animate"
                  :block="$vuetify.display.xs"
                >
                  <span class="font-weight-bold">{{ $t('home.btnSupplier') }}</span>
                  <v-icon end class="ml-2 ml-sm-3">mdi-arrow-right-thin-circle-outline</v-icon>
                </v-btn>
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
const localePath = useLocalePath()

// Meta tags dinâmicas
useHead({
  title: 'Início - Transformando resíduos em energia limpa',
  meta: [
    { 
      name: 'description', 
      content: 'A InoveBIO transforma resíduos em biodiesel sustentável. Parceiro ideal para empresas que buscam soluções energéticas renováveis, limpas e responsáveis. Economia circular e inovação.' 
    },
    { 
      name: 'keywords', 
      content: 'biodiesel, energia renovavel, transformacao residuos, energia limpa, sustentabilidade, economia circular, combustivel verde, biocombustivel, inovacao sustentavel' 
    },
    { property: 'og:title', content: 'InoveBIO - Transformando resíduos em energia limpa' },
    { property: 'og:description', content: 'Transformamos resíduos em biodiesel sustentável. Parceiro ideal para soluções de biodiesel e economia circular.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://inovebio.com.br' },
    { name: 'twitter:title', content: 'InoveBIO - Transformando resíduos em energia limpa' },
    { name: 'twitter:description', content: 'Transformamos resíduos em biodiesel sustentável. Energia limpa e renovável.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://inovebio.com.br' }
  ]
})
</script>

<style scoped>
.home-page {
  margin-top: -80px; /* Compensar altura do header para Hero ficar atrás */
}

.hero-section {
  position: relative;
  min-height: 100vh;
  width: 100%;
}

.hero-background {
  position: relative;
}

/* Overlay com Gradiente Verde Escuro */
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 100, 0, 0.85) 0%,
    rgba(0, 100, 0, 0.7) 30%,
    rgba(0, 100, 0, 0.5) 60%,
    rgba(0, 100, 0, 0.3) 100%
  );
  z-index: 1;
}

.hero-section .v-container {
  position: relative;
  z-index: 2;
}

/* Título da Hero Section */
.hero-title {
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.3;
  text-shadow: 2px 4px 12px rgba(0, 0, 0, 0.4);
  word-spacing: 0.15em;
  letter-spacing: 0.01em;
}

.hero-word {
  display: inline-block;
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
  margin: 0 0.15em;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cta-container {
  animation: fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s both;
}

/* Botões CTA */
.cta-button {
  min-width: 260px;
  height: 56px !important;
  letter-spacing: 0.5px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.cta-button:hover::before {
  width: 300px;
  height: 300px;
}

.cta-button:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4) !important;
}

.cta-button-outlined {
  border-width: 2px !important;
}

.cta-button-outlined:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Responsividade Mobile */
@media (max-width: 600px) {
  .home-page {
    margin-top: -80px;
  }

  .hero-section {
    min-height: 100vh;
  }

  .hero-title {
    font-size: 2rem;
    text-align: left;
    margin-bottom: 2rem !important;
  }

  .cta-button {
    width: 100%;
    min-width: 100%;
    height: 48px !important;
    font-size: 0.9rem;
  }

  .hero-overlay {
    background: linear-gradient(
      180deg,
      rgba(0, 100, 0, 0.80) 0%,
      rgba(0, 100, 0, 0.85) 100%
    );
  }
}

@media (min-width: 600px) and (max-width: 960px) {
  .hero-title {
    font-size: 2.75rem;
  }
  
  .cta-button {
    min-width: 220px;
    height: 52px !important;
  }
}
</style>
