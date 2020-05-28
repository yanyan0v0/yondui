<template>
  <div class="y-color-picker-alpha" @click="handleAlphaChange">
    <div :style="{'background': `linear-gradient(to right, #00000000, ${hueColor})`}">
      <span class="y-color-picker-alpha-slider" :style="sliderStyle" @mousedown="handleMouseDown"></span>
    </div>
  </div>
</template>

<script>
import mixin from "./mixin";
export default {
  name: "y-color-picker-alpha",
  mixins: [mixin],
  data() {
    return {
      alphaRect: {},
      startDrag: false
    };
  },
  computed: {
    sliderStyle() {
      return {
        // a 即透明度(alpha), 取值范围为[0, 1]
        left: (100 * this.hsva.a).toFixed(4) + "%"
      };
    }
  },
  methods: {
    handleAlphaChange({ offsetX }) {
      this.initRect();
      let a = 0;
      if (offsetX >= this.alphaRect.width) {
        a = 1;
      } else if (offsetX > 0) {
        a = offsetX / this.alphaRect.width;
      }

      this.$emit("on-change", {
        a
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
        let offsetX = event.x - this.alphaRect.x;
        this.handleAlphaChange({ offsetX });
      }
    },
    handleMouseUp() {
      this.startDrag = false;
    },
    initRect() {
      if (!this.alphaRect.width || !this.alphaRect.height) {
        this.alphaRect = this.$el.getBoundingClientRect();
      }
    }
  },
  beforeDestroy() {
    document.removeEventListener("mousemove", this.handleMouseMove);
    document.removeEventListener("mouseup", this.handleMouseUp);
  }
};
</script>

<style lang="less">
.y-color-picker-alpha {
  position: relative;
  margin: 5px;
  height: 10px;
  border-radius: 2px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);
  & > div {
    .full;
    .y-color-picker-alpha-slider {
      position: absolute;
      width: 4px;
      border-radius: 1px;
      height: 8px;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
      background: #fff;
      margin-top: 1px;
      transform: translateX(-2px);
      cursor: pointer;
    }
  }
}
</style>