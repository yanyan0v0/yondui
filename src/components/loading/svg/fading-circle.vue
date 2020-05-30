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

<style scoped>
.y-loading-fading-circle {
  width: 100%;
  height: 100%;
  position: relative;
}

.y-loading-fading-circle .y-loading-circle {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.y-loading-fading-circle .y-loading-circle > span {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: #333;
  border-radius: 100%;
  -webkit-animation: y-loading-circleFadeDelay 1.2s infinite ease-in-out both;
  animation: y-loading-circleFadeDelay 1.2s infinite ease-in-out both;
}
.y-loading-fading-circle .y-loading-circle2 {
  -webkit-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  transform: rotate(30deg);
}
.y-loading-fading-circle .y-loading-circle3 {
  -webkit-transform: rotate(60deg);
  -ms-transform: rotate(60deg);
  transform: rotate(60deg);
}
.y-loading-fading-circle .y-loading-circle4 {
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}
.y-loading-fading-circle .y-loading-circle5 {
  -webkit-transform: rotate(120deg);
  -ms-transform: rotate(120deg);
  transform: rotate(120deg);
}
.y-loading-fading-circle .y-loading-circle6 {
  -webkit-transform: rotate(150deg);
  -ms-transform: rotate(150deg);
  transform: rotate(150deg);
}
.y-loading-fading-circle .y-loading-circle7 {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
.y-loading-fading-circle .y-loading-circle8 {
  -webkit-transform: rotate(210deg);
  -ms-transform: rotate(210deg);
  transform: rotate(210deg);
}
.y-loading-fading-circle .y-loading-circle9 {
  -webkit-transform: rotate(240deg);
  -ms-transform: rotate(240deg);
  transform: rotate(240deg);
}
.y-loading-fading-circle .y-loading-circle10 {
  -webkit-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  transform: rotate(270deg);
}
.y-loading-fading-circle .y-loading-circle11 {
  -webkit-transform: rotate(300deg);
  -ms-transform: rotate(300deg);
  transform: rotate(300deg);
}
.y-loading-fading-circle .y-loading-circle12 {
  -webkit-transform: rotate(330deg);
  -ms-transform: rotate(330deg);
  transform: rotate(330deg);
}
.y-loading-fading-circle .y-loading-circle2 > span {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
.y-loading-fading-circle .y-loading-circle3 > span {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
.y-loading-fading-circle .y-loading-circle4 > span {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
.y-loading-fading-circle .y-loading-circle5 > span {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
.y-loading-fading-circle .y-loading-circle6 > span {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}
.y-loading-fading-circle .y-loading-circle7 > span {
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}
.y-loading-fading-circle .y-loading-circle8 > span {
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
.y-loading-fading-circle .y-loading-circle9 > span {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}
.y-loading-fading-circle .y-loading-circle10 > span {
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}
.y-loading-fading-circle .y-loading-circle11 > span {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}
.y-loading-fading-circle .y-loading-circle12 > span {
  -webkit-animation-delay: -0.1s;
  animation-delay: -0.1s;
}

@-webkit-keyframes y-loading-circleFadeDelay {
  0%,
  39%,
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}

@keyframes y-loading-circleFadeDelay {
  0%,
  39%,
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
</style>
