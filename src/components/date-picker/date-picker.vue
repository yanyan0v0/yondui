<template>
  <div
    class="y-date-picker"
    :style="{width}"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <y-input
      v-model="inputValue"
      type="textarea"
      :disabled="disabled"
      :size="size"
      :placeholder="placeholder"
      @on-focus="handleInputFocus"
    >
      <template slot="prefix">
        <slot name="prefix"></slot>
      </template>
      <y-icon slot="suffix" size="14" color="#c0c4cc" :type="suffixIcon" @click="handleClear"></y-icon>
    </y-input>
  </div>
</template>

<script>
import Vue from "vue";
import DatePcikerDropdown from "./date-picker-dropdown.vue";
import { setDateFormat } from "@/util/tools";
if (!new Date().Format) {
  setDateFormat(); // 注册格式化时间函数
}
export default {
  name: "y-date-picker",
  props: {
    value: [Date, String, Number],
    width: String,
    size: String,
    type: {
      type: String,
      default: "date"
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    format: String,
    clearable: Boolean,
    disabled: Boolean
  },
  data() {
    return {
      suffixIcon: "calendar",
      inputValue: "",
      dropdownVm: null,
      formats: {
        year: "yyyy",
        month: "yyyy-MM",
        date: "yyyy-MM-dd",
        daterange: "yyyy-MM-dd",
        datetime: "yyyy-MM-dd hh:mm:ss",
        datetimerange: "yyyy-MM-dd hh:mm:ss"
      }
    };
  },
  methods: {
    emitChange(date) {
      this.inputValue = date.Format(this.format || this.formats[this.type]);
      let type = typeof this.value;
      if (type == "object") {
        this.$emit("input", date);
      } else if (type == "string") {
        this.$emit(
          "input",
          date.Format(this.format || this.formats[this.type])
        );
      } else {
        this.$emit("input", date.getTime());
      }
      this.$emit("on-change", date);
    },
    handleMouseEnter() {
      if (this.clearable && this.inputValue) {
        this.suffixIcon = "shanchu";
      }
    },
    handleMouseLeave() {
      if (this.clearable) {
        this.suffixIcon = "calendar";
      }
    },
    handleInputFocus() {
      let pickerRect = this.$el.getBoundingClientRect();
      if (!this.dropdownVm) {
        let _this = this;
        const DropdownConstructor = Vue.extend(DatePcikerDropdown);
        this.dropdownVm = new DropdownConstructor({
          data: {
            top: pickerRect.bottom + 5,
            left: pickerRect.left,
            parentVm: _this,
            parentEl: _this.$el
          }
        }).$mount();
        document.body.appendChild(this.dropdownVm.$el);
        this.dropdownVm.show();
      } else {
        this.dropdownVm.top = pickerRect.bottom + 5;
        this.dropdownVm.left = pickerRect.left;
        this.dropdownVm.show();
      }
    },
    // 点击清空按钮
    handleClear() {
      if (this.suffixIcon == "shanchu") {
        this.$emit("on-clear");
        this.inputValue = "";
      }
    }
  },
  watch: {
    value: {
      handler(value) {
        if (value) {
          this.inputValue = new Date(value).Format(
            this.format || this.formats[this.type]
          );
        } else {
          this.inputValue = "";
        }
      },
      immediate: true
    }
  }
};
</script>