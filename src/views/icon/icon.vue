<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>Icon 图标</h1>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="compareVersion('JC')">
        <h3 id="JC">{{getNav('JC').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-icon type="tianjia"></y-icon>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过设置
              <code>type</code>属性生成不同图标。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <pre>
            <code>
  &lt;y-icon type="tianjia"&gt;&lt;/y-icon&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <h2>API</h2>
      <div>
        <h3 :id="PROPS">{{getNav('PROPS').name}}</h3>
        <y-table :data="filterVersion(propList)" :columns="columns"></y-table>
      </div>

      <!-- 分割线 -->
      <h2>所有图标</h2>
      <y-icon-list></y-icon-list>
    </article>

    <!-- 导航滚动条 -->
    <y-nav ref="nav" :data="filterVersion(navList)"></y-nav>
  </div>
</template>

<script>
import { PROP_COLUMNS } from "@/util/config";
import viewMixins from "@/util/viewMixins";
export default {
  components: {
    YIconList: () => import("./icon-list.vue")
  },
  mixins: [viewMixins],
  data() {
    return {
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "0.1.4"
        },
        {
          id: "PROPS",
          name: "Icon Props",
          version: "0.1.4"
        }
      ],
      columns: PROP_COLUMNS,
      propList: [
        {
          attr: "type",
          explain: "图标的名称",
          type: "String",
          default: "-"
        },
        {
          attr: "size",
          explain: "图标的大小，单位px",
          type: "String",
          default: "-"
        },
        {
          attr: "color",
          explain: "图标的颜色",
          type: "String",
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