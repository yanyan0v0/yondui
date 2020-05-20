<template>
  <div class="home-main">
    <header class="header">
      <router-link to="/">
        <img src="@ui/assets/images/logo/logo.png" alt class="full-h" />
      </router-link>
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
  .main-column;
  padding: 0 2.5%;
  & > .header {
    position: fixed;
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
      height: 100%;
    }
  }
}
</style>