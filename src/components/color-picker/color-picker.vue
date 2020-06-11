<template>
  <div class="y-color-picker" :style="{width, height}">
    <div class="y-color-picker-color" @click="changeVisible">
      <span :style="{'background-color': value}">
        <y-icon type="sanjiao-xia"></y-icon>
      </span>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import ColorPickerDropdown from "./color-picker-dropdown.vue";
import { THEME_COLORS } from "@/util/config";
export default {
  name: "y-color-picker",
  props: {
    value: {
      type: String,
      default: THEME_COLORS.primaryColor
    },
    width: {
      type: String,
      default: "32px"
    },
    height: {
      type: String,
      default: "32px"
    },
    showFooter: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: false,
      instance: null
    };
  },
  methods: {
    changeVisible() {
      this.instance.visible = !this.instance.visible;
    }
  },
  mounted() {
    let pickerRect = this.$el.getBoundingClientRect();
    const DropdownConstructor = Vue.extend(ColorPickerDropdown);

    this.instance = new DropdownConstructor({
      data: {
        top: pickerRect.bottom,
        left: pickerRect.left,
        color: this.value,
        showFooter: this.showFooter,
        parentEl: this.$el // 指令clickoutside所需参数
      },
      methods: {
        updateColor: color => {
          this.$emit("input", color);
          this.$emit("on-change", color);
        },
        confirm: color => {
          this.$emit("input", color);
          this.$emit("on-confirm", color);
          this.changeVisible();
        }
      }
    });

    this.instance.$mount();
    document.body.appendChild(this.instance.$el);
  },
  beforeDestroy() {
    if (this.instance) document.body.removeChild(this.instance.$el);
  }
};
</script>