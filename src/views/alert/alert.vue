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
              <code>hide-icon</code>属性隐藏头部图标。
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
            <div class="preview preview-alert">
              <p>横向滚动</p>
              <y-alert type="info" theme="dark" scroll="x">深色提示栏</y-alert>
              <p>竖向滚动</p>
              <y-alert type="info" theme="dark" scroll="y">
                <p>深色提示栏1</p>
                <p>深色提示栏2</p>
                <p>深色提示栏3</p>
                <p>深色提示栏4</p>
                <p>深色提示栏5</p>
              </y-alert>
              <p>自定义横向滚动速率</p>
              <y-alert type="info" theme="dark" :scroll="{direction: 'x', speed: 100}">深色提示栏</y-alert>
              <p>自定义竖向滚动速率</p>
              <y-alert type="info" theme="dark" :scroll="{direction: 'y', speed: 38, height: 19}">
                <p>深色提示栏1</p>
                <p>深色提示栏2</p>
                <p>深色提示栏3</p>
                <p>深色提示栏4</p>
                <p>深色提示栏5</p>
              </y-alert>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过设置
              <code>scroll</code>属性触发滚动，
              <br />滚动默认参数：
              <br />
              <code>direction</code>
              表示方向，可选
              <code>x</code>、
              <code>y</code>。
              <br />
              <code>speed</code> 表示速度，单位：px/s, 横向默认为60，竖向默认为19。
              <br />
              <code>height</code> 表示可视区域高度，单位px，默认19
              <br />若无改动可简化为
              <code>scroll="x"</code>或
              <code>scroll="y"</code>。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <pre>
            <code>
  &lt;p&gt;横向滚动&lt;/p&gt;
  &lt;y-alert type="info" theme="dark" scroll="x"&gt;深色提示栏&lt;/y-alert&gt;
  &lt;p&gt;竖向滚动&lt;/p&gt;
  &lt;y-alert type="info" theme="dark" scroll="y"&gt;
    &lt;p&gt;深色提示栏1&lt;/p&gt;
    &lt;p&gt;深色提示栏2&lt;/p&gt;
    &lt;p&gt;深色提示栏3&lt;/p&gt;
    &lt;p&gt;深色提示栏4&lt;/p&gt;
    &lt;p&gt;深色提示栏5&lt;/p&gt;
  &lt;/y-alert&gt;
  &lt;p&gt;自定义横向滚动速率&lt;/p&gt;
  &lt;y-alert type="info" theme="dark" :scroll="{direction: 'x', speed: 100}"&gt;深色提示栏&lt;/y-alert&gt;
  &lt;p&gt;自定义竖向滚动速率&lt;/p&gt;
  &lt;y-alert type="info" theme="dark" :scroll="{direction: 'y', speed: 38, height: 19}"&gt;
    &lt;p&gt;深色提示栏1&lt;/p&gt;
    &lt;p&gt;深色提示栏2&lt;/p&gt;
    &lt;p&gt;深色提示栏3&lt;/p&gt;
    &lt;p&gt;深色提示栏4&lt;/p&gt;
    &lt;p&gt;深色提示栏5&lt;/p&gt;
  &lt;/y-alert&gt;
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
              <y-button @click="open('info')">默认</y-button>
              <y-button @click="open('success')">成功</y-button>
              <y-button @click="open('warning')">警告</y-button>
              <y-button @click="open('error')">错误</y-button>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过调用
              <code>this.$alert[type]</code>方法显示不同的提示状态，
              <code>type</code>可以为
              <code>info</code>默认、
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
      <div v-show="navList[6].version >= version">
        <h3 :id="navList[6].id">{{navList[6].name}}</h3>
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
          duration: 0,
          onClose: () => {
            this.$alert.info("点击了关闭！");
          }
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
      <div v-show="navList[7].version >= version">
        <h3 :id="navList[7].id">{{navList[7].name}}</h3>
        <y-table :data="propList" :columns="propColumns"></y-table>
      </div>
      <div v-show="navList[8].version >= version">
        <h3 :id="navList[8].id">{{navList[8].name}}</h3>
        <y-table :data="slotList" :columns="slotColumns"></y-table>
      </div>
    </article>

    <!-- 导航滚动条 -->
    <y-nav ref="nav" :data="navList"></y-nav>
  </div>
</template>

<script>
import { PROP_COLUMNS, SLOT_COLUMNS } from "@ui/util/config";
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
          id: "XHGD",
          name: "循环滚动",
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
        },
        {
          id: "SLOTS",
          name: "Alert Slots",
          version: "0.1.7"
        }
      ],
      propColumns: PROP_COLUMNS,
      slotColumns: SLOT_COLUMNS,
      propList: [
        {
          attr: "type",
          explain: `消息类型，可选<code class="keyword-code">info</code>默认、 <code class="keyword-code">success</code>成功、<code class="keyword-code">warning</code>警告、<code class="keyword-code">error</code>错误`,
          type: "String",
          default: "info"
        },
        {
          attr: "theme",
          explain: `消息主题，可选<code class="keyword-code">light</code>浅色、 <code class="keyword-code">success</code>深色`,
          type: "String",
          default: "light"
        },
        {
          attr: "hide-icon",
          explain: `隐藏头部图标`,
          type: "Boolean",
          default: "false"
        },
        {
          attr: "scroll",
          explain: "循环滚动，详情见示例",
          type: "String | Object",
          default: "空"
        },
        {
          attr: "message",
          explain: "显示消息内容，函数式调用",
          type: "String",
          default: "空"
        },
        {
          attr: "duration",
          explain: "消息提示持续时间，0代表无限制，单位毫秒，函数式调用",
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
      ],
      slotList: [
        {
          attr: "default",
          explain: "默认显示内容"
        },
        {
          attr: "prefix",
          explain: "头部图标"
        },
        {
          attr: "suffix",
          explain: "尾部图标"
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