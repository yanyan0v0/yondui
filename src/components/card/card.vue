<template>
  <div class="y-card">
    <slot name="header"></slot>
    <div class="y-card-content">
      <div
        v-for="(split, index) in splitList"
        :key="index"
        :style="{width: split}"
        :class="{'is-border': index < splitList.length - 1}"
      >
        <slot :name="'card' + (index + 1)">{{split}}</slot>
      </div>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "y-card",
  props: {
    split: {
      type: [Number, Array],
      default: 1
    }
  },
  data() {
    return {
      splitList: []
    };
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
