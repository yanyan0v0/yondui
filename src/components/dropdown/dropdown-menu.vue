<template>
  <transition name="dropdown-fade">
    <ul
      v-show="dropdownVisible"
      v-clickoutside="handleMouseLeave"
      class="y-dropdown-menu"
      :style="style"
      @mouseleave="handleMouseLeave"
    >
      <slot></slot>
    </ul>
  </transition>
</template>

<script>
import clickoutside from "@/directive/clickoutside";
export default {
  name: "y-dropdown-menu",
  directives: { clickoutside },
  inject: ["dropdownRoot"],
  props: {
    visible: Boolean
  },
  data() {
    return {
      // 触发器节点位置数据
      triggerRect: {},
      // clickoutside所需参数
      parentEl: null,
      // 位置信息
      top: 0,
      left: 0,
      // 判断是否在body下
      isUnderBody: false
    };
  },
  computed: {
    dropdownVisible() {
      console.log(this.visible);
      let visible = this.dropdownRoot.visible || this.visible;
      if (visible) this.handlePosition();
      return visible;
    },
    style() {
      return {
        top: this.top + "px",
        left: this.left + "px",
        zIndex: this.$YONDUI.getZindex()
      };
    }
  },
  methods: {
    handlePosition() {
      this.triggerRect = this.parentEl.getBoundingClientRect();
      this.top = this.triggerRect.bottom + 5;
      this.left = this.triggerRect.left;
      if (!this.isUnderBody && this.$el) {
        try {
          const comment = document.createComment("");
          this.dropdownRoot.$el.replaceChild(comment, this.$el);
          document.body.appendChild(this.$el);
        } catch (error) {
          this.isUnderBody = true;
        }
        this.isUnderBody = true;
      }
    },
    handleMouseLeave() {
      // 调用父节点的隐藏方法
      this.dropdownRoot.hide();
    }
  },
  created() {
    this.parentEl = this.dropdownRoot.$refs["trigger"];
  },
  beforeDestroy() {
    if (this.isUnderBody && this.$el) document.body.removeChild(this.$el);
  }
};
</script>

<style lang="less">
.y-dropdown-menu {
  position: absolute;
  border: 1px solid @border-color;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 5px 0;
  font-size: 14px;
  background-color: #fff;
  transition: opacity 0.3s, transform 0.3s;
}
</style>