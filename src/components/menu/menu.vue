<template>
  <ul class="y-menu">
    <li v-for="(menuItem, index) in data" :key="index" :class="{'sub-menu': menuItem.children}">
      <a
        :class="{'hover-a': !menuItem.children, 'active-a': activeMenu.value === menuItem.value}"
        :style="`padding-left: ${20 + 10 * level}px`"
        @click="handleMenuClick(menuItem)"
      >
        <y-icon v-if="menuItem.icon" :type="menuItem.icon" />
        {{menuItem.name}}
      </a>
      <y-menu v-if="menuItem.children" :data="menuItem.children" :level="level + 1"></y-menu>
    </li>
  </ul>
</template>

<script>
export default {
  name: "y-menu",
  props: {
    data: {
      type: Array,
      required: true
    },
    level: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      activeMenu: {}
    };
  },
  methods: {
    handleMenuClick(menu) {
      if (!menu.children) {
        this.activeMenu = menu;
      }
      if (menu.to) {
        this.$router.push({
          name: menu.to
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.y-menu {
  & > li {
    // margin-left: 10px;
    font-size: 16px;
    a {
      display: block;
      padding: 10px 20px;
      width: 100%;
      i {
        margin-right: 5px;
      }
    }
    .hover-a {
      .pointer;
    }
    .hover-a:hover {
      color: @light-primary-color;
      & > i {
        color: @light-primary-color;
      }
    }
    .active-a {
      border-right: 2px solid @primary-color;
      background-color: #f0faff;
      color: @light-primary-color;
      & > i {
        color: @light-primary-color;
      }
    }
  }
  & > .sub-menu {
    & > a {
      padding-left: 20px;
      color: @disabled-color;
    }
    & > .y-menu {
      & > li {
        & > a {
          font-size: 14px;
          & > i {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>