<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string
}>(), {
  title: undefined,
})
</script>

<template>
  <div class="sb-window">
    <div class="sb-window__bar">
      <span class="sb-window__dots" aria-hidden="true">
        <i class="sb-window__dot sb-window__dot--red" />
        <i class="sb-window__dot sb-window__dot--yellow" />
        <i class="sb-window__dot sb-window__dot--green" />
      </span>
      <span v-if="props.title" class="sb-window__title">{{ props.title }}</span>
    </div>
    <div class="sb-window__body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.sb-window {
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgb(255 255 255 / 0.08);
  box-shadow: 0 8px 24px rgb(2 6 23 / 0.35);
  background: var(--sb-code-bg);
}
.sb-window__bar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 2.2em;
  padding: 0.4em 0.9em;
  background: rgb(255 255 255 / 0.06);
  border-bottom: 1px solid rgb(255 255 255 / 0.08);
}
.sb-window__dots {
  position: absolute;
  left: 0.9em;
  display: inline-flex;
  gap: 0.5em;
}
.sb-window__dot {
  width: 0.75em;
  height: 0.75em;
  border-radius: 50%;
}
.sb-window__dot--red {
  background: #ff5f57;
}
.sb-window__dot--yellow {
  background: #febc2e;
}
.sb-window__dot--green {
  background: #28c840;
}
.sb-window__title {
  font-size: 0.7em;
  padding: 0.2em 1.2em;
  border-radius: 6px;
  background: rgb(255 255 255 / 0.08);
  color: rgb(255 255 255 / 0.75);
  font-family: 'Nunito Sans', var(--sb-font-sans, sans-serif);
}
/* Flatten inner code blocks so they merge with the window frame */
.sb-window__body :deep(pre),
.sb-window__body :deep(.slidev-code-wrapper) {
  margin: 0;
  border-radius: 0;
  border: none;
  box-shadow: none;
}
</style>
