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

<style scoped>
.y-loading-timer {
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: 2px solid #333;
  border-radius: 50%;
  position: relative;
  margin: 0;
}
.y-loading-timer .y-loading-timer-hour,
.y-loading-timer .y-loading-timer-minute {
  position: absolute;
  background-color: #333;
}
.y-loading-timer .y-loading-timer-hour {
  width: 40%;
  height: 2px;
  top: 50%;
  left: 50%;
  -webkit-transform-origin: 1px 1px;
  -moz-transform-origin: 1px 1px;
  transform-origin: 1px 1px;
  -webkit-animation: minhand 2s linear infinite;
  -moz-animation: minhand 2s linear infinite;
  animation: minhand 2s linear infinite;
}

.y-loading-timer .y-loading-timer-minute {
  width: 30%;
  height: 2px;
  top: 50%;
  left: 50%;
  -webkit-transform-origin: 1px 1px;
  -moz-transform-origin: 1px 1px;
  transform-origin: 1px 1px;
  -webkit-animation: hrhand 8s linear infinite;
  -moz-animation: hrhand 8s linear infinite;
  animation: hrhand 8s linear infinite;
}

@-webkit-keyframes minhand {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@-moz-keyframes minhand {
  0% {
    -moz-transform: rotate(0deg);
  }
  100% {
    -moz-transform: rotate(360deg);
  }
}
@keyframes minhand {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes hrhand {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@-moz-keyframes hrhand {
  0% {
    -moz-transform: rotate(0deg);
  }
  100% {
    -moz-transform: rotate(360deg);
  }
}
@keyframes hrhand {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
