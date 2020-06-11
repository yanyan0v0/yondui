<template>
  <div class="y-chart">
    <slot name="header">
      <div v-show="chartData.title" class="header">
        <span>{{chartData.title}}</span>
      </div>
    </slot>
    <component :is="componentName" v-bind="props" :on-data="chartData"></component>
  </div>
</template>

<script>
const DEFAULT_CHART = {
  yUnit: "个",
  type: "bar",
  title: "",
  data: []
};
import YBarLine from "./components/bar-line.vue";
import YPie from "./components/pie.vue";
export default {
  name: "y-chart",
  components: {
    YBarLine,
    YPie
  },
  props: {
    // 图表数据
    data: {
      type: Object,
      default: () => {
        return { ...DEFAULT_CHART };
      }
    }
  },
  data() {
    return {
      componentName: "y-bar-line",
      chartData: {},
      props: {}
    };
  },
  watch: {
    data: {
      handler(data) {
        switch (data.type) {
          case "pie": {
            this.componentName = "y-pie";
            break;
          }
          case "bar":
          case "line": {
            this.componentName = "y-bar-line";
            break;
          }
          default:
            break;
        }
        this.chartData = Object.assign({ ...DEFAULT_CHART }, data);
      },
      immediate: true
    }
  }
};
</script>