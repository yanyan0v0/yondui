<template>
  <div class="y-loading">
    <y-svg-circle :style="style" :color="color" />
    <y-svg-circles :style="style" :color="color" />
    <y-svg-audio :style="style" :color="color" />
    <y-svg-ball-triangle :style="style" :color="color" />
    <y-svg-bars :style="style" :color="color" />
    <y-svg-grid :style="style" :color="color" />
    <y-svg-hearts :style="style" :color="color" />
    <y-svg-oval :style="style" :color="color" />
    <y-svg-oval :style="style" :color="color" />
    <y-svg-puff :style="style" :color="color" />
    <y-svg-rings :style="style" :color="color" />
    <y-svg-spinning-circles :style="style" :color="color" />
    <y-svg-tail-spin :style="style" :color="color" />
    <y-svg-three-dots :style="style" :color="color" />
    <slot>Loading...</slot>
  </div>
</template>

<script>
import { THEME_COLORS } from "@/util/config";
export default {
  name: "y-loading",
  components: {
    "y-svg-circle": () => import("./svg/circle.vue"),
    "y-svg-circles": () => import("./svg/circles.vue"),
    "y-svg-audio": () => import("./svg/audio.vue"),
    "y-svg-ball-triangle": () => import("./svg/ball-triangle.vue"),
    "y-svg-bars": () => import("./svg/bars.vue"),
    "y-svg-grid": () => import("./svg/grid.vue"),
    "y-svg-hearts": () => import("./svg/hearts.vue"),
    "y-svg-oval": () => import("./svg/oval.vue"),
    "y-svg-puff": () => import("./svg/puff.vue"),
    "y-svg-rings": () => import("./svg/rings.vue"),
    "y-svg-spinning-circles": () => import("./svg/spinning-circles.vue"),
    "y-svg-tail-spin": () => import("./svg/tail-spin.vue"),
    "y-svg-three-dots": () => import("./svg/three-dots.vue")
  },
  props: {
    size: {
      type: Number,
      default: 25
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
        width: this.size + "px",
        height: this.size + "px"
      };
    }
  }
};
</script>

<style lang="less" scoped>
.y-loading {
  .full;
  .center;
  .flex-wrap(column);
}
</style>