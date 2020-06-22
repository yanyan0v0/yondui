<template>
  <div class="y-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "y-radio-group",
  props: {
    value: [String, Number],
    size: String,
    disabled: Boolean
  },
  methods: {
    change(checked, value) {
      if (checked) {
        this.$emit("input", value);
      } else {
        this.$emit("input", "");
      }
      this.$emit("on-change", value);
    }
  }
};
</script>