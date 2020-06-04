<template>
  <span
    class="y-switch"
    :class="[computeSize, {'y-switch-checked': value}, {'y-switch-disabled': disabled}]"
    :style="{'background-color': value ? openColor : closeColor}"
  >
    <span class="y-switch-name" :class="[value ? 'float-l' : 'float-r']">
      <slot v-if="value" name="open"></slot>
      <slot v-else name="close"></slot>
    </span>
    <span class="y-switch-inner" :class="[{'y-switch-loading': loading}]" @click="click">
      <loading-oval
        v-if="loading"
        :style="{width: loadingSize, height: loadingSize}"
        :color="loadingColor"
      ></loading-oval>
    </span>
  </span>
</template>

<script>
import { THEME_COLORS } from "@/util/config";
export default {
  name: "y-switch",
  components: {
    "loading-oval": () => import("@/components/loading/svg/oval.vue")
  },
  props: {
    value: Boolean,
    size: String,
    loading: Boolean,
    disabled: Boolean,
    closeColor: {
      type: String,
      default: THEME_COLORS.disabled
    },
    openColor: {
      type: String,
      default: THEME_COLORS.primary
    },
    beforeChange: Function
  },
  computed: {
    computeSize() {
      return this.size
        ? "y-switch-" + this.size
        : this.$Y2UI.size
        ? "y-switch-" + this.$Y2UI.size
        : "";
    },
    loadingColor() {
      return this.value ? this.openColor : this.closeColor;
    },
    loadingSize() {
      if (this.size == "large") {
        return "25px";
      } else if (this.size == "small") {
        return "25px";
      } else if (this.size == "mini") {
        return "10px";
      } else {
        return "20px";
      }
    }
  },
  methods: {
    click() {
      if (!this.loading && !this.disabled) {
        this.$emit("input", !this.value);
        this.$emit("on-change", !this.value);
      }
    }
  }
};
</script>

<style lang="less">
.y-switch {
  display: inline-block;
  position: relative;
  width: 62px;
  height: 30px;
  border-radius: 25px;
  user-select: none;
  background-color: @disabled-color;
  transition: background-color 0.2s ease-in-out;
  &-inner {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: #fff;
    transition: left 0.2s ease-in-out;
    cursor: pointer;
    .center;
  }
  &-inner&-loading {
    cursor: default;
  }
  &-name {
    color: #fff;
    line-height: 30px;
    padding: 0 5px;
  }
}
.y-switch-disabled {
  opacity: 0.6;
  cursor: not-allowed;
  .y-switch-inner {
    cursor: not-allowed;
  }
}
.y-switch-checked {
  .y-switch-inner {
    left: 34px;
  }
}
.y-switch-large {
  width: 72px;
  height: 35px;
  .y-switch-inner {
    width: 31px;
    height: 31px;
  }
  .y-switch-name {
    font-size: 16px;
    line-height: 35px;
  }
  &.y-switch-checked {
    .y-switch-inner {
      left: 39px;
    }
  }
}
.y-switch-small {
  width: 54px;
  height: 25px;
  .y-switch-inner {
    width: 21px;
    height: 21px;
  }
  .y-switch-name {
    font-size: 12px;
    line-height: 25px;
  }
  &.y-switch-checked {
    .y-switch-inner {
      left: 31px;
    }
  }
}
.y-switch-mini {
  width: 48px;
  height: 20px;
  .y-switch-inner {
    width: 16px;
    height: 16px;
  }
  .y-switch-name {
    font-size: 12px;
    line-height: 20px;
  }
  &.y-switch-checked {
    .y-switch-inner {
      left: 30px;
    }
  }
}
</style>