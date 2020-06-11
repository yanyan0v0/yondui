<template>
  <div class="y-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "y-checkbox-group",
  props: {
    value: {
      type: Array,
      default: () => []
    },
    size: String,
    disabled: Boolean
  },
  methods: {
    change(checked, value) {
      if (checked) {
        this.value.push(value);
        this.$emit("input", this.value);
      } else {
        let index = this.value.findIndex(item => item === value);
        if (index != -1) {
          this.value.splice(index, 1);
          this.$emit("input", this.value);
        }
      }
      this.$emit("on-change", this.value);
    }
  }
};
</script>