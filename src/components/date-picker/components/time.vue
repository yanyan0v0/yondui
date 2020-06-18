<template>
  <div class="flex">
    <ul v-for="time in filterTimeList" :key="time.type" :ref="time.type">
      <li class="first-li">{{time.name}}</li>
      <li
        v-for="num in filterTime(time)"
        :key="num"
        :class="{'active-li': checkActive(formatNum(filterTime(time), num), time.type)}"
        @click="handleTimeClick(formatNum(filterTime(time), num), time.type)"
      >{{formatNum(filterTime(time), num)}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "y-date-picker-dropdown-time",
  props: {
    value: [Date, String, Array],
    show: Boolean,
    format: String,
    // 当为范围选择时，判断为第一个还是第二个
    order: {
      type: String,
      default: "first"
    }
  },
  data() {
    return {
      timeList: [
        {
          name: "时",
          type: "hour",
          max: 24
        },
        {
          name: "分",
          type: "minute",
          max: 60
        },
        {
          name: "秒",
          type: "second",
          max: 60
        }
      ],
      hour: "00",
      minute: "00",
      second: "00"
    };
  },
  computed: {
    // 根据函数判断需要显示自定义的时分秒
    filterTime() {
      return time => {
        if (this.$parent.parentVm && this.$parent.parentVm.filterTime) {
          return this.$parent.parentVm.filterTime(time.type);
        } else {
          return time.max;
        }
      };
    },
    // 根据format格式判断需要显示的时分秒
    filterTimeList() {
      if (this.format) {
        return this.timeList.filter(
          item => this.format.indexOf(item.type[0]) != -1
        );
      } else {
        return this.timeList;
      }
    },
    formatNum() {
      return (time, num) => {
        if (typeof time == "number") {
          num--;
        }
        return num < 10 ? "0" + num : String(num);
      };
    },
    checkActive() {
      return (num, type) => {
        if (type == "hour") return this.hour == num;
        else if (type == "minute") return this.minute == num;
        else return this.second == num;
      };
    }
  },
  methods: {
    handleTimeClick(num, type) {
      switch (type) {
        case "hour":
          this.hour = num;
          break;
        case "minute":
          this.minute = num;
          break;
        case "second":
          this.second = num;
          break;
      }
      this.handleChange();
    },
    handleChange() {
      if (this.format) {
        let text = "";
        if (this.format.indexOf("h") != -1) text += this.hour;
        if (this.format.indexOf("m") != -1) text += `:${this.minute}`;
        if (this.format.indexOf("s") != -1) text += `:${this.second}`;
        this.$parent.handleTimeEmit(text, this.order);
      } else {
        this.$parent.handleTimeEmit(
          `${this.hour}:${this.minute}:${this.second}`,
          this.order
        );
      }
    },
    scrollTo() {
      if (this.show) {
        this.$refs.hour &&
          this.$refs.hour[0].getElementsByClassName("active-li").length &&
          this.$refs.hour[0]
            .getElementsByClassName("active-li")[0]
            .scrollIntoView({ block: "center" });
        this.$refs.minute &&
          this.$refs.minute[0].getElementsByClassName("active-li").length &&
          this.$refs.minute[0]
            .getElementsByClassName("active-li")[0]
            .scrollIntoView({ block: "center" });
        this.$refs.second &&
          this.$refs.second[0].getElementsByClassName("active-li").length &&
          this.$refs.second[0]
            .getElementsByClassName("active-li")[0]
            .scrollIntoView({ block: "center" });
      }
    }
  },
  watch: {
    value: {
      handler(value) {
        if (value) {
          let date = null;
          // 当为多选时
          if (Array.isArray(value)) {
            date = value.length && value[0] ? value[0] : "";
          } else {
            date = value;
          }
          if (date) {
            let time = new Date(date).Format("hh:mm:ss").split(":");
            this.hour = time[0];
            this.minute = time[1];
            this.second = time[2];
            this.$nextTick(() => {
              this.scrollTo();
            });
          }
        }
        this.handleChange();
      },
      immediate: true
    },
    show() {
      this.scrollTo();
    }
  }
};
</script>