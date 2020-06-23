<template>
  <form class="y-form" :class="{'y-form-inline': inline}" :autocomplete="autocomplete">
    <slot></slot>
  </form>
</template>

<script>
import { objToArray } from "@/util/tools";
export default {
  name: "y-form",
  provide() {
    return {
      formRoot: this
    };
  },
  props: {
    model: Object,
    rules: Object,
    inline: Boolean,
    labelWidth: String,
    labelPosition: {
      type: String,
      default: "right"
    },
    disabled: Boolean,
    showError: {
      type: Boolean,
      default: true
    },
    hideRequiredMark: Boolean,
    labelSymbol: String,
    autocomplete: {
      type: String,
      default: "off"
    }
  },
  data() {
    return {
      // 需要校验的表单项
      fields: {}
    };
  },
  methods: {
    updateFields(prop, formItem) {
      this.fields[prop] = formItem;
    },
    validate(callback) {
      let fields = objToArray(this.fields).filter(item => Boolean(item));
      return new Promise(resolve => {
        let valid = true;
        let count = 0;
        fields.forEach(field => {
          // 调用FormItem的validate方法
          field.validate("", errors => {
            if (errors) {
              valid = false;
            }
            if (++count === fields.length) {
              // all finish
              resolve(valid);
              if (typeof callback === "function") {
                callback(valid);
              }
            }
          });
        });
      });
    }
  }
};
</script>