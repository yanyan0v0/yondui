<template>
  <div class="y-rank">
    <div
      v-for="(row, index) in rankList"
      :key="index"
      :class="['y-rank-content', classPrefix + direction, {[activeClass]: activeIndex === index}]"
      @click="handleRowClick(row, index)"
    >
      <!-- 可以自定义标题 -->
      <slot name="title" :row="row" :color="getColors(index)[0]" :index="index">
        <div class="y-rank-title center-h">
          <p :title="sliceName(row.name)" :style="{'width': sliceWidth}">
            <span
              v-if="!hideRankIcon"
              :class="[{'show-top': showTop3}, `top-${index+1}`]"
            >{{index+1}}</span>
            {{sliceName(row.name)}}
          </p>
        </div>
      </slot>
      <!-- 进度条 -->
      <div class="y-rank-bar">
        <div
          class="y-rank-bar-inner"
          :style="{width: row.percent +'%', height: height + 'px', 'background-image': `linear-gradient(to right,${getColors(index)[0]},${getColors(index)[1]})`}"
        >
          <span v-if="textPlace == 'inner'" class="y-rank-bar-text y-rank-bar-text-inner">
            <span v-if="textType === 'number'">{{row.value}}</span>
            <span v-else>{{row.ratio}}%</span>
          </span>
        </div>
        <span v-if="textPlace == 'outer'" class="y-rank-bar-text y-rank-bar-text-outer">
          <span v-if="textType === 'number'">{{row.value}}</span>
          <span v-else>{{row.ratio}}%</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { BAR_COLORS } from "@/util/config";
export default {
  name: "y-rank",
  props: {
    // 排列方式 row/column
    direction: {
      type: String,
      default: "row"
    },
    // 是否隐藏排名序号
    hideRankIcon: {
      type: Boolean,
      default: false
    },
    // bar后面值的位置 none 不显示 outer 外面 inner 里面
    textPlace: {
      type: String,
      default: "outer"
    },
    // bar后面的值显示类型 number：具体指 percent: 百分比
    textType: {
      type: String,
      default: "number"
    },
    // 是否需要计算后展示
    onlyShow: {
      type: Boolean,
      default: false
    },
    // 颜色列表
    colors: {
      type: Array,
      default: () => BAR_COLORS
    },
    // top3颜色显示
    showTop3: {
      type: Boolean,
      default: true
    },
    // 每个bar的高
    height: {
      type: Number,
      default: 15
    },
    // 左边名称宽度 单位px
    leftWidth: {
      type: Number,
      default: 60
    },
    // 截取字符串的长度 默认为0代表不截取
    slice: {
      type: Number,
      default: 0
    },
    // 激活class
    activeClass: {
      type: String,
      default: ""
    },
    /**
     *  [{name: '',value: 0}]
     */
    data: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    data: {
      handler(data) {
        if (!data.length) {
          this.rankList = [];
          return;
        }
        this.rankList = [...data].sort((a, b) => {
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
      classPrefix: "y-rank-",
      // 当前点击的bar序号
      activeIndex: 0,
      rankList: []
    };
  },
  computed: {
    getColors() {
      return index => {
        return this.colors[index % this.colors.length];
      };
    },
    sliceName() {
      return name => {
        return this.slice ? name.slice(0, this.slice) : name;
      };
    },
    sliceWidth() {
      if (this.direction === "row") {
        return this.leftWidth + "px";
      } else {
        return "100%";
      }
    }
  },
  methods: {
    handleRowClick(row, index) {
      if (this.activeClass) {
        this.activeIndex = index;
      }
      this.$emit("on-click", row);
    }
  }
};
</script>

<style lang="less">
.y-rank {
  .full;
  overflow-y: auto;
  overflow-x: hidden;
  &-content {
    .pointer;
    padding: 5px;
    .y-rank-title {
      & > p {
        .text-over;
        margin-right: 10px;
        color: @text-color;
        font-size: 0.8rem;
        & > span {
          display: inline-block;
          width: 1rem;
          height: 1rem;
          line-height: 1rem;
          border-radius: 50%;
          color: @text-color;
          text-align: center;
          background-color: @keyword-color;
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
    }
    .y-rank-bar {
      .center-h;
      flex: 1;
      &-inner {
        .center-h;
        position: relative;
        border-radius: 50px;
      }
      &-text {
        margin-left: 5px;
        font-size: 12px;
      }
      &-text-outer {
        color: @text-color;
      }
      &-text-inner {
        position: absolute;
        right: 8px;
        color: #fff;
      }
    }
    &.y-rank-row {
      .flex-wrap;
    }
    &.y-rank-column {
      .flex-wrap(column);
      .y-rank-title {
        margin-bottom: 5px;
      }
    }
    &.y-rank-active {
      transform: scale(1.1);
    }
  }
}
</style>
