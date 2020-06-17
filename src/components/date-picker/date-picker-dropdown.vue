<template>
  <transition name="dropdown-fade">
    <div v-show="visible" v-clickoutside="hide" class="y-date-picker-dropdown" :style="style">
      <!-- 日期选择 -->
      <component :is="componentName" :value="date"></component>
      <!-- 底部时间选择和确认栏 -->
      <div v-show="showTimeInput || isMultiple" class="y-date-picker-dropdown-footer">
        <y-input
          v-if="showTimeInput"
          v-model="timeValue"
          ref="time"
          size="small"
          readonly
          placeholder="选择时间"
          @on-focus="showTime = true"
        >
          <y-icon slot="suffix" size="14" color="#c0c4cc" type="shizhong"></y-icon>
        </y-input>
        <!-- 充当占位元素， 让确定按钮始终在右侧 -->
        <span v-else></span>
        <div class="y-date-picker-dropdown-footer-right">
          <y-button color="primary" size="small" @click="handleConfirm">确定</y-button>
        </div>
      </div>
      <!-- 时间选择弹窗 -->
      <transition name="dropdown-fade">
        <div
          v-show="showTime"
          class="y-date-picker-dropdown-time"
          v-clickoutside:inputEl="hideTime"
        >
          <Time
            v-if="dateType == 'datetime'"
            :value="date"
            :show="showTime"
            :format="parentVm.format"
          ></Time>
          <TimeRange
            v-if="dateType == 'datetimerange'"
            :value="date"
            :show="showTime"
            :format="parentVm.format"
          ></TimeRange>
        </div>
      </transition>
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
import Time from "./components/time.vue";
import TimeRange from "./components/time-range.vue";
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
    Range,
    Time,
    TimeRange
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
      // clickoutside所需参数
      inputEl: null,
      // 显示时间选择
      showTime: false,
      // 时间值
      timeValue: "00:00:00",
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
    hide() {
      this.visible = false;
    },
    hideTime() {
      this.showTime = false;
    },
    show() {
      this.visible = true;
    },
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
    // 当type = datetime/datetimerange 且为多选时， 会有第二个参数， 表示多选的时间数组
    handleEmit(date, time) {
      if (!this.showTimeInput && !this.isMultiple) {
        this.parentVm.emitChange(date);
        this.hide();
      } else {
        this.tempDate = date;
        this.tempTime = time;
      }
    },
    handleTimeEmit(time) {
      if (Array.isArray(time)) {
        let text = "";
        if (time[0]) {
          text = time[0] + " - ";
        }
        if (time[1]) {
          text += time[1];
        }
        this.timeValue = text;
      } else {
        this.timeValue = time;
        if (this.isMultiple && this.tempTime.length) {
          this.tempTime[this.tempTime.length - 1] = time;
        }
      }
    },
    handleConfirm() {
      let time = this.timeValue;
      if (this.dateType === "datetimerange") time = this.timeValue.split("-");
      if (this.isMultiple) time = this.tempTime;

      this.parentVm.emitChange(this.tempDate, time);
      this.hide();
    }
  },
  mounted() {
    if (this.showTimeInput) this.inputEl = this.$refs.time.$el;
  },
  watch: {
    // 单独做组件时，监听v-model的值
    value: {
      handler(value) {
        this.handleDate(value);
      },
      immediate: true
    },
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