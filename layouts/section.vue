<template>
  <div class="slidev-layout section sb-dark">
    <slot />
  </div>
</template>

<style scoped>
.section {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3.5rem;
  background: var(--sb-navy);
  color: #ffffff;
}
.section :deep(h1) {
  background: linear-gradient(90deg, var(--sb-blue-400), var(--sb-pink));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 900;
  font-size: 2.8em;
}
.section :deep(h2),
.section :deep(p) {
  font-size: 0.9em;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #94a3b8;
}
</style>
