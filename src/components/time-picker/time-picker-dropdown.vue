<template>
  <transition name="dropdown-fade">
    <div
      v-show="visible"
      class="y-time-picker-dropdown"
      :class="computeSize('y-time-picker-dropdown-')"
      :style="style"
      v-clickoutside="hide"
    >
      <y-time v-if="!range" :value="timeValue" :show="visible" @on-change="handleChange"></y-time>
      <y-time-range v-else :value="timeValue" :show="visible" @on-change="handleChange"></y-time-range>
      <div v-show="!hideFooter" class="y-time-picker-dropdown-footer">
        <slot name="footer">
          <y-button color="primary" shape="text" size="mini" @click="handleCurrent">此刻</y-button>
          <div>
            <y-button shape="text" size="mini" @click="handleCancel">取消</y-button>
            <y-button
              v-show="!immediate"
              color="primary"
              shape="text"
              size="mini"
              @click="handleConfirm()"
            >确定</y-button>
          </div>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script>
import clickoutside from "@/directive/clickoutside";
import componentMixins from "@/util/componentMixins";
import YTime from "./components/time.vue";
import YTimeRange from "./components/time-range.vue";
import { setDateFormat } from "@/util/tools";
if (!new Date().Format) {
  setDateFormat(); // 注册格式化时间函数
}
export default {
  name: "y-date-picker-dropdown",
  components: {
    YTime,
    YTimeRange
  },
  directives: { clickoutside },
  mixins: [componentMixins],
  props: {
    value: [String, Array],
    visible: Boolean
  },
  data() {
    return {
      top: 0,
      left: 0,
      bottom: 0,
      // 获取父组件的vnode
      parentVm: {},
      // clickoutside所需参数
      parentEl: null,
      // 时间值
      timeValue: "",
      // 保存最初始的值， 当点击取消时需要
      initialValue: "",
      // 当需要点击确定才能回显数据的情况时需要保存未确定的时间数据，当多选时为数组类型
      tempTime: ""
    };
  },
  provide() {
    return {
      timeRoot: this.parentVm
    };
  },
  computed: {
    // 是否范围选择
    range() {
      return this.parentVm.range;
    },
    // 是否选择即变化
    immediate() {
      return this.parentVm.immediate;
    },
    // 是否隐藏底部操作栏
    hideFooter() {
      return this.parentVm.hideFooter;
    },
    style() {
      return {
        top: this.top + "px",
        left: this.left + "px",
        bottom: this.top ? "" : this.bottom + "px",
        zIndex: this.$YONDUI.getZindex()
      };
    }
  },
  methods: {
    handleTime(time) {
      if (time) {
        if (Array.isArray(time)) {
          this.timeValue = [time[0] || "", time[1] || ""];
        } else {
          this.timeValue = time;
        }

        if (!this.initialValue) this.initialValue = time;
      }
    },
    hide() {
      this.visible = false;
      this.parentVm.$emit("on-visible-change", false);
    },
    show() {
      this.visible = true;
      this.parentVm.$emit("on-visible-change", true);
    },
    handleChange(time) {
      if (this.immediate) {
        this.initialValue = "";
        this.parentVm.emitChange(time);
      } else {
        this.tempTime = time;
      }
    },
    handleConfirm() {
      this.initialValue = "";
      this.parentVm.emitChange(this.tempTime);
      this.hide();
    },
    handleCurrent() {
      let nowTime = new Date().Format("hh:mm:ss");
      if (this.range) {
        this.timeValue = [nowTime, nowTime];
      } else {
        this.timeValue = nowTime;
      }
    },
    handleCancel() {
      this.parentVm.emitChange(this.initialValue);
      this.hide();
    }
  },
  watch: {
    // 做time-picker的子组件时，监听date-picker的v-model值
    "parentVm.timeValue": {
      handler(value) {
        this.handleTime(value);
      },
      immediate: true
    }
  }
};
</script>