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
            <div class="preview preview-loading">
              <div>
                <y-loading color="blue"></y-loading>
              </div>
              <div>
                <y-loading type="audio" color="green"></y-loading>
              </div>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过设置
              <code>type</code>属性显示不同的Loading类型，所有type在下方有展示，默认type为第一个。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <code-action-bar :name="getNav('JC').name" />
            <pre>
            <code>
  &lt;div&gt;
    &lt;y-loading color="blue"&gt;&lt;/y-loading&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;y-loading type="audio" color="green"&gt;&lt;/y-loading&gt;
  &lt;/div&gt;
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
      ></footer-table>

      <!-- 分割线 -->
      <h2>所有Loading</h2>
      <y-alert>
        loading来自
        <a
          class="keyword-a"
          href="http://samherbert.net/svg-loaders/"
          target="_blank"
          rel="noopener noreferrer"
        >svg-loaders</a>、
        <a
          class="keyword-a"
          href="http://tobiasahlin.com/spinkit/"
          target="_blank"
          rel="noopener noreferrer"
        >spinkit</a>、
        <a
          class="keyword-a"
          href="https://codepen.io/viduthalai1947/full/JkhDK"
          target="_blank"
          rel="noopener noreferrer"
        >Loaders Kit</a>、
        <a
          class="keyword-a"
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
import viewMixins from "@/mixins/view";
export default {
  name: "Loading",
  components: {
    "code-action-bar": () => import("@/views/code-action-bar.vue"),
    "footer-table": () => import("@/views/footer-table.vue"),
    YSvgList: () => import("./svg-list.vue")
  },
  mixins: [viewMixins],
  data() {
    return {
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "1.0.0",
          height: "200px"
        },
        {
          id: "PROPS",
          name: "Loading Props",
          version: "1.0.0"
        },
        {
          id: "SLOTS",
          name: "Loading Slots",
          version: "1.0.0"
        }
      ],
      propList: [
        {
          version: "1.0.0",
          attr: "type",
          explain: `loading类型，具体见下方列表`,
          type: "String",
          default: "circle"
        },
        {
          version: "1.0.0",
          attr: "color",
          explain: `loading颜色`,
          type: "String",
          default: "#5cadff"
        },
        {
          version: "1.0.0",
          attr: "size",
          explain: `loading大小`,
          type: "String",
          default: "25px"
        }
      ],
      slotList: [
        {
          attr: "-",
          explain: "默认加载文字内容"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="less">
.preview-loading {
  display: flex;
  position: relative;
  height: 200px;
  & > div {
    position: relative;
    flex: 1;
    & > .y-loading {
      background-color: transparent;
    }
  }
  // & > .loading1 {
  //   background-color: blue;
  // }
  // & > .loading2 {
  //   background-color: green;
  // }
}
</style>
