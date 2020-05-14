<template>
  <div class="home-main">
    <header class="header">
      <router-link to="/">
        <img src="@/assets/images/logo/logo.png" alt class="full-h" />
      </router-link>
    </header>
    <div class="container">
      <div class="left">
        <y-menu :data="menuList"></y-menu>
      </div>
      <div class="right">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          value: 1,
          name: "快速上手",
          to: "start"
        },
        {
          value: 2,
          name: "组件",
          children: [
            {
              value: 21,
              name: "Button 按钮",
              icon: "anniu",
              to: "button"
            },
            {
              value: 22,
              name: "Icon 图标",
              icon: "tubiao",
              to: "icon"
            },
            {
              value: 23,
              name: "Menu 菜单",
              icon: "caidan",
              to: "menu"
            },
            {
              value: 24,
              name: "Timeline 时间轴列表",
              icon: "shijianzhou",
              to: "timeline"
            }
          ]
        }
      ]
    };
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
    .flex;
    padding-top: 80px;
    width: 100%;
    height: 100%;
    & > .right {
      padding: 20px 0 20px 20px;
      flex: 1;
    }
    & > .left {
      width: 240px;
    }
  }
}
</style>