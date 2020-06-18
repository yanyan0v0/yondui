<template>
  <div class="y-time-picker-dropdown-range">
    <div class="y-time-picker-dropdown-range-content">
      <p>开始时间</p>
      <y-time :value="value[0]" :show="show" @on-change="handleChange"></y-time>
    </div>
    <div class="y-time-picker-dropdown-range-content">
      <p>结束时间</p>
      <y-time :value="value[1]" order="second" :show="show" @on-change="handleChange"></y-time>
    </div>
  </div>
</template>

<script>
import YTime from "./time.vue";
export default {
  name: "y-time-picker-dropdown-range",
  components: {
    YTime
  },
  props: {
    show: Boolean,
    value: Array
  },
  data() {
    return {
      range: ["", ""]
    };
  },
  methods: {
    handleChange(time, order) {
      this.range[order == "first" ? 0 : 1] = time;
      this.$emit("on-change", this.range);
    }
  }
};
</script>