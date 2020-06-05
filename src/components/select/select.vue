<template>
  <div
    class="y-select"
    :style="{width}"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <y-input
      v-model="selectedLabel"
      :readonly="!filterable"
      type="textarea"
      :height="inputHeight"
      :disabled="disabled"
      :size="size"
      :placeholder="placeholder"
      :class="{'y-select-input': !disabled}"
      @on-click="handleSelectClick"
      @on-change="handleInputChange"
    >
      <template slot="prefix">
        <slot name="prefix"></slot>
      </template>
      <y-icon
        slot="suffix"
        size="12"
        color="#c0c4cc"
        :type="dropIcon"
        class="y-select-drop-icon"
        :class="[vm && vm.visible ? 'turn-up' : 'turn-down', {'pointer': dropIcon == 'shanchu'}]"
        @click="handleClear"
      ></y-icon>
    </y-input>
  </div>
</template>

<script>
import Vue from "vue";
import clickoutside from "@/directive/clickoutside";
export default {
  name: "y-select",
  props: {
    value: [String, Number, Array],
    size: String,
    placeholder: {
      type: String,
      default: "请选择"
    },
    width: String,
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean
  },
  data() {
    return {
      vm: null,
      // 是否多选
      multiple: false,
      // 多选时的tag数组
      tagList: [],
      // input展示的内容
      selectedLabel: "",
      // input显示的高度 当多选时需要
      inputHeight: "",
      // 右侧图标
      dropIcon: "sanjiao-xia"
    };
  },
  methods: {
    handleSelectClick() {
      this.vm.visible = !this.vm.visible;
      if (this.vm.visible) {
        // 点击时重新修正位置
        // selectRect为DOMRect只读对象，不能直接赋值，需调用其toJSON()方法转化成对象
        let selectRect = this.$el.getBoundingClientRect().toJSON();
        this.vm.refreshPostion(selectRect);
      }
      this.$emit("on-visible-change", this.vm.visible);
    },
    initDropdown() {
      if (!this.vm) {
        let _this = this;
        let selectRect = this.$el.getBoundingClientRect().toJSON();
        this.vm = new Vue({
          directives: { clickoutside },
          data() {
            return {
              // select在dom中的位置信息
              selectRect,
              // 控制显示和隐藏
              visible: false,
              // 是否多选
              multiple: _this.multiple,
              // 是否阻止option监听selectedValue变化的后续动作，多选时需要
              ifStop: false,
              // 当前选择的值
              selectedValue: _this.value,
              filterValue: "",
              // 指令clickoutside所需参数
              parentEl: _this.$el
            };
          },
          render(h) {
            return h(
              "ul",
              {
                class: {
                  "y-select-dropdown": true
                },
                style: {
                  display: this.visible ? "block" : "none",
                  width: this.selectRect.width + "px",
                  top: this.selectRect.bottom + 5 + "px",
                  left: this.selectRect.left + "px",
                  zIndex: this.$YONDUI.getZindex()
                },
                directives: [
                  {
                    name: "clickoutside",
                    // 调用内部函数
                    expression: "handleVisible"
                  }
                ]
              },
              _this.$slots.default
            );
          },
          methods: {
            refreshPostion(rect) {
              this.selectRect = rect;
              this.$nextTick(() => {
                let dropRect = this.$el.getBoundingClientRect();
                // 超出界面底部，需要在select上方展示
                if (dropRect.bottom > window.innerHeight) {
                  this.selectRect.bottom =
                    this.selectRect.top - dropRect.height - 10;
                }
              });
            },
            handleVisible() {
              this.visible = false;
              _this.$emit("on-visible-change", false);
            },
            handleOptionClick(value, label) {
              if (this.multiple) {
                let index = _this.tagList.findIndex(
                  item => item.value == value
                );
                // 没有则添加 有则移除
                if (index == -1) {
                  _this.tagList.push({ value, label });
                } else {
                  _this.tagList.splice(index, 1);
                }
                this.ifStop = true;
                let values = _this.tagList.map(item => item.value);
                let labelList = _this.tagList.map(item => item.label);
                _this.selectedLabel = labelList.toString();
                _this.$emit("input", values);
                _this.$emit("on-change", values, labelList);
              } else {
                this.handleVisible();
                this.selectedValue = value;
                _this.selectedLabel = label;
                _this.$emit("input", value);
                _this.$emit("on-change", value, label);
              }
            }
          }
        }).$mount();
        document.body.appendChild(this.vm.$el);
      }
    },
    handleMouseEnter() {
      if (this.clearable && this.selectedLabel) {
        this.dropIcon = "shanchu";
      }
    },
    handleMouseLeave() {
      if (this.clearable) {
        this.dropIcon = "sanjiao-xia";
      }
    },
    handleInputChange(value) {
      if (this.vm) {
        this.vm.filterValue = value;
      }
      this.$emit("on-query-change", value);
    },
    // 点击清空按钮
    handleClear() {
      if (this.dropIcon == "shanchu") {
        this.$emit("on-clear");

        this.selectedLabel = "";
        if (Array.isArray(this.value)) {
          this.$emit("input", []);
          this.$emit("on-change", []);
        } else {
          this.$emit("input", "");
          this.$emit("on-change", "");
        }
        if (this.filterable && this.vm) {
          this.vm.filterValue = "";
        }
      }
    }
  },
  // 监听value的变化，及时回显到对应的option中
  watch: {
    value: {
      handler(value) {
        if (this.vm) {
          this.vm.selectedValue = value;
        }
        if (Array.isArray(value)) {
          this.multiple = true;
          if (this.vm) {
            this.vm.multiple = true;
          }
        }
      },
      immediate: true
    }
  },
  mounted() {
    // 需要回显label数据，所以不能使用其他事件来初始化
    this.initDropdown();
  },
  beforeDestroy() {
    if (this.vm) document.body.removeChild(this.vm.$el);
  }
};
</script>

<style lang="less">
.y-select {
  position: relative;
  display: inline-block;
  &-input {
    .y-input {
      cursor: pointer;
    }
  }
  &-drop-icon {
    display: inline-block;
    transition: transform 0.3s;
    &.turn-up {
      transform: rotate(180deg);
    }
    &.turn-down {
      transform: rotate(0);
    }
  }
}

.y-select-dropdown {
  position: absolute;
  border: 1px solid @border-color;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 5px;
  font-size: 14px;
  background-color: #fff;
  z-index: 2020;
}
</style>