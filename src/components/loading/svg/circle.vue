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
