<template>
  <div class="slidev-layout fact">
    <slot />
  </div>
</template>

<style scoped>
.fact {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3.5rem;
}
.fact :deep(h1) {
  font-size: 5em;
  color: var(--sb-blue-500);
  font-weight: 900;
  line-height: 1;
}
.fact :deep(h1 + p),
.fact :deep(p) {
  color: var(--sb-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.2em;
}
</style>
