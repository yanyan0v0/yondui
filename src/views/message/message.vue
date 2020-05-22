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
            <div class="introduce">
              通过传递
              <code>message</code>属性生成消息提示内容。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: navList[0].height}">
            <pre>
            <code>
  &lt;y-button @click="open"&gt;打开消息提示&lt;/y-button&gt;

  export default{
    methods: {
      open() {
        this.$message({message: '这是一条消息！'});
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
        this.$message({type,message: '这是一条消息！'});
      }
    }
  }
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
            <div class="preview"></div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过
              <code>direction</code>属性设置消息提示展示方向， 可选
              <code>horizontal</code>水平（默认），
              <code>vertical</code>垂直。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: navList[2].height}">
            <pre>
            <code>
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
          version: "0.1.6",
          height: "330px"
        },
        {
          id: "SL",
          name: "缩略",
          version: "0.1.6",
          height: "330px"
        },
        {
          id: "FX",
          name: "方向",
          version: "0.1.6",
          height: "420px"
        },
        {
          id: "PROPS",
          name: "Message props",
          version: "0.1.6"
        },
        {
          id: "EVENTS",
          name: "Message events",
          version: "0.1.6"
        }
      ],
      propColumns: PROP_COLUMNS,
      eventColumns: EVENT_COLUMNS,
      propList: [
        {
          attr: "data",
          explain: "显示的结构化数据",
          type: "Array",
          default: "[]"
        },
        {
          attr: "max",
          explain: "消息提示固定展示张数",
          type: "Number",
          default: "-"
        },
        {
          attr: "direction",
          explain: `消息提示方向，可选<code class="keyword-code">horizontal</code>水平，<code class="keyword-code">vertical</code>垂直`,
          type: "String",
          default: "horizontal"
        }
      ],
      eventList: [
        {
          attr: "on-click",
          explain: "点击消息提示的回调",
          return: "点击的消息提示对象"
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
      this.$message({
        type,
        showClose: true,
        duration: 0,
        message: "这是一条消息！"
      });
    }
  }
};
</script>