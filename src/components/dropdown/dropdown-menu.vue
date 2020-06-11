<template>
  <transition name="dropdown-fade">
    <ul
      v-show="dropdownVisible"
      class="y-dropdown-menu"
      :style="style"
      v-clickoutside="handleMouseLeave"
      @mouseenter="handleMouseEnter"
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
    visible: Boolean,
    clickNoHide: Boolean,
    placement: {
      type: String,
      default: "bottom"
    }
  },
  data() {
    return {
      // clickoutside所需参数
      parentEl: null,
      // 位置信息
      top: 0,
      left: 0,
      height: 0,
      // 判断是否在body下
      isUnderBody: false
    };
  },
  computed: {
    // 判断是否是嵌套组件
    ifHasParentNode() {
      return this.dropdownRoot.parentMenuNode;
    },
    dropdownVisible() {
      let visible = this.dropdownRoot.visible || this.visible;
      if (visible) {
        this.$nextTick(() => {
          this.handlePosition(this.placement);
        });
        this.showDropdown();
      }
      return visible;
    },
    style() {
      return {
        top: this.top + "px",
        left: this.left + "px",
        maxHeight: this.height ? this.height + "px" : "",
        zIndex: this.$YONDUI.getZindex()
      };
    }
  },
  methods: {
    showDropdown() {
      if (!this.isUnderBody && this.$el && !this.ifHasParentNode) {
        try {
          const comment = document.createComment("");
          this.dropdownRoot.$el.replaceChild(comment, this.$el);
          document.body.appendChild(this.$el);
        } catch (error) {
          this.isUnderBody = false;
        }
        this.isUnderBody = true;
      }
    },
    handlePosition(placement) {
      let triggerRect = this.parentEl.getBoundingClientRect();
      let menuRect = this.$el.getBoundingClientRect().toJSON();

      // 当菜单过高时，可能出现循环调用造成栈溢出，所以需要判断并修改其高度
      // 即向上不能完全展示，向下不能完全展示，这时修改其max-height
      if (
        triggerRect.top + menuRect.height > window.innerHeight &&
        triggerRect.bottom - menuRect.height < 0
      ) {
        this.height = window.innerHeight - triggerRect.bottom - 5;
        menuRect.height = this.height;
      }

      // 当嵌套时，位置是以父节点而不是以body来判断
      if (placement == "bottom") {
        // 当高度不够时，改变方向
        if (triggerRect.bottom + menuRect.height + 5 > window.innerHeight) {
          this.handlePosition("top");
          return;
        }
        if (this.ifHasParentNode) {
          this.top = 5;
          this.left = 0;
        } else {
          this.top = triggerRect.bottom + 5;
          this.left = triggerRect.left;
        }
      } else if (placement == "top") {
        // 当高度不够时，改变方向
        if (triggerRect.top - menuRect.height - 5 < 0) {
          this.handlePosition("bottom");
          return;
        }
        if (this.ifHasParentNode) {
          this.top = -(menuRect.height + 5);
          this.left = 0;
        } else {
          this.top = triggerRect.top - menuRect.height - 5;
          this.left = triggerRect.left;
        }
      } else {
        // 当高度不够时，改变方向
        if (triggerRect.top + menuRect.height > window.innerHeight) {
          if (this.ifHasParentNode) {
            this.top = -menuRect.height;
          } else {
            this.top = triggerRect.bottom - menuRect.height;
          }
        } else {
          if (this.ifHasParentNode) {
            this.top = 0;
          } else {
            this.top = triggerRect.top;
          }
        }
        if (placement == "right") {
          if (this.ifHasParentNode) {
            this.left = triggerRect.width + 5;
          } else {
            this.left = triggerRect.right + 5;
          }
        } else {
          if (this.ifHasParentNode) {
            this.left = -(triggerRect.width + 5);
          } else {
            this.left = triggerRect.left - menuRect.width - 5;
          }
        }
      }
    },
    handleMouseEnter() {
      // 调用父节点的显示方法
      this.dropdownRoot.handleMouseEnter();
    },
    handleMouseLeave(event) {
      // 调用父节点的隐藏方法
      this.dropdownRoot.hide();
    }
  },
  created() {
    this.parentEl = this.dropdownRoot.$refs["trigger"];
  },
  beforeDestroy() {
    return (
      this.isUnderBody &&
      this.$el &&
      document.body.contains(this.$el) &&
      document.body.removeChild(this.$el)
    );
  }
};
</script>
