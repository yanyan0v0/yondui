<template>
  <div class="y-date-picker-dropdown-day">
    <div class="y-date-picker-dropdown-header">
      <y-icon type="shuangsanjiao-zuo" @click="handleChange('year',-1)"></y-icon>
      <y-icon type="sanjiao-zuo" @click="handleChange('month',-1)"></y-icon>
      <span class="y-date-picker-dropdown-header-text">{{changedDate.year}}-{{changedDate.month}}</span>
      <y-icon type="sanjiao-you" @click="handleChange('month',1)"></y-icon>
      <y-icon type="shuangsanjiao-you" @click="handleChange('year',1)"></y-icon>
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
  </div>
</template>

<script>
import dateMixins from "./dateMixins";
export default {
  name: "y-date-picker-dropdown-day",
  mixins: [dateMixins],
  props: {
    value: Date
  },
  data() {
    return {
      weekList: ["日", "一", "二", "三", "四", "五", "六"],
      // 选择的时间值
      dateValue: {},
      // 保存每次变化后的日期
      changedDate: {},
      // 渲染当月天的数组，每一子项为一周的数组
      liList: []
    };
  },
  computed: {
    checkSelected() {
      return day => {
        return (
          !day.disabled &&
          this.dateValue.year == day.year &&
          this.dateValue.month == day.month &&
          this.dateValue.day == day.day
        );
      };
    }
  },
  methods: {
    getDays(date) {
      let yearMonthDay = this.getYearMonthDay(date);
      let year = yearMonthDay.year;
      let month = yearMonthDay.month;
      let day = yearMonthDay.day;

      this.changedDate = {
        year,
        month,
        day
      };

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
      this.changedDate = day;
      this.$parent.handleEmit(new Date(day.year, day.month - 1, day.day));
    },
    handleChange(type, step) {
      this.getDays(this.lastOrNext(type, step));
    }
  },
  watch: {
    value: {
      handler(value) {
        if (value) {
          this.dateValue = this.getYearMonthDay(new Date(value));
        }
        this.getDays(value ? new Date(value) : new Date());
      },
      immediate: true
    }
  }
};
</script>