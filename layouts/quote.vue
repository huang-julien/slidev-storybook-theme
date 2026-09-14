<template>
  <div class="slidev-layout quote">
    <div class="quote-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.quote {
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
.quote-content {
  max-width: 80%;
}
.quote-content::before {
  content: '\201C';
  color: var(--sb-pink);
  font-size: 6em;
  font-family: Georgia, serif;
  line-height: 0.6;
  display: block;
}
.quote :deep(h1) {
  font-size: 1.8em;
  font-weight: 700;
}
.quote :deep(p),
.quote :deep(h6) {
  color: var(--sb-text-muted);
}
</style>
