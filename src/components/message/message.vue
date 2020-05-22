<template>
  <transition name="y-message-fade">
    <div
      v-show="visible"
      class="y-message"
      :class="['y-message-' + type]"
      :style="{top: top + 'px'}"
    >
      <y-icon :type="typeIcons[type]"></y-icon>
      {{message}}
      <y-icon v-show="showClose" type="guanbi" @click="close"></y-icon>
    </div>
  </transition>
</template>

<script>
import { refresh } from "./index";
export default {
  data() {
    return {
      visible: false,
      message: "",
      showClose: false,
      top: 0,
      type: "info",
      duration: 3000,
      typeIcons: {
        info: "tishi-mianxing",
        success: "chenggong",
        warning: "jinggao",
        error: "shanchu"
      }
    };
  },
  methods: {
    close() {
      if (this.onClose && typeof this.onClose === "function") {
        this.onClose(this);
      } else {
        refresh(this);
        document.body.removeChild(this.$el);
      }
    }
  },
  mounted() {
    if (this.duration) {
      setTimeout(() => {
        this.close();
      }, this.duration);
    }
  }
};
</script>

<style lang="less">
// .y-message-fade-enter-active,
// .y-message-fade-leave-active {
//   opacity: 1;
//   transition: all 5s ease;
// }
.y-message-fade-enter-active,
.y-message-fade-leave-active {
  // opacity: 0;
  top: 0;
  transform: translate(-50%, -100%);
}
.y-message {
  position: fixed;
  top: 0;
  left: 50%;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 14px;
  opacity: 1;
  transform: translateX(-50%);
  transition: opacity 0.3s, top 0.3s;
  z-index: 2020;
  i {
    font-size: 12px;
  }
  &-info {
    background-color: #e8eaec;
    color: @text-color;
  }
  &-success {
    background-color: #f0f9eb;
    color: @success-color;
  }
  &-warning {
    background-color: #fdf6ec;
    color: @warning-color;
  }
  &-error {
    background-color: #fef0f0;
    color: @error-color;
  }
}
</style>