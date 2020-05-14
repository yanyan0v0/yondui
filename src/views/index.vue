<template>
  <div class="main">
    <header class="header">
      <img src="@/assets/images/logo/logo.png" alt class="full-h" />
    </header>
    <div class="container">
      <div class="content">
        <div class="logo">
          <y-button color="error" size="mini" shape="round">0.0.1</y-button>
          <p class="title">Y2-UI</p>
        </div>
        <p class="introduce">一套基于 Vue.js 的高质量 UI 组件库</p>
        <y-button shape="round" :color="['primary', '#b519be']" @click.native="start">快速开始</y-button>
      </div>
    </div>
    <footer class="footer">
      <p>Copyright © 2020 liaoyanyan 微信：a717051618 邮箱：717051618@qq.com</p>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    start() {
      this.$router.push("button");
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  background-image: url("~@/assets/images/bg/home_bg.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  .header {
    position: absolute;
    z-index: 1;
    top: 0;
    padding: 0 20px;
    width: 100%;
    height: 80px;
    img {
      margin: auto 0;
      height: 100%;
      padding: 20px 0;
    }
  }
  .container {
    .center;
    width: 50%;
    height: 100%;
    .content {
      .logo {
        position: relative;
        width: 160px;
        .y-button {
          position: absolute;
          top: -20px;
          right: -20px;
        }
        .title {
          font-size: 50px;
        }
      }
      .introduce {
        margin: 10px 0;
        font-size: 18px;
      }
    }
  }
  .footer {
    position: absolute;
    bottom: 0;
    padding: 20px;
    width: 100%;
    text-align: center;
    color: @title-color;
  }
}
</style>