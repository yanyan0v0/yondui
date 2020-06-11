<template>
  <div class="y-loading-location-indicator">
    <span class="y-loading-location" :style="{'border-color': color}"></span>
    <span class="y-loading-indicator" :style="style"></span>
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

