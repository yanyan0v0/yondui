<template>
  <li
    v-show="ifShow"
    class="y-option"
    :class="{'y-option-active': checkSelected, 'y-option-disabled': disabled}"
    @click="handleClick"
  >
    <slot>{{text}}</slot>
    <y-icon
      v-show="isMultiple && checkSelected"
      type="queding"
      size="12"
      class="y-option-multiple-icon"
      :class="{'y-option-multiple-checked': checkSelected}"
    ></y-icon>
  </li>
</template>

<script>
export default {
  name: "y-option",
  props: {
    value: [String, Number],
    label: String,
    disabled: Boolean
  },
  computed: {
    text() {
      return this.label || this.value;
    },
    // 是否是多选
    isMultiple() {
      return this.$parent.multiple;
    },
    // 是否阻止触发handleClick
    ifStop() {
      return this.$parent.ifStop;
    },
    // 当select开启搜索功能后，根据父组件的filterValue来判断是否隐藏
    ifShow() {
      let filterValue = this.$parent.filterValue;
      if (!this.$el || !filterValue) {
        return true;
      }
      let label = this.label || this.$el.innerText.trim() || this.value;
      return label.indexOf(filterValue) != -1;
    },
    checkSelected() {
      let isEqual = false;
      if (this.isMultiple) {
        isEqual = this.$parent.selectedValue.includes(this.value);
      } else {
        isEqual = this.$parent.selectedValue == this.value;
      }
      if (isEqual && !this.ifStop) {
        if (this.$el) {
          this.handleClick();
        } else {
          // 初始元素还未挂载时就会调用，这时是获取不到this.$el的，所以需要调用this.$nextTick
          this.$nextTick(() => {
            this.handleClick();
          });
        }
      }
      return isEqual;
    }
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        // 直接调用父组件方法将参数传递过去
        this.$parent.handleOptionClick(
          this.value,
          this.label || this.$el.innerText.trim() || this.value
        );
      }
    }
  }
};
</script>
