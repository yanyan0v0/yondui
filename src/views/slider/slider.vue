<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>ColorPicker 颜色选择器</h1>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="navList[0].version >= version">
        <h3 :id="navList[0].id">{{navList[0].name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <div :style="{height: navList[0].height}">
                <y-slider v-model="slider1" />
              </div>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">最基本的颜色选择器。</div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <pre>
            <code>
  &lt;y-color-picker v-model="color1" /&gt;

  export defalut {
    data() {
      return {
        color1: 'red'
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
      slider1: 50,
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "0.1.7",
          height: "180px"
        },
        {
          id: "PROPS",
          name: "ColorPicker Props",
          version: "0.1.7"
        },
        {
          id: "EVENTS",
          name: "ColorPicker Events",
          version: "0.1.7"
        }
      ],
      propColumns: PROP_COLUMNS,
      eventColumns: EVENT_COLUMNS,
      propList: [
        {
          attr: "value",
          explain: `绑定的值，可使用 <code class="keyword-code">v-model</code> 双向绑定`,
          type: "String",
          default: "-"
        },
        {
          attr: "show-footer",
          explain: `是否显示底部确认按钮`,
          type: "Boolean",
          default: "false"
        }
      ],
      eventList: [
        {
          attr: "on-change",
          explain: "颜色发生变化后的回调",
          return: "当前颜色值"
        },
        {
          attr: "on-confirm",
          explain: "点击确定按钮的回调",
          return: "当前颜色值"
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