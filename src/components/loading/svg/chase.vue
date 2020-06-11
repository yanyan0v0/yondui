<template>
  <div class="y-loading-chase">
    <div class="y-loading-chase-dot">
      <span :style="style"></span>
    </div>
    <div class="y-loading-chase-dot">
      <span :style="style"></span>
    </div>
    <div class="y-loading-chase-dot">
      <span :style="style"></span>
    </div>
    <div class="y-loading-chase-dot">
      <span :style="style"></span>
    </div>
    <div class="y-loading-chase-dot">
      <span :style="style"></span>
    </div>
    <div class="y-loading-chase-dot">
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
