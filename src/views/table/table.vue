<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>Table 表格</h1>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="navList[0].version >= version">
        <h3 :id="navList[0].id">{{navList[0].name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-table :data="data1" :columns="columns1"></y-table>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">表格的最简单用法。</div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: navList[0].height}">
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
      <div v-show="navList[1].version >= version">
        <h3 :id="navList[1].id">{{navList[1].name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-table border :data="data1" :columns="columns1"></y-table>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">添加表格的边框线。</div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: navList[1].height}">
            <pre>
            <code>
  &lt;y-table border :data="data1" :columns="columns1"&gt;&lt;/y-table&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="navList[2].version >= version">
        <h3 :id="navList[2].id">{{navList[2].name}}</h3>
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
          <div slot="card2" v-highlight class="code-card" :style="{height: navList[1].height}">
            <pre>
            <code>
  &lt;y-table stripe :data="data1" :columns="columns1"&gt;&lt;/y-table&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="navList[3].version >= version">
        <h3 :id="navList[3].id">{{navList[3].name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-table border height="100px" :data="data1" :columns="columns1"></y-table>
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
          <div slot="card2" v-highlight class="code-card" :style="{height: navList[3].height}">
            <pre>
            <code>
  &lt;y-table border height="100px" :data="data1" :columns="columns1"&gt;&lt;/y-table&gt;
  &lt;y-table border auto-height :data="data1" :columns="columns1" :style="{height: 100%}"&gt;&lt;/y-table&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <h2>API</h2>
      <div v-show="navList[4].version >= version">
        <h3 :id="navList[4].id">{{navList[4].name}}</h3>
        <y-table :data="propList" :columns="columns"></y-table>
      </div>

      <div v-show="navList[5].version >= version">
        <h3 :id="navList[5].id">{{navList[5].name}}</h3>
        <y-table :data="cpropList" :columns="columns"></y-table>
      </div>
    </article>

    <!-- 导航滚动条 -->
    <y-nav ref="nav" :data="navList"></y-nav>
  </div>
</template>

<script>
import { PROP_COLUMNS } from "@ui/util/config";
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
      ],
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "0.1.6",
          height: "300px"
        },
        {
          id: "DBK",
          name: "带边框",
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
          id: "TPROPS",
          name: "Table props",
          version: "0.1.6"
        },
        {
          id: "CPROPS",
          name: "Column props",
          version: "0.1.6"
        }
      ],
      columns: PROP_COLUMNS,
      propList: [
        {
          attr: "data",
          explain: "显示的结构化数据",
          type: "Array",
          default: "[]"
        },
        {
          attr: "columns",
          explain: "表格列的配置描述，具体项见后文Column props",
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
        }
      ]
    };
  },
  computed: {
    version() {
      return this.$store.state.version;
    }
  }
};
</script>