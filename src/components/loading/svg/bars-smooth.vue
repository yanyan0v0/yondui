<template>
  <div class="y-loading-bars-smooth">
    <div class="rect1" :style="style"></div>
    <div class="rect2" :style="style"></div>
    <div class="rect3" :style="style"></div>
    <div class="rect4" :style="style"></div>
    <div class="rect5" :style="style"></div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "#000"
    }
  },
  computed: {
    style() {
      return {
        "background-color": this.color
      };
    }
  }
};
</script>
