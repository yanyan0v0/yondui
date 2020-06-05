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

      <!-- 分割线 -->
      <div v-show="compareVersion('ZDY')">
        <h3 id="ZDY">{{getNav('ZDY').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-table border :data="data1" :columns="columns2">
                <template slot="age" slot-scope="{row}">
                  <y-input v-model="row.age"></y-input>
                </template>
              </y-table>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              在 columns 的某列声明
              <code>type</code>为
              <code>slot</code>
              后，就可以在 Table 的 slot 中使用 slot-scope，对应的slot名称就是其列的key值。
              slot-scope 的参数有 3 个：当前行数据 row，当前列数据 col，当前行序号 index。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('ZDY').height}">
            <pre>
            <code>
  &lt;y-table border :data="data1" :columns="columns2"&gt;
    &lt;template slot="age" slot-scope="{row}"&gt;
      &lt;y-input v-model="row.age"&gt;&lt;/y-input&gt;
    &lt;/template&gt;
  &lt;/y-table&gt;

  export default {
    data() {
      return {
        columns2: [
          {
            title: "姓名",
            key: "name"
          },
          {
            type: "slot",
            title: "年龄",
            key: "age"
          },
          {
            title: "地址",
            key: "address",
            ellipsis: true
          }
        ]
      }
    }
  }
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('RXR')">
        <h3 id="RXR">{{getNav('RXR').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-table border :data="data1" :columns="columns3"></y-table>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过给 columns 数据的项设置一个函数 render，可以自定义渲染当前列，包括渲染自定义组件，它基于 Vue 的 Render 函数。
              render 函数传入两个参数，第一个是 h，第二个是对象，包含当前单元格数据
              <code>row</code>、当前列数据
              <code>col</code>、当前行序号
              <code>index</code>
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('RXR').height}">
            <pre>
            <code>
  &lt;y-table border :data="data1" :columns="columns3"&gt; &lt;/y-table&gt;

  export default {
    data() {
      return {
        columns2: [
          {
            title: "姓名",
            key: "name"
          },
          {
            type: "render",
            title: "年龄",
            key: "age",
            render(h, params) {
              return h("span", {
                style: {
                  color: params.row.age &lt;= 18 ? "green" : "red"
                },
                domProps: {
                  innerHTML: params.row.age
                }
              });
            }
          },
          {
            title: "地址",
            key: "address",
            ellipsis: true
          }
        ]
      }
    }
  }
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('XSXH')">
        <h3 id="XSXH">{{getNav('XSXH').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-table border :data="data1" :columns="columns4"></y-table>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过给 columns 数据的项新增
              <code>type</code>为
              <code>index</code>的列来显示序号
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('XSXH').height}">
            <pre>
            <code>
  &lt;y-table border :data="data1" :columns="columns4"&gt; &lt;/y-table&gt;

  export default {
    data() {
      return {
        columns2: [
          {
            type: "index",
            title: "#",
            width: 60
          },
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
        ]
      }
    }
  }
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('JZZ')">
        <h3 id="JZZ">{{getNav('JZZ').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-table border :data="data1" :columns="columns4" :loading="loading"></y-table>
              <p class="center-h">
                <span class="m-r-5">切换加载状态</span>
                <y-switch v-model="loading" size="small"></y-switch>
              </p>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              设置
              <code>loading</code>来使table变为加载中
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('JZZ').height}">
            <pre>
            <code>
  &lt;y-table border :data="data1" :columns="columns4" loading&gt; &lt;/y-table&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 底部API说明 -->
      <footer-table :name="$options.name" :propList="filterVersion(propList)">
        <div>
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
      columns2: [
        {
          title: "姓名",
          key: "name"
        },
        {
          type: "slot",
          title: "年龄",
          key: "age"
        },
        {
          title: "地址",
          key: "address",
          ellipsis: true
        }
      ],
      columns3: [
        {
          title: "姓名",
          key: "name"
        },
        {
          type: "render",
          title: "年龄",
          key: "age",
          render(h, params) {
            return h("span", {
              style: {
                color: params.row.age <= 18 ? "green" : "red"
              },
              domProps: {
                innerHTML: params.row.age
              }
            });
          }
        },
        {
          title: "地址",
          key: "address",
          ellipsis: true
        }
      ],
      columns4: [
        {
          type: "index",
          title: "#",
          width: 60
        },
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
      loading: true,
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "1.0.0",
          height: "300px"
        },
        {
          id: "BKTZ",
          name: "边框和拖拽",
          version: "1.0.0"
        },
        {
          id: "BMX",
          name: "斑马线",
          version: "1.0.0",
          height: "300px"
        },
        {
          id: "GDBT",
          name: "固定表头",
          version: "1.0.0"
        },
        {
          id: "ZDY",
          name: "自定义slot",
          version: "1.0.0",
          height: "400px"
        },
        {
          id: "RXR",
          name: "render渲染",
          version: "1.0.0",
          height: "400px"
        },
        {
          id: "XSXH",
          name: "显示序号",
          version: "1.0.0",
          height: "300px"
        },
        {
          id: "JZZ",
          name: "加载中",
          version: "1.0.0",
          height: "300px"
        },
        {
          id: "PROPS",
          name: "Table Props",
          version: "1.0.0"
        },
        {
          id: "CPROPS",
          name: "Column Props",
          version: "1.0.0"
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
          attr: "loading",
          explain: "是否显示加载中",
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
          attr: "type",
          explain: `列类型，可选值为 <code class="keyword-code">index</code>显示行序号、<code class="keyword-code">render</code>使用render函数渲染、<code class="keyword-code">slot</code>使用slot自定义内容、<code class="keyword-code">html</code>以v-html的方式渲染内容`,
          type: "String",
          default: "空"
        },
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