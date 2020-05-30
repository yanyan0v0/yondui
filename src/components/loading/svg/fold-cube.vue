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

<style scoped>
.y-loading-fold-cube {
  width: 100%;
  height: 100%;
  position: relative;
  -webkit-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
}

.y-loading-fold-cube .fold-cube {
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
.y-loading-fold-cube .fold-cube > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333;
  -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
  animation: sk-foldCubeAngle 2.4s infinite linear both;
  -webkit-transform-origin: 100% 100%;
  -ms-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
}
.y-loading-fold-cube .fold-cube2 {
  -webkit-transform: scale(1.1) rotateZ(90deg);
  transform: scale(1.1) rotateZ(90deg);
}
.y-loading-fold-cube .fold-cube3 {
  -webkit-transform: scale(1.1) rotateZ(180deg);
  transform: scale(1.1) rotateZ(180deg);
}
.y-loading-fold-cube .fold-cube4 {
  -webkit-transform: scale(1.1) rotateZ(270deg);
  transform: scale(1.1) rotateZ(270deg);
}
.y-loading-fold-cube .fold-cube2 > div {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.y-loading-fold-cube .fold-cube3 > div {
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}
.y-loading-fold-cube .fold-cube4 > div {
  -webkit-animation-delay: 0.9s;
  animation-delay: 0.9s;
}
@-webkit-keyframes sk-foldCubeAngle {
  0%,
  10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
  75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%,
  100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
}

@keyframes sk-foldCubeAngle {
  0%,
  10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
  75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%,
  100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
}
</style>
