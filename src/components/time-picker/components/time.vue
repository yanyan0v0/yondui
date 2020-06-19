<template>
  <div class="y-time-picker-dropdown-time">
    <ul v-for="time in filterTimeList" :key="time.type" :ref="time.type">
      <li class="first-time">{{time.name}}</li>
      <li
        v-for="num in time.max"
        :key="num"
        v-show="checkShow(num - 1, time.type)"
        :class="{'active-time': checkActive(formatNum(num), time.type)}"
        @click="handleTimeClick(formatNum(num), time.type)"
      >{{formatNum(num)}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "y-time-picker-dropdown-time",
  inject: ["timeRoot"],
  props: {
    value: [String, Array],
    show: Boolean,
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
    // 根据format格式判断需要显示的时分秒
    filterTimeList() {
      if (this.timeRoot.format) {
        return this.timeList.filter(
          item => this.timeRoot.format.indexOf(item.type[0]) != -1
        );
      } else {
        return this.timeList;
      }
    },
    formatNum() {
      return num => {
        num--;
        return num < 10 ? "0" + num : String(num);
      };
    },
    checkShow() {
      return (num, type) => {
        return this.timeRoot.filterTime
          ? this.timeRoot.filterTime(num, type, this.order)
          : true;
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
      this.$emit(
        "on-change",
        `${this.hour}:${this.minute}:${this.second}`,
        this.order
      );
    },
    scrollTo() {
      if (this.show) {
        this.$refs.hour &&
          this.$refs.hour[0].getElementsByClassName("active-time").length &&
          this.$refs.hour[0]
            .getElementsByClassName("active-time")[0]
            .scrollIntoView({ block: "center" });
        this.$refs.minute &&
          this.$refs.minute[0].getElementsByClassName("active-time").length &&
          this.$refs.minute[0]
            .getElementsByClassName("active-time")[0]
            .scrollIntoView({ block: "center" });
        this.$refs.second &&
          this.$refs.second[0].getElementsByClassName("active-time").length &&
          this.$refs.second[0]
            .getElementsByClassName("active-time")[0]
            .scrollIntoView({ block: "center" });
      }
    }
  },
  watch: {
    value: {
      handler(value) {
        if (value) {
          let time = this.timeRoot.handleFormat(value).normal.split(":");
          this.hour = time[0] || "00";
          this.minute = time[1] || "00";
          this.second = time[2] || "00";
          this.$nextTick(() => {
            this.scrollTo();
          });
        } else {
          this.hour = "00";
          this.minute = "00";
          this.second = "00";
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