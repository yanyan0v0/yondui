<template>
  <div ref="dom" class="full"></div>
</template>

<script>
// 引入 ECharts 主模块
var echarts = require("echarts/lib/echarts");
// 引入饼状图
require("echarts/lib/chart/pie");
// 引入提示框和标题组件
require("echarts/lib/component/tooltip");

import { THEME_COLORS, PIE_COLORS } from "@/util/config";
export default {
  props: {
    /**
     * {
     *  title 标题
     *  data series的data
     *  orient legend排列方式 vertical垂直(默认) horizontal水平
     *  outerRadius 圆半径 默认为50%
     *  innerRadius 最小圆半径 默认为30%
     *  hideLabel 是否隐藏label 默认为false
     *  hideLegend 是否隐藏legend 默认为false
     *  centerY 圆心Y方向位置 默认为50%
     *  formatter label展示文本格式
     *  tooltipFormatter tooltip展示文本格式
     *  top legend位置 默认为middle 可选值 具体的值/百分比/auto/top/middle/bottom
     *  labelPosition label位置 默认为outside 可选值 outside/inside
     *  borderWidth 默认为0
     *  borderColor 默认为#fff
     *  smallerData 设置双环饼图的额外参数 默认不显示
     * }
     */
    onData: {
      type: Object,
      default: () => {}
    },
    // 当图表父容器的大小改变时， 其对应的文字大小也同时改变
    scale: {
      type: Number,
      default: 1
    }
  },
  watch: {
    onData: {
      handler(chartData) {
        if (this.dom) {
          this.dom.setOption(this.initDom(chartData), true);
        } else {
          this.$nextTick(() => {
            this.dom = echarts.init(this.$refs.dom);
            this.dom.setOption(this.initDom(chartData));
            this.dom.on("click", "series", params => {
              this.$emit("on-click", params);
            });
          });
        }
      },
      immediate: true,
      deep: true
    }
  },
  data() {
    return {
      dom: null
    };
  },
  methods: {
    initDom(chartData) {
      let series = [this.handlerSeries(chartData)];
      if (chartData.smallerData) {
        series.push(
          this.handlerSeries(chartData.smallerData, series[0].center[0])
        );
      }
      return {
        tooltip: {
          trigger: "item",
          confine: true,
          formatter: chartData.formatter || "{a} <br/>{b}: {c} ({d}%)"
        },
        grid: {
          containLabel: true
        },
        legend: {
          show: !chartData.hideLegend,
          type: "scroll",
          orient: chartData.orient || "vertical",
          left: chartData.top === "bottom" ? "center" : "right",
          top: chartData.top || "middle",
          align: "left",
          textStyle: {
            color: chartData.labelColor || THEME_COLORS.subtext,
            fontSize: 12 * this.scale
          },
          pageTextStyle: {
            color: chartData.labelColor || THEME_COLORS.subtext
          },
          pageIconColor: THEME_COLORS.primaryColor,
          itemWidth: 12 * this.scale, // 设置宽度
          itemHeight: 12 * this.scale, // 设置高度
          data: chartData.data.map(item => item.name)
        },
        series
      };
    },
    handlerSeries(options, centerX) {
      const COLORS = options.colors || PIE_COLORS;
      return {
        name: options.title,
        type: "pie",
        // top: options.top || 40,

        radius: [options.innerRadius || "30%", options.outerRadius || "50%"],
        center: [
          centerX ||
            (options.hideLegend || options.top === "bottom" ? "50%" : "40%"),
          options.centerY || "50%"
        ],
        label: {
          normal: {
            show: !options.hideLabel,
            position: options.labelPosition || "outside",
            fontSize: 12 * this.scale,
            formatter: "{b}\n{d}%",
            alignTo: "labelLine",
            bleedMargin: 5
          }
        },
        labelLine: {
          normal: {
            show: !options.hideLabel
          }
        },
        data: options.data.map((item, index) => {
          return {
            ...item,
            itemStyle: {
              color: COLORS[index],
              borderWidth:
                typeof options.borderWidth !== "undefined"
                  ? options.borderWidth
                  : 0,
              borderColor: options.borderColor || "#fff"
            }
          };
        })
      };
    }
  },
  beforeDestroy() {
    this.dom.off("click", "series");
  }
};
</script>
