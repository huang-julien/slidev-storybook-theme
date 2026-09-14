<template>
  <div class="slidev-layout center">
    <slot />
  </div>
</template>

<style scoped>
.center {
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
</style>
