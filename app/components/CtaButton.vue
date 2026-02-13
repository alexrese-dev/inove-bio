<template>
  <v-btn
    :to="to"
    :size="size"
    :color="color"
    :variant="variant"
    :class="['btn-cta', customClass]"
  >
    <slot>{{ text }}</slot>
    <v-icon v-if="icon" :end="iconPosition === 'end'" :start="iconPosition === 'start'">
      {{ icon }}
    </v-icon>
  </v-btn>
</template>

<script setup lang="ts">
interface Props {
  to?: string
  text?: string
  icon?: string
  iconPosition?: 'start' | 'end'
  size?: 'x-small' | 'small' | 'default' | 'large' | 'x-large'
  color?: string
  variant?: 'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain'
  customClass?: string
}

withDefaults(defineProps<Props>(), {
  to: '',
  text: '',
  icon: '',
  iconPosition: 'end',
  size: 'x-large',
  color: 'secondary',
  variant: 'flat',
  customClass: ''
})
</script>
