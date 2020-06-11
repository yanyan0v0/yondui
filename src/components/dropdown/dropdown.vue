<template>
  <div class="y-dropdown">
    <div
      class="y-dropdown-trigger"
      ref="trigger"
      @click="handleClick"
      @mouseenter="handleMouseEnter"
      @mouseleave="hide"
    >
      <slot></slot>
    </div>
    <slot name="menu"></slot>
  </div>
</template>

<script>
export default {
  name: "y-dropdown",
  provide() {
    return {
      dropdownRoot: this
    };
  },
  props: {
    trigger: {
      type: String,
      default: "hover"
    }
  },
  data() {
    return {
      visible: false,
      timeout: null
    };
  },
  computed: {
    parentMenuNode() {
      return this.$parent && this.$parent.$options.name == "y-dropdown-menu"
        ? this.$parent
        : null;
    }
  },
  methods: {
    handleClick() {
      if (this.trigger == "click") {
        this.visible = !this.visible;
      }
    },
    handleMouseEnter() {
      if (this.trigger == "hover") {
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.visible = true;
        }, 250);
      }
    },
    hide(event) {
      if (this.trigger == "hover") {
        if (this.timeout) {
          clearTimeout(this.timeout);
          this.timeout = setTimeout(() => {
            this.visible = false;
          }, 150);
        }
      } else {
        if (!event) {
          this.visible = false;
        }
      }
    },
    // 提供给子组件的方法
    handleItemClick(value) {
      this.$emit("on-click", value);
    }
  }
};
</script>
