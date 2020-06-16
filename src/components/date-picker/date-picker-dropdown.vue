<template>
  <transition name="dropdown-fade">
    <div v-show="visible" v-clickoutside="hide" class="y-date-picker-dropdown" :style="style">
      <component :is="componentName" :value="date"></component>
      <div v-show="showFooter" class="y-date-picker-dropdown-footer">
        <y-input
          v-model="timeValue"
          ref="time"
          size="small"
          placeholder="选择时间"
          width="70%"
          @on-focus="showTime = true"
        >
          <y-icon slot="suffix" size="14" color="#c0c4cc" type="shizhong"></y-icon>
        </y-input>
        <div class="y-date-picker-dropdown-footer-right">
          <y-button color="primary" size="small" @click="handleConfirm">确定</y-button>
        </div>
      </div>
      <transition name="dropdown-fade">
        <div
          v-show="showTime"
          class="y-date-picker-dropdown-time"
          v-clickoutside:inputEl="hideTime"
        >
          <Time v-if="dateType == 'datetime'" :value="date" :visible.sync="showTime"></Time>
          <TimeRange v-if="dateType == 'datetimerange'" :value="date" :visible.sync="showTime"></TimeRange>
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
  provide() {
    return {
      dropdownRoot: this
    };
  },
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
      // 当需要点击确定才能回显数据的情况时需要保存未确定的时间
      tempDate: ""
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
    showFooter() {
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
          this.date = [
            date[0] ? new Date(date[0]) : "",
            date[1] ? new Date(date[1]) : ""
          ];
        } else {
          this.date = new Date(date);
        }
      }
    },
    handleEmit(date) {
      if (!this.showFooter) {
        this.parentVm.emitChange(date);
        this.hide();
      } else {
        this.tempDate = date;
      }
    },
    handleTimeEmit(time) {
      if (Array.isArray(time)) {
        let text = "";
        if (time[0]) {
          text = time[0] + "-";
        }
        if (time[1]) {
          text += time[1];
        }
        this.timeValue = text;
      } else {
        this.timeValue = time;
      }
    },
    handleConfirm() {
      let isTimeRange = this.dateType === "datetimerange";
      this.parentVm.emitChange(
        this.tempDate,
        isTimeRange ? this.timeValue.split("-") : this.timeValue
      );
      this.hide();
    }
  },
  mounted() {
    this.inputEl = this.$refs.time.$el;
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
    "parentVm.value": {
      handler(value) {
        this.handleDate(value);
      },
      immediate: true
    }
  }
};
</script>