<template>
  <transition name="dropdown-fade">
    <div
      v-show="visible"
      v-clickoutside="hide"
      class="y-color-picker-dropdown"
      :style="style"
    >
      <y-panel :color="colorData" @on-change="handlePanelChange"></y-panel>
      <div class="y-color-picker-select">
        <!-- <span class="select-picker">
        <y-icon type="huabi"></y-icon>
        </span>-->
        <div class="selected-color">
          <span
            :style="{
              background: colorData.toHslString ? colorData.toHslString() : '',
            }"
          ></span>
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
          :style="{ 'background-color': group }"
          @click="update(group)"
        ></li>
      </ul>
      <div v-show="showFooter" class="y-color-picker-footer">
        <y-button size="small" @click="confirm(color)">确定</y-button>
      </div>
    </div>
  </transition>
</template>

<script>
import tinycolor from "tinycolor2";
import clickoutside from "@/directive/clickoutside";
import { THEME_COLORS } from "@/util/config";
import componentMixins from "@/mixins/component";
import YPanel from "./components/panel.vue";
import YHue from "./components/hue.vue";
import YAlpha from "./components/alpha.vue";
export default {
  name: "y-color-picker-dropdown",
  mixins: [componentMixins],
  components: {
    YPanel,
    YHue,
    YAlpha,
  },
  directives: { clickoutside },
  data() {
    return {
      visible: false,
      pickerRect: {
        bottom: 0,
        left: 0,
      },
      color: "",
      hsva: {},
      showFooter: false,
      formats: ["toRgbString", "toHex8String", "toHslString"],
      formatIndex: 0,
      colorGroup: THEME_COLORS,
    };
  },
  computed: {
    style() {
      return {
        top: this.pickerRect.bottom + "px",
        left: this.pickerRect.left + "px",
        zIndex: this.$YONDUI.getZindex(),
      };
    },
    colorData() {
      return tinycolor(this.color);
    },
  },
  watch: {
    color: {
      handler(color) {
        let _color = tinycolor(color);
        this.formatIndex = this.formats.findIndex(
          (format) => format.toLowerCase().indexOf(_color._format) != -1
        );
        // 如果找不到该颜色， 直接转化成rgb
        if (this.formatIndex == -1) {
          this.formatIndex = 0;
        }
        this.hsva = _color.toHsv();
        if (!this.showFooter) this.updateColor(color);
      },
      immediate: true,
    },
  },
  methods: {
    hide() {
      this.visible = false;
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
    },
  },
};
</script>
