<template>
  <li class="y-dropdown-item" :class="{'y-dropdown-item-disabled': disabled}" @click="handleClick">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "y-dropdown-item",
  inject: ["dropdownRoot"],
  props: {
    value: [String, Number],
    label: String,
    disabled: Boolean
  },
  methods: {
    handleClick() {
      this.dropdownRoot.handleItemClick(this.value || this.$el.innerText);
      // 如果存在嵌套且不可见
      if (
        this.$parent &&
        this.$parent.$options.name == "y-dropdown" &&
        !this.dropdownRoot.visible
      ) {
        return false;
      }
      if (!this.$parent.clickNoHide) {
        console.log("item", this.dropdownRoot.$refs.trigger.innerText);
        this.dropdownRoot.hide();
      }
    }
  }
};
</script>
