<template>
  <div
    class="y-date-picker"
    :style="{width}"
    @mouseover="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <y-input
      v-model="inputValue"
      type="textarea"
      readonly
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
    value: [Date, String, Number, Array],
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
    disabled: Boolean,
    multiple: Boolean
  },
  data() {
    return {
      suffixIcon: "calendar",
      // input框展示内容
      inputValue: "",
      // 给dropdown的值
      dateValue: null,
      dropdownVm: null,
      formats: {
        year: "yyyy",
        yearrange: "yyyy",
        month: "yyyy-MM",
        monthrange: "yyyy-MM",
        date: "yyyy-MM-dd",
        daterange: "yyyy-MM-dd",
        datetime: "yyyy-MM-dd hh:mm:ss",
        datetimerange: "yyyy-MM-dd hh:mm:ss"
      }
    };
  },
  computed: {
    // 时间格式
    dateFormat() {
      return this.format || this.formats[this.type];
    }
  },
  methods: {
    emitChange(date, time) {
      // 范围选择
      if (this.type.indexOf("range") != -1) {
        let startString = this.handleFormat(date[0], time ? time[0] : "");
        let endString = this.handleFormat(date[1], time ? time[1] : "");
        let formatString = startString + " 至 " + endString;
        this.inputValue = formatString;
        this.$emit("input", [startString, endString]);
        this.$emit("on-change", [startString, endString]);
        return;
      }

      // 当为多选时
      if (this.multiple) {
        let list = this.getMultipleList(date, time);
        this.inputValue = list.toString();
        this.$emit("input", list);
        this.$emit("on-change", list);
        return;
      }

      let formatString = this.handleFormat(date, time);
      this.inputValue = formatString;
      this.$emit("input", formatString);
      this.$emit("on-change", formatString);
    },
    handleFormat(date, time = "", type = "string") {
      let datetime = new Date(date).Format("yyyy-MM-dd") + " " + time;
      if (type == "object") {
        return new Date(datetime);
      } else if (type == "string") {
        return new Date(datetime).Format(this.dateFormat);
      } else {
        return new Date(datetime).getTime();
      }
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
    },
    getMultipleList(dateList, timeList) {
      let list = [];
      for (let i in dateList) {
        list.push(this.handleFormat(dateList[i], timeList ? timeList[i] : ""));
      }
      return list;
    }
  },
  watch: {
    value: {
      handler(value) {
        if (value) {
          if (!this.multiple && Array.isArray(value)) {
            let ifBigger = true;
            if (value[0] && value[1]) {
              // 判断谁大谁小
              ifBigger =
                new Date(value[1]).getTime() > new Date(value[0]).getTime();
            }
            let firstDate = value[ifBigger ? 0 : 1];
            let secondDate = value[ifBigger ? 1 : 0];
            this.dateValue = [firstDate, secondDate];
            let text = "";
            if (firstDate) {
              text = new Date(firstDate).Format(this.dateFormat) + "-";
            }
            if (secondDate) {
              text += new Date(secondDate).Format(this.dateFormat);
            }
            this.inputValue = text;
          } else {
            this.dateValue = value;
            if (this.multiple) {
              this.inputValue = this.getMultipleList(value).toString();
            } else {
              this.inputValue = new Date(value).Format(this.dateFormat);
            }
          }
        } else {
          this.dateValue = "";
          this.inputValue = "";
        }
      },
      immediate: true
    }
  }
};
</script>