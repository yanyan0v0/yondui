<template>
  <div class="y-divider" :class="[classPrefix + direction, dashed ? classPrefix + 'dashed' : '']">
    <div class="y-divider-inner" :class="classPrefix + position">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "y-divider",
  props: {
    // horizontal 水平 vertical 垂直
    direction: {
      type: String,
      default: "horizontal"
    },
    // 是否虚线
    dashed: {
      type: Boolean,
      default: false
    },
    // 文本位置 left center right
    position: {
      type: String,
      default: "center"
    },
    margin: {
      type: String,
      default: "12px 0"
    }
  },
  data() {
    return {
      classPrefix: "y-divider-"
    };
  }
};
</script>

<style lang="less">
.y-divider {
  position: relative;
  background: @border-color;
  &.y-divider-horizontal {
    display: block;
    height: 1px;
    width: 100%;
    margin: 20px 0;
  }
  &.y-divider-vertical {
    margin: 0 8px;
    display: inline-block;
    height: 0.9em;
    width: 1px;
    vertical-align: middle;
    position: relative;
  }
  &.y-divider-dashed {
    background: 0 0;
    border-top: 1px dashed #e8eaec;
  }
  &-inner {
    position: absolute;
    z-index: 1;
    top: 50%;
    padding: 0 10px;
    font-size: 14px;
    background-color: #fff;
  }
  &-inner.y-divider-left {
    left: 15%;
    transform: translate(-50%, -50%);
  }
  &-inner.y-divider-center {
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &-inner.y-divider-right {
    left: 85%;
    transform: translate(-50%, -50%);
  }
}
</style>