<template>
  <div class="y-svg-list">
    <div class="y-svg-list-search">
      <y-input
        type="text"
        v-model="keyword"
        width="300px"
        placeholder="输入关键字搜索组件"
        @on-enter="handleSearch"
      />
    </div>
    <!-- <y-loading type="location-indicator" size="500px"></y-loading> -->
    <ul class="y-svg-list-ul clearfix">
      <li v-for="svg in svgList" :key="svg">
        <y-loading :type="svg" size="50px"></y-loading>
        <p>{{svg}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import SVG_LIST from "@/components/loading/svg.js";
export default {
  data() {
    return {
      keyword: "",
      svgList: [...SVG_LIST]
    };
  },
  methods: {
    handleSearch() {
      if (this.keyword.trim()) {
        this.svgList = SVG_LIST.filter(
          item => item.indexOf(this.keyword) != -1
        );
      } else {
        this.svgList = [...SVG_LIST];
      }
    }
  }
};
</script>

<style lang="less">
.y-svg-list {
  position: relative;
  &-search {
    .text-center;
    padding: 20px;
  }
  &-ul {
    li {
      .text-center;
      margin: 15px;
      width: 138px;
      float: left;
      p {
        margin-top: 10px;
        font-size: 14px;
      }
    }
  }
}
</style>