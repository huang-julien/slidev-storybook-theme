<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  variant?: 'solid' | 'outline' | 'ghost'
  href?: string
}>(), {
  variant: 'solid',
  href: undefined,
})

const tag = computed(() => (props.href ? 'a' : 'button'))
</script>

<template>
  <component
    :is="tag"
    class="sb-button"
    :class="`sb-button--${props.variant}`"
    :href="props.href"
    :type="props.href ? undefined : 'button'"
  >
    <slot />
  </component>
</template>

<style scoped>
.sb-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  font-family: inherit;
  font-weight: 700;
  font-size: 0.875em;
  border-radius: var(--sb-radius);
  padding: 0.55em 1em;
  border: 1px solid transparent;
  transition: all 150ms;
  cursor: pointer;
  text-decoration: none;
}
.sb-button:hover {
  transform: translateY(-1px);
}
.sb-button--solid {
  background: var(--sb-blue-600);
  color: #fff;
}
.sb-button--solid:hover {
  background: var(--sb-blue-700);
}
.sb-button--outline {
  background: transparent;
  border-color: var(--sb-blue-600);
  color: var(--sb-blue-600);
}
.sb-button--outline:hover {
  background: rgba(2, 156, 253, 0.1);
}
.sb-button--ghost {
  background: transparent;
  color: var(--sb-text-muted);
}
.sb-button--ghost:hover {
  background: var(--sb-blue-200);
  color: var(--sb-blue-600);
}
</style>
