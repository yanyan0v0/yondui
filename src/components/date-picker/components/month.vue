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
          :class="{'now-day': month.nowMonth || checkDisabled(month), 'active-day': checkSelected(month), 'hover-active-day': checkRange(month)}"
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
      monthList: [],
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
      return month => {
        let time = new Date(month.year, month.month - 1, 1).Format("yyyy-MM");
        // 当为范围选择时
        if (this.range && this.range.length) {
          return this.range.find(
            item => new Date(item).Format("yyyy-MM") == time
          );
        }
        // 当为多选
        if (this.$parent.multiple) {
          return this.multiSelect.find(
            item => new Date(item).Format("yyyy-MM") == time
          );
        }
        return (
          !month.disabled &&
          this.dateValue.year == month.year &&
          this.dateValue.month == month.month
        );
      };
    }
  },
  methods: {
    init(date) {
      let yearMonthDay = this.getYearMonthDay(date);
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
      let date = new Date(month.year, month.month - 1, 1);
      this.changedDate = month;

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