<template>
  <label class="y-checkbox" :class="[size ? 'y-checkbox-' + size : '']" @click="handleClick">
    <!-- 不使用默认input是因为在不同浏览器中样式存在差异 -->
    <y-icon class="y-checkbox-icon" :type="iconType" :color="iconColor"></y-icon>
    <slot></slot>
  </label>
</template>

<script>
import { THEME_COLORS } from "@/util/config";
export default {
  name: "y-checkbox",
  props: {
    value: Boolean,
    size: String
  },
  computed: {
    iconType() {
      return this.value ? "checkbox-selected" : "checkbox-unselect";
    },
    iconColor() {
      return this.value ? THEME_COLORS.primary : THEME_COLORS.border;
    }
  },
  methods: {
    handleClick() {
      this.$emit("input", !this.value);
      this.$emit("on-change", !this.value);
    }
  }
};
</script>

<style lang="less">
.y-checkbox {
  display: inline-block;
  margin-right: 8px;
  font-size: 16px;
  cursor: pointer;
  & > &-icon {
    display: inline-block;
    width: 22px;
    font-size: 20px;
    line-height: 1;
    vertical-align: middle;
  }
}
.y-checkbox-large {
  font-size: 18px;
  & > .y-checkbox-icon {
    width: 26px;
    font-size: 24px;
  }
}
.y-checkbox-small {
  font-size: 14px;
  & > .y-checkbox-icon {
    width: 18px;
    font-size: 16px;
  }
}
.y-checkbox-mini {
  font-size: 12px;
  & > .y-checkbox-icon {
    width: 14px;
    font-size: 12px;
  }
}
</style>