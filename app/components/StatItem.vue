<template>
  <div class="stat-item text-center">
    <v-icon 
      :icon="icon" 
      :size="iconSize" 
      :color="iconColor" 
      class="mb-3" 
    />
    <h3 :class="['font-weight-bold mb-2', valueClass, `text-${valueColor}`]">
      {{ value }}
    </h3>
    <p :class="['text-medium-emphasis', labelClass]">
      {{ label }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon: string
  value: string
  label: string
  iconSize?: number
  iconColor?: string
  valueColor?: string
  valueClass?: string
  labelClass?: string
}

withDefaults(defineProps<Props>(), {
  iconSize: 48,
  iconColor: 'primary',
  valueColor: 'primary',
  valueClass: 'text-h3',
  labelClass: 'text-h6'
})
</script>
