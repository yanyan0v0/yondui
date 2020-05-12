<template>
  <div class="main">
    <header class="header">
      <img src="@/assets/images/logo/logo.png" alt class="full-h" />
    </header>
    <div class="container">
      <y-menu :data="menuList"></y-menu>
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
          name: "快速上手"
        },
        {
          value: 2,
          name: "组件",
          children: [
            {
              value: 21,
              name: "Button 按钮",
              icon: "ziyuanguanli"
            },
            {
              value: 22,
              name: "Icon 图标",
              icon: "ziyuanguanli"
            },
            {
              value: 23,
              name: "Menu 菜单",
              icon: "ziyuanguanli"
            },
            {
              value: 24,
              name: "Timeline 时间轴列表",
              icon: "ziyuanguanli"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.main {
  .header {
    margin: 0 auto;
    border-bottom: 1px solid @border-color;
    width: 95%;
    height: 80px;
    img {
      margin: auto 0;
      height: 100%;
      padding: 20px 0;
    }
  }
  .container {
    .flex;
    margin: 0 auto;
    width: 95%;
    .left,
    .middle,
    .right {
      padding-top: 50px;
    }
    .left,
    .right {
      width: 200px;
    }
    .middle {
      flex: 1;
    }
  }
}
</style>