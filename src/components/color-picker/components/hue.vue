<template>
  <div class="y-color-picker-hue" @click="handleHueChange">
    <span class="y-color-picker-hue-slider" :style="sliderStyle" @mousedown="handleMouseDown"></span>
  </div>
</template>

<script>
import mixin from "./mixin";
export default {
  name: "y-color-picker-hue",
  mixins: [mixin],
  data() {
    return {
      hueRect: {},
      startDrag: false
    };
  },
  computed: {
    sliderStyle() {
      return {
        // h 即色调(hue), 取值范围为[0, 360)
        left: ((100 * this.hsva.h) / 360).toFixed(4) + "%"
      };
    }
  },
  methods: {
    handleHueChange({ offsetX }) {
      this.initRect();
      let h = 0;
      if (offsetX >= this.hueRect.width) {
        h = 359;
      } else if (offsetX > 0) {
        h = (360 * offsetX) / this.hueRect.width;
      }
      this.$emit("on-change", {
        h
      });
    },
    handleMouseDown() {
      this.startDrag = true;
      document.addEventListener("mousemove", this.handleMouseMove);
      document.addEventListener("mouseup", this.handleMouseUp);
    },
    handleMouseMove(event) {
      if (this.startDrag) {
        this.initRect();
        let offsetX = event.x - this.hueRect.x;
        this.handleHueChange({ offsetX });
      }
    },
    handleMouseUp() {
      this.startDrag = false;
    },
    initRect() {
      if (!this.hueRect.width || !this.hueRect.height) {
        this.hueRect = this.$el.getBoundingClientRect();
      }
    }
  },
  beforeDestroy() {
    document.removeEventListener("mousemove", this.handleMouseMove);
    document.removeEventListener("mouseup", this.handleMouseUp);
  }
};
</script>