<template>
  <div>
    <ul class="y-navigator">
      <span class="dot" :style="{top: (activeIndex * 32 + 10) + 'px'}"></span>
      <li v-for="(nav, index) in data" :key="nav.id">
        <a
          @click="setActiveNav(nav, index)"
          class="pointer"
          :class="{'active': activeNav.id == nav.id}"
        >{{nav.name}}</a>
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
      if (!el) {
        return false;
      }
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
    setActiveNav(nav, index) {
      this.activeNav = nav;
      this.activeIndex =
        index || this.data.findIndex(item => item.id == nav.id);
      if (index != undefined) {
        this.scrollTo();
      }
    },
    findActiveNav() {
      for (let nav of this.data) {
        if (this.isElementInViewport(document.getElementById(nav.id))) {
          this.setActiveNav(nav);
          break;
        }
      }
    },
    // 跳转到指定索引的元素
    scrollTo() {
      // 获取滚动区域的元素对象
      let target = document.getElementsByClassName("code-article")[0];
      // 获取滚动高度
      let scrollTop = target.scrollTop;
      // 获取元素
      let el = document.getElementById(this.activeNav.id);
      if (!el) return;
      // 获取当前 offsetTop
      const targetOffsetTop = el.offsetTop;
      // 定义一次跳 50 个像素，数字越大跳得越快，但是会有掉帧得感觉，步子迈大了会扯到蛋
      const STEP = 50;
      // 判断是往下滑还是往上滑
      if (scrollTop > targetOffsetTop) {
        // 往上滑
        smoothUp();
      } else {
        // 往下滑
        smoothDown();
      }
      // 定义往下滑函数
      function smoothDown() {
        // 如果当前 scrollTop 小于 targetOffsetTop 说明视口还没滑到指定位置
        if (scrollTop < targetOffsetTop) {
          // 如果和目标相差距离大于等于 STEP 就跳 STEP
          // 否则直接跳到目标点，目标是为了防止跳过了。
          if (targetOffsetTop - scrollTop >= STEP) {
            scrollTop += STEP;
          } else {
            scrollTop = targetOffsetTop;
          }
          target.scrollTop = scrollTop;
          // 关于 requestAnimationFrame 可以自己查一下，在这种场景下，相比 setInterval 性价比更高
          requestAnimationFrame(smoothDown);
        }
      }
      // 定义往上滑函数
      function smoothUp() {
        if (scrollTop > targetOffsetTop) {
          if (scrollTop - targetOffsetTop >= STEP) {
            scrollTop -= STEP;
          } else {
            scrollTop = targetOffsetTop;
          }
          target.scrollTop = scrollTop;
          requestAnimationFrame(smoothUp);
        }
      }
    }
  }
};
</script>
