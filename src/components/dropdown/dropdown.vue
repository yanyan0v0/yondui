<template>
  <div class="y-dropdown">
    <slot name="trigger"></slot>
    <ul class="y-dropdown-content">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: "y-dropdown"
};
</script>

<style lang="less">
.y-dropdown {
  &-content {
    position: absolute;
    border: 1px solid @border-color;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 5px;
    font-size: 14px;
    background-color: #fff;
    z-index: 2020;
  }
}
</style>