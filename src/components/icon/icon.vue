<template>
  <i :class="`iconfont y-icon-${type}`" :style="{'font-size': size + 'px', 'color': color}"></i>
</template>

<script>
export default {
  name: "y-icon",
  props: {
    type: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="less">
.iconfont {
  color: @subtext-color;
}
</style>