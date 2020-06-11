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
