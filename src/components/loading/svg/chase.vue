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

<style scoped>
.y-loading-chase {
  width: 40px;
  height: 40px;
  position: relative;
  animation: y-loading-chase 2.5s infinite linear both;
}

.y-loading-chase-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: y-loading-chase-dot 2s infinite ease-in-out both;
}

.y-loading-chase-dot span {
  display: block;
  width: 25%;
  height: 25%;
  background-color: #fff;
  border-radius: 100%;
  animation: y-loading-chase-dot-before 2s infinite ease-in-out both;
}

.y-loading-chase-dot:nth-child(1) {
  animation-delay: -1.1s;
}
.y-loading-chase-dot:nth-child(2) {
  animation-delay: -1s;
}
.y-loading-chase-dot:nth-child(3) {
  animation-delay: -0.9s;
}
.y-loading-chase-dot:nth-child(4) {
  animation-delay: -0.8s;
}
.y-loading-chase-dot:nth-child(5) {
  animation-delay: -0.7s;
}
.y-loading-chase-dot:nth-child(6) {
  animation-delay: -0.6s;
}
.y-loading-chase-dot:nth-child(1):before {
  animation-delay: -1.1s;
}
.y-loading-chase-dot:nth-child(2):before {
  animation-delay: -1s;
}
.y-loading-chase-dot:nth-child(3):before {
  animation-delay: -0.9s;
}
.y-loading-chase-dot:nth-child(4):before {
  animation-delay: -0.8s;
}
.y-loading-chase-dot:nth-child(5):before {
  animation-delay: -0.7s;
}
.y-loading-chase-dot:nth-child(6):before {
  animation-delay: -0.6s;
}

@keyframes y-loading-chase {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes y-loading-chase-dot {
  80%,
  100% {
    transform: rotate(360deg);
  }
}

@keyframes y-loading-chase-dot-before {
  50% {
    transform: scale(0.4);
  }
  100%,
  0% {
    transform: scale(1);
  }
}
</style>