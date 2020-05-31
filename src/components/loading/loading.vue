<template>
  <div class="y-loading">
    <component :is="'y-svg-' + type" :style="style" :color="color"></component>
    <slot>Loading...</slot>
  </div>
</template>

<script>
import { THEME_COLORS } from "@/util/config";
import { getComponents } from "./svg.js";
export default {
  name: "y-loading",
  components: getComponents("./svg/"),
  props: {
    type: {
      type: String,
      default: "circle"
    },
    size: {
      type: String,
      default: "25px"
    },
    color: {
      type: String,
      default: THEME_COLORS.lightPrimary
    }
  },
  data() {
    return {};
  },
  computed: {
    style() {
      return {
        width: this.size,
        height: this.size
      };
    }
  }
};
</script>

<style lang="less" scoped>
.y-loading {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ffffffe6;
  .full;
  .center;
  .flex-wrap(column);
}
</style>