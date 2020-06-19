export default {
  data() {
    return {
      multiTime: []
    }
  },
  computed: {
    // 处理用户设置的禁用函数
    checkDisabled() {
      return day => {
        let date = new Date(day.year, day.month ? day.month - 1 : 0, day.day || 1)
        return this.$parent.parentVm && this.$parent.parentVm.disabledDate && this.$parent.parentVm.disabledDate(date)
      }
    },
    // 处理范围选择时中间时间的样式变化
    checkRange() {
      return day => {
        if (this.range && this.range.length && this.range.length == 2) {
          let time = new Date(day.year, day.month ? day.month - 1 : 0, day.day || 1).Format('yyyy-MM-dd');
          return this.range[0] < time && this.range[1] > time;
        } else {
          return false;
        }
      };
    }
  },
  methods: {
    lastOrNext(type, step, date) {
      let year = 1970;
      let month = 0;
      let day = 1;
      if (date) {
        let _date = this.getYearMonthDay(date)
        year = _date.year
        month = _date.month
        day = _date.day
      } else {
        year = this.changedDate.year;
        month = this.changedDate.month || 1
        day = this.changedDate.day || 1
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
      if (this.$parent.multiple) {
        let time = date.Format("yyyy-MM-dd");
        let index = this.multiSelect.findIndex(item => new Date(item).Format("yyyy-MM-dd") == time);
        if (index != -1) {
          this.multiSelect.splice(index, 1);
          this.multiTime.splice(index, 1);
        } else {
          this.multiSelect.push(time);
          this.multiTime.push(this.$parent.inputValue || '');
        }
        this.$parent.handleEmit(this.multiSelect, this.multiTime)
      } else {
        this.$parent.handleEmit(date);
      }
    }
  }
}