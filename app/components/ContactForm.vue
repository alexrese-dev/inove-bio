<template>
  <v-card 
    class="contact-form-card pa-6 pa-md-10 animate-on-mount" 
    rounded="xl" 
    elevation="8"
    color="white"
  >
    <h3 class="section-title mb-6 mb-md-8 animate-title" :style="{ color: titleColor }">
      {{ formTitle }}
    </h3>

    <v-form ref="formRef" v-model="valid" @submit.prevent="handleSubmit">
      <v-row>
        <!-- Nome Completo -->
        <v-col cols="12" class="animate-field" style="animation-delay: 0.1s">
          <v-text-field
            v-model="formData.name"
            :rules="nameRules"
            :label="$t('contact.name')"
            :placeholder="$t('contact.namePlaceholder')"
            variant="outlined"
            rounded="lg"
            color="primary"
            bg-color="white"
            :density="$vuetify.display.smAndDown ? 'default' : 'comfortable'"
            prepend-inner-icon="mdi-account"
            required
            class="smooth-transition field-hover"
          />
        </v-col>

        <!-- Telefone -->
        <v-col cols="12" md="6" class="animate-field" style="animation-delay: 0.2s">
          <v-text-field
            v-model="formData.phone"
            :rules="phoneRules"
            :label="$t('contact.phone')"
            :placeholder="$t('contact.phonePlaceholder')"
            variant="outlined"
            rounded="lg"
            color="primary"
            bg-color="white"
            :density="$vuetify.display.smAndDown ? 'default' : 'comfortable'"
            prepend-inner-icon="mdi-phone"
            required
            class="smooth-transition field-hover"
          />
        </v-col>

        <!-- E-mail -->
        <v-col cols="12" md="6" class="animate-field" style="animation-delay: 0.3s">
          <v-text-field
            v-model="formData.email"
            :rules="emailRules"
            :label="$t('contact.email')"
            :placeholder="$t('contact.emailPlaceholder')"
            variant="outlined"
            rounded="lg"
            color="primary"
            bg-color="white"
            :density="$vuetify.display.smAndDown ? 'default' : 'comfortable'"
            prepend-inner-icon="mdi-email"
            type="email"
            required
            class="smooth-transition field-hover"
          />
        </v-col>

        <!-- Mais Informações -->
        <v-col cols="12" class="animate-field" style="animation-delay: 0.4s">
          <v-textarea
            v-model="formData.message"
            :rules="messageRules"
            :label="$t('contact.message')"
            :placeholder="$t('contact.messagePlaceholder')"
            variant="outlined"
            rounded="lg"
            color="primary"
            bg-color="white"
            :density="$vuetify.display.smAndDown ? 'default' : 'comfortable'"
            prepend-inner-icon="mdi-message-text"
            :rows="$vuetify.display.smAndDown ? 3 : 4"
            required
            class="smooth-transition field-hover"
          />
        </v-col>

        <!-- Botão Enviar -->
        <v-col cols="12" class="animate-field" style="animation-delay: 0.5s">
          <v-btn
            type="submit"
            :color="submitColor"
            :size="$vuetify.display.smAndDown ? 'large' : 'x-large'"
            rounded="xl"
            block
            elevation="4"
            class="text-none font-weight-bold btn-ripple btn-submit-animated"
            :loading="loading"
          >
            <span class="text-white">{{ $t('contact.send') }}</span>
            <v-icon end class="ml-2" color="white">mdi-arrow-right-thin-circle-outline</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-form>

    <!-- Snackbar de Sucesso -->
    <v-snackbar
      v-model="snackbar"
      :color="snackbarColor"
      timeout="4000"
      rounded="pill"
      elevation="8"
    >
      <div class="d-flex align-center">
        <v-icon class="mr-3">{{ snackbarIcon }}</v-icon>
        <span class="font-weight-medium">{{ snackbarMessage }}</span>
      </div>
    </v-snackbar>
  </v-card>
</template>

<script setup lang="ts">
interface FormData {
  name: string
  phone: string
  email: string
  message: string
}

interface Props {
  formTitle: string
  submitColor?: string
  titleColor?: string
  formType?: 'cliente' | 'fornecedor' | 'geral'
}

const props = withDefaults(defineProps<Props>(), {
  submitColor: 'secondary',
  titleColor: '#FFA500',
  formType: 'geral'
})

const { t } = useI18n()

const formRef = ref()
const valid = ref(false)
const loading = ref(false)
const snackbar = ref(false)
const snackbarMessage = ref('')
const snackbarColor = ref('success')
const snackbarIcon = ref('mdi-check-circle')

const formData = ref<FormData>({
  name: '',
  phone: '',
  email: '',
  message: ''
})

// Regras de Validação
const nameRules = [
  (v: string) => !!v || t('validation.required'),
  (v: string) => (v && v.length >= 3) || t('validation.nameMin')
]

const phoneRules = [
  (v: string) => !!v || t('validation.required'),
  (v: string) => (v && v.length >= 10) || t('validation.phoneMin')
]

const emailRules = [
  (v: string) => !!v || t('validation.required'),
  (v: string) => /.+@.+\..+/.test(v) || t('validation.emailInvalid')
]

const messageRules = [
  (v: string) => !!v || t('validation.required'),
  (v: string) => (v && v.length >= 10) || t('validation.messageMin')
]

const handleSubmit = async () => {
  const { valid: isValid } = await formRef.value.validate()
  
  if (!isValid) {
    snackbarMessage.value = 'Por favor, preencha todos os campos corretamente.'
    snackbarColor.value = 'error'
    snackbarIcon.value = 'mdi-alert-circle'
    snackbar.value = true
    return
  }

  loading.value = true

  try {
    // Enviar dados para a API
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: formData.value.name,
        email: formData.value.email,
        phone: formData.value.phone,
        message: formData.value.message,
        formType: props.formType
      }
    })
    
    console.log('✅ Resposta da API:', response)
    
    snackbarMessage.value = 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
    snackbarColor.value = 'success'
    snackbarIcon.value = 'mdi-check-circle'
    snackbar.value = true
    
    // Resetar formulário
    formData.value = {
      name: '',
      phone: '',
      email: '',
      message: ''
    }
    formRef.value.reset()
    
  } catch (error: any) {
    console.error('❌ Erro ao enviar formulário:', error)
    
    const errorMessage = error?.data?.statusMessage || error?.message || 'Erro ao enviar mensagem. Tente novamente.'
    
    snackbarMessage.value = errorMessage
    snackbarColor.value = 'error'
    snackbarIcon.value = 'mdi-alert-circle'
    snackbar.value = true
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Animação de entrada do card */
.animate-on-mount {
  animation: scaleIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Animação do título */
.animate-title {
  animation: slideInLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Animação dos campos (stagger) */
.animate-field {
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.contact-form-card {
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

/* Efeito de brilho ao hover no card */
.contact-form-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 0%,
    rgba(255, 255, 255, 0.1) 45%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.1) 55%,
    transparent 100%
  );
  transform: rotate(45deg);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
}

.contact-form-card:hover::before {
  opacity: 1;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}

.contact-form-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2) !important;
}

/* Hover nos campos */
.field-hover {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.field-hover .v-field) {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.field-hover:hover .v-field) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 100, 0, 0.15) !important;
}

:deep(.v-text-field .v-field),
:deep(.v-textarea .v-field) {
  background-color: white !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.v-text-field .v-field--focused),
:deep(.v-textarea .v-field--focused) {
  box-shadow: 0 6px 16px rgba(0, 100, 0, 0.2) !important;
  transform: scale(1.01);
}

/* Animação dos ícones nos campos */
:deep(.v-field__prepend-inner .v-icon) {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.v-field--focused .v-field__prepend-inner .v-icon) {
  color: #006400 !important;
  transform: scale(1.2) rotate(5deg);
}

:deep(.field-hover:hover .v-field__prepend-inner .v-icon) {
  transform: scale(1.1);
}

/* Animação do botão submit */
.btn-submit-animated {
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-submit-animated::before {
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

.btn-submit-animated:hover::before {
  width: 400px;
  height: 400px;
}

.btn-submit-animated:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3) !important;
}

.btn-submit-animated:active {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2) !important;
}

/* Pulso sutil no botão */
@keyframes buttonPulse {
  0%, 100% {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  50% {
    box-shadow: 0 8px 16px rgba(0, 100, 0, 0.3);
  }
}

.btn-submit-animated {
  animation: buttonPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.btn-submit-animated:hover {
  animation: none;
}

/* Responsividade Mobile */
@media (max-width: 600px) {
  .contact-form-card {
    padding: 1.5rem !important;
  }

  :deep(.field-hover:hover .v-field) {
    transform: none;
  }

  .contact-form-card:hover {
    transform: none;
  }

  .contact-form-card:hover::before {
    animation: none;
  }
}
</style>
