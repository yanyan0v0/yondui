<template>
  <div ref="dom" class="full"></div>
</template>

<script>
// 引入 ECharts 主模块
var echarts = require("echarts/lib/echarts");
// 引入柱状图
require("echarts/lib/chart/bar");
// 引入折线图
require("echarts/lib/chart/line");
// 引入提示框和标题组件
require("echarts/lib/component/tooltip");
// 引入工具栏
require("echarts/lib/component/toolbox");
// 引入图例
require("echarts/lib/component/legend");
require("echarts/lib/component/legendScroll");

import { THEME_COLORS, BAR_COLORS } from "@/util/config";
export default {
  props: {
    /**
     * {
     *  type 类型 可以是'bar'||'line'||['bar', 'line']
     *  title 标题
     *  hideYLabel 是否显示y轴label 默认false
     *  unit 单位 当为双y轴时,需要为二项数组
     *  xName x轴单位/名称
     *  data series的data
     *  hideRadius 柱状图隐藏圆角 默认false
     *  legend 类目 存在时默认不显示label 数组内必须是字符串类型 位置默认在图表下方
     *  hideLabel 是否隐藏label 默认为false
     *  showStack 是否堆叠柱状图 默认false
     *  showArea 每个数据列是否显示面积，只适用于折线图 默认为false
     *  showDiffColor 每个数据列是否显示不同的颜色 默认为false
     *  top 容器据顶部的距离 默认为60px
     *  left 容器据左边的距离 默认为40px
     *  bottom 容器据底部的距离 默认为30px legend存在时默认为50px
     *  xRotate X轴的旋转角度
     *  xLength X轴label需要截取的长度 默认为不截取
     *  showToolbox 是否显示工具栏 默认false
     *  labelColor label的颜色 默认#808695
     *  showMarkPoint 是否标注最大值和最小值 默认false
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
        // 数据过万处理
        this.data = this.formatOver(chartData);
        // 处理自定义颜色
        this.handleColors(chartData);

        if (this.dom) {
          this.dom.setOption(this.initDom(this.data), true);
        } else {
          this.$nextTick(() => {
            this.dom = echarts.init(this.$refs.dom);
            this.dom.setOption(this.initDom(this.data));
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
      dom: null,
      data: {},
      colors: []
    };
  },
  methods: {
    // 当legend存在时 bottom默认为50
    handleBottom(chartData) {
      let defaultBottom = chartData.legend && chartData.legend.length ? 50 : 30;
      return chartData.bottom || defaultBottom;
    },
    initDom(chartData) {
      return {
        legend: {
          type: "scroll",
          textStyle: {
            color: THEME_COLORS.title,
            fontSize: 12 * this.scale
          },
          itemWidth: 16 * this.scale, // 设置宽度
          itemHeight: 12 * this.scale, // 设置高度
          align: "left",
          bottom: 0,
          pageTextStyle: {
            color: THEME_COLORS.title
          },
          pageIconColor: THEME_COLORS.primaryColor,
          data:
            chartData.legend && chartData.legend.length ? chartData.legend : []
        },
        title: {
          show: chartData.showTitle,
          text: chartData.title || "",
          top: "top",
          textStyle: {
            color: THEME_COLORS.title
          }
        },
        toolbox: {
          show: chartData.showToolbox,
          zlevel: 2020,
          z: 2020,
          feature: {
            magicType: {
              type: ["line", "bar"]
            },
            saveAsImage: {}
          },
          iconStyle: {
            normal: {
              borderColor: chartData.labelColor || THEME_COLORS.subtext
            }
          }
        },
        tooltip: {
          confine: true,
          trigger: "axis"
        },
        grid: {
          show: true,
          top: chartData.top || 60,
          left: chartData.left || 40,
          bottom: this.handleBottom(chartData),
          borderColor: "transparent"
        },
        xAxis: {
          name: chartData.xName || "",
          nameTextStyle: {
            // padding: [0, 0, 0, 5]
          },
          type: "category",
          data: chartData.data.map(item => item.name),
          // 刻度线
          axisLine: {
            lineStyle: {
              color: chartData.labelColor || THEME_COLORS.subtext
            }
          },
          // 刻度标签
          axisLabel: {
            fontSize: 12 * this.scale,
            rotate: chartData.xRotate || 0,
            color: chartData.labelColor || THEME_COLORS.subtext,
            formatter: function(value) {
              return chartData.xLength ? value.slice(0, 8) : value;
            }
          },
          // 刻度标识
          axisTick: {
            show: true,
            lineStyle: {
              color: chartData.labelColor || THEME_COLORS.subtext
            }
          }
        },
        yAxis: this.handleYAxis(chartData),
        series: this.handleSeries(chartData.type, chartData)
      };
    },
    handleYAxis(data) {
      if (Array.isArray(data.unit) && data.unit.length === 2) {
        return [
          this.generateY(data.unit[0], data, 0),
          this.generateY(data.unit[1] || data.unit[0], data, 1)
        ];
      } else {
        return this.generateY(
          typeof data.unit === "undefined" ? "" : data.unit || data.unit[0],
          data
        );
      }
    },
    generateY(unit, chartData, index) {
      if (index != undefined) {
        let list = chartData.data.map(item => item.value[index]);
        let min = Math.min(...list);
        if (min >= 0) {
          min = 0;
        } else {
          if (min >= -12) min = -12;
          else if (min > -20 && min < -12) min = -24;
          else min = Math.floor(min / 10) * 12;
        }
        let max = Math.max(...list);
        if (max > 0) {
          if (max <= 12) max = 12;
          else if (max > 12 && max < 20) max = 24;
          else max = Math.ceil(max / 10) * 12;
        } else {
          max = 0;
        }
        return {
          name: unit || "",
          nameTextStyle: {
            color: chartData.labelColor || THEME_COLORS.subtext,
            fontSize: 12 * this.scale
          },
          // type: 'value',
          axisLine: {
            lineStyle: {
              color: chartData.labelColor || THEME_COLORS.primaryColor
            }
          },
          min,
          max,
          // splitNumber: 5,
          interval: (max - min) / 6,
          // 刻度标签
          axisLabel: {
            show: !chartData.hideYLabel,
            fontSize: 12 * this.scale,
            color: chartData.labelColor || THEME_COLORS.subtext
          },
          // 刻度标识
          axisTick: {
            show: !chartData.hideYLabel
          },
          splitLine: {
            lineStyle: {
              color: chartData.labelColor || THEME_COLORS.subtext,
              type: "dashed",
              opacity: 0.3
            }
          }
        };
      } else {
        return {
          name: unit || "",
          nameTextStyle: {
            color: chartData.labelColor || THEME_COLORS.subtext,
            fontSize: 12 * this.scale
          },
          // type: 'value',
          axisLine: {
            lineStyle: {
              color: chartData.labelColor || THEME_COLORS.primaryColor
            }
          },
          // 刻度标签
          axisLabel: {
            show: !chartData.hideYLabel,
            fontSize: 12 * this.scale,
            color: chartData.labelColor || THEME_COLORS.subtext
          },
          // 刻度标识
          axisTick: {
            show: !chartData.hideYLabel
          },
          splitLine: {
            lineStyle: {
              color: chartData.labelColor || THEME_COLORS.subtext,
              type: "dashed",
              opacity: 0.3
            }
          }
        };
      }
    },
    handleSeries(type = ["bar"], data) {
      let series = [];
      if (type.length === 1) {
        let functionName =
          type[0].trim() === "bar" ? "generateBar" : "generateLine";
        if (data.legend && data.legend.length) {
          for (let j in data.legend) {
            series.push(this[functionName](data, Number(j), data.legend[j]));
          }
        } else {
          series.push(this[functionName](data));
        }
      } else {
        for (let i in type) {
          let functionName =
            type[i].trim() === "bar" ? "generateBar" : "generateLine";
          series.push(
            this[functionName](
              data,
              Number(i),
              data.legend && data.legend.length ? data.legend[i] : ""
            )
          );
        }
        // if (data.legend && data.legend.length) {
        //   let l = type.length - 1;
        //   for (let j in data.legend) {
        //     series.push(this.generateLine(data, -1, data.legend[j], j + l));
        //   }
        // }
      }
      return series;
    },
    generateBar(chartData, i = 0, name = "") {
      let COLORS = this.colors;
      return {
        name,
        data: chartData.data.map((item, index) => {
          let value = 0;
          if (Array.isArray(item.value)) {
            value = item.value[i] || 0;
          } else {
            value = item.value || 0;
          }
          if (chartData.showDiffColor) {
            return {
              value,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(
                    0,
                    1,
                    0,
                    0,
                    [
                      {
                        offset: 0,
                        color: COLORS[index % COLORS.length][0] // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: COLORS[index % COLORS.length][1] // 100% 处的颜色
                      }
                    ],
                    false
                  )
                }
              }
            };
          } else {
            return value;
          }
        }),
        type: "bar",
        stack: chartData.showStack,
        yAxisIndex:
          Array.isArray(chartData.unit) && chartData.unit.length === 2 ? i : 0,
        itemStyle: {
          normal: {
            barBorderRadius: chartData.hideRadius ? 0 : 1000,
            color: new echarts.graphic.LinearGradient(
              0,
              1,
              0,
              0,
              [
                {
                  offset: 0,
                  color: COLORS[i][0] // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: COLORS[i][1] // 100% 处的颜色
                }
              ],
              false
            )
          }
        },
        label: {
          show: chartData.hideLabel ? false : i === 0 && !name,
          position: "top",
          fontSize: 12 * this.scale,
          color: chartData.labelColor || THEME_COLORS.subtext
        },
        markPoint: {
          data: chartData.showMarkPoint
            ? [{ type: "max" }, { type: "min" }]
            : []
        },
        barWidth:
          (chartData.legend ? ~~(30 / chartData.legend.length) : 30) + "%",
        barMaxWidth: 30
      };
    },
    generateLine(chartData, i = 0, name = "") {
      let COLORS = this.colors;
      return {
        name,
        data: chartData.data.map(item => {
          if (Array.isArray(item.value)) {
            return item.value[i] || 0;
          } else {
            return item.value || 0;
          }
        }),
        type: "line",
        areaStyle: chartData.showArea,
        yAxisIndex:
          Array.isArray(chartData.unit) && chartData.unit.length === 2 ? i : 0,
        label: {
          show: chartData.hideLabel ? false : i === 0 && !name,
          fontSize: 12 * this.scale,
          position: "top",
          color: THEME_COLORS.subtext
        },
        markPoint: {
          data: chartData.showMarkPoint
            ? [{ type: "max" }, { type: "min" }]
            : []
        },
        itemStyle: {
          borderWidth: 3,
          color: COLORS[i][1]
        }
      };
    },
    formatOver(data) {
      let chartData = JSON.parse(JSON.stringify(data));
      if (chartData.data.length) {
        // 将type转化成数组
        if (!Array.isArray(chartData.type)) {
          chartData.type = [chartData.type];
        }
        // 将unit转化成数组
        if (!Array.isArray(chartData.unit)) {
          if (chartData.type.length > 1) {
            chartData.unit = [chartData.unit, chartData.unit];
          } else {
            chartData.unit = [chartData.unit];
          }
        }
        for (let i in chartData.type) {
          // 当数据不存在0~10000的数据 且都不为0
          let allZero = true;
          let isOver10000 = chartData.data.every(item => {
            let _value = Array.isArray(item.value)
              ? Math.abs(item.value[i])
              : Math.abs(item.value);
            if (_value != 0) allZero = false;
            return _value == 0 || _value >= 10000;
          });
          if (allZero) isOver10000 = false;
          if (isOver10000) {
            chartData.unit[i] = "万" + chartData.unit[i];
            for (let item of chartData.data) {
              if (Array.isArray(item.value)) {
                item.value[i] = Number(item.value[i]) / 10000;
              } else {
                item.value = Number(item.value) / 10000;
              }
            }
          }
        }
      }
      return chartData;
    },
    handleColors(chartData) {
      this.colors = [];
      if (chartData.colors && chartData.colors.length) {
        for (let color of chartData.colors) {
          if (typeof color == "string") {
            this.colors.push([color, color]);
          } else {
            if (color.length == 1) {
              this.colors.push([color[0], color[0]]);
            } else {
              this.colors.push(color[0], color[1]);
            }
          }
        }
      } else {
        this.colors = BAR_COLORS;
      }
    }
  },
  beforeDestroy() {
    this.dom.off("click", "series");
  }
};
</script>
