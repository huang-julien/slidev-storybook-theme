<template>
  <div class="slidev-layout intro sb-dark">
    <div class="glow glow-blue" />
    <div class="glow glow-pink" />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.intro {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3.5rem;
  background: var(--sb-navy);
  color: #ffffff;
  overflow: hidden;
}
.glow {
  position: absolute;
  width: 50%;
  height: 50%;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
}
.glow-blue {
  top: -10%;
  left: -10%;
  background: rgb(71 145 255 / 0.25);
}
.glow-pink {
  bottom: -10%;
  right: -10%;
  background: rgb(255 71 133 / 0.2);
}
.content {
  position: relative;
  z-index: 1;
}
.intro :deep(h1) {
  color: #ffffff;
  font-weight: 900;
  font-size: 2.2em;
}
.intro :deep(p) {
  color: #94a3b8;
}
</style>
