<template>
  <div>
    <ul class="y-navigator">
      <span class="dot" :style="{top: (activeIndex * 32 + 10) + 'px'}"></span>
      <li v-for="nav in data" :key="nav.id">
        <a :href="'#'+ nav.id" :class="{'active': activeNav.id == nav.id}">{{nav.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "y-nav",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activeIndex: 0,
      activeNav: {}
    };
  },
  methods: {
    isElementInViewport(el) {
      //获取元素是否在可视区域
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    },
    findActiveNav() {
      for (let nav of this.data) {
        if (this.isElementInViewport(document.getElementById(nav.id))) {
          this.activeNav = nav;
          this.activeIndex = this.data.findIndex(item => item.id == nav.id);
          break;
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.y-navigator {
  position: relative;
  display: table;
  margin-left: 10px;
  border-left: 1px solid @border-color;
  width: 120px;
  font-size: 12px;
  & > li {
    padding: 8px 0 8px 16px;
    .active {
      color: @primary-color;
    }
  }
  & > .dot {
    display: inline-block;
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 2px solid @primary-color;
    background-color: #fff;
    left: 0;
    transition: top 0.2s ease-in-out;
    transform: translate(-50%, 2px);
  }
}
</style>