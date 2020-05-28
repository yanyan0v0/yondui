<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>Alert 消息提示</h1>
      <h2>代码示例</h2>

      <!-- 分割线 -->
      <div v-show="navList[0].version >= version">
        <h3 :id="navList[0].id">{{navList[0].name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview preview-alert">
              <y-alert>默认提示栏</y-alert>
              <y-alert type="success">成功提示栏</y-alert>
              <y-alert type="warning">警告提示栏</y-alert>
              <y-alert type="error">错误提示栏</y-alert>
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
  &lt;y-alert&gt;默认提示栏&lt;/y-alert&gt;
  &lt;y-alert type="success"&gt;成功提示栏&lt;/y-alert&gt;
  &lt;y-alert type="warning"&gt;警告提示栏&lt;/y-alert&gt;
  &lt;y-alert type="error"&gt;错误提示栏&lt;/y-alert&gt;
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
            <div class="preview preview-alert">
              <y-alert theme="dark">默认提示栏</y-alert>
              <y-alert type="success" theme="dark">成功提示栏</y-alert>
              <y-alert type="warning" theme="dark">警告提示栏</y-alert>
              <y-alert type="error" theme="dark">错误提示栏</y-alert>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过设置
              <code>theme</code>属性显示不同的主题：
              <code>light</code>浅色（默认）、
              <code>dark</code>深色。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <pre>
            <code>
  &lt;y-alert theme="dark"&gt;默认提示栏&lt;/y-alert&gt;
  &lt;y-alert type="success" theme="dark"&gt;成功提示栏&lt;/y-alert&gt;
  &lt;y-alert type="warning" theme="dark"&gt;警告提示栏&lt;/y-alert&gt;
  &lt;y-alert type="error" theme="dark"&gt;错误提示栏&lt;/y-alert&gt;
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
            <div class="preview preview-alert">
              <y-alert type="success" show-close>浅色成功提示栏</y-alert>
              <y-alert type="success" show-close theme="dark">深色成功提示栏</y-alert>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过设置
              <code>show-close</code>属性显示关闭按钮，点击移除Dom，回调函数为
              <code>on-close</code>，无返回值。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <pre>
            <code>
  &lt;y-alert type="success" show-close&gt;浅色成功提示栏&lt;/y-alert&gt;
  &lt;y-alert type="success" show-close theme="dark"&gt;深色成功提示栏&lt;/y-alert&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="navList[3].version >= version">
        <h3 :id="navList[3].id">{{navList[3].name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview preview-alert">
              <y-alert type="warning" hide-icon>浅色警告提示栏</y-alert>
              <y-alert type="warning" hide-icon theme="dark">深色警告提示栏</y-alert>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过设置
              <code>hide-icon</code>属性显示隐藏头部图标。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <pre>
            <code>
  &lt;y-alert type="warning" hide-icon&gt;浅色警告提示栏&lt;/y-alert&gt;
  &lt;y-alert type="warning" hide-icon theme="dark"&gt;深色警告提示栏&lt;/y-alert&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="navList[4].version >= version">
        <h3 :id="navList[4].id">{{navList[4].name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-button @click="open('info')">默认</y-button>
              <y-button @click="open('success')">成功</y-button>
              <y-button @click="open('warning')">警告</y-button>
              <y-button @click="open('error')">错误</y-button>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过设置
              <code>type</code>属性显示不同的提示状态：
              <code>success</code>成功、
              <code>warning</code>警告、
              <code>error</code>错误，默认在3秒后消失。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: navList[1].height}">
            <pre>
            <code>
  &lt;y-button @click="open('info')"&gt;默认&lt;/y-button&gt;
  &lt;y-button @click="open('success')"&gt;成功&lt;/y-button&gt;
  &lt;y-button @click="open('warning')"&gt;警告&lt;/y-button&gt;
  &lt;y-button @click="open('error')"&gt;错误&lt;/y-button&gt;

  export default{
    methods: {
      open(type) {
        this.$alert[type]('这是一条消息！');
      }
    }
  }
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="navList[5].version >= version">
        <h3 :id="navList[5].id">{{navList[5].name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-button @click="open1()">不自动关闭</y-button>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              设置
              <code>duration</code>为
              <code>0</code>
              ，不自动关闭，可通过设置
              <code>showClose</code>为
              <code>true</code>来显示关闭按钮，上述参数都可以在其中使用
              。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: navList[0].height}">
            <pre>
            <code>
  &lt;y-button @click="open1"&gt;不自动关闭&lt;/y-button&gt;

  export default{
    methods: {
      open1() {
        this.$alert.success({
          message: '点击后关闭',
          showClose: true,
          duration: 0
        })
      }
    }
  }
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <h2>API</h2>
      <div v-show="navList[6].version >= version">
        <h3 :id="navList[6].id">{{navList[6].name}}</h3>
        <y-table :data="propList" :columns="propColumns"></y-table>
      </div>
    </article>

    <!-- 导航滚动条 -->
    <y-nav ref="nav" :data="navList"></y-nav>
  </div>
</template>

<script>
import { PROP_COLUMNS } from "@ui/util/config";
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
          id: "ZT",
          name: "主题",
          version: "0.1.7",
          height: "200px"
        },
        {
          id: "GBAN",
          name: "关闭按钮",
          version: "0.1.7",
          height: "200px"
        },
        {
          id: "YCTB",
          name: "隐藏图标",
          version: "0.1.7",
          height: "200px"
        },
        {
          id: "HSSDY",
          name: "函数式调用",
          version: "0.1.7",
          height: "200px"
        },
        {
          id: "SZSJ",
          name: "设置时间",
          version: "0.1.7",
          height: "200px"
        },
        {
          id: "PROPS",
          name: "Alert Props",
          version: "0.1.7"
        }
      ],
      propColumns: PROP_COLUMNS,
      propList: [
        {
          attr: "message",
          explain: "显示消息内容",
          type: "String",
          default: ""
        },
        {
          attr: "duration",
          explain: "消息提示持续时间，0代表无限制，单位毫秒",
          type: "Number",
          default: "3000"
        },
        {
          attr: "showClose",
          explain: "显示关闭按钮",
          type: "Boolean",
          default: "false"
        },
        {
          attr: "onClose",
          explain: "点击关闭按钮的回调",
          type: "function",
          default: "-"
        }
      ]
    };
  },
  computed: {
    version() {
      return this.$store.state.version;
    }
  },
  methods: {
    open(type = "info") {
      this.$alert[type]("这是一条消息！");
    },
    open1() {
      this.$alert.success({
        message: "点击后关闭",
        showClose: true,
        duration: 0,
        onClose: () => {
          this.$alert.info("点击了关闭！");
        }
      });
    }
  }
};
</script>

<style lang="less">
.preview-alert {
  .y-alert {
    margin-bottom: 10px;
  }
}
</style>