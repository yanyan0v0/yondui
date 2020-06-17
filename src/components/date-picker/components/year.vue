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
          :class="{'now-day': year.nowYear || checkDisabled(year), 'active-day': checkSelected(year), 'hover-active-day': checkRange(year)}"
          @click="handleYearClick(year)"
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
    value: [Date, String, Array],
    // 当为范围选择时，判断为第一个还是第二个
    order: {
      type: String,
      default: "first"
    },
    // 选择的时间范围
    range: Array
  },
  data() {
    return {
      yearList: [],
      // 选择的时间值
      dateValue: {},
      // 保存多选时的数据
      multiSelect: [],
      // 保存每次变化后的日期
      changedDate: {}
    };
  },
  computed: {
    checkSelected() {
      return year => {
        let time = new Date(year.year, 0, 1).Format("yyyy");
        // 当为范围选择时
        if (this.range && this.range.length) {
          return this.range.find(item => new Date(item).Format("yyyy") == time);
        }
        // 当为多选
        if (this.$parent.isMultiple) {
          return this.multiSelect.find(
            item => new Date(item).Format("yyyy") == time
          );
        }
        return this.dateValue.year == year.year;
      };
    }
  },
  methods: {
    init(date) {
      let yearMonthDay = this.getYearMonthDay(date);

      this.changedDate = {
        year: yearMonthDay.year
      };

      let nowYear = new Date().getFullYear();

      this.yearList = [];
      let year = yearMonthDay.year - (yearMonthDay.year % 9);
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
    handleYearClick(year) {
      let date = new Date(year.year, 0, 1);
      this.changedDate = year;

      // 单选或多选操作
      this.handleMultiple(date);
    },
    handleChange(type, step) {
      this.init(this.lastOrNext(type, step));
    }
  },
  watch: {
    value: {
      handler(value) {
        // 当为多选时
        if (Array.isArray(value)) {
          this.multiSelect = value;
          this.init(value.length && value[0] ? new Date(value[0]) : new Date());
        } else {
          if (value) {
            this.dateValue = this.getYearMonthDay(new Date(value));
          }
          this.init(value ? new Date(value) : new Date());
        }
      },
      immediate: true
    }
  }
};
</script>