<template>
  <div class="y-date-picker-dropdown-range">
    <component :is="componentName" :value="value[0]"></component>
    <component :is="componentName" order="second" :value="value[1]"></component>
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
  }
};
</script>