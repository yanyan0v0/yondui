export default {
  inject: {
    formRoot: { default: null },
    formItemRoot: { default: null },
  },
  computed: {
    formDisabled() {
      return this.disabled || (this.formRoot && this.formRoot.disabled)
    }
  },
  methods: {
    emitBlurToForm() {
      return this.formItemRoot && this.formItemRoot.handleBlur()
    }
  },
}