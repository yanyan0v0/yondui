<template>
  <button
    class="y-button"
    @click="handleClick"
    :type="type"
    :class="[computeSize(classPrefix), classPrefix + shape, disabled ? classPrefix + 'disabled' : '', loading ? classPrefix + 'isloading' : '']"
    :style="[colorStyle, {'width': width}]"
  >
    <loading-svg
      v-if="loading"
      color="#fff"
      class="y-button-loading"
      :class="[size ? 'y-button-loading-' + size : '']"
    ></loading-svg>
    <slot></slot>
  </button>
</template>

<script>
import { THEME_COLORS } from "@/util/config";
import componentMixins from "@/mixins/component";
import LoadingSvg from "@/components/loading/svg/oval.vue";
export default {
  name: "y-button",
  components: {
    LoadingSvg
  },
  mixins: [componentMixins],
  props: {
    type: {
      type: String,
      default: "button"
    },
    color: {
      type: [String, Array],
      default: ""
    },
    // large 大 default 默认 small 小
    size: {
      type: String,
      default: ""
    },
    // none 直角 round 半圆角 arc 圆弧 dashed 虚线
    shape: {
      type: String,
      default: "arc"
    },
    width: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: Boolean
  },
  data() {
    return {
      classPrefix: "y-button-",
      THEME_COLORS
    };
  },
  computed: {
    colorStyle() {
      // 颜色不存在时
      if (!this.color) {
        if (this.shape === "text") {
          return {
            border: "none",
            background: "none"
          };
        } else {
          return {
            "border-style": this.shape === "dashed" ? "dashed" : "",
            "border-color": this.THEME_COLORS["border"]
          };
        }
      }
      // 颜色存在时
      if (typeof this.color === "string") {
        if (this.shape === "dashed" || this.shape === "solid") {
          return {
            color: this.THEME_COLORS[this.color] || this.color,
            "border-style": this.shape,
            "border-color": this.THEME_COLORS[this.color] || this.color,
            "background-color": "#fff"
          };
        } else if (this.shape === "text") {
          return {
            color: this.THEME_COLORS[this.color] || this.color,
            border: "none",
            "background-color": "transparent"
          };
        } else {
          return {
            color: "#fff",
            "border-color": this.THEME_COLORS[this.color] || this.color,
            "background-color": this.THEME_COLORS[this.color] || this.color
          };
        }
      } else {
        // 当color为数组时
        let colors = this.color.map(item => this.THEME_COLORS[item] || item);
        if (this.shape === "text") {
          return {
            color: "transparent",
            "-webkit-background-clip": "text",
            "background-image": `linear-gradient(to right, ${colors.toString()})`,
            "background-color": "#fff"
          };
        } else {
          return {
            color: "#fff",
            "border-left": "none",
            "border-right": "none",
            "border-image": `linear-gradient(to right, ${colors.toString()})`,
            "background-image": `linear-gradient(to right, ${colors.toString()})`
          };
        }
      }
    }
  },
  methods: {
    handleClick(e) {
      if (this.disabled || this.loading) return;
      this.$emit("click", e);
    }
  }
};
</script>