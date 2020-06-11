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
    disabled: Boolean
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
      return this.checked ? "radio-selected" : "radio-unselect";
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
.y-radio {
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
    .y-radio-icon {
      color: @primary-color;
    }
  }
  &-disabled {
    color: @disabled-color;
    cursor: not-allowed;
    .y-radio-icon {
      color: @disabled-color;
    }
  }
}
.y-radio-large {
  font-size: 16px;
  & > .y-radio-icon {
    width: 22px;
    font-size: 20px;
  }
}
.y-radio-small {
  font-size: 12px;
  & > .y-radio-icon {
    width: 18px;
    font-size: 16px;
  }
}
.y-radio-mini {
  font-size: 12px;
  & > .y-radio-icon {
    width: 16px;
    font-size: 14px;
  }
}
</style>