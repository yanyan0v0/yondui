<template>
  <transition name="dropdown-fade">
    <div v-show="visible" v-clickoutside="hide" class="y-date-picker-dropdown" :style="style">
      <div class="y-date-picker-dropdown-header">
        <y-icon type="shuangsanjiao-zuo" @click="lastOrNext('year',-1)"></y-icon>
        <y-icon type="sanjiao-zuo" @click="lastOrNext('month',-1)"></y-icon>
        <span class="y-date-picker-dropdown-header-text">{{selectedDateString}}</span>
        <y-icon type="sanjiao-you" @click="lastOrNext('month',1)"></y-icon>
        <y-icon type="shuangsanjiao-you" @click="lastOrNext('year',1)"></y-icon>
      </div>
      <ul class="y-date-picker-dropdown-content">
        <li class="y-date-picker-dropdown-content-week">
          <span v-for="week in weekList" :key="week">{{week}}</span>
        </li>
        <li class="y-date-picker-dropdown-content-day" v-for="(week, index) in liList" :key="index">
          <span
            v-for="day in week"
            :key="day.day"
            :class="{'disabled-day': day.disabled, 'now-day': day.nowDay, 'active-day': checkSelected(day)}"
            @click="handleDayClick(day)"
          >{{day.day}}</span>
        </li>
      </ul>
      <div class="y-date-picker-dropdown-footer">
        <y-button shape="text" class="y-date-picker-dropdown-footer-left">选择时间</y-button>
        <div class="y-date-picker-dropdown-footer-right">
          <y-button color="primary">确定</y-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import clickoutside from "@/directive/clickoutside";
import componentMixins from "@/util/componentMixins";
export default {
  name: "y-date-picker-dropdown",
  directives: { clickoutside },
  mixins: [componentMixins],
  props: {
    value: {
      type: [Date, String, Number],
      default: new Date()
    },
    visible: Boolean
  },
  data() {
    return {
      top: 0,
      left: 0,
      weekList: ["日", "一", "二", "三", "四", "五", "六"],
      // 保存被选择的日期
      selectedDate: {},
      selectedDateString: "",
      // 渲染当月天的数组，每一子项为一周的数组
      liList: [],
      // clickoutside所需参数
      parentEl: null
    };
  },
  computed: {
    style() {
      return {
        top: this.top + "px",
        left: this.left + "px",
        zIndex: this.$YONDUI.getZindex()
      };
    },
    checkSelected() {
      return day => {
        return (
          !day.disabled &&
          this.selectedDate.year == day.year &&
          this.selectedDate.month == day.month &&
          this.selectedDate.day == day.day
        );
      };
    }
  },
  methods: {
    hide() {
      this.visible = false;
    },
    show() {
      this.visible = true;
    },
    getDays(date) {
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      this.selectedDate = {
        year,
        month,
        day
      };
      this.selectedDateString = date.Format("yyyy-MM");

      let now = new Date();
      let nowDay = -1;
      if (year === now.getFullYear() && month === now.getMonth() + 1) {
        nowDay = now.getDate();
      }
      // 获取上月天数
      let lastDays = 31;
      if (month !== 1) {
        lastDays = new Date(year, month, 0).getDate();
      }
      // 获取当月天数
      let days = new Date(year, month, 0).getDate();
      // 获取当月1日星期几
      let weekDay = new Date(year, month - 1, 1).getDay();
      // 获取当月最后一天星期几
      let LastWeekDay = new Date(year, month - 1, days).getDay();
      // 需要展示的天数
      let dayList = [];
      // 需要展示的上月天数
      for (let i = 0; i < weekDay; i++) {
        dayList.push({
          day: lastDays - i,
          disabled: true
        });
      }
      // 需要展示的当月天数
      for (let i = 1; i <= days; i++) {
        let _day = {
          year,
          month,
          day: i,
          disabled: false,
          nowDay: i === nowDay
        };
        dayList.push(_day);
      }
      // 需要展示的下月天数
      for (let i = 1; i <= 6 - LastWeekDay; i++) {
        dayList.push({
          day: i,
          disabled: true
        });
      }
      // 总共有几个星期
      let weeks = Math.ceil(dayList.length / 7);
      // 循环生成li
      this.liList = [];
      for (let i = 0; i < weeks; i++) {
        let list = [];
        for (let j = 0; j < 7; j++) {
          list.push(dayList[i * 7 + j]);
        }
        this.liList.push(list);
      }
    },
    handleDayClick(day) {
      if (day.disabled) return;
      this.selectedDate = day;
      this.emitChange(new Date(day.year, day.month - 1, day.day));
      this.hide();
    },
    lastOrNext(type, step) {
      let year = this.selectedDate.year;
      let month = this.selectedDate.month;
      let day = this.selectedDate.day;
      if (type == "year") {
        this.getDays(new Date(year + step, month - 1, day));
      } else {
        this.getDays(new Date(year, month + step - 1, day));
      }
    }
  },
  watch: {
    value: {
      handler(value) {
        this.getDays(new Date(value));
      },
      immediate: true
    },
    "parentVm.value": {
      handler(value) {
        this.getDays(new Date(value));
      },
      immediate: true
    }
  }
};
</script>