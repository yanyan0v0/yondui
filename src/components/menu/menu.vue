<template>
  <ul class="y-menu">
    <li v-for="(menuItem, index) in data" :key="index" :class="{'sub-menu': menuItem.children}">
      <a
        :class="{'hover-a': !menuItem.children, 'active-a': check(menuItem)}"
        :style="`padding-left: ${20 + 10 * level}px`"
        @click="handleMenuClick(menuItem)"
      >
        <y-icon v-if="menuItem.icon" :type="menuItem.icon"/>
        {{menuItem.name}}
      </a>
      <y-menu
        v-if="menuItem.children"
        v-model="activeMenu"
        :data="menuItem.children"
        :level="level + 1"
        @on-change="handleMenuChange"
      ></y-menu>
    </li>
  </ul>
</template>

<script>
export default {
  name: "y-menu",
  props: {
    value: {
      type: Array,
      default: () => []
    },
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
      activeMenu: []
    };
  },
  computed: {
    check() {
      return menuItem => {
        return (
          this.level == this.activeMenu.length - 1 &&
          this.activeMenu[this.level] &&
          this.activeMenu[this.level].id === menuItem.id
        );
      };
    }
  },
  methods: {
    handleMenuClick(menu) {
      if (!menu.children) {
        this.$set(this.activeMenu, this.level, menu);
        if (this.level < this.activeMenu.length - 1) {
          this.activeMenu = this.activeMenu.slice(0, this.level + 1);
        }
        this.$emit("input", this.activeMenu);
        this.$emit("on-change", this.activeMenu);
      }
      if (menu.to) {
        this.$router.push({
          name: menu.to
        });
      }
    },
    handleMenuChange(menu) {
      this.activeMenu = menu;
      this.$emit("on-change", menu);
    }
  },
  watch: {
    value: {
      handler(list) {
        this.activeMenu = list;
      },
      immediate: true
    }
  }
};
</script>

<style lang="less" scoped>
.y-menu {
  & > li {
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