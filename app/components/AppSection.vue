<template>
  <section :class="['section-padding', bgClass]">
    <v-container>
      <slot />
    </v-container>
  </section>
</template>

<script setup lang="ts">
interface Props {
  bgClass?: string
  paddingSize?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  bgClass: 'bg-white',
  paddingSize: 'md'
})

const sectionClass = computed(() => {
  const padding = props.paddingSize === 'sm' ? 'section-padding-sm' 
    : props.paddingSize === 'lg' ? 'section-padding-lg' 
    : 'section-padding'
  return padding
})
</script>
