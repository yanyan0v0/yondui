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
      this.initRect();
      let s = (100 * event.offsetX) / this.panelRect.width;
      let v = 100 * (1 - event.offsetY / this.panelRect.height);
      this.$emit("on-change", {
        s,
        v
      });
    },
    initRect() {
      if (!this.panelRect.width || !this.panelRect.height) {
        this.panelRect = this.$el.getBoundingClientRect();
      }
    }
  }
};
</script>
