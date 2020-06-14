<template>
  <span
    class="y-switch"
    :class="[computeSize('y-switch-'), {'y-switch-checked': value}, {'y-switch-disabled': disabled}]"
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
import componentMixins from "@/util/componentMixins";
import LoadingOval from "@/components/loading/svg/oval.vue";
export default {
  name: "y-switch",
  components: {
    LoadingOval
  },
  mixins: [componentMixins],
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
