<template>
  <div class="y-time-picker" :style="{ width }">
    <y-input
      v-model="inputValue"
      readonly
      :disabled="disabled"
      :size="size"
      :clearable="clearable"
      :placeholder="placeholder"
      @on-click="handleInputFocus"
      @on-clear="handleClear"
    >
      <template slot="prefix">
        <slot name="prefix"></slot>
      </template>
      <y-icon slot="suffix" size="14" color="#c0c4cc" type="shizhong"></y-icon>
    </y-input>
  </div>
</template>

<script>
import Vue from "vue";
import TimePcikerDropdown from "./time-picker-dropdown.vue";
import { setDateFormat, getScrollParent } from "@/util/tools";
if (!new Date().Format) {
  setDateFormat(); // 注册格式化时间函数
}
export default {
  name: "y-time-picker",
  props: {
    value: [Date, String, Number, Array],
    width: String,
    size: String,
    placeholder: {
      type: String,
      default: "请选择",
    },
    format: String,
    range: Boolean,
    immediate: Boolean,
    clearable: Boolean,
    disabled: Boolean,
    hideFooter: Boolean,
    disabledTime: Function,
    filterTime: Function,
    appendToBody: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      // input框展示内容
      inputValue: "",
      // 给dropdown的值
      timeValue: null,
      dropdownVm: null,
    };
  },
  computed: {
    timeFormat() {
      if (this.format) {
        let text = "";
        if (this.format.indexOf("h") != -1) text += "hh:";
        if (this.format.indexOf("m") != -1) text += "mm";
        if (this.format.indexOf("s") != -1) text += ":ss";
        if (text == "hh:") text = "hh";
        return text;
      } else return "hh:mm:ss";
    },
  },
  methods: {
    emitChange(time) {
      // 范围选择
      if (this.range) {
        let startString = this.handleFormat(time ? time[0] : "");
        let endString = this.handleFormat(time ? time[1] : "");
        let formatString = startString.format + " 至 " + endString.format;
        this.inputValue = formatString;
        this.$emit("input", [startString.normal, endString.normal]);
        this.$emit("on-change", [startString.normal, endString.normal]);
        return;
      }

      let formatString = this.handleFormat(time);
      this.inputValue = formatString.format;
      this.$emit("input", formatString.normal);
      this.$emit("on-change", formatString.normal);
    },
    handleFormat(time) {
      if (!time) {
        return {
          format: "",
          normal: "",
        };
      }
      // 当传入的是Date或Number类型时， 需要转化为String
      if (typeof time == "object" || typeof time == "number")
        time = new Date(time).Format(this.timeFormat);
      // 不加:会解析错误
      if (this.timeFormat == "hh") time += ":";
      let datetime = new Date().Format("yyyy-MM-dd") + " " + time;
      return {
        // 显示格式
        format: new Date(datetime).Format(this.format || this.timeFormat),
        // 实际格式
        normal: new Date(datetime).Format(this.timeFormat),
      };
    },
    handleInputFocus() {
      let pickerRect = this.$el.getBoundingClientRect();
      let top = this.appendToBody ? pickerRect.bottom + 5 : "";
      let left = this.appendToBody ? pickerRect.left : 5;
      if (!this.dropdownVm) {
        let _this = this;
        const DropdownConstructor = Vue.extend(TimePcikerDropdown);
        this.dropdownVm = new DropdownConstructor({
          data: {
            top,
            left,
            bottom: pickerRect.height + 5,
            parentVm: _this,
            parentEl: _this.$el,
          },
        }).$mount();
        if (this.appendToBody) document.body.appendChild(this.dropdownVm.$el);
        else this.$el.appendChild(this.dropdownVm.$el);
        this.dropdownVm.show();
      } else {
        this.dropdownVm.top = top;
        this.dropdownVm.left = left;
        this.dropdownVm.show();
      }
    },
    // 点击清空按钮
    handleClear() {
      this.inputValue = "";
      if (this.range) {
        this.$emit("input", []);
        this.$emit("on-change", []);
      } else {
        this.$emit("input", "");
        this.$emit("on-change", "");
      }
      this.$emit("on-clear");
    },
  },
  mounted() {
    // 监听滚动
    let scrollParent = getScrollParent(this.$el);
    scrollParent.addEventListener("scroll", (e) => {
      if (this.dropdownVm && this.dropdownVm.visible) {
        let pickerRect = this.$el.getBoundingClientRect().toJSON();
        this.dropdownVm.top = this.appendToBody ? pickerRect.bottom + 5 : "";
        this.dropdownVm.left = this.appendToBody ? pickerRect.left : 5;
        this.dropdownVm.bottom = pickerRect.height + 5;
      }
    });
  },
  watch: {
    value: {
      handler(value) {
        if (value) {
          if (this.range) {
            let firstTime = value[0];
            let secondTime = value[1];
            let text = "";
            if (firstTime) {
              text = this.handleFormat(firstTime).format + "-";
            }
            if (secondTime) {
              text += this.handleFormat(secondTime).format;
            }
            this.inputValue = text;
            this.timeValue = [firstTime, secondTime];
          } else {
            this.inputValue = this.handleFormat(value).format;
            this.timeValue = value;
          }
        } else {
          this.inputValue = "";
          this.timeValue = "";
        }
      },
      immediate: true,
    },
  },
};
</script>