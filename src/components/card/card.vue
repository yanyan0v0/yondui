<template>
  <div class="y-card" :class="['y-card-' + shadow]">
    <div v-if="$slots.header" class="y-card-header" :style="{padding}">
      <slot name="header"></slot>
    </div>
    <div class="y-card-content" :class="{'y-card-content-split': split !== 1}" :style="{padding}">
      <slot v-if="split === 1"></slot>
      <template v-else>
        <div
          v-for="(split, index) in splitList"
          :key="index"
          :style="{width: split}"
          :class="{'y-card-content-border': index < splitList.length - 1}"
        >
          <slot :name="slotName(index)"></slot>
        </div>
      </template>
    </div>
    <div v-if="$slots.footer" class="y-card-footer" :style="{padding}">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "y-card",
  props: {
    split: {
      type: [Number, Array],
      default: 1
    },
    padding: String,
    shadow: {
      validator(value) {
        return ["always", "hover", "never"].includes(value);
      },
      type: String,
      default: "always"
    }
  },
  data() {
    return {
      splitList: []
    };
  },
  computed: {
    slotName() {
      return index => {
        return "card" + (index + 1);
      };
    }
  },
  watch: {
    split: {
      handler(split) {
        this.splitList = [];
        if (typeof split === "number") {
          this.splitList = [];
          for (let i = 1; i <= split; i++) {
            this.splitList.push((100 / split).toFixed(2) + "%");
          }
        } else {
          this.splitList = split;
        }
      },
      immediate: true
    }
  }
};
</script>
