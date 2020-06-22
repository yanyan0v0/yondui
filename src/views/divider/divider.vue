<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>Divider 分割线</h1>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="compareVersion('JC')">
        <h3 id="JC">{{getNav('JC').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <p>段落</p>
              <y-divider />
              <p>段落</p>
              <y-divider>文本</y-divider>
              <p>段落</p>
              <y-divider position="left">文本</y-divider>
              <p>段落</p>
              <y-divider position="right">文本</y-divider>
              <p>段落</p>
              <y-divider dashed />
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              默认为水平分割线，可在中间加入文字，
              <br />
              <code>dashed</code>可设置为虚线。
              <br />
              <code>position</code>可控制文本位置，可选
              <code>left</code>左、
              <code>center</code>中（默认）、
              <code>right</code>右
              。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <code-action-bar :name="getNav('JC').name" />
            <pre>
            <code>
  &lt;p&gt;段落&lt;/p&gt;
  &lt;y-divider /&gt;
  &lt;p&gt;段落&lt;/p&gt;
  &lt;y-divider&gt;文本&lt;/y-divider&gt;
  &lt;p&gt;段落&lt;/p&gt;
  &lt;y-divider position="left"&gt;文本&lt;/y-divider&gt;
  &lt;p&gt;段落&lt;/p&gt;
  &lt;y-divider position="right"&gt;文本&lt;/y-divider&gt;
  &lt;p&gt;段落&lt;/p&gt;
  &lt;y-divider dashed /&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('FX')">
        <h3 id="FX">{{getNav('FX').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <span>文本</span>
              <y-divider direction="vertical" />
              <span>文本</span>
              <y-divider direction="vertical" />
              <span>文本</span>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过设置
              <code>direction</code>可控制方向，可选
              <code>horizontal</code>水平（默认）、
              <code>vertical</code>垂直
              。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <code-action-bar :name="getNav('FX').name" />
            <pre>
            <code>
  &lt;span&gt;文本&lt;/span&gt;
  &lt;y-divider direction="vertical" /&gt;
  &lt;span&gt;文本&lt;/span&gt;
  &lt;y-divider direction="vertical" /&gt;
  &lt;span&gt;文本&lt;/span&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 底部API说明 -->
      <footer-table :name="$options.name" :propList="filterVersion(propList)"></footer-table>
    </article>

    <!-- 导航滚动条 -->
    <y-nav ref="nav" :data="filterVersion(navList)"></y-nav>
  </div>
</template>

<script>
import viewMixins from "@/mixins/view";
export default {
  name: "Divider",
  components: {
    "code-action-bar": () => import("@/views/code-action-bar.vue"),
    "footer-table": () => import("@/views/footer-table.vue")
  },
  mixins: [viewMixins],
  data() {
    return {
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "1.0.0"
        },
        {
          id: "FX",
          name: "方向",
          version: "1.0.0"
        },
        {
          id: "PROPS",
          name: "Icon Props",
          version: "1.0.0"
        }
      ],
      propList: [
        {
          attr: "position",
          explain: `可选<code class="keyword-code">left</code>左、<code class="keyword-code">center</code>中、<code class="keyword-code">right</code>右`,
          type: "String",
          default: "center"
        },
        {
          attr: "dashed",
          explain: "是否为虚线",
          type: "Boolean",
          default: "false"
        },
        {
          attr: "direction",
          explain: `可选<code class="keyword-code">horizontal</code>水平、<code class="keyword-code">vertical</code>垂直`,
          type: "String",
          default: "horizontal"
        }
      ]
    };
  }
};
</script>