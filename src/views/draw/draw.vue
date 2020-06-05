<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>Draw 绘图</h1>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="compareVersion('JC')">
        <h3 id="JC">{{getNav('JC').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <div :style="{height: getNav('JC').height}">
                <y-draw />
              </div>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">最基本的绘图。</div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <pre>
            <code>
  &lt;y-draw /&gt;

            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 底部API说明 -->
      <footer-table
        :name="$options.name"
        :propList="filterVersion(propList)"
        :eventList="filterVersion(eventList)"
      ></footer-table>
    </article>

    <!-- 导航滚动条 -->
    <y-nav ref="nav" :data="filterVersion(navList)"></y-nav>
  </div>
</template>

<script>
import viewMixins from "@/util/viewMixins";
export default {
  name: "Draw",
  components: {
    "footer-table": () => import("@/views/footer-table.vue")
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
          name: "Draw Props",
          version: "1.0.0"
        },
        {
          id: "EVENTS",
          name: "Draw Events",
          version: "1.0.0"
        }
      ],
      propList: [
        {
          attr: "direction",
          explain: `工具栏位置，可选<code class="keyword-code">top</code>上、<code class="keyword-code">right</code>右、<code class="keyword-code">bottom</code>下、<code class="keyword-code">left</code>左`,
          type: "String",
          default: "top"
        }
      ],
      eventList: [
        {
          attr: "on-save",
          explain: "点击保存后的回调",
          return: "当前canvas的base64图像格式"
        },
        {
          attr: "on-undo",
          explain: "点击撤销后的回调",
          return: "撤销后canvas的base64图像格式"
        },
        {
          attr: "on-clear",
          explain: "点击清除后的回调",
          return: "无"
        }
      ]
    };
  }
};
</script>