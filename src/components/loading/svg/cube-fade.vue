<template>
  <div class="y-loading-cube-fade">
    <div class="cube-fade cube-fade1" :style="style"></div>
    <div class="cube-fade cube-fade2" :style="style"></div>
    <div class="cube-fade cube-fade3" :style="style"></div>
    <div class="cube-fade cube-fade4" :style="style"></div>
    <div class="cube-fade cube-fade5" :style="style"></div>
    <div class="cube-fade cube-fade6" :style="style"></div>
    <div class="cube-fade cube-fade7" :style="style"></div>
    <div class="cube-fade cube-fade8" :style="style"></div>
    <div class="cube-fade cube-fade9" :style="style"></div>
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

