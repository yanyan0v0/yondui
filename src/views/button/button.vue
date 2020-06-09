<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>Button 按钮</h1>
      <h2>代码示例</h2>

      <!-- 分割线 -->
      <div v-show="compareVersion('ANLX')">
        <h3 id="ANLX">{{getNav('ANLX').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview preview-button">
              <y-button>default</y-button>
              <y-button color="primary">primary</y-button>
              <y-button color="success">success</y-button>
              <y-button color="text">text</y-button>
              <y-button color="warning">warning</y-button>
              <y-button color="error">error</y-button>
              <y-button color="#b519be">#b519be</y-button>
              <y-button color="rgb(13, 87, 165)">rgb(13, 87, 165)</y-button>
              <y-button :color="['primary', '#b519be', 'error']">primary, #b519be, error</y-button>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              <code>color</code>可以为
              <p>
                1:
                <code>primary</code>、
                <code>success</code>、
                <code>text</code>、
                <code>warning</code>、
                <code>error</code>、
                <code>yellow</code>等这些关键字
              </p>
              <p>
                2:
                <code>#b519be</code>等任意16进制
              </p>
              <p>
                3:
                <code>rgb(13, 87, 165)</code>等任意rgba
              </p>
              <p>
                4:
                <code>[primary, #b519be, rgb(13, 87, 165)]</code>等任意数组来实现渐变
              </p>不设置为默认样式。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <code-action-bar :name="getNav('ANLX').name" />
            <pre>
            <code>
  &lt;y-button&gt;default&lt;/y-button&gt;
  &lt;y-button color="primary"&gt;primary&lt;/y-button&gt;
  &lt;y-button color="success"&gt;success&lt;/y-button&gt;
  &lt;y-button color="text"&gt;text&lt;/y-button&gt;
  &lt;y-button color="warning"&gt;warning&lt;/y-button&gt;
  &lt;y-button color="error"&gt;error&lt;/y-button&gt;
  &lt;y-button color="#b519be"&gt;#b519be&lt;/y-button&gt;
  &lt;y-button color="rgb(13, 87, 165)"&gt;rgb(13, 87, 165)&lt;/y-button&gt;
  &lt;y-button :color="['primary', '#b519be', 'error']"&gt;[primary, #b519be, error]&lt;/y-button&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('ANXZ')">
        <h3 id="ANXZ">{{getNav('ANXZ').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview preview-button">
              <y-button color="primary">圆弧</y-button>
              <y-button color="primary" shape="none">直角</y-button>
              <y-button color="primary" shape="round">半圆角</y-button>
              <y-button color="primary" shape="solid">实线</y-button>
              <y-button color="primary" shape="dashed">虚线</y-button>
              <y-button color="primary" shape="text">文本</y-button>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              <code>shape</code>可以为
              <code>arc</code>圆弧（默认）、
              <code>none</code>直角、
              <code>round</code>半圆角、
              <code>solid</code>实线、
              <code>dashed</code>虚线、
              <code>text</code>文本这些关键字。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <code-action-bar :name="getNav('ANXZ').name" />
            <pre>
            <code>
  &lt;y-button color="primary"&gt;圆弧&lt;/y-button&gt;
  &lt;y-button color="primary" shape="none"&gt;直角&lt;/y-button&gt;
  &lt;y-button color="primary" shape="round"&gt;半圆角&lt;/y-button&gt;
  &lt;y-button color="primary" shape="solid"&gt;实线&lt;/y-button&gt;
  &lt;y-button color="primary" shape="dashed"&gt;虚线&lt;/y-button&gt;
  &lt;y-button color="primary" shape="text"&gt;文本&lt;/y-button&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('ANCC')">
        <h3 id="ANCC">{{getNav('ANCC').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview preview-button">
              <y-button color="primary" size="large">large</y-button>
              <y-button color="primary">default</y-button>
              <y-button color="primary" size="small">small</y-button>
              <y-button color="primary" size="mini">mini</y-button>
              <br />
              <y-button color="primary" shape="round" size="large">large</y-button>
              <y-button color="primary" shape="round">default</y-button>
              <y-button color="primary" shape="round" size="small">small</y-button>
              <y-button color="primary" shape="round" size="mini">mini</y-button>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              <code>size</code>可以为
              <code>large</code>大、
              中（默认）、
              <code>small</code>小、
              <code>mini</code>极小。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <code-action-bar :name="getNav('ANCC').name" />
            <pre>
            <code>
  &lt;y-button color="primary" size="large"&gt;large&lt;/y-button&gt;
  &lt;y-button color="primary"&gt;default&lt;/y-button&gt;
  &lt;y-button color="primary" size="small"&gt;small&lt;/y-button&gt;
  &lt;y-button color="primary" size="mini"&gt;mini&lt;/y-button&gt;
  &lt;br /&gt;
  &lt;y-button color="primary" shape="round" size="large"&gt;large&lt;/y-button&gt;
  &lt;y-button color="primary" shape="round"&gt;default&lt;/y-button&gt;
  &lt;y-button color="primary" shape="round" size="small"&gt;small&lt;/y-button&gt;
  &lt;y-button color="primary" shape="round" size="mini"&gt;mini&lt;/y-button&gt;
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
            <div class="preview preview-button">
              <y-button>default</y-button>
              <y-button color="primary">primary</y-button>
              <y-button shape="dashed">dashed</y-button>
              <y-button shape="text">text</y-button>
              <br />
              <y-button disabled>default</y-button>
              <y-button disabled color="primary">primary</y-button>
              <y-button disabled shape="dashed">dashed</y-button>
              <y-button disabled shape="text">text</y-button>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过添加
              <code>disabled</code>属性可将按钮设置为不可用状态。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <code-action-bar :name="getNav('JY').name" />
            <pre>
            <code>
  &lt;y-button color="primary" size="large"&gt;large&lt;/y-button&gt;
  &lt;y-button color="primary"&gt;default&lt;/y-button&gt;
  &lt;y-button color="primary" size="small"&gt;small&lt;/y-button&gt;
  &lt;y-button color="primary" size="mini"&gt;mini&lt;/y-button&gt;
  &lt;br /&gt;
  &lt;y-button color="primary" shape="round" size="large"&gt;large&lt;/y-button&gt;
  &lt;y-button color="primary" shape="round"&gt;default&lt;/y-button&gt;
  &lt;y-button color="primary" shape="round" size="small"&gt;small&lt;/y-button&gt;
  &lt;y-button color="primary" shape="round" size="mini"&gt;mini&lt;/y-button&gt;
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
            <div class="preview preview-button">
              <y-button loading color="primary" size="large">large</y-button>
              <y-button loading color="primary">default</y-button>
              <y-button loading color="primary" size="small">small</y-button>
              <y-button loading color="primary" size="mini">mini</y-button>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过添加
              <code>loading</code>属性可将按钮设置为加载中。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <code-action-bar :name="getNav('JZZ').name" />
            <pre>
            <code>
  &lt;y-button loading color="primary" size="large"&gt;large&lt;/y-button&gt;
  &lt;y-button loading color="primary"&gt;default&lt;/y-button&gt;
  &lt;y-button loading color="primary" size="small"&gt;small&lt;/y-button&gt;
  &lt;y-button loading color="primary" size="mini"&gt;mini&lt;/y-button&gt;
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
import viewMixins from "@/util/viewMixins";
export default {
  name: "Button",
  components: {
    "code-action-bar": () => import("@/views/code-action-bar.vue"),
    "footer-table": () => import("@/views/footer-table.vue")
  },
  mixins: [viewMixins],
  data() {
    return {
      navList: [
        {
          id: "ANLX",
          name: "按钮类型",
          version: "1.0.0"
        },
        {
          id: "ANXZ",
          name: "按钮形状",
          version: "1.0.0"
        },
        {
          id: "ANCC",
          name: "按钮尺寸",
          version: "1.0.0"
        },
        {
          id: "JY",
          name: "禁用",
          version: "1.0.0"
        },
        {
          id: "JZZ",
          name: "加载中",
          version: "1.0.0"
        },
        {
          id: "PROPS",
          name: "Button Props",
          version: "1.0.0"
        }
      ],
      propList: [
        {
          attr: "color",
          explain: `按钮颜色，可选值为 <code class="keyword-code">primary</code>、<code class="keyword-code">success</code>等关键字；16进制颜色值；rgba；数组实现渐变或者不设置`,
          type: "String | Array",
          default: "default"
        },
        {
          attr: "shape",
          explain: `按钮形状，可选值为<code class="keyword-code">arc</code>圆弧、 <code class="keyword-code">none</code>直角、<code class="keyword-code">round</code>半圆角、<code class="keyword-code">solid</code>实线、<code class="keyword-code">dashed</code>虚线、<code class="keyword-code">text</code>文本关键字或者不设置`,
          type: "String",
          default: "arc"
        },
        {
          attr: "size",
          explain: `按钮大小，可选值为 <code class="keyword-code">large</code>大、<code class="keyword-code">small</code>小、<code class="keyword-code">mini</code>极小或者不设置`,
          type: "String",
          default: "default"
        },
        {
          attr: "disabled",
          explain: "设置按钮为禁用状态",
          type: "Boolean",
          default: "false"
        },
        {
          attr: "loading",
          explain: "设置按钮为加载中",
          type: "Boolean",
          default: "false"
        }
      ]
    };
  }
};
</script>

<style lang="less">
.preview-button {
  .y-button {
    margin-bottom: 5px;
  }
}
</style>