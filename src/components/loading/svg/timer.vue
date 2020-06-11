<template>
  <div class="y-loading-timer" :style="{'border-color': color}">
    <span class="y-loading-timer-hour" :style="style"></span>
    <span class="y-loading-timer-minute" :style="style"></span>
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
