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
              <y-loading />
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过设置
              <code>type</code>属性显示不同的提示状态：
              <code>success</code>成功、
              <code>warning</code>警告、
              <code>error</code>错误。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <pre>
            <code>
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
    </article>

    <!-- 导航滚动条 -->
    <y-nav ref="nav" :data="filterVersion(navList)"></y-nav>
  </div>
</template>

<script>
import { PROP_COLUMNS, SLOT_COLUMNS } from "@/util/config";
import viewMixins from "@/util/viewMixins";
export default {
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
          explain: `消息类型，可选<code class="keyword-code">info</code>默认、 <code class="keyword-code">success</code>成功、<code class="keyword-code">warning</code>警告、<code class="keyword-code">error</code>错误`,
          type: "String",
          default: "info"
        }
      ],
      slotList: [
        {
          attr: "default",
          explain: "默认显示内容"
        },
        {
          attr: "prefix",
          explain: "头部图标"
        },
        {
          attr: "suffix",
          explain: "尾部图标"
        }
      ]
    };
  },
  methods: {}
};
</script>