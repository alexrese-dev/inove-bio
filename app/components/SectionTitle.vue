<template>
  <div class="section-title py-8">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" :md="centered ? 8 : 12">
          <h2
            :class="[
              'text-h3 font-weight-bold mb-4',
              centered ? 'text-center' : '',
              `text-${color}`
            ]"
          >
            {{ title }}
          </h2>
          <p
            v-if="subtitle"
            :class="[
              'text-h6 text-medium-emphasis',
              centered ? 'text-center' : ''
            ]"
          >
            {{ subtitle }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  centered?: boolean
  color?: string
}

withDefaults(defineProps<Props>(), {
  subtitle: '',
  centered: true,
  color: 'primary'
})
</script>

<style scoped>
.section-title {
  position: relative;
}
</style>
