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

<style>
.y-loading-cube-fade {
  position: relative;
  width: 100%;
  height: 100%;
}

.y-loading-cube-fade .cube-fade {
  width: 33%;
  height: 33%;
  background-color: #333;
  float: left;
  -webkit-animation: y-loading-cube-fade 1.3s infinite ease-in-out;
  animation: y-loading-cube-fade 1.3s infinite ease-in-out;
}
.y-loading-cube-fade .cube-fade1 {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.y-loading-cube-fade .cube-fade2 {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.y-loading-cube-fade .cube-fade3 {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
.y-loading-cube-fade .cube-fade4 {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
.y-loading-cube-fade .cube-fade5 {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.y-loading-cube-fade .cube-fade6 {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.y-loading-cube-fade .cube-fade7 {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
.y-loading-cube-fade .cube-fade8 {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
.y-loading-cube-fade .cube-fade9 {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}

@keyframes y-loading-cube-fade {
  0%,
  70%,
  100% {
    -webkit-transform: scale3D(1, 1, 1);
    transform: scale3D(1, 1, 1);
  }
  35% {
    -webkit-transform: scale3D(0, 0, 1);
    transform: scale3D(0, 0, 1);
  }
}
</style>
