<template>
  <label
    class="y-radio"
    :class="[sizeClass, {'y-radio-disabled' : disabledClass}, {'y-radio-checked' : checked}]"
    @click="handleClick"
  >
    <!-- 不使用默认input是因为在不同浏览器中样式存在差异 -->
    <y-icon class="y-radio-icon" :type="iconType"></y-icon>
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: "y-radio",
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    size: String,
    disabled: Boolean,
    unselectIcon: {
      type: String,
      default: "radio-unselect"
    },
    selectedIcon: {
      type: String,
      default: "radio-selected"
    }
  },
  computed: {
    // 父组件是否是radio-group
    groupParent() {
      return this.$parent && this.$parent.$options.name == "y-radio-group"
        ? this.$parent
        : null;
    },
    sizeClass() {
      let size = this.size || (this.groupParent && this.groupParent.size) || "";
      return size ? "y-radio-" + size : "";
    },
    disabledClass() {
      return this.disabled || (this.groupParent && this.groupParent.disabled);
    },
    checked() {
      if (this.groupParent) {
        return this.groupParent.value === this.value;
      } else {
        return this.value;
      }
    },
    iconType() {
      return this.checked ? this.selectedIcon : this.unselectIcon;
    }
  },
  methods: {
    handleClick() {
      if (this.disabledClass) {
        return;
      }
      if (this.groupParent) {
        this.groupParent.change(
          !this.checked,
          this.value || this.$el.innerText
        );
      } else {
        this.$emit("input", !this.value);
        this.$emit("on-change", !this.value);
      }
    }
  }
};
</script>
