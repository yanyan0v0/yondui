<template>
  <transition name="dropdown-fade">
    <div v-show="visible" v-clickoutside="hide" class="y-date-picker-dropdown" :style="style">
      <!-- 日期选择 -->
      <component :is="componentName" :value="date"></component>
      <!-- 底部时间选择和确认栏 -->
      <div v-show="showTimeInput || isMultiple" class="y-date-picker-dropdown-footer">
        <y-time-picker
          v-if="showTimeInput"
          v-model="timeValue"
          size="small"
          :append-to-body="false"
          :width="dateType==='datetimerange' ? '150px' : '100px'"
          :range="dateType==='datetimerange'"
          @on-change="handleTimeChange"
        ></y-time-picker>
        <y-button color="primary" shape="text" size="small" @click="handleCurrent">此刻</y-button>
        <div>
          <y-button color="primary" size="small" @click="handleConfirm">确定</y-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import clickoutside from "@/directive/clickoutside";
import componentMixins from "@/util/componentMixins";
import Day from "./components/day.vue";
import Month from "./components/month.vue";
import Year from "./components/year.vue";
import Range from "./components/range.vue";
import { setDateFormat } from "@/util/tools";
if (!new Date().Format) {
  setDateFormat(); // 注册格式化时间函数
}
export default {
  name: "y-date-picker-dropdown",
  components: {
    Day,
    Month,
    Year,
    Range
  },
  directives: { clickoutside },
  mixins: [componentMixins],
  props: {
    value: [Date, String, Number, Array],
    visible: Boolean
  },
  data() {
    return {
      top: 0,
      left: 0,
      // 当前时间
      date: null,
      // 获取父组件的vnode
      parentVm: null,
      // clickoutside所需参数
      parentEl: null,
      // 时间值
      timeValue: "",
      // 当需要点击确定才能回显数据的情况时需要保存未确定的时间数据，当多选时为数组类型
      tempDate: "",
      tempTime: ""
    };
  },
  computed: {
    // 时间类型
    dateType() {
      return this.parentVm.type;
    },
    // 是否多选
    isMultiple() {
      return this.parentVm.multiple;
    },
    // 时间格式
    dateFormat() {
      return this.parentVm.dateFormat;
    },
    componentName() {
      let name = "";
      switch (this.dateType) {
        case "yearrange":
        case "monthrange":
        case "daterange":
        case "datetimerange":
          name = "Range";
          break;
        case "year":
          name = "Year";
          break;
        case "month":
          name = "Month";
          break;
        case "date":
        default:
          name = "Day";
          break;
      }
      return name;
    },
    style() {
      return {
        top: this.top + "px",
        left: this.left + "px",
        zIndex: this.$YONDUI.getZindex()
      };
    },
    showTimeInput() {
      return this.dateType.indexOf("time") != -1;
    }
  },
  methods: {
    handleDate(date) {
      if (date) {
        if (Array.isArray(date)) {
          if (this.isMultiple) {
            this.date = JSON.parse(JSON.stringify(date));
          } else {
            this.date = [
              date[0] ? new Date(date[0]) : "",
              date[1] ? new Date(date[1]) : ""
            ];
          }
        } else {
          this.date = new Date(date);
        }
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
    // 给Year, Month, Day子组件调用的方法
    handleEmit(date) {
      if (!this.showTimeInput && !this.isMultiple) {
        this.parentVm.emitChange(date);
        this.hide();
      } else {
        this.tempDate = date;
      }
    },
    handleTimeChange(time) {
      if (Array.isArray(time)) {
        let text = "";
        if (time[0]) {
          text = time[0] + " - ";
        }
        if (time[1]) {
          text += time[1];
        }
        this.tempTime = text;
      } else {
        this.tempTime = time;
        if (this.isMultiple && this.tempTime.length) {
          this.tempTime[this.tempTime.length - 1] = time;
        }
      }
    },
    handleCurrent() {
      this.parentVm.emitChange(new Date());
    },
    handleConfirm() {
      let time = this.timeValue;
      if (this.isMultiple) {
        time = this.tempTime;
        if (this.tempDate.length) this.parentVm.emitChange(this.tempDate, time);
      } else {
        if (this.tempDate) this.parentVm.emitChange(this.tempDate, time);
      }
      this.hide();
    }
  },
  watch: {
    // 做date-picker的子组件时，监听date-picker的v-model值
    "parentVm.dateValue": {
      handler(value) {
        this.handleDate(value);
      },
      immediate: true
    }
  }
};
</script>