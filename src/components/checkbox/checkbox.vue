<template>
  <label
    class="y-checkbox"
    :class="[sizeClass, {'y-checkbox-disabled' : disabledClass}, {'y-checkbox-checked' : checked}]"
    @click="handleClick"
  >
    <!-- 不使用默认input是因为在不同浏览器中样式存在差异 -->
    <y-icon class="y-checkbox-icon" :type="iconType"></y-icon>
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: "y-checkbox",
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
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
    // 父组件是否是checkbox-group
    groupParent() {
      return this.$parent && this.$parent.$options.name == "y-checkbox-group"
        ? this.$parent
        : null;
    },
    sizeClass() {
      let size = this.size || (this.groupParent && this.groupParent.size) || "";
      return size ? "y-checkbox-" + size : "";
    },
    disabledClass() {
      return this.disabled || (this.groupParent && this.groupParent.disabled);
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

<style lang="less">
.y-checkbox {
  display: inline-block;
  margin-right: 8px;
  font-size: 14px;
  cursor: pointer;
  & > &-icon {
    display: inline-block;
    width: 20px;
    font-size: 18px;
    color: @border-color;
    line-height: 1;
    vertical-align: middle;
    transition: color 0.3s;
  }
  &-checked {
    .y-checkbox-icon {
      color: @primary-color;
    }
  }
  &-disabled {
    color: @disabled-color;
    cursor: not-allowed;
    .y-checkbox-icon {
      color: @disabled-color;
    }
  }
}
.y-checkbox-large {
  font-size: 16px;
  & > .y-checkbox-icon {
    width: 22px;
    font-size: 20px;
  }
}
.y-checkbox-small {
  font-size: 12px;
  & > .y-checkbox-icon {
    width: 18px;
    font-size: 16px;
  }
}
.y-checkbox-mini {
  font-size: 12px;
  & > .y-checkbox-icon {
    width: 16px;
    font-size: 14px;
  }
}
</style>