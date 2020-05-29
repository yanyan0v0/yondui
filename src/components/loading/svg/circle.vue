<template>
  <svg width="50" height="50" viewBox="25 25 50 50" class="y-svg-loading-circle">
    <circle cx="50" cy="50" r="20" fill="none" :style="{stroke: color}" />
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "#000"
    }
  }
};
</script>

<style lang="less">
.y-svg-loading-circle {
  animation: loading-rotate 2s linear infinite;
  circle {
    animation: loading-dash 1.5s ease-in-out infinite;
    stroke-dasharray: 90, 150;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke-linecap: round;
  }
  @keyframes loading-rotate {
    100% {
      transform: rotate(1turn);
    }
  }
  @keyframes loading-dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -40px;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -120px;
    }
  }
}
</style>