export default {
  computed: {
    // 处理范围选择时中间时间的样式变化
    checkRange() {
      return day => {
        if (this.range && this.range.length && this.range.length == 2) {
          let time = new Date(day.year, day.month ? day.month - 1 : 0, day.day || 1).getTime();
          return this.range[0] < time && this.range[1] > time;
        } else {
          return false;
        }
      };
    }
  },
  methods: {
    lastOrNext(type, step, date) {
      let year = this.changedDate.year;
      let month = this.changedDate.month || 1;
      let day = this.changedDate.day || 1;
      if (date) {
        let _date = this.getYearMonthDay(date)
        year = _date.year
        month = _date.month
        day = _date.day
      }
      if (type == "year") {
        return new Date(year + step, month - 1, day)
      } else {
        return new Date(year, month + step - 1, day)
      }
    },
    getYearMonthDay(date) {
      return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
      };
    },
    handleMultiple(date) {
      let time = date.getTime();
      let index = this.multiSelect.findIndex(item => item == time);
      if (index != -1) {
        this.multiSelect.splice(index, 1);
      } else {
        this.multiSelect.push(time);
      }
    }
  },
}