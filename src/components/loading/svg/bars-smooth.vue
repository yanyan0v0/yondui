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

<style>
.y-loading-bars-smooth {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  justify-content: space-around;
}

.y-loading-bars-smooth > div {
  background-color: #fff;
  height: 100%;
  width: 10%;
  display: inline-block;

  -webkit-animation: y-loading-bars-smooth-stretch-delay 1.2s infinite
    ease-in-out;
  animation: y-loading-bars-smooth-stretch-delay 1.2s infinite ease-in-out;
}

.y-loading-bars-smooth .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.y-loading-bars-smooth .rect3 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

.y-loading-bars-smooth .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.y-loading-bars-smooth .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@keyframes y-loading-bars-smooth-stretch-delay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
</style>
