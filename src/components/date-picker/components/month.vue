<template>
  <div class="y-date-picker-dropdown-month">
    <div class="y-date-picker-dropdown-header">
      <y-icon type="shuangsanjiao-zuo" @click="handleChange('year',-1)"></y-icon>
      <span class="y-date-picker-dropdown-header-text">{{changedDate.year}}</span>
      <y-icon type="shuangsanjiao-you" @click="handleChange('year',1)"></y-icon>
    </div>
    <ul class="y-date-picker-dropdown-content">
      <li
        class="y-date-picker-dropdown-content-month"
        v-for="(row, index) in monthList"
        :key="index"
      >
        <span
          v-for="month in row"
          :key="month.month"
          :class="{'now-day': month.nowMonth, 'active-day': checkSelected(month)}"
          @click="handleMonthClick(month)"
        >{{month.month}}月</span>
      </li>
    </ul>
  </div>
</template>

<script>
import dateMixins from "./dateMixins";
export default {
  name: "y-date-picker-dropdown-month",
  mixins: [dateMixins],
  props: {
    value: [Date, String],
    // 当为范围选择时，判断为第一个还是第二个
    order: {
      type: String,
      default: "first"
    }
  },
  data() {
    return {
      monthList: [],
      // 选择的时间值
      dateValue: {},
      // 保存每次变化后的日期
      changedDate: {}
    };
  },
  computed: {
    checkSelected() {
      return month => {
        return (
          !month.disabled &&
          this.dateValue.year == month.year &&
          this.dateValue.month == month.month
        );
      };
    }
  },
  methods: {
    getMonths(date) {
      let yearMonthDay = this.getYearMonthDay(
        this.order === "first" ? date : this.lastOrNext("year", 1, date)
      );
      let year = yearMonthDay.year;
      let month = yearMonthDay.month;

      this.changedDate = {
        year,
        month
      };

      let now = new Date();
      let nowMonth = -1;
      if (year === now.getFullYear()) {
        nowMonth = now.getMonth() + 1;
      }

      this.monthList = [];
      // 分4行
      for (let i = 0; i < 4; i++) {
        let list = [];
        // 每行3个
        for (let j = 1; j <= 3; j++) {
          list.push({
            year,
            month: j + i * 3,
            nowMonth: j + i * 3 === nowMonth
          });
        }
        this.monthList.push(list);
      }
    },
    handleMonthClick(month) {
      this.changedDate = month;
      this.$parent.handleEmit(new Date(month.year, month.month - 1, 1));
    },
    handleChange(type, step) {
      this.getMonths(this.lastOrNext(type, step));
    }
  },
  watch: {
    value: {
      handler(value) {
        if (value) {
          this.dateValue = this.getYearMonthDay(new Date(value));
        }
        this.getMonths(value ? new Date(value) : new Date());
      },
      immediate: true
    }
  }
};
</script>