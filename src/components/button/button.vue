<template>
  <button class="y-button" :class="[ size, shape]" :style="[colorStyle]">
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
    }
  },
  data() {
    return {
      THEME_COLORS
    };
  },
  computed: {
    colorStyle() {
      if (!this.color) {
        return {
          "border-style": this.shape === "dashed" ? "dashed" : "",
          "border-color": this.THEME_COLORS["border"]
        };
      }
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
  }
};
</script>

<style lang="less">
.y-button {
  margin: 5px;
  border: 1px solid;
  padding: 6px 12px;
  outline: none;
  font-size: 14px;
  color: @content-color;
  background-color: #fff;
  cursor: pointer;
}
.y-button:hover {
  opacity: 0.8;
}
.y-button.arc {
  border-radius: 4px;
}
.y-button.round {
  border-radius: 18px;
}
.y-button.mini {
  padding: 1px 10px;
  font-size: 12px;
}
.y-button.small {
  padding: 4px 10px;
  font-size: 12px;
}
.y-button.large {
  padding: 8px 16px;
  font-size: 16px;
}
</style>