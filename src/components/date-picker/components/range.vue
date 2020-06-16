<template>
  <div class="y-date-picker-dropdown-range">
    <component :is="componentName" :value="value[0]" :range="range"></component>
    <component ref="second" :is="componentName" order="second" :value="value[1]" :range="range"></component>
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
      let time = date.getTime();
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
  }
};
</script>