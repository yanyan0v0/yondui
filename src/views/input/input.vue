<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>Input 输入框</h1>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="navList[0].version >= version">
        <h3 :id="navList[0].id">{{navList[0].name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-input v-model="value1" placeholder="请输入" width="300px" />
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过设置
              <code>v-model</code>实现数据的双向绑定，
              可以直接设置
              <code>width</code>来改变输入框的宽度，默认 100%。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <pre>
            <code>
  &lt;y-input v-model="value1" placeholder="请输入" width="300px" /&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="navList[1].version >= version">
        <h3 :id="navList[1].id">{{navList[1].name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-input
                v-model="value2"
                size="large"
                placeholder="请输入"
                width="100px"
                style="margin-right: 10px"
              />
              <y-input v-model="value3" placeholder="请输入" width="100px" style="margin-right: 10px" />
              <y-input
                v-model="value4"
                size="small"
                placeholder="请输入"
                width="100px"
                style="margin-right: 10px"
              />
              <y-input
                v-model="value5"
                size="mini"
                placeholder="请输入"
                width="100px"
                style="margin-right: 10px"
              />
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
            <pre>
            <code>
  &lt;y-input v-model="value2" size="large" placeholder="请输入" width="100px" style="margin-right: 10px" /&gt;
  &lt;y-input v-model="value3" placeholder="请输入" width="100px" style="margin-right: 10px" /&gt;
  &lt;y-input v-model="value4" size="small" placeholder="请输入" width="100px" style="margin-right: 10px" /&gt;
  &lt;y-input v-model="value5" size="mini" placeholder="请输入" width="100px" style="margin-right: 10px" /&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="navList[2].version >= version">
        <h3 :id="navList[2].id">{{navList[2].name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-input v-model="value6" disabled placeholder="请输入" width="300px" />
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过添加
              <code>disabled</code>属性可设置为不可用状态。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <pre>
            <code>
  &lt;y-input v-model="value6" disabled placeholder="请输入" width="300px" /&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="navList[2].version >= version">
        <h3 :id="navList[2].id">{{navList[2].name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-input v-model="value7" placeholder="请输入" width="300px" class="m-b-5">
                <y-icon type="sousuo" slot="prefix"></y-icon>
              </y-input>
              <br />
              <y-input v-model="value8" placeholder="请输入" width="300px">
                <y-icon type="sousuo" slot="suffix"></y-icon>
              </y-input>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过设置
              <code>prefix</code> 和
              <code>suffix</code> 的 slot 设置前缀及后缀图标
              。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <pre>
            <code>
  &lt;y-input v-model="value7" placeholder="请输入" width="300px" class="m-b-5"&gt;
    &lt;y-icon type="sousuo" slot="prefix"&gt;&lt;/y-icon&gt;
  &lt;/y-input&gt;
  &lt;br /&gt;
  &lt;y-input v-model="value8" placeholder="请输入" width="300px"&gt;
    &lt;y-icon type="sousuo" slot="suffix"&gt;&lt;/y-icon&gt;
  &lt;/y-input&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <h2>API</h2>
      <div v-show="navList[3].version >= version">
        <h3 :id="navList[3].id">{{navList[3].name}}</h3>
        <y-table :data="propList" :columns="propColumns"></y-table>
      </div>
      <div v-show="navList[4].version >= version">
        <h3 :id="navList[4].id">{{navList[4].name}}</h3>
        <y-table :data="slotList" :columns="slotColumns"></y-table>
      </div>
    </article>

    <!-- 导航滚动条 -->
    <y-nav ref="nav" :data="navList"></y-nav>
  </div>
</template>

<script>
import { PROP_COLUMNS, SLOT_COLUMNS } from "@/util/config";
export default {
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
      value8: "",
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "0.1.6"
        },
        {
          id: "CC",
          name: "尺寸",
          version: "0.1.6"
        },
        {
          id: "JY",
          name: "禁用",
          version: "0.1.6"
        },
        {
          id: "PROPS",
          name: "Input Props",
          version: "0.1.6"
        },
        {
          id: "SLOTS",
          name: "Input Slots",
          version: "0.1.6"
        }
      ],
      propColumns: PROP_COLUMNS,
      slotColumns: SLOT_COLUMNS,
      propList: [
        {
          attr: "type",
          explain: `输入框类型，可选值为<code class="keyword-code">text</code>、<code class="keyword-code">password</code>、<code class="keyword-code">textarea</code>、<code class="keyword-code">url</code>、<code class="keyword-code">email</code>、<code class="keyword-code">date</code>、<code class="keyword-code">number</code>、<code class="keyword-code">tel</code>`,
          type: "String",
          default: "-"
        },
        {
          attr: "value",
          explain: `绑定的值，可使用<code class="keyword-code">v-model</code>双向绑定`,
          type: "String | Number",
          default: "空"
        },
        {
          attr: "size",
          explain: `输入框尺寸，可选值为<code class="keyword-code">large</code>、<code class="keyword-code">small</code>、<code class="keyword-code">mini</code>或者不设置`,
          type: "String",
          default: "-"
        },
        {
          attr: "maxlength",
          explain: `最大输入长度`,
          type: "Number",
          default: "-"
        },
        {
          attr: "width",
          explain: `宽度`,
          type: "String",
          default: "100%"
        },
        {
          attr: "placeholder",
          explain: `占位文本`,
          type: "String",
          default: "空"
        },
        {
          attr: "disabled",
          explain: `设置输入框为禁用状态`,
          type: "Boolean",
          default: "false"
        }
      ],
      slotList: [
        {
          attr: "prefix",
          explain: `输入框头部图标`
        },
        {
          attr: "suffix",
          explain: `输入框尾部图标`
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