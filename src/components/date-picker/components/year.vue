<template>
  <div class="y-date-picker-dropdown-year">
    <div class="y-date-picker-dropdown-header">
      <y-icon type="shuangsanjiao-zuo" @click="handleChange('year',-9)"></y-icon>
      <span class="y-date-picker-dropdown-header-text">{{changedDate.year}}</span>
      <y-icon type="shuangsanjiao-you" @click="handleChange('year',9)"></y-icon>
    </div>
    <ul class="y-date-picker-dropdown-content">
      <li class="y-date-picker-dropdown-content-year" v-for="(row, index) in yearList" :key="index">
        <span
          v-for="year in row"
          :key="year.year"
          :class="{'now-day': year.nowMonth, 'active-day': checkSelected(year)}"
          @click="handleMonthClick(year)"
        >{{year.year}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import dateMixins from "./dateMixins";
export default {
  name: "y-date-picker-dropdown-year",
  mixins: [dateMixins],
  props: {
    value: Date
  },
  data() {
    return {
      yearList: [],
      // 选择的时间值
      dateValue: {},
      // 保存每次变化后的日期
      changedDate: {}
    };
  },
  computed: {
    checkSelected() {
      return year => {
        return this.dateValue.year == year.year;
      };
    }
  },
  methods: {
    getYears(date) {
      console.log(date);
      let yearMonthDay = this.getYearMonthDay(date);
      let year = yearMonthDay.year;

      this.changedDate = {
        year
      };

      let nowYear = new Date().getFullYear();

      this.yearList = [];
      // 分3行
      for (let i = 0; i < 3; i++) {
        let list = [];
        // 每行3个
        for (let j = year; j <= year + 2; j++) {
          list.push({
            year: j + i * 3,
            nowYear: j + i * 3 === nowYear
          });
        }
        this.yearList.push(list);
      }
    },
    handleMonthClick(year) {
      this.changedDate = year;
      this.$parent.handleEmit(new Date(year.year, 0, 1));
    },
    handleChange(type, step) {
      this.getYears(this.lastOrNext(type, step));
    }
  },
  watch: {
    value: {
      handler(value) {
        if (value) {
          this.dateValue = this.getYearMonthDay(new Date(value));
        }
        this.getYears(value ? new Date(value) : new Date());
      },
      immediate: true
    }
  }
};
</script>