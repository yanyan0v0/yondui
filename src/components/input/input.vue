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
      :class="[computeSize, disabled ? (classPrefix + 'disabled') : '', $slots.prefix ? (classPrefix + 'with-prefix') : '', $slots.suffix ? (classPrefix + 'with-suffix') : '']"
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
  computed: {
    computeSize() {
      return this.size
        ? this.classPrefix + this.size
        : this.$YONDUI.size
        ? this.classPrefix + this.$YONDUI.size
        : "";
    }
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
