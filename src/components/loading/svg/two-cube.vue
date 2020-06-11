<template>
  <div class="y-loading-two-cube">
    <div class="cube1" :style="style"></div>
    <div class="cube2" :style="style"></div>
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
