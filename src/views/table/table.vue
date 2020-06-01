<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>Table 表格</h1>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="compareVersion('JC')">
        <h3 id="JC">{{getNav('JC').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-table :data="data1" :columns="columns1"></y-table>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">表格的最简单用法。</div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('JC').height}">
            <pre>
            <code>
  &lt;y-table :data="data1" :columns="columns1"&gt;&lt;/y-table&gt;

  export default {
    data() {
      return {
        columns1: [
          {
            title: "姓名",
            key: "name"
          },
          {
            title: "年龄",
            key: "age"
          },
          {
            title: "地址",
            key: "address"
          }
        ],
        data1: [
          {
            name: "张三",
            age: 18,
            address: "北京",
            date: "2016-10-03"
          },
          {
            name: "李四",
            age: 24,
            address: "上海",
            date: "2016-10-01"
          },
          {
            name: "王五",
            age: 30,
            address: "广州",
            date: "2016-10-02"
          },
          {
            name: "赵六",
            age: 26,
            address: "深圳",
            date: "2016-10-04"
          }
        ]
      };
    }
  };
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('BKTZ')">
        <h3 id="BKTZ">{{getNav('BKTZ').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-table border resizable :data="data1" :columns="columns1"></y-table>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              设置
              <code>borde</code>
              添加表格的边框线，增加
              <code>resizable</code>
              属性即可实现拖拽列
              。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('BKTZ').height}">
            <pre>
            <code>
  &lt;y-table border resizable :data="data1" :columns="columns1"&gt;&lt;/y-table&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('BMX')">
        <h3 id="BMX">{{getNav('BMX').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-table stripe :data="data1" :columns="columns1"></y-table>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              设置属性
              <code>stripe</code>
              ，表格会间隔显示不同颜色，用于区分不同行数据。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('BMX').height}">
            <pre>
            <code>
  &lt;y-table stripe :data="data1" :columns="columns1"&gt;&lt;/y-table&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('GDBT')">
        <h3 id="GDBT">{{getNav('GDBT').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-table border resizable height="100px" :data="data1" :columns="columns1"></y-table>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过设置属性
              <code>height</code>
              给表格指定高度后，会自动固定表头,当纵向内容过多时可以使用。
              <br />当表格的高度不确定时，可以设置
              <code>auto-height</code>
              来自动填满父容器，此时
              <code>height</code>会失效。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('GDBT').height}">
            <pre>
            <code>
  固定高度
  &lt;y-table border height="100px" :data="data1" :columns="columns1"&gt;&lt;/y-table&gt;

  不固定高度
  &lt;y-table border auto-height :data="data1" :columns="columns1"&gt;&lt;/y-table&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 底部API说明 -->
      <footer-table :name="$options.name" :propList="filterVersion(propList)">
        <div v-show="compareVersion('CPROPS')">
          <h3 id="CPROPS">{{getNav('CPROPS').name}}</h3>
          <y-table :data="filterVersion(cpropList)" :columns="propColumns"></y-table>
        </div>
      </footer-table>
    </article>

    <!-- 导航滚动条 -->
    <y-nav ref="nav" :data="filterVersion(navList)"></y-nav>
  </div>
</template>

<script>
import { PROP_COLUMNS } from "@/util/config";
import viewMixins from "@/util/viewMixins";
export default {
  name: "Table",
  components: {
    "footer-table": () => import("@/views/footer-table.vue")
  },
  mixins: [viewMixins],
  data() {
    return {
      columns1: [
        {
          title: "姓名",
          key: "name"
        },
        {
          title: "年龄",
          key: "age"
        },
        {
          title: "地址",
          key: "address",
          ellipsis: true
        }
      ],
      data1: [
        {
          name: "张三",
          age: 18,
          address: "北京",
          date: "2016-10-03"
        },
        {
          name: "李四",
          age: 24,
          address: "上海",
          date: "2016-10-01"
        },
        {
          name: "王五",
          age: 30,
          address: "广州",
          date: "2016-10-02"
        },
        {
          name: "赵六",
          age: 26,
          address: "深圳",
          date: "2016-10-04"
        }
      ],
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "0.1.6",
          height: "300px"
        },
        {
          id: "BKTZ",
          name: "边框和拖拽",
          version: "0.1.6"
        },
        {
          id: "BMX",
          name: "斑马线",
          version: "0.1.6",
          height: "300px"
        },
        {
          id: "GDBT",
          name: "固定表头",
          version: "0.1.6"
        },
        {
          id: "PROPS",
          name: "Table Props",
          version: "0.1.6"
        },
        {
          id: "CPROPS",
          name: "Column Props",
          version: "0.1.6"
        }
      ],
      propColumns: PROP_COLUMNS,
      propList: [
        {
          attr: "data",
          explain: "显示的结构化数据",
          type: "Array",
          default: "[]"
        },
        {
          attr: "columns",
          explain: "表格列的配置描述，具体项见后文Column Props",
          type: "Array",
          default: "-"
        },
        {
          attr: "align",
          explain: `对齐方式，可选值为 <code class="keyword-code">left</code> 左对齐、<code class="keyword-code">right</code> 右对齐和 <code class="keyword-code">center</code> 居中对齐`,
          type: "String",
          default: "left"
        },
        {
          attr: "border",
          explain: "是否显示边框",
          type: "Boolean",
          default: "false"
        },
        {
          attr: "resizable",
          explain: "是否可以拖拽列",
          type: "Boolean",
          default: "false"
        },
        {
          attr: "stripe",
          explain: "是否显示边框",
          type: "Boolean",
          default: "false"
        },
        {
          attr: "height",
          explain: "表格高度，如果表格内容大于此值，会固定表头并出现滚动条",
          type: "String",
          default: "-"
        },
        {
          attr: "auto-height",
          explain: "是否自动填充父容器，当表格的高度不确定时使用",
          type: "Boolean",
          default: "false"
        },
        {
          attr: "disabled-hover",
          explain: "禁用鼠标悬停时的高亮",
          type: "Boolean",
          default: "false"
        }
      ],
      cpropList: [
        {
          attr: "title",
          explain: "列头显示文字",
          type: "String",
          default: "-"
        },
        {
          attr: "key",
          explain: `对应列数据的字段名`,
          type: "String",
          default: "-"
        },
        {
          attr: "width",
          explain: `列宽`,
          type: "Number",
          default: "-"
        },
        {
          attr: "minWidth",
          explain: `最小列宽`,
          type: "Number",
          default: "-"
        },
        {
          attr: "maxWidth",
          explain: `最大列宽`,
          type: "Number",
          default: "-"
        },
        {
          attr: "ifHtml",
          explain: `对应列内容是否直接以html的方式渲染`,
          type: "Boolean",
          default: "false"
        },
        {
          attr: "ellipsis",
          explain: `对应列内容过长是否用...省略`,
          type: "Boolean",
          default: "false"
        }
      ]
    };
  }
};
</script>