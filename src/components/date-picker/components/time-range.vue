<template>
  <div class="y-date-picker-dropdown-range">
    <Time :value="value[0]" :show="show"></Time>
    <Time :value="value[1]" order="second" :show="show"></Time>
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
    value: Array
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