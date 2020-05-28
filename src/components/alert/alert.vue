<template>
  <div
    class="y-alert"
    :class="[{'y-alert-fixed': !htmlRender},'y-alert-' + type, 'y-alert-' + theme]"
    :style="{top: top + 'px'}"
  >
    <div class="y-alert-content">
      <y-icon v-show="!hideIcon" class="y-alert-type-icon" :type="typeIcons[type]"></y-icon>
      <div>
        <slot>
          <p>{{message}}</p>
        </slot>
      </div>
    </div>
    <y-icon v-show="showClose" class="y-alert-close-icon" type="guanbi" size="12" @click="close"></y-icon>
  </div>
</template>

<script>
export default {
  name: "y-alert",
  props: {
    showClose: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "info"
    },
    theme: {
      type: String,
      default: "light"
    },
    hideIcon: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 标识是函数式还是指令式渲染 true代表指令式 即使用<y-alert>标签
      htmlRender: true,
      message: "",
      top: 0,
      duration: 0,
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
      }
      this.$alert.refresh(this);
      document.body.removeChild(this.$el);
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
// .y-alert-fade-enter-active,
// .y-alert-fade-leave-active {
//   opacity: 1;
//   transition: all 5s ease;
// }
.y-alert-fade-enter-active,
.y-alert-fade-leave-active {
  // opacity: 0;
  top: 0;
  transform: translate(-50%, -100%);
}
.y-alert {
  .center-h;
  justify-content: space-between;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 14px;
  color: #fff;
  &-content {
    .center-h;
    .y-alert-type-icon {
      margin-right: 10px;
    }
  }
  &-close-icon {
    margin-left: 10px;
    cursor: pointer;
  }
  &-info&-light {
    background-color: #e8eaec;
    color: @text-color;
  }
  &-success&-light {
    background-color: #f0f9eb;
    color: @success-color;
  }
  &-warning&-light {
    background-color: #fdf6ec;
    color: @warning-color;
  }
  &-error&-light {
    background-color: #fef0f0;
    color: @error-color;
  }
  &-info&-dark {
    background-color: @text-color;
    color: #e8eaec;
  }
  &-success&-dark {
    background-color: @success-color;
    color: #f0f9eb;
  }
  &-warning&-dark {
    background-color: @warning-color;
    color: #fdf6ec;
  }
  &-error&-dark {
    background-color: @error-color;
    color: #fef0f0;
  }
}
.y-alert-fixed {
  position: fixed;
  top: 0;
  left: 50%;
  opacity: 1;
  transform: translateX(-50%);
  transition: opacity 0.3s, top 0.3s;
  z-index: 2020;
}
</style>