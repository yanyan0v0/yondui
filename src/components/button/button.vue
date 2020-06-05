<template>
  <button
    class="y-button"
    @click="handleClick"
    :class="[computeSize, classPrefix + shape, disabled ? classPrefix + 'disabled' : '']"
    :style="[colorStyle, {'width': width}]"
  >
    <slot></slot>
  </button>
</template>

<script>
import { THEME_COLORS } from "@/util/config";
export default {
  name: "y-button",
  props: {
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
    }
  },
  data() {
    return {
      classPrefix: "y-button-",
      THEME_COLORS
    };
  },
  computed: {
    computeSize() {
      return this.size
        ? this.classPrefix + this.size
        : this.$YONDUI.size
        ? this.classPrefix + this.$YONDUI.size
        : "";
    },
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
      this.$emit("click", e);
    }
  }
};
</script>

<style lang="less">
.y-button {
  position: relative;
  margin: 5px;
  border: 1px solid;
  padding: 6px 12px;
  height: 30px;
  line-height: 16px;
  outline: none;
  font-size: 14px;
  color: @text-color;
  background-color: #fff;
  cursor: pointer;
}
.y-button:not(.y-button-disabled):hover {
  opacity: 0.8;
}
.y-button.y-button-arc {
  border-radius: 4px;
}
.y-button.y-button-round {
  border-radius: 18px;
}
.y-button.y-button-mini {
  padding: 2px 10px;
  height: 20px;
  line-height: 14px;
  font-size: 12px;
}
.y-button.y-button-small {
  padding: 4px 10px;
  line-height: 15px;
  height: 25px;
}
.y-button.y-button-large {
  padding: 8px 16px;
  height: 35px;
  line-height: 17px;
  font-size: 16px;
}
.y-button.y-button-disabled {
  color: @disabled-color !important;
  cursor: not-allowed;
}
.y-button.y-button-disabled:not(.y-button-text) {
  background-color: #f7f7f7 !important;
  border-color: #dcdee2 !important;
}
</style>