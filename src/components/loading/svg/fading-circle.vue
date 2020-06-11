<template>
  <div class="y-loading-fading-circle">
    <div class="y-loading-circle1 y-loading-circle">
      <span :style="style"></span>
    </div>
    <div class="y-loading-circle2 y-loading-circle">
      <span :style="style"></span>
    </div>
    <div class="y-loading-circle3 y-loading-circle">
      <span :style="style"></span>
    </div>
    <div class="y-loading-circle4 y-loading-circle">
      <span :style="style"></span>
    </div>
    <div class="y-loading-circle5 y-loading-circle">
      <span :style="style"></span>
    </div>
    <div class="y-loading-circle6 y-loading-circle">
      <span :style="style"></span>
    </div>
    <div class="y-loading-circle7 y-loading-circle">
      <span :style="style"></span>
    </div>
    <div class="y-loading-circle8 y-loading-circle">
      <span :style="style"></span>
    </div>
    <div class="y-loading-circle9 y-loading-circle">
      <span :style="style"></span>
    </div>
    <div class="y-loading-circle10 y-loading-circle">
      <span :style="style"></span>
    </div>
    <div class="y-loading-circle11 y-loading-circle">
      <span :style="style"></span>
    </div>
    <div class="y-loading-circle12 y-loading-circle">
      <span :style="style"></span>
    </div>
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

