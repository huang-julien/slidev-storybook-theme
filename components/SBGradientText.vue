<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  from?: string
  to?: string
}>(), {
  from: '#52AFFF',
  to: '#FF4785',
})

// background-image (not the background shorthand) so it doesn't reset background-clip: text
const gradientStyle = computed(() => ({
  backgroundImage: `linear-gradient(90deg, ${props.from}, ${props.to})`,
}))
</script>

<template>
  <span class="sb-gradient-text" :style="gradientStyle">
    <slot />
  </span>
</template>

<style scoped>
.sb-gradient-text {
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 900;
}
</style>
