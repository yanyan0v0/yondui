<template>
  <div class="y-input-wrapper" :style="{width}">
    <input
      class="y-input"
      :value="value"
      :type="type"
      :disabled="disabled"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :class="[size ? (classPrefix + size) : '', disabled ? (classPrefix + 'disabled') : '', $slots.prefix ? (classPrefix + 'with-prefix') : '', $slots.suffix ? (classPrefix + 'with-suffix') : '']"
      @keyup.enter="handleEnter"
      @input="handleInput"
    />
    <span class="y-input-prefix">
      <slot name="prefix"></slot>
    </span>
    <span class="y-input-suffix">
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
    disabled: {
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
    }
  }
};
</script>

<style lang="less">
.y-input-wrapper {
  display: inline-block;
  position: relative;
  width: 100%;
  .y-input {
    border: 1px solid @border-color;
    border-radius: 4px;
    padding: 8px 10px;
    width: 100%;
    outline: none;
    background-color: #fff;
    font-size: 14px;
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
    font-size: 16px;
  }
  .y-input-small {
    padding: 5px 8px;
  }
  .y-input-mini {
    padding: 2px 5px;
    font-size: 12px;
  }
  .y-input-disabled {
    background-color: @background-color;
    cursor: not-allowed;
    pointer-events: none;
  }
  .y-input-with-prefix {
    padding-left: 34px;
  }
  .y-input-with-suffix {
    padding-right: 34px;
  }
  .y-input-prefix {
    position: absolute;
    left: 0;
    height: 100%;
    width: 34px;
    text-align: center;
    line-height: 34px;
  }
  .y-input-suffix {
    position: absolute;
    right: 0;
    height: 100%;
    width: 34px;
    text-align: center;
    line-height: 34px;
  }
}
</style>