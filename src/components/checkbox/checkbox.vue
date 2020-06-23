<template>
  <label
    class="y-checkbox"
    :class="[sizeClass, {'y-checkbox-disabled' : ifDisabled}, {'y-checkbox-checked' : checked}]"
    @click="handleClick"
  >
    <!-- 不使用默认input是因为在不同浏览器中样式存在差异 -->
    <y-icon class="y-checkbox-icon" :type="iconType"></y-icon>
    <slot>{{text}}</slot>
  </label>
</template>

<script>
import componentMixins from "@/mixins/component";
import formMixins from "@/mixins/form";
export default {
  name: "y-checkbox",
  mixins: [componentMixins, formMixins],
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    label: String,
    size: String,
    disabled: Boolean,
    unselectIcon: {
      type: String,
      default: "checkbox-unselect"
    },
    selectedIcon: {
      type: String,
      default: "checkbox-selected"
    }
  },
  computed: {
    text() {
      return this.label || this.value;
    },
    // 父组件是否是checkbox-group
    groupParent() {
      return this.$parent && this.$parent.$options.name == "y-checkbox-group"
        ? this.$parent
        : null;
    },
    sizeClass() {
      return this.computeSize(
        "y-checkbox-",
        this.groupParent ? this.groupParent.size : ""
      );
    },
    ifDisabled() {
      return (
        this.disabled ||
        (this.groupParent && this.groupParent.disabled) ||
        this.formDisabled
      );
    },
    checked() {
      if (this.groupParent) {
        return this.groupParent.value.find(item => item === this.value);
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
      if (this.ifDisabled) {
        return;
      }
      if (this.groupParent) {
        this.groupParent.change(!this.checked, this.value);
      } else {
        this.$emit("input", !this.value);
        this.$emit("on-change", !this.value);
      }
      this.emitTriggerToForm("change");
    }
  }
};
</script>