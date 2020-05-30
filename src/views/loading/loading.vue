<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>Loading 加载中</h1>
      <h2>代码示例</h2>

      <!-- 分割线 -->
      <div v-show="compareVersion('JC')">
        <h3 id="JC">{{getNav('JC').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview preview-alert">
              <y-loading>Loading...</y-loading>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过设置
              <code>type</code>属性显示不同的Loading类型。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <pre>
            <code>
  &lt;y-loading&gt;Loading...&lt;/y-loading&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <h2>API</h2>
      <div>
        <h3 id="PROPS">{{getNav('PROPS').name}}</h3>
        <y-table :data="filterVersion(propList)" :columns="propColumns"></y-table>
      </div>
      <div>
        <h3 id="SLOTS">{{getNav('SLOTS').name}}</h3>
        <y-table :data="filterVersion(slotList)" :columns="slotColumns"></y-table>
      </div>

      <!-- 分割线 -->
      <h2>所有Loading</h2>
      <y-alert>
        loading来自
        <a
          class="keyword-code"
          href="http://samherbert.net/svg-loaders/"
          target="_blank"
          rel="noopener noreferrer"
        >svg-loaders</a>、
        <a
          class="keyword-code"
          href="http://tobiasahlin.com/spinkit/"
          target="_blank"
          rel="noopener noreferrer"
        >spinkit</a>、
        <a
          class="keyword-code"
          href="https://codepen.io/viduthalai1947/full/JkhDK"
          target="_blank"
          rel="noopener noreferrer"
        >Loaders Kit</a>、
        <a
          class="keyword-code"
          href="https://codepen.io/CrocoDillon/pen/Htycs"
          target="_blank"
          rel="noopener noreferrer"
        >codepen网站</a>
      </y-alert>
      <y-svg-list></y-svg-list>
    </article>

    <!-- 导航滚动条 -->
    <y-nav ref="nav" :data="filterVersion(navList)"></y-nav>
  </div>
</template>

<script>
import { PROP_COLUMNS, SLOT_COLUMNS } from "@/util/config";
import viewMixins from "@/util/viewMixins";
export default {
  components: {
    YSvgList: () => import("./svg-list.vue")
  },
  mixins: [viewMixins],
  data() {
    return {
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "0.1.7",
          height: "200px"
        },
        {
          id: "PROPS",
          name: "Loading Props",
          version: "0.1.7"
        },
        {
          id: "SLOTS",
          name: "Loading Slots",
          version: "0.1.7"
        }
      ],
      propColumns: PROP_COLUMNS,
      slotColumns: SLOT_COLUMNS,
      propList: [
        {
          version: "0.1.7",
          attr: "type",
          explain: `loading类型，具体见下方列表`,
          type: "String",
          default: "circle"
        },
        {
          version: "0.1.7",
          attr: "color",
          explain: `loading颜色`,
          type: "String",
          default: "#5cadff"
        },
        {
          version: "0.1.7",
          attr: "size",
          explain: `loading大小`,
          type: "String",
          default: "25px"
        }
      ],
      slotList: [
        {
          attr: "default",
          explain: "默认加载文字内容"
        }
      ]
    };
  },
  methods: {}
};
</script>