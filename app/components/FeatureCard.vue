<template>
  <v-card
    :elevation="elevation"
    :variant="variant"
    :class="['card-hover h-100', cardClass]"
  >
    <v-card-text :class="['text-center', padding]">
      <v-avatar
        :class="['mb-4', avatarClass]"
        :color="iconBgColor"
        :size="iconSize"
      >
        <v-icon
          :icon="icon"
          :size="iconSize - 20"
          color="white"
        />
      </v-avatar>

      <h3 :class="['font-weight-bold mb-3', titleClass]">
        {{ title }}
      </h3>

      <p :class="['text-medium-emphasis mb-0', descClass]">
        {{ description }}
      </p>

      <slot />
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
interface Props {
  icon: string
  title: string
  description: string
  iconBgColor?: string
  iconSize?: number
  elevation?: number
  variant?: 'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain'
  padding?: string
  cardClass?: string
  avatarClass?: string
  titleClass?: string
  descClass?: string
}

withDefaults(defineProps<Props>(), {
  iconBgColor: 'primary',
  iconSize: 80,
  elevation: 4,
  variant: 'elevated',
  padding: 'pa-6',
  cardClass: '',
  avatarClass: '',
  titleClass: 'text-h5',
  descClass: 'text-body-1'
})
</script>
