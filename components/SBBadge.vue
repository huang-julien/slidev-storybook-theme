<script setup lang="ts">
const props = withDefaults(defineProps<{
  light?: boolean
}>(), {
  light: false,
})
</script>

<template>
  <span class="sb-badge" :class="{ 'sb-badge--light': props.light }">
    <slot />
  </span>
</template>

<style scoped>
.sb-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.375em 0.875em;
  border-radius: 9999px;
  border: 1px solid transparent;
  /* padding-box fill hides the conic gradient except on the 1px border ring */
  background:
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) padding-box,
    conic-gradient(from var(--sb-gradient-angle), rgb(71 145 255), rgb(255 71 133), rgb(71 145 255)) border-box;
  animation: sb-gradient-rotate 8s linear infinite;
  color: #fff;
  font-size: 0.75em;
}
.sb-badge--light {
  background:
    linear-gradient(var(--sb-bg), var(--sb-bg)) padding-box,
    conic-gradient(from var(--sb-gradient-angle), rgb(71 145 255), rgb(255 71 133), rgb(71 145 255)) border-box;
  color: var(--sb-text);
}
</style>
