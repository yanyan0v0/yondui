<template>
  <div class="y-dropdown">
    <div class="y-dropdown-trigger" ref="trigger" @mouseenter="handleMouseEnter">
      <slot></slot>
    </div>
    <slot name="menu"></slot>
  </div>
</template>

<script>
export default {
  name: "y-dropdown",
  provide() {
    return {
      dropdownRoot: this
    };
  },
  props: {
    clickNoHide: Boolean
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    handleMouseEnter() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    },
    handleItemClick(value) {
      this.$emit("on-click", value);
    }
  }
};
</script>

<style lang="less">
.y-dropdown {
  position: relative;
  display: inline-block;
  &-trigger {
    display: inline-block;
    cursor: pointer;
  }
}
</style>