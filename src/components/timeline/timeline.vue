<template>
  <div class="y-timeline" v-scrollbottom="handleLoad">
    <div class="y-timeline-header" v-show="data.length">
      <div class="y-timeline-header-content" :style="{'margin-left': leftWidth + 'px'}">
        <span class="y-timeline-header-content-circle"></span>
        <span class="y-timeline-header-content-line"></span>
      </div>
    </div>
    <ul class="y-timeline-content">
      <li v-for="(item, index) in data" :key="index">
        <div class="y-timeline-content-left" v-if="leftWidth" :style="{'width': leftWidth + 'px'}">
          <slot name="left" :row="item" :index="index" />
        </div>
        <div class="y-timeline-content-right">
          <span class="y-timeline-content-right-dot" :style="{'background-color': item.color}"></span>
          <div class="y-timeline-content-right-card" v-if="type === 'card'">
            <div class="y-timeline-content-right-card-left">
              <span></span>
            </div>
            <div class="y-timeline-content-right-card-right">
              <slot :row="item" :index="index" />
            </div>
          </div>
          <div class="y-timeline-content-right-line" v-else>
            <slot :row="item" :index="index" />
          </div>
        </div>
      </li>
    </ul>
    <y-loading v-show="loading && !finished" style="height: 10rem"></y-loading>
    <p class="footer" v-show="finished && !loading">--到底了--</p>
  </div>
</template>

<script>
import scrollbottom from "@/directive/scrollbottom1";
export default {
  name: "y-timeline",
  directives: { scrollbottom },
  props: {
    /**
      card 卡片样式
      line 简约的线条样式
     */
    type: {
      type: String,
      default: "line"
    },
    loading: {
      type: Boolean,
      default: false
    },
    finished: {
      type: Boolean,
      default: false
    },
    // 左侧宽度
    leftWidth: {
      type: Number,
      default: 0
    },
    // 遍历数组
    data: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      classPrefix: "y-timeline-"
    };
  },
  methods: {
    handleLoad() {
      if (!this.loading && !this.finished) {
        this.$emit("on-load");
      }
    },
    // 点击标题时触发
    handleTitleClick(info) {
      this.$emit("on-click", info);
    }
  }
};
</script>

<style lang="less">
.y-timeline {
  .full;
  padding: 5px 5px 5px 0;
  overflow-y: auto;
  &-header {
    &-content {
      width: 12px;
      height: 100%;
      margin-left: 80px;
      .flex-wrap(column);
      &-circle {
        display: block;
        width: 100%;
        height: 12px;
        background-color: @primary-color;
        border-radius: 50%;
      }
      &-line {
        display: block;
        margin: 0 auto;
        width: 2px;
        height: 10px;
        background-color: @primary-color;
      }
    }
  }
  &-content {
    width: 100%;
    li {
      .flex;
      .y-timeline-content-left {
        .center-h;
        // width: 85px;
        padding-right: 10px;
        text-align: right;
        font-size: 12px;
      }
      .y-timeline-content-right {
        .flex;
        flex: 1;
        position: relative;
        margin-left: 5px;
        border-left: 2px solid @primary-color;
        padding: 8px 0;
        &-dot {
          position: absolute;
          left: -6px;
          top: 50%;
          transform: translateY(-50%);
          width: 10px;
          height: 10px;
          background-color: @primary-color;
          border-radius: 50%;
        }
        &-card {
          .flex;
          position: relative;
          width: 100%;
          &-left {
            .center;
            width: 15px;
            & > span {
              display: block;
              width: 100%;
              height: 2px;
              background-color: @primary-color;
            }
          }
          &-right {
            flex: 1;
            border: 2px solid @primary-color;
            padding: 5px;
          }
        }
        &-line {
          position: relative;
          padding: 5px 5px 5px 20px;
          .full-w;
        }
      }
    }
  }
  & > .footer {
    text-align: center;
    color: @disabled-color;
  }
}
</style>
