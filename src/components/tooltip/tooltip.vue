<script>
import Vue from "vue";

export default {
  name: "y-tooltip",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: String,
      default: "hover"
    },
    theme: {
      type: String,
      default: "dark"
    },
    placement: {
      type: String,
      validator(value) {
        return [
          "top",
          "top-start",
          "top-end",
          "bottom",
          "bottom-start",
          "bottom-end",
          "left",
          "left-start",
          "left-end",
          "right",
          "right-start",
          "right-end"
        ].includes(value);
      },
      default: "top"
    }
  },
  data() {
    return {
      vm: null,
      triggerRect: {}
    };
  },
  render(h) {
    return h("div", {
      class: {
        "y-tooltip-trigger": true
      },
      on: {
        click: () => {
          if (this.trigger == "click") {
            this.$emit("input", true);
            this.init();
          }
        },
        mouseover: () => {
          if (this.trigger == "hover") {
            this.$emit("input", true);
            this.init();
          }
        },
        mouseout: () => {
          if (this.trigger != "custom") {
            if (this.vm) this.vm.hide();
          }
        }
      }
    });
  },
  methods: {
    // 初始化方法 获取触发器的相对位置，将内容添加到body下，为什么不直接放在触发器下？
    // 目的是为了防止overflow:hidden属性使内容展示不完整
    init() {
      this.triggerRect = this.$el.getBoundingClientRect();
      // this.initRect();
      if (!this.vm) {
        let _this = this;
        let classPrefix = this.$options.name;
        this.vm = new Vue({
          data() {
            return {
              tipRect: {},
              style: {}
            };
          },
          render(h) {
            return h(
              "div",
              {
                class: {
                  [classPrefix]: true,
                  [classPrefix + "-" + _this.theme]: true,
                  [classPrefix + "-" + _this.placement]: true
                },
                style: this.style
              },
              [
                _this.$slots.default,
                h("span", {
                  class: {
                    [classPrefix + "-arrow"]: true
                  }
                })
              ]
            );
          },
          methods: {
            initRect() {
              if (!this.tipRect.width || !this.tipRect.height) {
                this.tipRect = this.$el.getBoundingClientRect();
              }
            },
            refresh(e) {
              this.initRect();
              let x = e.x;
              let y = e.y;
              switch (_this.placement) {
                case "top": {
                  y -= this.tipRect.height + 12;
                  x -= parseInt(this.tipRect.width / 2) - parseInt(e.width / 2);
                  break;
                }
                case "top-start": {
                  y -= this.tipRect.height + 12;
                  break;
                }
                case "top-end": {
                  y -= this.tipRect.height + 12;
                  x -= this.tipRect.width - e.width;
                  break;
                }
                case "right": {
                  x += e.width + 12;
                  y +=
                    parseInt(e.height / 2) - parseInt(this.tipRect.height / 2);
                  break;
                }
                case "right-start": {
                  x += e.width + 12;
                  break;
                }
                case "right-end": {
                  x += e.width + 12;
                  y -= this.tipRect.height - e.height;
                  break;
                }
                case "bottom": {
                  y += e.height + 12;
                  x -= parseInt(this.tipRect.width / 2) - parseInt(e.width / 2);
                  break;
                }
                case "bottom-start": {
                  y += e.height + 12;
                  break;
                }
                case "bottom-end": {
                  y += e.height + 12;
                  x -= this.tipRect.width - e.width;
                  break;
                }
                case "left": {
                  x -= this.tipRect.width + 12;
                  y +=
                    parseInt(e.height / 2) - parseInt(this.tipRect.height / 2);
                  break;
                }
                case "left-start": {
                  x -= this.tipRect.width + 12;
                  break;
                }
                case "left-end": {
                  x -= this.tipRect.width + 12;
                  y -= this.tipRect.height - e.height;
                  break;
                }
              }
              this.style = {
                opacity: 1,
                left: x + "px",
                top: y + "px",
                zIndex: this.$Y2UI.getZindex()
              };
            },
            hide() {
              this.style.opacity = 0;
              this.style.zIndex = -1;
            }
          }
        }).$mount();
        document.body.appendChild(this.vm.$el);
        this.$nextTick(() => {
          this.vm.refresh(this.triggerRect);
        });
      } else {
        this.vm.refresh(this.triggerRect);
      }
    },
    initRect() {
      if (!this.triggerRect.width || !this.triggerRect.height) {
        this.triggerRect = this.$el.getBoundingClientRect();
      }
    }
  },
  watch: {
    value: {
      handler(_value) {
        if (_value) {
          this.init();
        } else {
          this.vm.hide();
        }
      }
    }
  },
  // mounted() {
  //   this.init()
  // },
  beforeDestroy() {
    if (this.vm) document.body.removeChild(this.vm.$el);
  }
};
</script>

<style lang="less">
.y-tooltip-trigger {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: pointer;
}
.y-tooltip {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
  z-index: -1;
  // transition: all 0.3s;
  &-arrow {
    display: block;
    position: absolute;
    border-style: solid;
    border-width: 6px;
    border-color: transparent;
  }
}
.y-tooltip-top {
  .y-tooltip-arrow {
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    border-top-color: @text-color;
  }
}
.y-tooltip-top-start {
  .y-tooltip-arrow {
    bottom: -12px;
    border-top-color: @text-color;
  }
}
.y-tooltip-top-end {
  .y-tooltip-arrow {
    right: 10px;
    bottom: -12px;
    border-top-color: @text-color;
  }
}
.y-tooltip-right {
  .y-tooltip-arrow {
    left: -12px;
    top: 50%;
    transform: translateY(-50%);
    border-right-color: @text-color;
  }
}

.y-tooltip-right-start {
  .y-tooltip-arrow {
    top: 10px;
    left: -12px;
    border-right-color: @text-color;
  }
}

.y-tooltip-right-end {
  .y-tooltip-arrow {
    left: -12px;
    bottom: 10px;
    border-right-color: @text-color;
  }
}
.y-tooltip-bottom {
  .y-tooltip-arrow {
    left: 50%;
    transform: translateX(-50%);
    top: -12px;
    border-bottom-color: @text-color;
  }
}
.y-tooltip-bottom-start {
  .y-tooltip-arrow {
    top: -12px;
    border-bottom-color: @text-color;
  }
}
.y-tooltip-bottom-end {
  .y-tooltip-arrow {
    right: 10px;
    top: -12px;
    border-bottom-color: @text-color;
  }
}
.y-tooltip-left {
  .y-tooltip-arrow {
    right: -12px;
    top: 50%;
    transform: translateY(-50%);
    border-left-color: @text-color;
  }
}
.y-tooltip-left-start {
  .y-tooltip-arrow {
    top: 10px;
    right: -12px;
    border-left-color: @text-color;
  }
}
.y-tooltip-left-end {
  .y-tooltip-arrow {
    bottom: 10px;
    right: -12px;
    border-left-color: @text-color;
  }
}
.y-tooltip-dark {
  background-color: @text-color;
  color: #fff;
}
</style>