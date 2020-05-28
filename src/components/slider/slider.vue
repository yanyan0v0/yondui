<template>
  <div class="y-slider">
    <div ref="bar" class="y-slider-bar" @click="handleSliderClick">
      <div
        ref="barActive"
        class="y-slider-bar-active"
        :style="{width: left + '%','background-color': color}"
      ></div>

      <span
        ref="block"
        class="y-slider-block"
        :style="{left: left + '%', height: barRect.height + blockWidth + 'px', width: barRect.height + blockWidth + 'px','border-color': color}"
        @mousedown="handleMouseDown"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <y-tooltip ref="tooltip" v-model="tipVisible" trigger="custom">
          <slot>{{value}}</slot>
        </y-tooltip>
      </span>
    </div>
    <div v-show="showLabel" class="y-slider-label">
      <span class="y-slider-label-min">{{min}}</span>
      <span class="y-slider-label-max">{{max}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "y-slider",
  props: {
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    showLabel: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      // 滑块的left属性 以百分比展示
      left: 0,
      // 滑块宽度
      blockWidth: 5,
      barRect: {},
      tipVisible: false,
      startDrag: false
    };
  },
  computed: {
    handleLeft() {
      return parseInt(this.min + (this.left * (this.max - this.min)) / 100);
    }
  },
  methods: {
    initLeft(value) {
      let left = parseInt((100 * (value - this.min)) / (this.max - this.min));
      if (left >= 100) {
        this.$emit("input", this.max);
        return 100;
      } else if (left <= 0) {
        this.$emit("input", this.min);
        return 0;
      } else {
        return left;
      }
    },
    handleSliderClick(event) {
      if (event.x - this.barRect.left >= this.barRect.width) {
        this.left = 100;
      } else if (event.x - this.barRect.left <= 0) {
        this.left = 0;
      } else {
        this.left = parseInt(
          (100 * (event.x - this.barRect.left)) / this.barRect.width
        );
      }
      this.$emit("input", this.handleLeft);
      this.$emit("on-input", this.handleLeft);
    },
    handleMouseDown() {
      this.startDrag = true;
      document.addEventListener("mousemove", this.handleMouseMove);
      document.addEventListener("mouseup", this.handleMouseUp);
      // 禁止选择
      document.body.style["userSelect"] = "none";
      // 取消动画
      this.$refs["barActive"].style.transition = "none";
      this.$refs["block"].style.transition = "none";
    },
    handleMouseMove(event) {
      if (this.startDrag) {
        this.handleSliderClick(event);
        this.$refs["tooltip"].init();
      }
    },
    handleMouseUp() {
      this.startDrag = false;
      this.$emit("on-change", this.handleLeft);
      document.removeEventListener("mousemove", this.handleMouseMove);
      document.removeEventListener("mouseup", this.handleMouseUp);
      document.body.style["userSelect"] = "";
      this.$refs["barActive"].style.transition = "";
      this.$refs["block"].style.transition = "";
      // 隐藏tooltip
      this.handleMouseLeave();
    },
    handleMouseEnter() {
      this.blockWidth = 8;
      this.tipVisible = true;
    },
    handleMouseLeave() {
      if (!this.startDrag) {
        this.blockWidth = 5;
        this.tipVisible = false;
      }
    }
  },
  watch: {
    value: {
      handler(_value) {
        if (!this.startDrag) this.left = this.initLeft(_value);
      },
      immediate: true
    }
  },
  mounted() {
    this.barRect = this.$refs["bar"].getBoundingClientRect();
  }
};
</script>

<style lang="less">
.y-slider {
  margin: 20px 0;
  &-bar {
    position: relative;
    width: 100%;
    height: 8px;
    border-radius: 20px;
    background-color: @bar-background-color;
    &-active {
      border-radius: 20px;
      height: 100%;
      background-color: @primary-color;
      transition: width 0.3s;
    }
  }
  &-block {
    display: block;
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid @primary-color;
    border-radius: 50%;
    background-color: #fff;
    transition: all 0.3s;
  }
  &-label {
    .flex;
    justify-content: space-between;
    font-size: 12px;
  }
}
</style>