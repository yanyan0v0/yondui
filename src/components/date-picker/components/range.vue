<template>
  <div class="y-date-picker-dropdown-range">
    <component :is="componentName" :value="firstDate" :range="range"></component>
    <component ref="second" :is="componentName" order="second" :value="secondDate" :range="range"></component>
  </div>
</template>

<script>
import dateMixins from "./dateMixins";
import Day from "./day.vue";
import Month from "./month.vue";
import Year from "./year.vue";
export default {
  name: "y-date-picker-dropdown",
  mixins: [dateMixins],
  components: {
    Day,
    Month,
    Year
  },
  props: {
    value: Array
  },
  data() {
    return {
      firstDate: null,
      secondDate: null,
      range: []
    };
  },
  computed: {
    dateType() {
      return this.$parent.dateType;
    },
    componentName() {
      let name = "";
      switch (this.dateType) {
        case "year":
        case "yearrange":
          name = "Year";
          break;
        case "month":
        case "monthrange":
          name = "Month";
          break;
        case "date":
        case "daterange":
        default:
          name = "Day";
          break;
      }
      return name;
    }
  },
  methods: {
    handleEmit(date) {
      let time = date.Format("yyyy-MM-dd");
      if (this.range.length) {
        if (this.range.length == 1) {
          // 判断谁大谁小
          if (this.range[0] > time) {
            this.range = [time, this.range[0]];
          } else if (this.range[0] < time) {
            this.range = [this.range[0], time];
          }
          this.$parent.handleEmit(this.range);
        } else {
          this.range = [time];
        }
      } else {
        this.range.push(time);
      }
    }
  },
  watch: {
    value: {
      handler(value) {
        // 根据4种情况分别判断
        let nextDate = null;
        // 1、都为空
        if (!value[0] && !value[1]) {
          this.firstDate = value[0];
          if (this.dateType == "yearrange") {
            nextDate = this.lastOrNext("year", 9, new Date());
          } else if (this.dateType == "monthrange") {
            nextDate = this.lastOrNext("year", 1, new Date());
          } else {
            nextDate = this.lastOrNext("month", 1, new Date());
          }
          this.secondDate = nextDate;
        }
        // 2、第一个不为空
        else if (value[0] && !value[1]) {
          this.firstDate = value[0];

          let firstDate = new Date(value[0]);
          if (this.dateType == "yearrange") {
            nextDate = this.lastOrNext("year", 9, firstDate);
          } else if (this.dateType == "monthrange") {
            nextDate = this.lastOrNext("year", 1, firstDate);
          } else {
            nextDate = this.lastOrNext("month", 1, firstDate);
          }
          this.secondDate = nextDate;
        }
        // 3、第二个不为空
        else if (!value[0] && value[1]) {
          this.secondDate = value[1];

          let secondDate = new Date(value[1]);
          if (this.dateType == "yearrange") {
            nextDate = this.lastOrNext("year", -9, secondDate);
          } else if (this.dateType == "monthrange") {
            nextDate = this.lastOrNext("year", -1, secondDate);
          } else {
            nextDate = this.lastOrNext("month", -1, secondDate);
          }
          this.firstDate = nextDate;
        }
        // 4、都不为空
        else {
          let firstDate = new Date(value[0]);
          let secondDate = new Date(value[1]);

          let firstYearMonthDay = this.getYearMonthDay(firstDate);
          let secondYearMonthDay = this.getYearMonthDay(secondDate);
          if (this.dateType == "yearrange") {
            // 判断value[0]和value[1]是否是在同一个9年内
            let firstYear =
              firstYearMonthDay.year - (firstYearMonthDay.year % 9);
            if (
              firstYear < secondYearMonthDay.year &&
              firstYear + 9 > secondYearMonthDay.year
            ) {
              // 是在同一个9年内
              this.firstDate = firstDate;
              this.secondDate = this.lastOrNext("year", 9, firstDate);
            } else {
              // 不在同一个9年内
              this.firstDate = firstDate;
              this.secondDate = secondDate;
            }
          } else if (this.dateType == "monthrange") {
            // 判断value[0]和value[1]是否是在同一年内
            if (firstYearMonthDay.year == secondYearMonthDay.year) {
              // 是在同一年内
              this.firstDate = firstDate;
              this.secondDate = this.lastOrNext("year", 1, firstDate);
            } else {
              // 不在同一年内
              this.firstDate = firstDate;
              this.secondDate = secondDate;
            }
          } else {
            // 判断value[0]和value[1]是否是在同一月内
            if (firstYearMonthDay.month == secondYearMonthDay.month) {
              // 是在同一月内
              this.firstDate = firstDate;
              this.secondDate = this.lastOrNext("month", 1, firstDate);
            } else {
              // 不在同一月内
              this.firstDate = firstDate;
              this.secondDate = secondDate;
            }
          }
        }

        this.range = [
          value[0] ? new Date(value[0]).Format("yyyy-MM-dd") : "",
          value[1] ? new Date(value[1]).Format("yyyy-MM-dd") : ""
        ];
      },
      immediate: true
    }
  }
};
</script>