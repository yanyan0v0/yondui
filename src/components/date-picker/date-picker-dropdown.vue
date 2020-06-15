<template>
  <transition name="dropdown-fade">
    <div v-show="visible" v-clickoutside="hide" class="y-date-picker-dropdown" :style="style">
      <component :is="componentName" :value="date"></component>
      <div v-show="showFooter" class="y-date-picker-dropdown-footer">
        <y-button shape="text" class="y-date-picker-dropdown-footer-left">选择时间</y-button>
        <div class="y-date-picker-dropdown-footer-right">
          <y-button color="primary">确定</y-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import clickoutside from "@/directive/clickoutside";
import componentMixins from "@/util/componentMixins";
import Day from "./components/day.vue";
import Month from "./components/month.vue";
import Year from "./components/year.vue";
import { setDateFormat } from "@/util/tools";
if (!new Date().Format) {
  setDateFormat(); // 注册格式化时间函数
}
export default {
  name: "y-date-picker-dropdown",
  components: {
    Day,
    Month,
    Year
  },
  directives: { clickoutside },
  mixins: [componentMixins],
  props: {
    value: [Date, String, Number],
    visible: Boolean
  },
  data() {
    return {
      top: 0,
      left: 0,
      // 当前时间
      date: null,
      // 获取父组件的vnode
      parentVm: null,
      // clickoutside所需参数
      parentEl: null
    };
  },
  computed: {
    dateType() {
      return this.parentVm.type;
    },
    componentName() {
      let name = "";
      switch (this.dateType) {
        case "year":
          name = "Year";
          break;
        case "month":
          name = "Month";
          break;
        case "date":
        default:
          name = "Day";
          break;
      }
      return name;
    },
    style() {
      return {
        top: this.top + "px",
        left: this.left + "px",
        zIndex: this.$YONDUI.getZindex()
      };
    },
    showFooter() {
      return !["year", "month", "date"].includes(this.dateType);
    }
  },
  methods: {
    hide() {
      this.visible = false;
    },
    show() {
      this.visible = true;
    },
    handleDate(date) {
      if (date) {
        this.date = new Date(date);
      }
    },
    handleEmit(date) {
      this.parentVm.emitChange(date);
      this.hide();
    }
  },
  watch: {
    // 单独做组件时，监听v-model的值
    value: {
      handler(value) {
        this.handleDate(value);
      },
      immediate: true
    },
    // 做date-picker的子组件时，监听date-picker的v-model值
    "parentVm.value": {
      handler(value) {
        this.handleDate(value);
      },
      immediate: true
    }
  }
};
</script>