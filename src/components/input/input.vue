<template>
  <div
    class="y-input-wrapper"
    :style="{width}"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <input
      ref="input"
      class="y-input"
      :type="type"
      :disabled="formDisabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :class="[computeSize(classPrefix), formDisabled ? (classPrefix + 'disabled') : '', $slots.prefix ? (classPrefix + 'with-prefix') : '', $slots.suffix ? (classPrefix + 'with-suffix') : '']"
      :style="{height}"
      @keyup.enter="handleEnter"
      @input="handleInput"
      @click="handleClick"
      @focus="handleFocus"
      @blur="handleBlur"
      @keyup="handleKeyup"
      @keypress="handleKeypress"
      @keydown="handleKeydown"
    />
    <span
      v-if="$slots.prefix"
      class="y-input-prefix"
      :class="['y-input-prefix-' + size]"
      @click="handlePrefixClick"
    >
      <slot name="prefix"></slot>
    </span>
    <span
      v-if="$slots.suffix"
      v-show="!showClearIcon"
      class="y-input-suffix"
      :class="['y-input-suffix-' + size]"
      @click="handleSuffixClick"
    >
      <slot name="suffix"></slot>
    </span>
    <span
      v-show="showClearIcon"
      class="y-input-suffix y-input-suffix-clear"
      :class="['y-input-suffix-' + size]"
      @click="handleClear"
    >
      <y-icon size="14" color="#c0c4cc" type="shanchu"></y-icon>
    </span>
  </div>
</template>

<script>
import componentMixins from "@/mixins/component";
import formMixins from "@/mixins/form";
import { throttle } from "@/util/tools";
export default {
  name: "y-input",
  mixins: [componentMixins, formMixins],
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
  computed: {
    nativeInputValue() {
      return this.value === null || this.value === undefined
        ? ""
        : String(this.value);
    },
    showClearIcon() {
      return this.clearable && !this.formDisabled && this.showClear;
    }
  },
  methods: {
    setNativeInputValue() {
      const input = this.$refs.input;
      if (!input) return;
      if (input.value === this.nativeInputValue) return;
      input.value = this.nativeInputValue;
    },
    handleEnter(event) {
      this.$emit("on-enter", event.target.value);
    },
    handleInput(event) {
      let value = event.target.value;
      if (value === this.nativeInputValue) return;

      this.$emit("input", value);
      // this.$emit("on-change", value);
      this.$nextTick(this.setNativeInputValue);

      if (this.clearable) {
        if (value) this.showClear = true;
        else this.showClear = false;
      }
    },
    handleFocus() {
      if (!this.formDisabled) this.$emit("on-focus");
    },
    handleBlur() {
      this.$emit("on-blur");
    },
    handleClick(event) {
      if (!this.formDisabled) this.$emit("on-click", event);
    },
    handlePrefixClick(event) {
      if (!this.formDisabled) this.$emit("on-prefix-click", event);
    },
    handleSuffixClick(event) {
      if (!this.formDisabled) this.$emit("on-suffix-click", event);
    },
    handleClear() {
      this.$emit("input", "");
      this.$emit("on-change", "");
      this.$emit("on-clear");
    },
    handleKeydown(event) {
      if (!this.formDisabled) this.$emit("on-keydown", event);
    },
    handleKeypress(event) {
      if (!this.formDisabled) this.$emit("on-keypress", event);
    },
    handleKeyup(event) {
      if (!this.formDisabled) this.$emit("on-keyup", event);
    },
    handleMouseEnter() {
      if (this.value) this.showClear = true;
    },
    handleMouseLeave() {
      this.showClear = false;
    }
  },
  watch: {
    nativeInputValue() {
      this.setNativeInputValue();
    }
  }
};
</script>
