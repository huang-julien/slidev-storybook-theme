<template>
  <div class="slidev-layout end sb-dark">
    <slot />
  </div>
</template>

<style scoped>
.end {
  position: relative;
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
.end::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #FF4785, #029CFD, #37D5D3, #FEBD32);
}
.end :deep(h1) {
  color: #ffffff;
}
.end :deep(p) {
  color: #94a3b8;
}
</style>
