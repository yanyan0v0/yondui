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
export default {
  name: "y-chart",
  components: {
    "y-bar-line": () => import("./components/bar-line.vue"),
    "y-pie": () => import("./components/pie.vue")
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

<style lang="less">
.y-chart {
  .main;
  .header {
    .center-h;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 5px 10px 0;
    justify-content: space-between;
    z-index: 1;
    pointer-events: none;
    & > span {
      font-size: 16px;
      i {
        color: @primary-color;
        margin-right: 5px;
      }
    }
  }
}
</style>