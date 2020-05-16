<template>
  <ul class="y-menu">
    <li v-for="(menuItem, index) in menuList" :key="index" :class="{'sub-menu': menuItem.children}">
      <a
        :class="{'disabled-a': type == 'column-fixed' && menuItem.children, 'flod-a': type == 'column-flex', 'active-a': check(menuItem)}"
        :style="`padding-left: ${20 + 10 * level}px`"
        @click="handleMenuClick(menuItem, index)"
      >
        <y-icon v-if="menuItem.icon" class="y-menu-begin-i" :type="menuItem.icon"/>
        {{menuItem.name}}
        <y-icon
          v-if="type === 'column-flex' && menuItem.children"
          class="y-menu-end-i"
          type="sanjiao-you"
          :class="[!menuItem._flod ? 'rotate-90' : 'rotate-0']"
        />
      </a>
      <y-menu
        v-if="menuItem.children"
        v-model="activeMenu"
        :data="menuItem.children"
        :level="level + 1"
        :class="[menuItem._flod ? 'y-submenu-default' : 'y-submenu-active']"
        @on-click="emitMenuClick"
        @on-change="emitMenuChange"
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
    },
    // column-flex:竖向可伸缩  column-fixed:竖向不可伸缩 row:横向
    type: {
      type: String,
      default: "column-flex"
    },
    // 默认所有子菜单全关闭
    flod: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      menuList: [],
      activeMenu: []
    };
  },
  computed: {
    check() {
      return menuItem => {
        return (
          this.type != "column-fixed" &&
          this.level == this.activeMenu.length - 1 &&
          this.activeMenu[this.level] &&
          this.activeMenu[this.level].id === menuItem.id
        );
      };
    }
  },
  methods: {
    handleMenuClick(menu, index) {
      this.$emit("on-click", menu);
      this.$set(this.activeMenu, this.level, menu);
      if (!menu.children) {
        if (this.level < this.activeMenu.length - 1) {
          this.activeMenu = this.activeMenu.slice(0, this.level + 1);
        }
        this.$emit("input", this.activeMenu);
        this.$emit("on-change", this.activeMenu);
      } else {
        if (this.type != "column-fixed") {
          this.$set(this.menuList[index], "_flod", !this.menuList[index]._flod);
        }
      }
    },
    emitMenuClick(menu) {
      this.$emit("on-click", menu);
    },
    emitMenuChange(menu) {
      this.$emit("on-change", menu);
    }
  },
  watch: {
    data: {
      handler(list) {
        // let temp = JSON.parse(JSON.stringify(list));
        this.menuList = list.map(item => {
          return {
            _flod: this.type == "column-fixed" ? false : this.flod,
            ...item
          };
        });
      },
      immediate: true
    },
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
      .pointer;
      display: block;
      padding: 10px 20px;
      width: 100%;
      i {
        margin-right: 5px;
      }
      &:hover {
        color: @light-primary-color;
        & > i {
          color: @light-primary-color;
        }
      }
    }
    .disabled-a {
      cursor: default;
      color: @disabled-color;
      &:hover {
        color: @disabled-color;
        & > i {
          color: @disabled-color;
        }
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
    }
    .flod-a {
      .pointer;
      position: relative;
      .y-menu-end-i {
        position: absolute;
        right: 10px;
        transition: all 0.3s;
        &.rotate-0 {
          transform: rotate(0);
        }
        &.rotate-90 {
          transform: rotate(90deg);
        }
      }
    }
    & > .y-menu {
      transition: all 0.3s;
      & > li {
        & > a {
          font-size: 14px;
          & > i {
            font-size: 14px;
          }
        }
      }
    }
    .y-submenu-default {
      // display: none;
      max-height: 0;
      overflow: hidden;
    }
    .y-submenu-active {
      max-height: 500px;
    }
  }
}
</style>