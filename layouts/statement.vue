<template>
  <div class="slidev-layout statement sb-dark">
    <slot />
  </div>
</template>

<style scoped>
.statement {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3.5rem;
  background: var(--sb-navy);
  color: #ffffff;
}
.statement :deep(h1) {
  color: #ffffff;
  font-weight: 900;
  font-size: 3.2em;
}
</style>
