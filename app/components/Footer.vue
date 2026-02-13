<template>
  <v-footer color="grey-darken-4" class="footer-section">
    <v-container>
      <v-row>
        <!-- Coluna 1: Marca -->
        <v-col cols="12" md="3" class="mb-6 mb-md-0">
          <v-img
            src="https://imagens.inovebio.com/logo.png"
            alt="Logo InoveBIO"
            max-width="150"
            class="mb-4"
            contain
          />
          <p class="text-grey-lighten-1 text-body-2">
            {{ $t('footer.slogan') }}
          </p>
        </v-col>

        <!-- Coluna 2: Links Rápidos -->
        <v-col cols="12" sm="6" md="2" class="mb-6 mb-md-0">
          <h4 class="text-white text-subtitle-1 font-weight-bold mb-4">{{ $t('footer.quickLinks') }}</h4>
          <v-list density="compact" class="bg-transparent">
            <v-list-item :to="localePath('/')" class="px-0 footer-link" :active="false">
              <v-list-item-title class="text-grey-lighten-1">{{ $t('nav.home') }}</v-list-item-title>
            </v-list-item>
            <v-list-item :to="localePath('/quem-somos')" class="px-0 footer-link" :active="false">
              <v-list-item-title class="text-grey-lighten-1">{{ $t('nav.aboutUs') }}</v-list-item-title>
            </v-list-item>
            <v-list-item :to="localePath('/nossa-atuacao')" class="px-0 footer-link" :active="false">
              <v-list-item-title class="text-grey-lighten-1">{{ $t('nav.ourWork') }}</v-list-item-title>
            </v-list-item>
            <v-list-item :to="localePath('/contato')" class="px-0 footer-link" :active="false">
              <v-list-item-title class="text-grey-lighten-1">{{ $t('nav.contact') }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Coluna 3: Contato -->
        <v-col cols="12" sm="6" md="3" class="mb-6 mb-md-0">
          <h3 class="text-white text-subtitle-1 font-weight-bold mb-4">{{ $t('footer.contact') }}</h3>
          <div class="d-flex align-start mb-3">
            <v-icon color="secondary" size="small" class="mr-2">mdi-email</v-icon>
            <a href="mailto:controller@inovebio.com.br" class="text-grey-lighten-1 text-decoration-none text-body-2">
              controller@inovebio.com.br
            </a>
          </div>
          <div class="d-flex align-start">
            <v-icon color="secondary" size="small" class="mr-2">mdi-phone</v-icon>
            <a href="tel:+551140028922" class="text-grey-lighten-1 text-decoration-none text-body-2">
              (11) 4002-8922
            </a>
          </div>
        </v-col>

        <!-- Coluna 4: Redes Sociais -->
        <v-col cols="12" md="4">
          <h4 class="text-white text-subtitle-1 font-weight-bold mb-4">{{ $t('footer.socialMedia') }}</h4>
          <div class="d-flex ga-2">
            <v-btn
              icon
              size="small"
              variant="outlined"
              color="white"
              href="https://instagram.com/inovebio"
              target="_blank"
              aria-label="Visitar Instagram da InoveBIO"
            >
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn
              icon
              size="small"
              variant="outlined"
              color="white"
              href="https://linkedin.com/company/inovebio"
              target="_blank"
              aria-label="Visitar LinkedIn da InoveBIO"
            >
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn
              icon
              size="small"
              variant="outlined"
              color="white"
              href="https://facebook.com/inovebio"
              target="_blank"
              aria-label="Visitar Facebook da InoveBIO"
            >
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-6 border-opacity-25" />

      <!-- Copyright e Desenvolvedores -->
      <v-row>
        <v-col cols="12" class="text-center">
          <p class="text-grey-lighten-1 text-body-2 mb-2">
            © {{ new Date().getFullYear() }} Inove BIO. {{ $t('footer.rights') }}
          </p>
          <p class="text-grey-lighten-2 text-caption mb-0">
            {{ $t('footer.developedBy') }} 
            <a 
              href="https://alexrese.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="developer-link"
            >
              Alex Rese
            </a>
            {{ $t('footer.and') }} 
            <a 
              href="https://henriqzimer.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              class="developer-link"
            >
              Henrique Zimermann
            </a>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style scoped>
.footer-section {
  padding: 48px 0 24px;
}

.logo-container-footer {
  font-size: 1.75rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.logo-inove {
  color: #FFA500;
}

.logo-bio {
  color: #006400;
}

.footer-link {
  border-radius: 12px !important;
  padding: 8px 16px !important;
  margin: 4px 0 !important;
  transition: all 0.3s ease;
}

.footer-link :deep(.v-list-item__content) {
  padding: 0 !important;
}

.footer-link:hover {
  background-color: rgba(255, 165, 0, 0.1) !important;
}

.footer-link:hover .v-list-item-title {
  color: #FFA500 !important;
}

:deep(.v-btn--icon:hover) {
  background-color: rgba(255, 165, 0, 0.2) !important;
  border-color: #FFA500 !important;
}

:deep(.v-btn--icon:hover .v-icon) {
  color: #FFA500 !important;
}

/* Links dos desenvolvedores */
.developer-link {
  color: #FFA500;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding: 0 2px;
}

.developer-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #FFA500 0%, #FFD700 100%);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.developer-link:hover {
  color: #FFD700;
  transform: translateY(-1px);
}

.developer-link:hover::after {
  width: 100%;
}
</style>
