<template>
  <div class="y-input-wrapper" :style="{width}">
    <input
      class="y-input"
      :value="value"
      :type="type"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :class="[size ? (classPrefix + size) : '', disabled ? (classPrefix + 'disabled') : '', $slots.prefix ? (classPrefix + 'with-prefix') : '', $slots.suffix ? (classPrefix + 'with-suffix') : '']"
      :style="{height}"
      @keyup.enter="handleEnter"
      @input="handleInput"
      @click="handleClick"
      @focus="handleFocus"
    />
    <span v-if="this.$slots.prefix" class="y-input-prefix" :class="['y-input-prefix-' + size]">
      <slot name="prefix"></slot>
    </span>
    <span v-if="this.$slots.suffix" class="y-input-suffix" :class="['y-input-suffix-' + size]">
      <slot name="suffix"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "y-input",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    type: {
      validator(value) {
        return [
          "text",
          "textarea",
          "password",
          "url",
          "email",
          "date",
          "number",
          "tel"
        ].includes(value);
      },
      type: String,
      default: "text"
    },
    maxlength: {
      type: [Number, String],
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      classPrefix: "y-input-"
    };
  },
  methods: {
    handleEnter(event) {
      this.$emit("on-enter", event.target.value);
    },
    handleInput(event) {
      this.$emit("input", event.target.value);
      this.$emit("on-change", event.target.value);
    },
    handleFocus() {
      if (!this.disabled) this.$emit("on-focus");
    },
    handleClick() {
      if (!this.disabled) this.$emit("on-click");
    }
  }
};
</script>

<style lang="less">
.y-input-wrapper {
  display: inline-block;
  position: relative;
  width: 100%;
  font-size: 14px;
  .y-input {
    border: 1px solid @border-color;
    border-radius: 4px;
    padding: 7px 10px;
    width: 100%;
    height: 30px;
    outline: none;
    background-color: #fff;
    color: @text-color;
    &:hover,
    &:focus {
      border-color: @primary-color;
    }
    // 不能合在一起写，原因不明
    /* Chrome/Opera/Safari */
    &::-webkit-input-placeholder {
      color: @border-color;
    }
    /* Firefox 19+ */
    &::-moz-placeholder {
      color: @border-color;
    }
    /* Firefox 18- */
    &:-moz-placeholder {
      color: @border-color;
    }
    /* IE 10+ */
    &:-ms-input-placeholder {
      color: @border-color;
    }
  }
  .y-input-large {
    padding: 10px 14px;
    height: 35px;
    font-size: 16px;
  }
  .y-input-small {
    padding: 4px 8px;
    height: 25px;
  }
  .y-input-mini {
    padding: 2px 5px;
    height: 20px;
    font-size: 12px;
  }
  .y-input-disabled {
    background-color: @background-color;
    cursor: not-allowed;
    &:hover {
      border-color: @border-color;
    }
  }
  .y-input-with-prefix {
    padding-left: 30px;
  }
  .y-input-with-suffix {
    padding-right: 30px;
  }
  .y-input-with-prefix.y-input-large {
    padding-left: 35px;
  }
  .y-input-with-suffix.y-input-large {
    padding-right: 35px;
  }
  .y-input-with-prefix.y-input-small {
    padding-left: 25px;
  }
  .y-input-with-suffix.y-input-small {
    padding-right: 25px;
  }
  .y-input-with-prefix.y-input-mini {
    padding-left: 20px;
  }
  .y-input-with-suffix.y-input-mini {
    padding-right: 20px;
  }
  .y-input-prefix {
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    .center;
  }
  .y-input-suffix {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 30px;
    .center;
  }
  .y-input-prefix-large,
  .y-input-suffix-large {
    width: 35px;
  }
  .y-input-prefix-small,
  .y-input-suffix-small {
    width: 25px;
  }
  .y-input-prefix-mini,
  .y-input-suffix-mini {
    width: 20px;
  }
}
</style>