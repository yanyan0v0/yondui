<template>
  <div class="y-color-picker" :style="{ width, height }">
    <div class="y-color-picker-color" @click="changeVisible">
      <span :style="{ 'background-color': value }">
        <y-icon type="sanjiao-xia"></y-icon>
      </span>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import ColorPickerDropdown from "./color-picker-dropdown.vue";
import { getScrollParent } from "@/util/tools";
import { THEME_COLORS } from "@/util/config";
export default {
  name: "y-color-picker",
  props: {
    value: {
      type: String,
      default: THEME_COLORS.primaryColor,
    },
    width: {
      type: String,
      default: "32px",
    },
    height: {
      type: String,
      default: "32px",
    },
    showFooter: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      visible: false,
      instance: null,
    };
  },
  methods: {
    changeVisible() {
      this.instance.visible = !this.instance.visible;
    },
  },
  mounted() {
    let pickerRect = this.$el.getBoundingClientRect().toJSON();
    const DropdownConstructor = Vue.extend(ColorPickerDropdown);

    this.instance = new DropdownConstructor({
      data: {
        pickerRect,
        color: this.value,
        showFooter: this.showFooter,
        parentEl: this.$el, // 指令clickoutside所需参数
      },
      methods: {
        updateColor: (color) => {
          this.$emit("input", color);
          this.$emit("on-change", color);
        },
        confirm: (color) => {
          this.$emit("input", color);
          this.$emit("on-confirm", color);
          this.changeVisible();
        },
      },
    }).$mount();

    document.body.appendChild(this.instance.$el);

    // 监听滚动
    let scrollParent = getScrollParent(this.$el);
    scrollParent.addEventListener("scroll", (e) => {
      if (this.instance.visible)
        this.instance.pickerRect = this.$el.getBoundingClientRect().toJSON();
    });
  },
  beforeDestroy() {
    if (this.instance) document.body.removeChild(this.instance.$el);
  },
};
</script>