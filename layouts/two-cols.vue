<template>
  <div class="slidev-layout two-cols sb-two-cols">
    <div class="col-left"><slot /></div>
    <div class="col-right"><slot name="right" /></div>
  </div>
</template>

<style scoped>
.two-cols {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 3.5rem;
}
</style>
