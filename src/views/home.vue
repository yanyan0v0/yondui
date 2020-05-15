<template>
  <div class="home-main">
    <header class="header">
      <router-link to="/">
        <img src="@ui/assets/images/logo/logo.png" alt class="full-h">
      </router-link>
    </header>
    <div class="container">
      <div class="left">
        <y-menu v-model="activeMenu" :data="menuList" @on-change="handleMenuChange"></y-menu>
      </div>
      <div class="right">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: [
        {
          id: 1,
          name: "快速上手",
          to: "start"
        }
      ],
      menuList: [
        {
          id: 1,
          name: "快速上手",
          to: "start"
        },
        {
          id: 2,
          name: "组件",
          children: [
            {
              id: 21,
              name: "Button 按钮",
              icon: "anniu",
              to: "button"
            },
            {
              id: 22,
              name: "Icon 图标",
              icon: "tubiao",
              to: "icon"
            },
            {
              id: 23,
              name: "Menu 菜单",
              icon: "caidan",
              to: "menu"
            },
            {
              id: 24,
              name: "Rank 排行",
              icon: "ziyuanjiankong",
              to: "rank"
            },
            {
              id: 25,
              name: "Timeline 时间轴列表",
              icon: "shijianzhou",
              to: "timeline"
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleMenuChange(menu) {
      this.activeMenu = menu;
    }
  }
};
</script>

<style lang="less" scoped>
.home-main {
  .main-column;
  padding: 0 2.5%;
  & > .header {
    position: fixed;
    top: 0;
    border-bottom: 1px solid @border-color;
    width: 100%;
    height: 80px;
    img {
      margin: auto 0;
      height: 100%;
      padding: 20px 0;
    }
  }
  & > .container {
    position: relative;
    padding-top: 80px;
    width: 100%;
    height: 100%;
    & > .left {
      position: absolute;
      left: 0;
      width: 220px;
      overflow-y: auto;
    }
    & > .right {
      padding: 20px 0 20px 240px;
      width: 100%;
    }
  }
}
</style>