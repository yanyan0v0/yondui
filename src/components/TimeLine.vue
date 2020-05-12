<template>
  <div class="ct-timeline" v-scrollBottom="handleLoad">
    <div class="header" v-show="data.length">
      <div class="left">
        <span class="circle"></span>
        <span class="line"></span>
      </div>
    </div>
    <ul class="time-line">
      <li v-for="(item, index) in data" :key="index">
        <div class="left">
          <p>{{item.time}}</p>
        </div>
        <div class="right">
          <div class="content-left">
            <span class="dot" :style="`background-color: ${item.color}`"></span>
            <span class="line" v-if="type === 'card'"></span>
          </div>
          <div class="content-right card" v-if="type === 'card'">
            <div class="title">
              <p :title="item.title" @click="handleTitleClick(item)" v-html="item.title"></p>
              <slot name="extra" :row="item"></slot>
            </div>
            <p class="content">{{item.content}}</p>
            <div class="footer">
              <div class="footer-left" v-if="item.leftTip">
                <span class="dot"></span>
                <p>{{item.leftTip}}</p>
              </div>
              <p class="footer-right" v-if="item.rightTip">{{item.rightTip}}</p>
            </div>
          </div>
          <div class="content-right line" v-else>
            <slot :row="item" :index="index" />
          </div>
        </div>
      </li>
    </ul>
    <Loading v-show="loading && !finished" style="height: 10rem"></Loading>
    <p class="footer" v-show="finished && !loading">--到底了--</p>
  </div>
</template>

<script>
export default {
  name: "timeline",
  components: {
    Loading: () => import("./Loading")
  },
  props: {
    /**
      card 卡片样式
      line 简约的线条样式
     */
    type: {
      type: String,
      default: "card"
    },
    loading: {
      type: Boolean,
      default: false
    },
    finished: {
      type: Boolean,
      default: false
    },
    /**
      time: 左侧时间轴参数 必须,
      title: 标题,
      content 内容
      leftTip 左下提示,
      rightTip 右下提示

      可传 name='extra' 的slot来自定义右上内容
    */
    data: {
      type: Array,
      required: true
    }
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

<style lang="less" scoped>
.ct-timeline {
  .full;
  padding: 0.5rem 0.5rem 0.5rem 0;
  overflow-y: auto;
  .header {
    height: 2rem;
    .left {
      width: 1rem;
      height: 100%;
      margin-left: 5.5rem;
      .flex-wrap(column);
      .circle {
        display: block;
        margin: 0 auto;
        width: 0.8rem;
        height: 0.8rem;
        background-color: @primary-color;
        border-radius: 50%;
      }
      .line {
        display: block;
        margin: 0 auto;
        width: 0.1rem;
        height: 1.2rem;
        background-color: @primary-color;
      }
    }
  }
  .time-line {
    width: 100%;
    li {
      .flex;
      .left {
        .center-h;
        width: 5.95rem;
        padding-right: 1rem;
        margin-bottom: 1rem;
        p {
          width: 100%;
          text-align: right;
          color: #fff;
          font-size: 0.8rem;
        }
      }
      .right {
        .flex;
        flex: 1;
        position: relative;
        padding-bottom: 1rem;
        border-left: 0.1rem solid @primary-color;
        .content-left {
          position: relative;
          height: 100%;
          width: 1rem;
          .center;
          .dot {
            position: absolute;
            left: -0.4rem;
            top: 50%;
            transform: translateY(-50%);
            width: 0.8rem;
            height: 0.8rem;
            background-color: @primary-color;
            border-radius: 50%;
          }
          .line {
            display: block;
            width: 100%;
            height: 0.1rem;
            background-color: @primary-color;
          }
        }
        .content-right.card {
          position: relative;
          padding: 0.5rem;
          background-image: url("~@/assets/images/grid_bg_1.png");
          font-size: 0.8rem;
          line-height: 1rem;
          .full-w;
          .border-gradual;
          .title {
            display: flex;
            justify-content: space-between;
            p {
              .pointer;
              .text-over;
              flex: 1;
              color: @primary-color;
            }
          }
          .content {
            .text-over(2);
            margin-bottom: 0.5rem;
          }
          .footer {
            display: flex;
            justify-content: space-between;
            .footer-left {
              flex: 1;
              .center-h;
              .dot {
                display: block;
                width: 0.5rem;
                height: 0.5rem;
                border-radius: 50%;
                background-color: @primary-color;
                margin-right: 0.5rem;
              }
              p {
                flex: 1;
                color: @disabled-color;
                .text-over;
              }
            }
            .footer-right {
              flex: 1;
              color: @primary-color;
            }
          }
        }
        .content-right.line {
          position: relative;
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
