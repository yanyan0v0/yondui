<template>
  <div class="home-main">
    <header class="header">
      <router-link to="/">
        <img src="@/assets/images/logo/logo.png" alt class="full-h" />
      </router-link>
      <ul class="header-group">
        <li>
          <a href="https://github.com/yanyan0v0/yyui" target="_blank">
            <y-icon type="github"></y-icon>
          </a>
        </li>
      </ul>
    </header>
    <div class="container">
      <div class="left">
        <y-menu
          v-model="activeMenu"
          :data="menuList"
          type="column-fixed"
          @on-click="handleMenuClick"
        ></y-menu>
      </div>
      <div class="right">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { MENU_LIST } from "@/util/config";
export default {
  data() {
    return {
      activeMenu: [MENU_LIST[0]],
      menuList: MENU_LIST
    };
  },
  methods: {
    getActiveMenu(activeMenu, list, level = 0) {
      for (let menu of list) {
        if (activeMenu.id == menu.id) {
          this.$set(this.activeMenu, level, menu);
          break;
        } else {
          if (menu.children) {
            this.$set(this.activeMenu, level, {
              ...menu,
              children: []
            });
            this.getActiveMenu(activeMenu, menu.children, level + 1);
          }
        }
      }
    },
    handleMenuClick(menu) {
      this.activeMenu = [];
      this.getActiveMenu(menu, MENU_LIST);
      if (menu.to) {
        this.$store.commit("setActiveMenu", this.activeMenu);
        this.$router.push({
          name: menu.to
        });
      }
    }
  },
  watch: {
    "$store.state.activeMenu": {
      handler(menu) {
        if (menu.length) this.activeMenu = menu;
      },
      immediate: true
    }
  }
};
</script>

<style lang="less" scoped>
.home-main {
  .flex-wrap(column);
  position: relative;
  height: 100%;
  margin: 0 2%;
  & > .header {
    position: absolute;
    z-index: 1;
    top: 0;
    border-bottom: 1px solid @border-color;
    width: 100%;
    height: 80px;
    img {
      margin: auto 0;
      height: 100%;
      padding: 20px 0;
    }
    .header-group {
      float: right;
      height: 100%;
      li {
        .center-h;
        height: 100%;
        i {
          font-size: 32px;
        }
      }
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
      top: 0;
      padding-top: 80px;
      width: 240px;
      height: 100%;
      overflow-y: auto;
      & > ul {
        height: 100%;
      }
    }
    & > .right {
      padding: 20px 0 20px 260px;
      width: 100%;
      height: 100%;
    }
  }
}
</style>