<template>
  <div class="y-loading-spinning-rectangle" :style="{backgroundColor: color}"></div>
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
