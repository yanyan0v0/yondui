<template>
  <div class="y-loading-fold-cube">
    <div class="fold-cube1 fold-cube">
      <div :style="style"></div>
    </div>
    <div class="fold-cube2 fold-cube">
      <div :style="style"></div>
    </div>
    <div class="fold-cube4 fold-cube">
      <div :style="style"></div>
    </div>
    <div class="fold-cube3 fold-cube">
      <div :style="style"></div>
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
