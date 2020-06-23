<template>
  <span
    class="y-switch"
    :class="[computeSize('y-switch-'), {'y-switch-checked': value}, {'y-switch-disabled': formDisabled}]"
    :style="{'background-color': value ? openColor : closeColor}"
  >
    <span class="y-switch-name" :class="nameClass">
      <slot v-if="value" name="open"></slot>
      <slot v-else name="close"></slot>
    </span>
    <span
      class="y-switch-inner"
      :class="[value ? 'y-switch-inner-right' : 'y-switch-inner-left', {'y-switch-loading': loading}]"
      @click="click"
    >
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
import componentMixins from "@/mixins/component";
import formMixins from "@/mixins/form";
import LoadingOval from "@/components/loading/svg/oval.vue";
export default {
  name: "y-switch",
  components: {
    LoadingOval
  },
  mixins: [componentMixins, formMixins],
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
    nameClass() {
      if (this.value) {
        if (this.$slots.open) {
          return "y-switch-name-left";
        } else {
          return "y-switch-name-empty-left";
        }
      } else {
        if (this.$slots.close) {
          return "y-switch-name-right";
        } else {
          return "y-switch-name-empty-right";
        }
      }
    },
    loadingColor() {
      return this.value ? this.openColor : this.closeColor;
    },
    loadingSize() {
      if (this.size == "large") {
        return "22px";
      } else if (this.size == "small") {
        return "12px";
      } else if (this.size == "mini") {
        return "7px";
      } else {
        return "17px";
      }
    }
  },
  methods: {
    click() {
      if (!this.loading && !this.formDisabled) {
        this.$emit("input", !this.value);
        this.$emit("on-change", !this.value);
        this.emitTriggerToForm("change");
      }
    }
  }
};
</script>
