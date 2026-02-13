<template>
  <v-parallax
    :src="src"
    :height="height"
    class="hero-section"
  >
    <div v-if="overlay" class="hero-overlay" />
    <v-container class="fill-height hero-content">
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12" :md="contentWidth" class="text-center">
          <slot />
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script setup lang="ts">
interface Props {
  src: string
  height?: number | string
  overlay?: boolean
  contentWidth?: number
}

withDefaults(defineProps<Props>(), {
  height: 700,
  overlay: true,
  contentWidth: 10
})
</script>
