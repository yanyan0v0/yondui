<template>
  <transition name="dropdown-fade">
    <div
      v-show="visible"
      v-clickoutside="hide"
      class="y-date-picker-dropdown"
      :style="style"
    >
      <!-- 日期选择 -->
      <component :is="componentName" :value="date"></component>
      <!-- 底部时间选择和确认栏 -->
      <div v-show="showTime || multiple" class="y-date-picker-dropdown-footer">
        <y-time-picker
          v-if="showTime"
          v-model="timeValue"
          size="small"
          immediate
          hide-footer
          :format="timeFormat"
          :append-to-body="false"
          :width="dateType === 'datetimerange' ? '200px' : '120px'"
          :range="dateType === 'datetimerange'"
          :filter-time="filterTime"
          @on-change="handleTimeChange"
        ></y-time-picker>
        <!-- 占位元素 -->
        <span></span>
        <div>
          <y-button color="primary" size="small" @click="handleConfirm"
            >确定</y-button
          >
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import clickoutside from "@/directive/clickoutside";
import componentMixins from "@/mixins/component";
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
    Range,
  },
  directives: { clickoutside },
  mixins: [componentMixins],
  props: {
    value: [Date, String, Number, Array],
    visible: Boolean,
  },
  data() {
    return {
      pickerRect: {
        bottom: 0,
        left: 0,
      },
      // 当前时间
      date: null,
      // 获取父组件的vnode
      parentVm: null,
      // clickoutside所需参数
      parentEl: null,
      // time-picker组件绑定的时间值
      timeValue: "",
      // 保存未确定的时间数据，在type=datetime|datetimerange 或 多选时需要
      // type=datetime为String类型
      // type=datetimerange 或 多选时为数组类型
      tempDate: "",
      tempTime: "",
    };
  },
  computed: {
    // 时间类型
    dateType() {
      return this.parentVm.type;
    },
    // 是否多选
    multiple() {
      return this.parentVm.multiple;
    },
    // 日期格式
    dateFormat() {
      return this.parentVm.dateFormat;
    },
    // 时间过滤函数
    filterTime() {
      return this.parentVm.filterTime;
    },
    // 时间格式
    timeFormat() {
      if (this.parentVm.format) {
        let index = this.parentVm.format.indexOf("h");
        return this.parentVm.format.slice(index);
      } else {
        return "";
      }
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
        top: this.pickerRect.bottom + 5 + "px",
        left: this.pickerRect.left + "px",
        zIndex: this.$YONDUI.getZindex(),
      };
    },
    showTime() {
      return this.dateType.indexOf("time") != -1;
    },
  },
  methods: {
    handleDate(date) {
      if (date) {
        if (Array.isArray(date)) {
          if (this.multiple) {
            this.date = JSON.parse(JSON.stringify(date));
            this.tempTime = this.date.map((item) =>
              new Date(item).Format("hh:mm:ss")
            );
            this.timeValue = this.date[this.date.length - 1]
              ? new Date(this.date[this.date.length - 1]).Format("hh:mm:ss")
              : "";
          } else {
            this.date = [
              date[0] ? new Date(date[0]) : "",
              date[1] ? new Date(date[1]) : "",
            ];
            this.timeValue = [
              date[0] ? new Date(date[0]).Format("hh:mm:ss") : "",
              date[1] ? new Date(date[1]).Format("hh:mm:ss") : "",
            ];
          }
        } else {
          this.date = new Date(date);
          this.timeValue = this.date.Format("hh:mm:ss");
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
    // 给Year, Month, Day，Range子组件调用的方法
    handleEmit(date) {
      if (!this.showTime && !this.multiple) {
        this.parentVm.emitChange(date);
        this.hide();
      } else {
        this.tempDate = date;
        if (this.multiple) this.tempTime.push(this.timeValue);
        else this.tempTime = this.timeValue;
      }
    },
    handleTimeChange(time) {
      console.log(time);
      if (this.multiple) {
        if (this.tempTime.length)
          this.tempTime[this.tempTime.length - 1] = time;
        else this.tempTime.push(time);
      } else {
        this.tempTime = time;
      }
    },
    handleConfirm() {
      if (this.multiple) {
        if (this.tempDate.length)
          this.parentVm.emitChange(this.tempDate, this.tempTime);
      } else {
        if (this.tempDate)
          this.parentVm.emitChange(this.tempDate, this.tempTime);
      }
      this.hide();
    },
  },
  watch: {
    // 做date-picker的子组件时，监听date-picker的v-model值
    "parentVm.dateValue": {
      handler(value) {
        this.handleDate(value);
      },
      immediate: true,
    },
  },
};
</script>