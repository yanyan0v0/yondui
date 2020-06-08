<template>
  <transition name="dropdown-fade">
    <div v-show="value" class="y-dialog-wrap" :style="wrapStyle" @click="handleMaskClick">
      <div v-show="mask" class="y-dialog-mask"></div>
      <div ref="dialog" class="y-dialog" :class="{'y-dialog-scaleable' : scaleable}" :style="style">
        <y-icon v-show="showClose" class="y-dialog-close" type="guanbi" @click="handleCancel"></y-icon>
        <slot name="header">
          <div
            v-if="title"
            class="y-dialog-header"
            :class="{'y-dialog-header-drag': draggable}"
            @mousedown="handleHeaderMouseDown"
          >
            <p>{{title}}</p>
          </div>
        </slot>
        <div class="y-dialog-content">
          <slot></slot>
        </div>
        <slot name="footer">
          <div v-if="!footerHide" class="y-dialog-footer">
            <y-button @click="handleCancel('button')">取消</y-button>
            <y-button color="primary" @click="handleConfirm">确定</y-button>
          </div>
        </slot>
        <div v-show="scaleable" class="y-dialog-stretch" :style="stretchStyle">
          <span @mousedown="handleStretchMouseDown">
            <y-icon type="quanping"></y-icon>
          </span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "y-dialog",
  props: {
    value: Boolean,
    title: String,
    width: {
      type: String,
      default: "30%"
    },
    height: String,
    mask: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 0
    },
    fullscreen: Boolean,
    draggable: Boolean,
    scaleable: Boolean,
    transfer: {
      type: Boolean,
      default: true
    },
    footerHide: Boolean,
    maskClosable: {
      type: Boolean,
      default: true
    },
    escClosable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isUnderBody: false,
      origin: {
        // 拖拽偏移量
        start1: false,
        moveX1: "",
        moveY1: "",
        // 拉伸偏移量
        start2: false,
        moveX2: 0,
        moveY2: 0,
        width: 0,
        height: 0
      },
      // 拉伸后dialog的宽高
      dialogWidth: "",
      dialogHeight: ""
    };
  },
  computed: {
    wrapStyle() {
      return {
        zIndex: this.zIndex || this.$YONDUI.getZindex()
      };
    },
    style() {
      return {
        width: this.computeWidth,
        height: this.computeHeight,
        borderRadius: this.fullscreen ? "initial" : "",
        transform: this.draggable
          ? `translate(${
              this.origin.moveX1 !== "" ? this.origin.moveX1 + "px" : "-50%"
            }, ${
              this.origin.moveY1 !== "" ? this.origin.moveY1 + "px" : "-50%"
            })`
          : ""
      };
    },
    computeWidth() {
      let width = this.fullscreen ? "100%" : this.width;
      return this.dialogWidth || width;
    },
    computeHeight() {
      let height = this.fullscreen ? "100%" : this.height;
      return this.dialogHeight || height;
    },
    stretchStyle() {
      return {
        width:
          this.scaleable && this.origin.width
            ? this.origin.width + this.origin.moveX2 + "px"
            : "100%",
        height:
          this.scaleable && this.origin.height
            ? this.origin.height + this.origin.moveY2 + "px"
            : "100%"
      };
    }
  },
  methods: {
    showDialog() {
      if (this.transfer && !this.isUnderBody) {
        if (this.$el.parentNode) {
          const comment = document.createComment("");
          this.$el.parentNode.replaceChild(comment, this.$el);
        }
        document.body.appendChild(this.$el);
        this.isUnderBody = true;
      }
    },
    handleConfirm() {
      this.$emit("input", false);
      this.$emit("on-ok");
    },
    handleCancel(type) {
      if (type == "mask" && !this.maskClosable) return;
      if (type == "esc" && !this.escClosable) return;
      this.$emit("input", false);
      this.$emit("on-cancel");
    },
    handleMaskClick(event) {
      if (this.$refs.dialog.contains(event.target)) return false;
      this.handleCancel("mask");
    },
    handleHeaderMouseDown(event) {
      let dialogRect = this.$refs.dialog.getBoundingClientRect();
      this.origin.moveX1 = -parseInt(dialogRect.width / 2);
      this.origin.moveY1 = -parseInt(dialogRect.height / 2);
      this.origin.start1 = true;
      this.origin.x = event.x;
      this.origin.y = event.y;
      document.body.style.userSelect = "none";
      const handleMouseMove = moveEvent => {
        if (this.origin.start1) {
          // 不能超过窗口边界
          if (
            moveEvent.x < 0 ||
            moveEvent.y < 0 ||
            moveEvent.x > window.innerWidth ||
            moveEvent.y > window.innerHeight
          )
            return false;
          this.origin.moveX1 += moveEvent.x - this.origin.x;
          this.origin.moveY1 += moveEvent.y - this.origin.y;
          this.origin.x = moveEvent.x;
          this.origin.y = moveEvent.y;
        }
      };
      const handleMouseUp = () => {
        this.origin.start1 = false;
        document.body.style.userSelect = "";
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    },
    handleStretchMouseDown(downEvent) {
      let dialogRect = this.$refs.dialog.getBoundingClientRect();
      this.origin.start2 = true;
      this.origin.width = dialogRect.width;
      this.origin.height = dialogRect.height;
      document.body.style.userSelect = "none";
      const handleMouseMove = moveEvent => {
        if (this.origin.start2) {
          // 不能超过窗口边界
          if (
            moveEvent.x < dialogRect.left + 100 ||
            moveEvent.y < dialogRect.top + 100 ||
            moveEvent.x > window.innerWidth ||
            moveEvent.y > window.innerHeight
          )
            return false;
          this.origin.moveX2 = moveEvent.x - downEvent.x;
          this.origin.moveY2 = moveEvent.y - downEvent.y;
        }
      };
      const handleMouseUp = () => {
        this.dialogWidth = this.stretchStyle.width;
        this.dialogHeight = this.stretchStyle.height;
        setTimeout(() => {
          this.origin.start2 = false;
        });
        document.body.style.userSelect = "";
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
  },
  // watch: {
  //   draggable: {
  //     handler(able) {
  //       if (able) {
  //         let dialogRect = this.$refs.dialog.getBoundingClientRect();
  //         this.origin.moveX1 = -parseInt(dialogRect.width / 2);
  //         this.origin.moveY1 = -parseInt(dialogRect.height / 2);
  //       }
  //     }
  //   }
  // },
  mounted() {
    this.showDialog();
    // 监听Esc键
    document.addEventListener("keydown", () => {
      if (event.keyCode == 27) {
        this.handleCancel();
      }
    });
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

<style lang="less">
@dialog-prefix: ~"@{css-prefix}-dialog";
.@{dialog-prefix}-wrap {
  .full-fixed;
  // .center;
  transition: opacity 0.3s, transform 0.3s;
  .@{dialog-prefix}-mask {
    .mask;
  }
  .@{dialog-prefix} {
    .flex-wrap(column);
    position: relative;
    background-color: #fff;
    border-radius: 4px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &-close {
      position: absolute;
      right: 12px;
      top: 16px;
      font-size: 12px;
      cursor: pointer;
    }
    &-header {
      padding: 12px 16px;
      font-weight: bold;
      // border-bottom: 1px solid @border-color;
      &-drag {
        cursor: move;
      }
    }
    &-content {
      flex: 1;
      padding: 12px 16px;
    }
    &-footer {
      text-align: right;
      padding: 5px 16px 10px;
    }
    &-scaleable {
      transition: width 0.3s, height 0.3s;
    }
    &-stretch {
      position: absolute;
      top: 0;
      left: 0;
      bottom: -2px;
      right: -2px;
      border: 2px dashed @border-color;
      overflow: hidden;
      pointer-events: none;
      span {
        display: block;
        position: absolute;
        width: 20px;
        height: 20px;
        bottom: -10px;
        right: -10px;
        transform: rotate(45deg);
        background-color: @text-color;
        pointer-events: auto;
        cursor: nw-resize;
      }
    }
  }
}
</style>