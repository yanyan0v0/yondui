<template>
  <div class="y-form-item" :class="{'y-form-item-inline': inline}">
    <label
      class="y-form-item-label"
      :class="[prefixClass + 'label-' + labelPosition]"
      :style="{width: marginLeft}"
    >
      <span v-if="required && !formRoot.hideRequiredMark">*</span>
      {{label}}{{labelSymbol}}
    </label>
    <div
      class="y-form-item-content"
      :class="{'y-form-item-content-error': ifShowError && error}"
      :style="{marginLeft: labelPosition!='top'&&!inline ? marginLeft : ''}"
    >
      <slot></slot>
      <p v-show="ifShowError" class="y-form-item-error-message">{{error}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "y-form-item",
  inject: ["formRoot"],
  props: {
    label: String,
    labelWidth: String,
    prop: String,
    required: Boolean,
    hideLabelSymbol: Boolean,
    rules: [Object, Array],
    error: String,
    validateStatus: Boolean,
    showError: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      prefixClass: "y-form-item-"
    };
  },
  computed: {
    ifShowError() {
      return this.showError && this.formRoot.showError;
    },
    marginLeft() {
      return this.labelWidth || this.formRoot.labelWidth;
    },
    labelPosition() {
      return this.formRoot.labelPosition;
    },
    inline() {
      return this.formRoot.inline;
    },
    labelSymbol() {
      return this.hideLabelSymbol ? "" : this.formRoot.labelSymbol;
    }
  }
};
</script>