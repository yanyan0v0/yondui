<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>Page 分页</h1>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="compareVersion('JC')">
        <h3 id="JC">{{getNav('JC').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-page v-model="page1" :total="200"></y-page>
              <p>当前页：{{page1}}</p>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              最基本用法，使用
              <code>v-model</code> 绑定当前页，
              <code>total</code> 指定总条数 。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('JC').height}">
            <code-action-bar :name="getNav('JC').name" />
            <pre v-pre>
            <code>
  &lt;y-page v-model="page1" :total="200"&gt;&lt;/y-page&gt;
  &lt;p&gt;当前页：{{page1}}&lt;/p&gt;

  export default {
    data() {
      return {
        page1: 1
      }
    }
  }
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('WZSL')">
        <h3 id="WZSL">{{getNav('WZSL').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-page v-model="page2" show-total show-sizer show-jumper :total="200"></y-page>
              <p>当前页：{{page2}}</p>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              <code>show-total</code> 显示总条数，
              <code>show-sizer</code> 显示分页大小选择器，
              <code>show-jumper</code> 显示跳转输入框。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('WZSL').height}">
            <code-action-bar :name="getNav('WZSL').name" />
            <pre v-pre>
            <code>
  &lt;y-page v-model="page1" show-total show-sizer show-jumper :total="200"&gt;&lt;/y-page&gt;
  &lt;p&gt;当前页：{{page1}}&lt;/p&gt;

  export default {
    data() {
      return {
        page2: 1
      }
    }
  }
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('JY')">
        <h3 id="JY">{{getNav('JY').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-page disabled show-total show-sizer show-jumper :total="200"></y-page>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              设置
              <code>disabled</code> 禁用所有选择事件。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('JY').height}">
            <code-action-bar :name="getNav('JY').name" />
            <pre v-pre>
            <code>
  &lt;y-page disabled show-total show-sizer show-jumper :total="200"&gt;&lt;/y-page&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 底部API说明 -->
      <footer-table
        :name="$options.name"
        :propList="filterVersion(propList)"
        :slotList="filterVersion(slotList)"
        :eventList="filterVersion(eventList)"
      ></footer-table>
    </article>

    <!-- 导航滚动条 -->
    <y-nav ref="nav" :data="filterVersion(navList)"></y-nav>
  </div>
</template>

<script>
import viewMixins from "@/mixins/view";
export default {
  name: "Page",
  components: {
    "code-action-bar": () => import("@/views/code-action-bar.vue"),
    "footer-table": () => import("@/views/footer-table.vue")
  },
  mixins: [viewMixins],
  data() {
    return {
      page1: 1,
      page2: 1,
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "1.0.0",
          height: "200px"
        },
        {
          id: "WZSL",
          name: "完整示例",
          version: "1.0.0",
          height: "200px"
        },
        {
          id: "JY",
          name: "禁用",
          version: "1.0.0",
          height: "200px"
        },
        {
          id: "PROPS",
          name: "Page Props",
          version: "1.0.0"
        },
        {
          id: "SLOTS",
          name: "Page Slots",
          version: "1.0.0"
        },
        {
          id: "EVENTS",
          name: "Page Events",
          version: "1.0.0"
        }
      ],
      propList: [
        {
          version: "1.0.0",
          attr: "value",
          explain: `可以使用 <code class="keyword-code">v-model</code> 双向绑定数据`,
          type: "Number",
          default: "1"
        },
        {
          version: "1.0.0",
          attr: "total",
          explain: `数据总条数`,
          type: "Number",
          default: "1"
        },
        {
          version: "1.0.0",
          attr: "page-size",
          explain: `每页条数`,
          type: "Number",
          default: "10"
        },
        {
          version: "1.0.0",
          attr: "page-sizes",
          explain: `每页条数选择器的配置`,
          type: "Array",
          default: "[10, 20, 30, 40]"
        },
        {
          version: "1.0.0",
          attr: "show-total",
          explain: `显示总数`,
          type: "Boolean",
          default: "true"
        },
        {
          version: "1.0.0",
          attr: "show-jumper",
          explain: `显示跳转输入框，可以快速切换到某一页`,
          type: "Boolean",
          default: "false"
        },
        {
          version: "1.0.0",
          attr: "show-sizer",
          explain: `显示每页条数选择器, 用来改变<code class="keyword-code">page-size</code>`,
          type: "Boolean",
          default: "false"
        },
        {
          version: "1.0.0",
          attr: "disabled",
          explain: `是否禁用`,
          type: "Boolean",
          default: "false"
        }
      ],
      eventList: [
        {
          attr: "on-change",
          explain: "页码改变的回调，返回改变后的页码",
          return: "page"
        },
        {
          attr: "on-size-change",
          explain: "切换每页条数时的回调，返回切换后的每页条数",
          return: "size"
        }
      ],
      slotList: [
        {
          attr: "无",
          explain: "自定义显示总数的内容"
        }
      ]
    };
  },
  methods: {}
};
</script>