<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string
}>(), {
  title: undefined,
})
</script>

<template>
  <div class="sb-callout">
    <div v-if="props.title" class="sb-callout__title">{{ props.title }}</div>
    <slot />
  </div>
</template>

<style scoped>
.sb-callout {
  border-radius: 12px;
  border: 1px solid transparent;
  /* padding-box fill hides the conic gradient except on the 1px border ring */
  background:
    linear-gradient(var(--sb-bg), var(--sb-bg)) padding-box,
    conic-gradient(from var(--sb-gradient-angle), rgb(71 145 255), rgb(255 71 133), rgb(71 145 255)) border-box;
  animation: sb-gradient-rotate 8s linear infinite;
  padding: 1em 1.25em;
}
.sb-callout__title {
  font-weight: 800;
}
</style>
