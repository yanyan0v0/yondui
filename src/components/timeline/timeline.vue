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
import scrollbottom from "@/directive/scrollbottom";
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

