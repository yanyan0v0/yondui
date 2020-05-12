<template>
  <i :class="`iconfont y-icon-${type}`"></i>
</template>

<script>
export default {
  name: "y-icon",
  props: {
    type: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="less">
.iconfont {
  color: @subtext-color;
}
</style>