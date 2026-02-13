<template>
  <v-card
    :elevation="elevation"
    :variant="variant"
    class="info-card h-100"
    :color="cardColor"
  >
    <v-card-text class="text-center pa-6">
      <v-avatar
        :color="iconColor"
        :size="iconSize"
        class="mb-4"
      >
        <v-icon
          :icon="icon"
          :size="iconSize - 20"
          color="white"
        />
      </v-avatar>

      <h3 class="text-h5 font-weight-bold mb-3">
        {{ title }}
      </h3>

      <p class="text-body-1 text-medium-emphasis mb-0">
        {{ description }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
interface Props {
  icon: string
  title: string
  description: string
  iconColor?: string
  iconSize?: number
  elevation?: number
  variant?: 'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain'
  cardColor?: string
}

withDefaults(defineProps<Props>(), {
  iconColor: 'primary',
  iconSize: 80,
  elevation: 2,
  variant: 'elevated',
  cardColor: 'white'
})
</script>

<style scoped>
.info-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover {
  transform: translateY(-8px);
}
</style>
