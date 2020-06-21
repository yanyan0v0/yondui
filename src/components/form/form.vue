<template>
  <form class="y-form" :class="{'y-form-inline': inline}" :autocomplete="autocomplete">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "y-form",
  props: {
    value: Object,
    rules: Object,
    inline: Boolean,
    labelWidth: String,
    labelPosition: {
      type: String,
      default: "right"
    },
    disabled: Boolean,
    showError: Boolean,
    hideRequiredMark: Boolean,
    labelColon: Boolean,
    autocomplete: {
      type: String,
      default: "off"
    }
  },
  provide() {
    return {
      formRoot: this
    };
  }
};
</script>