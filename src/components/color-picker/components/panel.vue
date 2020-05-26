<template>
  <div
    class="y-color-picker-panel"
    :style="{'background-color': hueColor}"
    @click="handlePanelClick"
  >
    <div class="y-color-picker-panel-white"></div>
    <div class="y-color-picker-panel-black"></div>
    <div class="y-color-picker-panel-cursor" :style="sliderStyle"></div>
  </div>
</template>

<script>
import mixin from "./mixin";
export default {
  name: "y-color-picker-panel",
  mixins: [mixin],
  data() {
    return {
      panelRect: {}
    };
  },
  computed: {
    sliderStyle() {
      return {
        // s 即饱和度(saturation), 取值范围为[0, 1] 饱和度为0表示纯白色
        left: (100 * this.hsva.s).toFixed(4) + "%",
        // v 即明度(value), 取值范围为[0, 1] 明度为0表示纯黑色
        top: (100 * (1 - this.hsva.v)).toFixed(4) + "%"
      };
    }
  },
  methods: {
    handlePanelClick(event) {
      let s = (100 * event.offsetX) / this.panelRect.width;
      let v = 100 * (1 - event.offsetY / this.panelRect.height);

      this.$emit("on-change", {
        s,
        v
      });
    }
  },
  mounted() {
    this.panelRect = this.$el.getBoundingClientRect();
  }
};
</script>

<style lang="less">
.y-color-picker-panel {
  position: relative;
  width: 100%;
  height: 120px;
  &-white {
    background-image: linear-gradient(to right, #fff, transparent);
  }
  &-black {
    background-image: linear-gradient(to top, #000, transparent);
  }
  &-white,
  &-black {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  &-cursor {
    position: absolute;
    border: 1px solid #fff;
    border-radius: 50%;
    padding: 2px;
    width: 8px;
    height: 8px;
    transform: translate(-50%, -50%);
  }
}
</style>