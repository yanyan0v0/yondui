<template>
  <div class="y-page">
    <!-- 显示总数 -->
    <slot>
      <span v-show="showTotal">共{{total}}条</span>
    </slot>
    <!-- 分页列表 -->
    <ul class="y-page-ul">
      <!-- 上一页 -->
      <li :class="{'y-page-li-disabled': checkDisabled(0) || disabled}" @click="prePage">
        <y-icon type="sanjiao-zuo"></y-icon>
      </li>
      <!-- 第一页 -->
      <li
        :class="{'y-page-li-active': checkActive(1), 'y-page-li-disabled': disabled}"
        @click="handlePageClick(1)"
      >1</li>
      <!-- 左边省略 -->
      <li
        v-show="leftEllipsis"
        class="y-page-li-ellipsis"
        :class="{'y-page-li-disabled': disabled}"
        @click="reduceWholePage"
      >
        <y-icon type="ellipsis"></y-icon>
      </li>
      <!-- 显示的分页列表 -->
      <li
        v-for="num in pageCounter"
        :key="num"
        v-show="ifShowPage(num)"
        :class="{'y-page-li-active': checkActive(num), 'y-page-li-disabled': disabled}"
        @click="handlePageClick(num)"
      >{{num}}</li>
      <!-- 右边省略 -->
      <li
        v-show="rightEllipsis"
        class="y-page-li-ellipsis"
        :class="{'y-page-li-disabled': disabled}"
        @click="addWholePage"
      >
        <y-icon type="ellipsis"></y-icon>
      </li>
      <!-- 最后一页 -->
      <li
        :class="{'y-page-li-active': checkActive(pageCounter), 'y-page-li-disabled': disabled}"
        @click="handlePageClick(pageCounter)"
      >{{pageCounter}}</li>
      <!-- 下一页 -->
      <li :class="{'y-page-li-disabled': checkDisabled(1) || disabled}" @click="nextPage">
        <y-icon type="sanjiao-you"></y-icon>
      </li>
    </ul>
    <!-- 分页选择器 -->
    <y-select
      v-show="showSizer"
      v-model="selectedPageSize"
      :disabled="disabled"
      width="90px"
      @on-change="handleSizeChange"
    >
      <y-option v-for="size in pageSizes" :key="size" :value="`${size}条/页`">{{size}}条/页</y-option>
    </y-select>
    <!-- 跳转输入框 -->
    <p v-show="showJumper" class="y-page-jumper">
      前往
      <y-input v-model="inputValue" :disabled="disabled" width="60px" @on-change="handleJumper"></y-input>页
    </p>
  </div>
</template>

<script>
export default {
  name: "y-page",
  props: {
    value: {
      type: Number,
      default: 1
    },
    total: Number,
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40]
    },
    // 当page过多，设置省略后最多展示几个
    maxCount: {
      type: Number,
      default: 7
    },
    disabled: Boolean,
    showTotal: Boolean,
    showSizer: Boolean,
    showJumper: Boolean
  },
  data() {
    return {
      inputValue: 1,
      selectedPageSize: "",
      leftEllipsis: false,
      rightEllipsis: false
    };
  },
  computed: {
    pageCounter() {
      return this.total
        ? Math.ceil(this.total / parseInt(this.selectedPageSize))
        : 1;
    },
    checkActive() {
      return page => this.value == page;
    },
    checkDisabled() {
      return type => {
        if (type) {
          return this.value == this.pageCounter;
        } else {
          return this.value == 1;
        }
      };
    },
    // 是否显示省略号
    showEllipsis() {
      return this.pageCounter >= this.maxCount;
    },
    // 判断需要隐藏的page
    ifShowPage() {
      return page => {
        // 不显示省略号时都显示
        if (!this.showEllipsis) return true;
        // 首尾page不显示
        if (page == this.pageCounter || page == 1) return false;
        // 当 1 <= this.value < maxCount 时， 小于 maxCount 的 page都显示
        if (this.value >= 1 && this.value < this.maxCount) {
          this.leftEllipsis = false;
          this.rightEllipsis = true;
          return page < this.maxCount;
        }
        // 当 maxCount <= this.value <= pageCounter - maxCount 时， this.value 前后2个page都展示
        else if (
          this.maxCount <= this.value &&
          this.value <= this.pageCounter - this.maxCount
        ) {
          this.leftEllipsis = true;
          this.rightEllipsis = true;
          return page >= this.value - 2 && page <= this.value + 2;
        }
        // 当 pageCounter - maxCount <= this.value < pageCounter 时， 大于pageCounter - maxCount的page都展示
        else {
          this.leftEllipsis = true;
          this.rightEllipsis = false;
          return page > this.pageCounter - this.maxCount;
        }
      };
    }
  },
  methods: {
    handlePageClick(page) {
      if (this.disabled) return;
      this.$emit("input", page);
      this.$emit("on-change", page);
    },
    prePage() {
      if (this.checkDisabled(0)) return;
      let page = this.value - 1;
      this.handlePageClick(page);
    },
    nextPage() {
      if (this.checkDisabled(1)) return;
      let page = this.value + 1;
      this.handlePageClick(page);
    },
    addWholePage() {
      let page =
        this.value + this.maxCount > this.pageCounter
          ? this.pageCounter
          : this.value + this.maxCount;
      this.handlePageClick(page);
    },
    reduceWholePage() {
      let page =
        this.value - this.maxCount < 1 ? 1 : this.value - this.maxCount;
      this.handlePageClick(page);
    },
    handleSizeChange() {
      this.$emit("on-size-change", parseInt(this.selectedPageSize));
    },
    handleJumper(page) {
      if (page && Number(page)) this.handlePageClick(Number(page));
    }
  },
  watch: {
    value: {
      handler(value) {
        this.inputValue = value;
      },
      immediate: true
    },
    pageSize: {
      handler(size) {
        this.selectedPageSize = `${size}条/页`;
      },
      immediate: true
    }
  }
};
</script>