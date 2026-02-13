<template>
  <v-app-bar
    :elevation="scrolled ? 4 : 0"
    :color="isHomePage && !scrolled ? 'transparent' : 'primary'"
    :class="{ 'navbar-transparent': isHomePage && !scrolled, 'navbar-primary': !isHomePage || scrolled }"
    app
    fixed
    height="80"
  >
    <v-container class="d-flex align-center px-2 px-md-4" fluid>
      <!-- Logo -->
      <v-app-bar-title class="logo-container pa-0" @click="navigateTo('/')">
        <v-img
          src="https://imagens.inovebio.com/logo.png"
          alt="Logo InoveBIO - Biodiesel Sustentável"
          :height="$vuetify.display.smAndDown ? '40' : '48'"
          :max-width="$vuetify.display.smAndDown ? '140' : '180'"
          class="logo-img"
          contain
          fetchpriority="high"
        />
      </v-app-bar-title>

      <v-spacer />

      <!-- Menu Desktop -->
      <div class="d-none d-md-flex align-center ga-6">
        <v-btn
          :to="localePath('/')"
          variant="text"
          :color="isHomePage && !scrolled ? 'white' : 'white'"
          :class="{ 'active-page': route.path === '/' || route.path === '/pt' || route.path === '/en' }"
          class="text-none font-weight-bold nav-btn"
        >
          {{ $t('nav.home') }}
        </v-btn>

        <v-menu open-on-hover>
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              variant="text"
              :color="isHomePage && !scrolled ? 'white' : 'white'"
              :class="{ 'active-page': route.path.includes('/quem-somos') }"
              class="text-none font-weight-bold nav-btn"
            >
              {{ $t('nav.aboutUs') }}
              <v-icon end>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list class="submenu-list">
            <v-list-item 
              :to="localePath('/quem-somos#historia')"
              :class="{ 'active-submenu': activeSection === 'historia' || route.hash === '#historia' }"
            >
              <v-list-item-title>{{ $t('nav.history') }}</v-list-item-title>
            </v-list-item>
            <v-list-item 
              :to="localePath('/quem-somos#missao-visao-valores')"
              :class="{ 'active-submenu': activeSection === 'missao-visao-valores' || route.hash === '#missao-visao-valores' }"
            >
              <v-list-item-title>{{ $t('nav.missionVisionValues') }}</v-list-item-title>
            </v-list-item>
            <v-list-item 
              :to="localePath('/quem-somos#proposito')"
              :class="{ 'active-submenu': activeSection === 'proposito' || route.hash === '#proposito' }"
            >
              <v-list-item-title>{{ $t('nav.purpose') }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu open-on-hover>
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              variant="text"
              :color="isHomePage && !scrolled ? 'white' : 'white'"
              :class="{ 'active-page': route.path.includes('/nossa-atuacao') }"
              class="text-none font-weight-bold nav-btn"
            >
              {{ $t('nav.ourWork') }}
              <v-icon end>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list class="submenu-list">
            <v-list-item 
              :to="localePath('/nossa-atuacao#como-funciona')"
              :class="{ 'active-submenu': activeSection === 'como-funciona' || (route.path.includes('/nossa-atuacao') && (route.hash === '#como-funciona' || route.hash === '')) }"
            >
              <v-list-item-title>{{ $t('nav.howItWorks') }}</v-list-item-title>
            </v-list-item>
            <v-list-item 
              :to="localePath('/nossa-atuacao#diferenciais')"
              :class="{ 'active-submenu': activeSection === 'diferenciais' || (route.path.includes('/nossa-atuacao') && route.hash === '#diferenciais') }"
            >
              <v-list-item-title>{{ $t('nav.differentials') }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu open-on-hover>
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              variant="text"
              :color="isHomePage && !scrolled ? 'white' : 'white'"
              :class="{ 'active-page': route.path.includes('/contato') }"
              class="text-none font-weight-bold nav-btn"
            >
              {{ $t('nav.contact') }}
              <v-icon end>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list class="submenu-list">
            <v-list-item 
              :to="localePath('/contato#cliente')"
              :class="{ 'active-submenu': activeSection === 'cliente' || route.hash === '#cliente' || (route.path.includes('/contato') && !route.hash) }"
            >
              <v-list-item-title>{{ $t('nav.wantToBuy') }}</v-list-item-title>
            </v-list-item>
            <v-list-item 
              :to="localePath('/contato#fornecedor')"
              :class="{ 'active-submenu': activeSection === 'fornecedor' || route.hash === '#fornecedor' }"
            >
              <v-list-item-title>{{ $t('nav.wantToSell') }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- Botão Blog -->
        <v-btn
          href="https://blog.inovebio.com.br"
          target="_blank"
          variant="text"
          :color="isHomePage && !scrolled ? 'white' : 'white'"
          class="text-none font-weight-bold nav-btn"
        >
          Blog
          <v-icon end size="small">mdi-open-in-new</v-icon>
        </v-btn>

        <!-- Seletor de Idioma -->
        <v-menu>
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              variant="text"
              :color="isHomePage && !scrolled ? 'white' : 'white'"
              class="text-none font-weight-bold"
              icon
              aria-label="Selecionar idioma"
            >
              <v-icon>mdi-translate</v-icon>
            </v-btn>
          </template>
          <v-list class="submenu-list" min-width="120">
            <v-list-item @click="changeLocale('pt')">
              <v-list-item-title class="d-flex align-center">
                <span class="mr-2">🇧🇷</span> Português
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="changeLocale('en')">
              <v-list-item-title class="d-flex align-center">
                <span class="mr-2">🇺🇸</span> English
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <!-- Ícone Hambúrguer Mobile -->
      <v-app-bar-nav-icon
        class="d-md-none"
        :color="isHomePage && !scrolled ? 'white' : 'white'"
        aria-label="Abrir menu de navegação"
        @click="drawer = !drawer"
      />
    </v-container>
  </v-app-bar>

  <!-- Navigation Drawer Mobile -->
  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
    width="280"
  >
    <v-list>
      <v-list-item :to="localePath('/')" @click="drawer = false">
        <v-list-item-title>{{ $t('nav.home') }}</v-list-item-title>
      </v-list-item>

      <v-list-group value="quem-somos">
        <template #activator="{ props }">
          <v-list-item v-bind="props" :class="{ 'active-page-mobile': route.path.includes('/quem-somos') }">
            <v-list-item-title>{{ $t('nav.aboutUs') }}</v-list-item-title>
          </v-list-item>
        </template>
        <v-list-item
          :to="localePath('/quem-somos#historia')"
          @click="drawer = false"
          :class="{ 'active-submenu-mobile': activeSection === 'historia' || route.hash === '#historia' }"
        >
          <v-list-item-title class="pl-4">{{ $t('nav.history') }}</v-list-item-title>
        </v-list-item>
        <v-list-item
          :to="localePath('/quem-somos#missao-visao-valores')"
          @click="drawer = false"
          :class="{ 'active-submenu-mobile': activeSection === 'missao-visao-valores' || route.hash === '#missao-visao-valores' }"
        >
          <v-list-item-title class="pl-4">{{ $t('nav.missionVisionValues') }}</v-list-item-title>
        </v-list-item>
        <v-list-item
          :to="localePath('/quem-somos#proposito')"
          @click="drawer = false"
          :class="{ 'active-submenu-mobile': activeSection === 'proposito' || route.hash === '#proposito' }"
        >
          <v-list-item-title class="pl-4">{{ $t('nav.purpose') }}</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group value="atuacao">
        <template #activator="{ props }">
          <v-list-item v-bind="props" :class="{ 'active-page-mobile': route.path.includes('/nossa-atuacao') }">
            <v-list-item-title>{{ $t('nav.ourWork') }}</v-list-item-title>
          </v-list-item>
        </template>
        <v-list-item
          :to="localePath('/nossa-atuacao#como-funciona')"
          @click="drawer = false"
          :class="{ 'active-submenu-mobile': activeSection === 'como-funciona' || (route.path.includes('/nossa-atuacao') && (route.hash === '#como-funciona' || route.hash === '')) }"
        >
          <v-list-item-title class="pl-4">{{ $t('nav.howItWorks') }}</v-list-item-title>
        </v-list-item>
        <v-list-item
          :to="localePath('/nossa-atuacao#diferenciais')"
          @click="drawer = false"
          :class="{ 'active-submenu-mobile': activeSection === 'diferenciais' || (route.path.includes('/nossa-atuacao') && route.hash === '#diferenciais') }"
        >
          <v-list-item-title class="pl-4">{{ $t('nav.differentials') }}</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group value="contato">
        <template #activator="{ props }">
          <v-list-item v-bind="props" :class="{ 'active-page-mobile': route.path.includes('/contato') }">
            <v-list-item-title>{{ $t('nav.contact') }}</v-list-item-title>
          </v-list-item>
        </template>
        <v-list-item
          :to="localePath('/contato#cliente')"
          @click="drawer = false"
          :class="{ 'active-submenu-mobile': activeSection === 'cliente' || route.hash === '#cliente' || (route.path.includes('/contato') && !route.hash) }"
        >
          <v-list-item-title class="pl-4">{{ $t('nav.wantToBuy') }}</v-list-item-title>
        </v-list-item>
        <v-list-item
          :to="localePath('/contato#fornecedor')"
          @click="drawer = false"
          :class="{ 'active-submenu-mobile': activeSection === 'fornecedor' || route.hash === '#fornecedor' }"
        >
          <v-list-item-title class="pl-4">{{ $t('nav.wantToSell') }}</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <!-- Botão Blog -->
      <v-list-item
        href="https://blog.inovebio.com.br"
        target="_blank"
        @click="drawer = false"
      >
        <v-list-item-title>
          Blog
          <v-icon end size="small" class="ml-1">mdi-open-in-new</v-icon>
        </v-list-item-title>
      </v-list-item>

      <v-divider class="my-4" />

      <!-- Seletor de Idioma Mobile -->
      <v-list-item>
        <div class="d-flex ga-2">
          <v-btn
            @click="changeLocale('pt'); drawer = false"
            :variant="locale === 'pt' ? 'flat' : 'outlined'"
            :color="locale === 'pt' ? 'primary' : 'default'"
            size="small"
            class="flex-1-1"
          >
            🇧🇷 PT
          </v-btn>
          <v-btn
            @click="changeLocale('en'); drawer = false"
            :variant="locale === 'en' ? 'flat' : 'outlined'"
            :color="locale === 'en' ? 'primary' : 'default'"
            size="small"
            class="flex-1-1"
          >
            🇺🇸 EN
          </v-btn>
        </div>
      </v-list-item>

      <v-divider class="my-4" />

      <v-list-item>
        <v-btn
          :to="localePath('/contato#cliente')"
          variant="outlined"
          color="primary"
          rounded="pill"
          block
          class="text-none mb-3"
          @click="drawer = false"
        >
          {{ $t('nav.becomeClient').toUpperCase() }}
        </v-btn>
        <v-btn
          :to="localePath('/contato#fornecedor')"
          variant="flat"
          color="secondary"
          rounded="pill"
          block
          class="text-none"
          @click="drawer = false"
        >
          {{ $t('nav.becomeSupplier').toUpperCase() }}
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
const route = useRoute()
const localePath = useLocalePath()
const router = useRouter()
const { locale, setLocale } = useI18n()

const drawer = ref(false)
const scrolled = ref(false)
const activeSection = ref('')

const isHomePage = computed(() => {
  const path = route.path
  return path === '/' || path === '/pt' || path === '/en'
})

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
  
  // Detectar seção ativa baseado no scroll
  if (typeof window !== 'undefined') {
    const sections = ['historia', 'missao-visao-valores', 'proposito', 'como-funciona', 'diferenciais', 'cliente', 'fornecedor']
    
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId)
      if (element) {
        const rect = element.getBoundingClientRect()
        // Verifica se a seção está visível na viewport (considerando o offset do header)
        if (rect.top <= 150 && rect.bottom >= 150) {
          activeSection.value = sectionId
          break
        }
      }
    }
  }
}

const navigateTo = (path: string) => {
  router.push(localePath(path))
}

const changeLocale = (newLocale: 'pt' | 'en') => {
  setLocale(newLocale)
}

const handleHashNavigation = () => {
  // Aguardar um frame para garantir que a página está renderizada
  nextTick(() => {
    const hash = route.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        const headerOffset = 100 // Offset para compensar header fixo
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleHashNavigation()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Watch para mudanças de hash
watch(() => route.hash, () => {
  handleHashNavigation()
})
</script>

<style scoped>
.logo-container {
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo-img {
  display: block;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo-container:hover {
  opacity: 0.9;
}

.logo-container:hover .logo-img {
  transform: scale(1.05);
}

/* Aumentar fonte dos botões de navegação */
:deep(.nav-btn) {
  font-size: 1.05rem !important;
  letter-spacing: 0.03em;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

:deep(.nav-btn:hover) {
  transform: translateY(-2px);
}

:deep(.nav-btn::after) {
  content: '';
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 60%;
  height: 2px;
  background: #FFD700;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.nav-btn:hover::after) {
  transform: translateX(-50%) scaleX(1);
}

.navbar-transparent {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, transparent 100%) !important;
}

.navbar-primary {
  background-color: #006400 !important;
}

.logo-container-mobile {
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
}

.v-app-bar {
  transition: all 0.3s ease;
}

/* Página ativa em amarelo */
:deep(.active-page) {
  color: #FFD700 !important;
}

/* Estilo do submenu */
:deep(.submenu-list) {
  background: rgba(0, 0, 0, 0.95) !important;
  backdrop-filter: blur(12px);
  border-radius: 16px !important;
  padding: 8px !important;
  margin-top: 8px;
  animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

:deep(.submenu-list .v-list-item) {
  border-radius: 12px !important;
  margin-bottom: 4px;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

:deep(.submenu-list .v-list-item::before) {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 3px;
  background: #FFD700;
  transform: scaleY(0);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.submenu-list .v-list-item:last-child) {
  margin-bottom: 0;
}

:deep(.submenu-list .v-list-item .v-list-item-title) {
  color: white !important;
  font-weight: 500;
}

:deep(.submenu-list .v-list-item:hover) {
  background-color: rgba(0, 100, 0, 0.25) !important;
  transform: translateX(4px);
}

:deep(.submenu-list .v-list-item:hover::before) {
  transform: scaleY(1);
}

:deep(.submenu-list .v-list-item:hover .v-list-item-title) {
  color: #FFD700 !important;
}

/* Submenu ativo com fundo verde */
:deep(.submenu-list .active-submenu) {
  background-color: rgba(0, 100, 0, 0.3) !important;
}

:deep(.submenu-list .active-submenu .v-list-item-title) {
  color: #006400 !important;
  font-weight: 700;
}

/* ================================
   ESTILOS MOBILE DRAWER
   ================================ */

/* Animação de entrada do drawer */
:deep(.v-navigation-drawer) {
  animation: slideInRight 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Itens do menu mobile com animação stagger */
:deep(.v-navigation-drawer .v-list-item) {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

:deep(.v-navigation-drawer .v-list-item::before) {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 4px;
  background: linear-gradient(180deg, #FFD700 0%, #FFA500 100%);
  transform: scaleY(0);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover em itens do drawer */
:deep(.v-navigation-drawer .v-list-item:hover) {
  background-color: rgba(0, 100, 0, 0.1) !important;
  transform: translateX(4px);
}

:deep(.v-navigation-drawer .v-list-item:hover::before) {
  transform: scaleY(1);
}

:deep(.v-navigation-drawer .v-list-item:hover .v-list-item-title) {
  color: #006400 !important;
  font-weight: 600;
}

/* Página ativa no mobile */
:deep(.active-page-mobile) {
  background-color: rgba(255, 215, 0, 0.15) !important;
  border-left: 4px solid #FFD700;
}

:deep(.active-page-mobile .v-list-item-title) {
  color: #006400 !important;
  font-weight: 700 !important;
}

/* Submenu ativo no mobile */
:deep(.active-submenu-mobile) {
  background-color: rgba(0, 100, 0, 0.2) !important;
  border-left: 3px solid #FFA500 !important;
}

:deep(.active-submenu-mobile .v-list-item-title) {
  color: #006400 !important;
  font-weight: 700 !important;
}

/* Botões CTA no drawer com animação */
:deep(.v-navigation-drawer .v-btn) {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

:deep(.v-navigation-drawer .v-btn::before) {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

:deep(.v-navigation-drawer .v-btn:hover::before) {
  width: 300px;
  height: 300px;
}

:deep(.v-navigation-drawer .v-btn:hover) {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

:deep(.v-navigation-drawer .v-btn:active) {
  transform: translateY(0);
}

/* Grupo expandido com animação */
:deep(.v-list-group__items) {
  animation: expandDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes expandDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 500px;
  }
}

/* Animação de saída ao fechar */
:deep(.v-navigation-drawer--close) {
  animation: slideOutRight 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideOutRight {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
}

/* Efeito de pulso nos ícones */
:deep(.v-list-item .v-icon) {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

:deep(.v-list-item:hover .v-icon) {
  animation: none;
  transform: scale(1.1);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
