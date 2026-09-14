<template>
  <div class="slidev-layout default">
    <slot />
  </div>
</template>

<style scoped>
.default {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 3.5rem;
}
.default :deep(h1)::after {
  content: '';
  display: block;
  width: 40px;
  height: 4px;
  border-radius: 2px;
  margin-top: 0.3em;
  background: linear-gradient(90deg, var(--sb-gradient-from), var(--sb-gradient-to));
}
</style>
