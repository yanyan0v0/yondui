export default {
  methods: {
    lastOrNext(type, step) {
      let year = this.changedDate.year;
      let month = this.changedDate.month || 1;
      let day = this.changedDate.day || 1;
      if (type == "year") {
        console.log(year + step, month - 1, day)
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