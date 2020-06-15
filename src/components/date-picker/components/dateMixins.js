export default {
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
    }
  },
}