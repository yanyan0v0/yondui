<template>
  <div class="y-table" :class="{'y-table-border': border, 'full-h': autoHeight}">
    <!-- 表头 -->
    <table
      class="y-table-header"
      :class="[
        classPrefix + align,
        {'y-table-header-border': border},
        size ? classPrefix + size : '' 
      ]"
    >
      <colgroup>
        <col v-for="col in colgroups" :key="col.key" :width="col.width" />
        <col v-if="ifScroll" :width="scrollWidth" />
      </colgroup>
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key" :class="[col.class]">
            {{col.title}}
            <div
              v-if="resizable && border"
              class="y-table-header-resizable"
              @mousedown="handleMouseDown(col, $event)"
            ></div>
          </th>
          <th v-if="ifScroll" class="scroll-th"></th>
        </tr>
      </thead>
    </table>

    <!-- 表体外层 为了实现滚动效果 -->
    <div class="y-table-body-warpper" :style="{height: autoHeight ? '0' : height}">
      <!-- 表体 -->
      <table
        class="y-table-body"
        :class="[
        classPrefix + align, 
          {'y-table-body-border': border, 'y-table-body-stripe': stripe, 'y-table-body-disabled-hover': disabledHover},
          computeSize 
        ]"
      >
        <colgroup>
          <col v-for="col in colgroups" :key="col.key" :width="col.width" />
        </colgroup>
        <tbody>
          <tr v-for="(row, index) in data" :key="index" :class="[row.class]">
            <td v-for="col in columns" :key="col.key" :class="[col.class]">
              <template v-if="col.type=='index'">
                <div>{{index + 1}}</div>
              </template>
              <template v-if="col.type=='html'">
                <div :class="{'y-td-ellipsis': col.ellipsis}" v-html="row[col.key]"></div>
              </template>
              <template v-else-if="col.type=='slot'">
                <div :class="{'y-td-ellipsis': col.ellipsis}">
                  <table-slot :row="row" :col="col" :index="index"></table-slot>
                </div>
              </template>
              <template v-else-if="col.type=='render'">
                <div :class="{'y-td-ellipsis': col.ellipsis}">
                  <table-render :row="row" :col="col" :index="index"></table-render>
                </div>
              </template>
              <template v-else>
                <div :class="{'y-td-ellipsis': col.ellipsis}">{{row[col.key]}}</div>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- laoding -->
      <y-loading v-show="loading" :type="loadType"></y-loading>
    </div>

    <!-- 拖拽线 -->
    <div v-show="dragCol.key" class="y-table-resize-line" :style="getResizeLineStyle"></div>
  </div>
</template>

<script>
import { deepCopy } from "@/util/tools";
import TableSlot from "./components/slot";
import TableRender from "./components/render";
export default {
  name: "y-table",
  components: {
    TableSlot,
    TableRender
  },
  // 需要用函数来返回this
  provide() {
    return {
      tableRoot: this
    };
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    align: {
      type: String,
      default: "left"
    },
    border: {
      type: Boolean,
      default: false
    },
    stripe: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: ""
    },
    autoHeight: {
      type: Boolean,
      default: false
    },
    disabledHover: {
      type: Boolean,
      default: false
    },
    resizable: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadType: {
      type: String,
      default: "circle"
    }
  },
  data() {
    return {
      classPrefix: "y-table-",
      colgroups: [],

      // 根据浏览器内核判定滚动条的宽度
      scrollWidth: navigator.userAgent.indexOf("AppleWebKit") != -1 ? 8 : 17,
      // 是否出现滚动条
      ifScroll: false,

      // 当前点击的拖拽列
      dragCol: {}
    };
  },
  computed: {
    computeSize() {
      return this.size
        ? this.classPrefix + this.size
        : this.$YONDUI.size
        ? this.classPrefix + this.$YONDUI.size
        : "";
    },
    getResizeLineStyle() {
      return {
        left: (this.dragCol.startX || 0) + "px",
        transform: `translateX(${this.dragCol.moveX || 0}px)`
      };
    }
  },
  methods: {
    handleMouseDown(col, event) {
      this.dragCol = {
        key: col.key,
        x: event.x,
        startX: event.x - this.$el.getBoundingClientRect().left,
        moveX: 0
      };
      this.$el.addEventListener("mousemove", this.handleMouseMove);
      window.addEventListener("mouseup", this.handleMouseUp);
    },
    handleMouseMove(event) {
      if (this.dragCol.key) {
        document.body.style["user-select"] = "none";
        this.dragCol.moveX = event.x - this.dragCol.x;
      }
    },
    handleMouseUp() {
      if (this.dragCol.key) {
        document.body.style["user-select"] = "";
        // 找到对应列 增加减少宽度
        let index = this.colgroups.findIndex(
          item => item.key === this.dragCol.key
        );
        this.$set(this.colgroups, index, {
          ...this.colgroups[index],
          width: this.colgroups[index].width + this.dragCol.moveX
        });
        // 将增加或减少的宽度分配到不含width或含minWidth、maxWidth的col中
        let noWidthCols = this.columns.filter(
          item =>
            item.key != this.dragCol.key &&
            (!item.width || item.minWidth || item.maxWidth)
        );
        // 每一个列需要增加或减少的量
        let avgWidth = noWidthCols.length
          ? parseInt(this.dragCol.moveX / noWidthCols.length)
          : 0;

        for (let col of this.colgroups) {
          // 过滤掉拖拽的列
          if (col.key == this.dragCol.key) {
            continue;
          }
          let afterWidth = col.width - avgWidth;
          // 含minWidth的col最多只能减少到其minWidth的宽度
          if (col.minWidth && avgWidth > 0) {
            if (afterWidth < col.minWidth) {
              col.width = col.minWidth;
              avgWidth += parseInt(
                avgWidth - (col.width - col.minWidth) / (noWidthCols.length - 1)
              );
            }
          }
          // 含maxWidth的col最多只能增加到其maxWidth的宽度
          if (col.maxWidth && avgWidth < 0) {
            if (afterWidth > col.maxWidth) {
              col.width = col.maxWidth;
              avgWidth += parseInt(
                (col.width - col.minWidth) / (noWidthCols.length - 1)
              );
            }
          }
          // 从传递过来的columns中找到对应的列，不能直接使用col，因为col的宽度已经被修改过
          let colIndex = this.columns.findIndex(item => item.key === col.key);
          // 修改未设任何宽度属性的列
          if (!this.columns[colIndex].width && !col.minWidth && !col.maxWidth) {
            col.width = afterWidth;
          }
        }

        this.dragCol = {};
        this.$el.removeEventListener("mousemove", this.handleMouseMove);
        window.removeEventListener("mouseup", this.handleMouseUp);
      }
    },
    // 此函数是为了计算每一列的宽度，当表格需要重绘时调用
    handleResize() {
      // 设置autoHeight属性会自动调整表格高度 这时会忽略height属性
      let tableHeader = this.$el.firstChild;
      let tableBody = this.$el.childNodes[1];
      if (this.autoHeight) {
        tableBody.style.height =
          this.$el.offsetHeight - tableHeader.offsetHeight + "px";
      }
      // 判断是否出现滚动条
      this.ifScroll = tableBody.scrollHeight > tableBody.offsetHeight;

      let tableWidth = this.$el.offsetWidth; // 整个table的宽度
      if (this.ifScroll) {
        tableWidth -= this.scrollWidth;
      }
      let hasWidthCols = []; // 设置width或minWidth参数的列
      let noWidthCols = []; // 未设置width或minWidth参数的列
      let usedSumWidth = 0; // 设置width或minWidth参数的列的宽度总和
      let useableSumWidth = 0; // 未分配宽度的总和
      let avgWidth = 0; // 平均未分配宽度

      // 遍历获取各参数数据
      for (let col of this.colgroups) {
        if (col.width) {
          hasWidthCols.push(col);
          usedSumWidth += col.width;
        } else if (col.minWidth) {
          usedSumWidth += col.minWidth;
          hasWidthCols.push(col);
          noWidthCols.push(col);
        } else {
          noWidthCols.push(col);
        }
      }
      usedSumWidth = hasWidthCols
        .map(item => item.width || item.minWidth)
        .reduce((a, b) => a + b, 0);
      useableSumWidth = tableWidth - usedSumWidth;
      if (useableSumWidth > 0 && noWidthCols.length > 0) {
        avgWidth = parseInt(useableSumWidth / noWidthCols.length);
      }

      // 遍历分配各参数
      for (let col of this.colgroups) {
        if (col.minWidth) {
          col.width = avgWidth + col.minWidth;
        } else if (col.maxWidth) {
          col.width = avgWidth >= col.maxWidth ? col.maxWidth : avgWidth;
        } else if (!col.width) {
          col.width = avgWidth;
        }
      }
    }
  },
  watch: {
    columns: {
      handler(columns) {
        this.colgroups = deepCopy(columns);
        this.handleResize();
      },
      deep: true
    }
  },
  mounted() {
    this.colgroups = deepCopy(this.columns);
    this.handleResize();
  }
};
</script>
