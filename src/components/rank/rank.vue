<template>
  <div class="ct-barrank" :style="`transform: scale(${scale});`">
    <div
      v-for="(row, index) in rankList"
      :key="index"
      :class="['content', direction, customClass, {'active-row': showClick && activeIndex === index}]"
      @click="handleRowClick(row, index)"
    >
      <!-- 可以自定义标题 -->
      <slot name="title" :row="row" :color="getColors(index)[0]" :index="index">
        <p
          class="left"
          :class="{'text-over': direction === 'row' && !Boolean(slice)}"
          :title="sliceName(row.name)"
          :style="{'width': sliceWidth}"
        >
          <span v-if="!hideRankIcon" :class="[{'show-top': showTop3}, `top-${index+1}`]">{{index+1}}</span>
          {{sliceName(row.name)}}
        </p>
      </slot>
      <!-- 自定义进度条 -->
      <div class="ct-custom ivu-progress progress-custom">
        <div class="ivu-progress-inner" :style="`width: ${row.percent}%;height: ${height+0.5}rem`">
          <div
            class="ivu-progress-bg"
            :style="`height: 100%;background-image: linear-gradient(to right,${getColors(index)[0]},${getColors(index)[1]});`"
          ></div>
        </div>
        <span v-show="!hideBarValue" class="ivu-progress-text">
          <span v-if="barValueMode === 'number'">{{row.value}}{{onData.unit}}</span>
          <span v-else>{{row.ratio}}%</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { BAR_COLORS } from "@/util/config";
export default {
  name: "ranker",
  props: {
    // 排列方式 row/column
    direction: {
      type: String,
      default: "row"
    },
    // 是否需要计算后展示
    onlyShow: {
      type: Boolean,
      default: false
    },
    // 是否隐藏排名序号
    hideRankIcon: {
      type: Boolean,
      default: false
    },
    // 是否显示bar后面的值
    hideBarValue: {
      type: Boolean,
      default: false
    },
    // bar后面的值显示类型 number：具体指 percent: 百分比
    barValueMode: {
      type: String,
      default: "number"
    },
    // 每条颜色是否相同
    showColors: {
      type: Boolean,
      default: true
    },
    // top3颜色显示
    showTop3: {
      type: Boolean,
      default: true
    },
    // 自定义class
    customClass: {
      type: String,
      default: ""
    },
    // 每个bar的高
    height: {
      type: Number,
      default: 0.4
    },
    // 左边名称宽度 单位rem
    leftWidth: {
      type: Number,
      default: 6
    },
    // 截取字符串的长度 默认为0代表不截取
    slice: {
      type: Number,
      default: 0
    },
    // 放大缩小倍数
    scale: {
      type: Number,
      default: 1
    },
    // 激活点击事件
    showClick: {
      type: Boolean,
      default: false
    },
    /**
     * {
     *   data: [{name: '',value: 0}]
     *   unit
     * }
     */
    onData: {
      type: Object,
      required: true
    }
  },
  watch: {
    onData: {
      handler(data) {
        if (!data.data.length) {
          this.rankList = [];
          return;
        }
        this.rankList = [...data.data].sort((a, b) => {
          return b.value - a.value;
        });
        let total = this.rankList
          .map(item => item.value)
          .reduce((a, b) => a + b);
        let max = this.rankList[0].value;
        for (let i in this.rankList) {
          if (i === 0) {
            this.rankList[i].percent = 99.9;
            if (this.onlyShow) {
              this.rankList[i].ratio = this.rankList[i].value;
            } else {
              this.rankList[i].ratio = (
                (100 * this.rankList[i].value) /
                total
              ).toFixed(2);
            }
          } else {
            if (max) {
              this.rankList[i].percent = parseInt(
                (100 * this.rankList[i].value) / max
              );
              if (this.onlyShow) {
                this.rankList[i].ratio = this.rankList[i].value;
              } else {
                this.rankList[i].ratio = (
                  (100 * this.rankList[i].value) /
                  total
                ).toFixed(2);
              }
            } else {
              this.rankList[i].percent = 0;
              if (this.onlyShow) {
                this.rankList[i].ratio = this.rankList[i].value;
              } else {
                this.rankList[i].ratio = 0;
              }
            }
          }
        }
      },
      immediate: true,
      deep: true
    }
  },
  data() {
    return {
      // 当前点击的bar序号
      activeIndex: 0,
      rankList: []
    };
  },
  computed: {
    getColors() {
      return index => {
        if (this.showColors) return BAR_COLORS[index % BAR_COLORS.length];
        else return ["#31D8FE", "#81E7FE"];
      };
    },
    sliceName() {
      return name => {
        return this.slice ? name.slice(0, this.slice) : name;
      };
    },
    sliceWidth() {
      if (this.direction === "row") {
        return (
          (this.slice
            ? (1.8 + 1.5 * this.slice) / this.scale
            : this.leftWidth) + "rem"
        );
      } else {
        return "100%";
      }
    }
  },
  methods: {
    handleRowClick(row, index) {
      if (this.showClick) {
        this.activeIndex = index;
      }
      this.$emit("on-click", row);
    }
  }
};
</script>

<style lang="less" scoped>
.ct-barrank {
  .full;
  overflow-y: auto;
  overflow-x: hidden;
  .content {
    margin: 0.5rem;
    .left {
      margin-right: 1rem;
      color: #ddd;
      font-size: 0.8rem;
      & > span:first-child {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
        border-radius: 50%;
        color: #1a3e81;
        text-align: center;
        background-color: #7ecaea;
      }
      .show-top.top-1 {
        background-image: linear-gradient(to right bottom, #f55577, #f67094);
      }
      .show-top.top-2 {
        background-image: linear-gradient(to right bottom, #f88b30, #f8c252);
      }
      .show-top.top-3 {
        background-image: linear-gradient(to right bottom, #899eea, #b391e8);
      }
    }
    .left.text-over {
      .text-over;
    }
    .ct-custom.progress-custom {
      .center-h;
      flex: 1;
      .ivu-progress-text {
        min-width: 3rem;
        color: @primary-color;
        font-size: 0.8rem;
      }
    }
  }
  .content.row {
    .flex-wrap;
  }
  .content.column {
    .flex-wrap(column);
    .left {
      margin-bottom: 0.1rem;
    }
  }
  .content.active-row {
    background-color: #3393fb;
    .ivu-progress-text {
      color: @warning-color;
    }
  }
}
</style>
