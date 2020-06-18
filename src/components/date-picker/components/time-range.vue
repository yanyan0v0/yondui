<template>
  <div class="y-date-picker-dropdown-range">
    <div class="y-date-picker-dropdown-range-time">
      <p>开始时间</p>
      <Time :value="value[0]" :show="show"></Time>
    </div>
    <div class="y-date-picker-dropdown-range-time">
      <p>结束时间</p>
      <Time :value="value[1]" order="second" :show="show"></Time>
    </div>
  </div>
</template>

<script>
import Time from "./time.vue";
export default {
  components: {
    Time
  },
  props: {
    show: Boolean,
    value: Array,
    format: String
  },
  data() {
    return {
      range: ["", ""]
    };
  },
  methods: {
    handleTimeEmit(time, order) {
      this.range[order == "first" ? 0 : 1] = time;
      this.$parent.handleTimeEmit(this.range);
    }
  }
};
</script>