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

<style scoped>
.y-loading-location-indicator {
  position: relative;
  width: 100%;
  height: 100%;
}

.y-loading-location-indicator .y-loading-location {
  display: block;
  position: relative;
  margin: 0 auto;
  width: 70%;
  height: 70%;
  border-radius: 100% 100% 100% 0;
  border: 2px solid #333;
  -webkit-animation: y-mapping 1s linear infinite;
  -moz-animation: y-mapping 1s linear infinite;
  animation: y-mapping 1s linear infinite;
  -webkit-transform: rotate(-46deg);
  -moz-transform: rotate(-46deg);
  transform: rotate(-46deg);
}

.y-loading-location-indicator .y-loading-indicator {
  display: block;
  width: 100%;
  height: 30%;
  border-radius: 100%;
  background-color: #333;
  opacity: 0.2;
}

@-webkit-keyframes y-mapping {
  0% {
    top: 0;
  }
  50% {
    top: -5px;
  }
  100% {
    top: 0;
  }
}
@-moz-keyframes y-mapping {
  0% {
    top: 0;
  }
  50% {
    top: -5px;
  }
  100% {
    top: 0;
  }
}
@keyframes y-mapping {
  0% {
    top: 0;
  }
  50% {
    top: -5px;
  }
  100% {
    top: 0;
  }
}
</style>
