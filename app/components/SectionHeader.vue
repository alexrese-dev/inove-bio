<template>
  <div :class="['text-center', centered ? 'container-narrow' : '']">
    <v-chip 
      v-if="tag"
      :color="tagColor" 
      variant="flat" 
      class="mb-4"
    >
      <v-icon v-if="tagIcon" start>{{ tagIcon }}</v-icon>
      {{ tag }}
    </v-chip>
    
    <h2 
      :class="[
        titleClass,
        'font-weight-bold text-primary mb-4'
      ]"
    >
      {{ title }}
    </h2>
    
    <p 
      v-if="subtitle" 
      :class="[
        subtitleClass,
        'text-medium-emphasis mb-6'
      ]"
    >
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  tag?: string
  tagIcon?: string
  tagColor?: string
  centered?: boolean
  titleClass?: string
  subtitleClass?: string
}

withDefaults(defineProps<Props>(), {
  subtitle: '',
  tag: '',
  tagIcon: '',
  tagColor: 'primary',
  centered: true,
  titleClass: 'text-h3',
  subtitleClass: 'text-h6'
})
</script>
