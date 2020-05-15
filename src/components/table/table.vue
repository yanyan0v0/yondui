<template>
  <div class="y-table-wrapper">
    <table
      class="y-table"
      :class="[classPrefix + align, {'y-table-border': border}, size ? classPrefix + size : '' ]"
    >
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key" :class="[col.class]">{{col.title}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="index" :class="[row.class]">
          <td v-for="col in columns" :key="col.key" :class="[col.class]">
            <template v-if="col.ifHtml">
              <div v-html="row[col.key]"></div>
            </template>
            <template v-else>{{row[col.key]}}</template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "y-table",
  props: {
    data: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    align: {
      type: String,
      default: "left"
    },
    border: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      classPrefix: "y-table-"
    };
  }
};
</script>

<style lang="less">
.y-table-wrapper {
  .y-table {
    width: 100%;
    border-spacing: 0;
    font-size: 14px;
    td,
    th {
      .text-left;
      border: none;
      border-bottom: 1px solid @border-color;
      padding: 8px 16px;
    }
  }
  .y-table-center {
    td,
    th {
      .text-center;
    }
  }
  .y-table-right {
    td,
    th {
      .text-right;
    }
  }
  // 边框表格
  .y-table-border {
    border-top: 1px solid @border-color;
    border-left: 1px solid @border-color;
    td,
    th {
      border-right: 1px solid #e8eaec;
    }
  }

  // 小型表格
  .y-table-small {
    font-size: 12px;
    td,
    th {
      padding: 6px 12px;
    }
  }
}
</style>