<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>Draw 绘图</h1>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="navList[0].version >= version">
        <h3 :id="navList[0].id">{{navList[0].name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <div :style="{height: navList[0].height}">
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

      <!-- 分割线 -->
      <h2>API</h2>
      <div v-show="navList[1].version >= version">
        <h3 :id="navList[1].id">{{navList[1].name}}</h3>
        <y-table :data="propList" :columns="propColumns"></y-table>
      </div>
      <div v-show="navList[2].version >= version">
        <h3 :id="navList[2].id">{{navList[2].name}}</h3>
        <y-table :data="eventList" :columns="eventColumns"></y-table>
      </div>
    </article>

    <!-- 导航滚动条 -->
    <y-nav ref="nav" :data="navList"></y-nav>
  </div>
</template>

<script>
import { PROP_COLUMNS, EVENT_COLUMNS } from "@ui/util/config";
export default {
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
          name: "Draw Props",
          version: "0.1.7"
        },
        {
          id: "EVENTS",
          name: "Draw Events",
          version: "0.1.7"
        }
      ],
      propColumns: PROP_COLUMNS,
      eventColumns: EVENT_COLUMNS,
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
  },
  computed: {
    version() {
      return this.$store.state.version;
    }
  }
};
</script>