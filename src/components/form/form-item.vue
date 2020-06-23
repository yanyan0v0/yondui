<template>
  <div class="y-form-item" :class="{'y-form-item-inline': inline}">
    <label
      class="y-form-item-label"
      :class="[prefixClass + 'label-' + labelPosition]"
      :style="{width: marginLeft}"
    >
      <span v-if="ifRequired && !formRoot.hideRequiredMark">*</span>
      {{label}}{{labelSymbol}}
    </label>
    <div
      class="y-form-item-content"
      :class="{'y-form-item-content-error': ifShowError && errorMessage}"
      :style="{marginLeft: labelPosition!='top'&&!inline ? marginLeft : ''}"
    >
      <slot></slot>
      <p v-show="ifShowError" class="y-form-item-error-message">{{errorMessage}}</p>
    </div>
  </div>
</template>

<script>
import AsyncValidator from "async-validator";
export default {
  name: "y-form-item",
  provide() {
    return {
      formItemRoot: this
    };
  },
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
      prefixClass: "y-form-item-",
      // 获取rules里的required属性
      ruleRequired: false,
      // 获取rules里的错误信息
      ruleMessage: "",
      // 校验器
      validator: null
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
    },
    ifRequired() {
      return this.required || this.ruleRequired;
    },
    errorMessage() {
      return this.error !== null && this.error !== undefined
        ? this.error
        : this.ruleMessage;
    },
    // 获取校验值
    model() {
      return this.formRoot.model;
    },
    // 获取rules
    formRules() {
      return this.prop && this.formRoot.rules
        ? this.formRoot.rules[this.prop]
        : null;
    }
  },
  methods: {
    handleRules() {
      let rules = this.rules || this.formRules;
      if (rules) {
        if (Array.isArray(rules)) {
          rules.every(rule => {
            this.ruleRequired = rule.required;
          });
        } else {
          this.ruleRequired = rules.required;
        }
      }
    },
    validate(trigger, callback) {
      let rules = this.rules || this.formRules;
      if (rules) {
        // 校验trigger来过滤rules，即只触发对应trigger的rules
        // 为空代表不过滤，点击表单提交按钮校验时需要
        if (trigger) {
          if (Array.isArray(rules)) {
            if (trigger === "blur") {
              rules = rules.filter(
                rule => !rule.trigger || rule.trigger == "blur"
              );
            } else {
              rules = rules.filter(rule => rule.trigger == trigger);
            }
          }
          if (rules.trigger) {
            if (rules.trigger !== trigger) return;
          } else {
            if (trigger !== "blur") return;
          }
        }
        this.validator = new AsyncValidator({ [this.prop]: rules });
        if (this.validator && this.model) {
          this.validator.validate(this.model, errors => {
            if (errors && errors.length) {
              this.ruleMessage = errors[errors.length - 1].message;
              return callback && callback(false);
            } else {
              this.ruleMessage = "";
              return callback && callback(true);
            }
          });
        }
      }
    }
  },
  watch: {
    rules: {
      handler() {
        this.handleRules();
        if (this.prop) this.formRoot.updateFields(this.prop, this);
      },
      immediate: true
    }
  },
  beforeDestroy() {
    if (this.prop) this.formRoot.updateFields(this.prop, null);
  }
};
</script>