<template>
  <div class="y-icon-list">
    <div class="y-icon-list-search">
      <y-input
        type="text"
        v-model="keyword"
        width="300px"
        placeholder="输入关键字搜索组件"
        @on-enter="handleSearch"
      />
    </div>
    <ul class="y-icon-list-ul clearfix">
      <li v-for="icon in iconList" :key="icon.icon_id">
        <y-icon :type="icon.font_class" size="24"></y-icon>
        <!-- <p>{{icon.name}}</p> -->
        <p>{{icon.font_class}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import ICON_JSON from "@/assets/iconfont/iconfont.json";
export default {
  data() {
    return {
      keyword: "",
      iconList: ICON_JSON.glyphs
    };
  },
  methods: {
    handleSearch() {
      if (this.keyword.trim()) {
        this.iconList = ICON_JSON.glyphs.filter(
          item =>
            item.font_class.indexOf(this.keyword) != -1 ||
            item.name.indexOf(this.keyword) != -1
        );
      } else {
        this.iconList = ICON_JSON.glyphs;
      }
    }
  }
};
</script>

<style lang="less">
.y-icon-list {
  position: relative;
  &-search {
    .text-center;
    padding: 20px;
  }
  &-ul {
    li {
      .text-center;
      margin: 10px;
      width: 138px;
      height: 70px;
      float: left;
      p {
        margin-top: 5px;
        font-size: 14px;
      }
    }
  }
}
</style>