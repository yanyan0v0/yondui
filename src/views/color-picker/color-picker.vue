<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>ColorPicker 颜色选择器</h1>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="compareVersion('JC')">
        <h3 id="JC">{{getNav('JC').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <div>
                <y-color-picker v-model="color1" />
              </div>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">最基本的颜色选择器。</div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('JC').height}">
            <code-action-bar :name="getNav('JC').name" />
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
  name: "ColorPicker",
  components: {
    "code-action-bar": () => import("@/views/code-action-bar.vue"),
    "footer-table": () => import("@/views/footer-table.vue")
  },
  mixins: [viewMixins],
  data() {
    return {
      color1: "red",
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "1.0.0",
          height: "180px"
        },
        {
          id: "PROPS",
          name: "ColorPicker Props",
          version: "1.0.0"
        },
        {
          id: "EVENTS",
          name: "ColorPicker Events",
          version: "1.0.0"
        }
      ],
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
  }
};
</script>