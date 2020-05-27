<script>
import Vue from "vue";

export default {
  name: "y-tooltip",
  props: {
    theme: {
      type: String,
      default: "dark"
    },
    direction: {
      type: String,
      default: "left"
    }
  },
  data() {
    return {
      vm: null
    };
  },
  render(h) {
    return h("div", {
      class: {
        "y-tooltip-wrapper": true
      },
      on: {
        mouseover: e => {
          console.log(this);
          this.init(e);
        },
        mouseout: e => {
          this.vm.hide();
        }
      }
    });
  },
  methods: {
    init(e) {
      let _this = this;
      if (!this.vm) {
        let classPrefix = this.$options.name;
        this.vm = new Vue({
          data() {
            return {
              style: {
                display: "none"
              }
            };
          },
          render(h) {
            console.log(this);
            return h(
              "div",
              {
                class: {
                  [classPrefix]: true,
                  [classPrefix + "-" + _this.theme]: true,
                  [classPrefix + "-" + _this.direction]: true
                },
                style: this.style
              },
              [
                h("div", 50),
                h("span", {
                  class: {
                    [classPrefix + "-arrow"]: true
                  }
                })
              ]
            );
          },
          methods: {
            refresh(e) {
              this.style = {
                display: "block",
                left: e.x + "px",
                top: e.y + "px"
              };
            },
            hide() {
              this.style.display = "none";
            }
          }
        }).$mount();
        console.log(this.vm);
        this.vm.refresh(e);
        document.body.appendChild(this.vm.$el);
      } else {
        this.vm.refresh(e);
      }
    }
  },
  mounted() {
    console.log(this.$el.getBoundingClientRect());
  },
  beforeDestroy() {
    if (this.vm) document.body.removeChild(this.vm.$el);
  }
};
</script>

<style lang="less">
.y-tooltip-wrapper {
  .main;
}
.y-tooltip {
  position: absolute;
  top: 0;
  padding: 10px;
  border-radius: 4px;
  z-index: 2020;
  &-arrow {
    display: block;
    position: absolute;
    border-style: solid;
    border-width: 6px;
    border-color: transparent;
  }
}
.y-tooltip-top {
  transform: translate(-19px, -53px);
  .y-tooltip-arrow {
    bottom: -12px;
    border-top-color: @text-color;
  }
}
.y-tooltip-right {
  transform: translate(12px, -25px);
  .y-tooltip-arrow {
    left: -12px;
    top: 50%;
    transform: translateY(-50%);
    border-right-color: @text-color;
  }
}
.y-tooltip-bottom {
  transform: translate(-19px, 9px);
  .y-tooltip-arrow {
    left: 50%;
    transform: translateX(-50%);
    top: -12px;
    border-bottom-color: @text-color;
  }
}
.y-tooltip-left {
  transform: translate(-55px, -23px);
  .y-tooltip-arrow {
    right: -12px;
    top: 50%;
    transform: translateY(-50%);
    border-left-color: @text-color;
  }
}
.y-tooltip-dark {
  background-color: @text-color;
  color: #fff;
}
</style>