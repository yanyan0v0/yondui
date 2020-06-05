<template>
  <transition name="dropdown-fade">
    <div
      v-show="visible"
      v-clickoutside="setVisible"
      class="y-color-picker-dropdown"
      :style="style"
    >
      <y-panel :color="colorData" @on-change="handlePanelChange"></y-panel>
      <div class="y-color-picker-select">
        <!-- <span class="select-picker">
        <y-icon type="huabi"></y-icon>
        </span>-->
        <div class="selected-color">
          <span :style="{'background': colorData.toHslString ? colorData.toHslString() : ''}"></span>
        </div>
        <div class="select-bar">
          <y-hue :color="colorData" @on-change="handleHubChange"></y-hue>
          <y-alpha :color="colorData" @on-change="handleAlphaChange"></y-alpha>
        </div>
      </div>
      <div class="y-color-picker-input">
        <y-input v-model="color" size="small">
          <span slot="suffix" class="pointer" @click="changeFormat">
            <y-icon type="shangxiaqiehuan"></y-icon>
          </span>
        </y-input>
      </div>
      <ul class="y-color-picker-group clearfix">
        <li
          v-for="(group, index) in colorGroup"
          :key="index"
          :style="{'background-color': group}"
          @click="update(group)"
        ></li>
      </ul>
      <div v-show="showFooter" class="y-color-picker-footer">
        <y-button class="float-r" size="small" @click="confirm(color)">确定</y-button>
      </div>
    </div>
  </transition>
</template>

<script>
import tinycolor from "tinycolor2";
import clickoutside from "@/directive/clickoutside";
import { THEME_COLORS } from "@/util/config";
export default {
  name: "y-color-picker",
  components: {
    YPanel: () => import("./components/panel.vue"),
    YHue: () => import("./components/hue.vue"),
    YAlpha: () => import("./components/alpha.vue")
  },
  directives: { clickoutside },
  data() {
    return {
      visible: false,
      top: 0,
      left: 0,
      color: "",
      hsva: {},
      showFooter: false,
      formats: ["toRgbString", "toHex8String", "toHslString"],
      formatIndex: 0,
      colorGroup: THEME_COLORS
    };
  },
  computed: {
    style() {
      return {
        top: this.top + "px",
        left: this.left + "px",
        zIndex: this.$YONDUI.getZindex()
      };
    },
    colorData() {
      return tinycolor(this.color);
    }
  },
  watch: {
    color: {
      handler(color) {
        let _color = tinycolor(color);
        this.formatIndex = this.formats.findIndex(
          format => format.toLowerCase().indexOf(_color._format) != -1
        );
        this.hsva = _color.toHsv();
        if (!this.showFooter) this.updateColor(color);
      },
      immediate: true
    }
  },
  methods: {
    setVisible(visible = false) {
      this.visible = visible;
    },
    handlePanelChange({ s, v }) {
      this.hsva.s = s;
      this.hsva.v = v;
      this.update(this.hsva);
    },
    handleHubChange({ h }) {
      this.hsva.h = h;
      this.update(this.hsva);
    },
    handleAlphaChange({ a }) {
      this.hsva.a = a;
      this.update(this.hsva);
    },
    update(color) {
      this.color = tinycolor(color)[this.formats[this.formatIndex]]();
    },
    changeFormat() {
      if (this.formatIndex === this.formats.length - 1) {
        this.formatIndex = 0;
      } else {
        this.formatIndex++;
      }
      this.update(this.color);
    }
  }
};
</script>

<style lang="less">
.y-color-picker-dropdown {
  position: absolute;
  width: 200px;
  box-shadow: 0 2px 10px @border-color;
  background-color: #fff;
  z-index: 2020;
  transition: opacity 0.3s, transform 0.3s;
  .y-color-picker-select {
    .flex;
    position: relative;
    padding: 10px;
    .select-picker {
      .center-h;
      .pointer;
    }
    .selected-color {
      position: relative;
      margin: 0 5px;
      width: 33px;
      height: 33px;
      border: 1px solid @border-color;
      border-radius: 50%;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);
      span {
        .full;
        display: block;
        border-radius: 50%;
      }
    }
    .select-bar {
      flex: 1;
    }
  }
  .y-color-picker-input {
    padding: 0 10px 5px;
  }
  .y-color-picker-group {
    border-top: 1px solid @border-color;
    padding: 10px 6px 5px;
    li {
      float: left;
      margin: 4px;
      width: 12px;
      height: 12px;
      border-radius: 2px;
      cursor: pointer;
    }
  }
}
</style>