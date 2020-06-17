<template>
  <div
    class="y-input-wrapper"
    :style="{width}"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <input
      class="y-input"
      :value="value"
      :type="type"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :class="[computeSize(classPrefix), disabled ? (classPrefix + 'disabled') : '', $slots.prefix ? (classPrefix + 'with-prefix') : '', $slots.suffix ? (classPrefix + 'with-suffix') : '']"
      :style="{height}"
      @keyup.enter="handleEnter"
      @input="handleInput"
      @click="handleClick"
      @focus="handleFocus"
    />
    <span v-if="$slots.prefix" class="y-input-prefix" :class="['y-input-prefix-' + size]">
      <slot name="prefix"></slot>
    </span>
    <span
      v-if="$slots.suffix"
      v-show="!showClear"
      class="y-input-suffix"
      :class="['y-input-suffix-' + size]"
    >
      <slot name="suffix"></slot>
    </span>
    <span
      v-if="clearable && !disabled"
      v-show="showClear"
      class="y-input-suffix y-input-suffix-clear"
      :class="['y-input-suffix-' + size]"
    >
      <y-icon size="14" color="#c0c4cc" type="shanchu" @click="handleClear"></y-icon>
    </span>
  </div>
</template>

<script>
import componentMixins from "@/util/componentMixins";
export default {
  name: "y-input",
  mixins: [componentMixins],
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
    placeholder: String,
    size: String,
    width: String,
    height: String,
    disabled: Boolean,
    readonly: Boolean,
    clearable: Boolean
  },
  data() {
    return {
      classPrefix: "y-input-",
      showClear: false
    };
  },
  methods: {
    handleEnter(event) {
      this.$emit("on-enter", event.target.value);
    },
    handleInput(event) {
      let value = event.target.value;
      this.$emit("input", value);
      this.$emit("on-change", value);

      if (value) this.showClear = true;
      else this.showClear = false;
    },
    handleFocus() {
      if (!this.disabled) this.$emit("on-focus");
    },
    handleClick() {
      if (!this.disabled) this.$emit("on-click");
    },
    handleClear() {
      this.$emit("input", "");
      this.$emit("on-change", "");
      this.$emit("on-clear");
    },
    handleMouseEnter() {
      if (this.value) this.showClear = true;
    },
    handleMouseLeave() {
      this.showClear = false;
    }
  }
};
</script>
