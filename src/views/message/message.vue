<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>Message 消息提示</h1>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="navList[0].version >= version">
        <h3 :id="navList[0].id">{{navList[0].name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-button @click="open()">打开消息提示</y-button>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">最基本的提示，默认在3秒后消失。</div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: navList[0].height}">
            <pre>
            <code>
  &lt;y-button @click="open"&gt;打开消息提示&lt;/y-button&gt;

  export default{
    methods: {
      open() {
        this.$message.info('这是一条消息！');
      }
    }
  }
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
              <code>error</code>错误。
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
        this.$message[type]('这是一条消息！');
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
      <div v-show="navList[2].version >= version">
        <h3 :id="navList[2].id">{{navList[2].name}}</h3>
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
          id: "SL",
          name: "类别",
          version: "0.1.7",
          height: "200px"
        },
        {
          id: "PROPS",
          name: "Message props",
          version: "0.1.6"
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
          type: "String",
          default: "horizontal"
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
      this.$message[type]({
        message: "这是一条消息！"
      });
    }
  }
};
</script>