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
      if (!this.dropdownRoot.clickNoHide) {
        this.dropdownRoot.hide();
      }
    }
  }
};
</script>

<style lang="less">
.y-dropdown-item {
  position: relative;
  padding: 5px 10px;
  cursor: pointer;
  &:not(.y-dropdown-item-disabled):hover {
    .y-dropdown-item-active;
  }
}
.y-dropdown-item-active {
  color: @primary-color;
  background-color: ~"@{light-primary-color}40";
}
.y-dropdown-item-disabled {
  color: @disabled-color;
  cursor: not-allowed;
}
</style>