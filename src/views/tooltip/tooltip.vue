<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>Tooltip 提示框</h1>
      <y-alert type="warning">注意：使用tooltip组件时，父元素的position必须是非static！</y-alert>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="compareVersion('JC')">
        <h3 id="JC">{{getNav('JC').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview tootip-preview">
              <div class="top">
                <y-button>
                  上左
                  <y-tooltip placement="top-start">top-start 文字提示</y-tooltip>
                </y-button>
                <y-button>
                  上中
                  <y-tooltip placement="top">top 文字提示</y-tooltip>
                </y-button>
                <y-button>
                  上右
                  <y-tooltip placement="top-end">top-end 文字提示</y-tooltip>
                </y-button>
              </div>
              <div class="middle">
                <div class="left">
                  <y-button>
                    左上
                    <y-tooltip placement="left-start">left-start 文字提示</y-tooltip>
                  </y-button>
                  <y-button>
                    左中
                    <y-tooltip placement="left">left 文字提示</y-tooltip>
                  </y-button>
                  <y-button>
                    左下
                    <y-tooltip placement="left-end">left-end 文字提示</y-tooltip>
                  </y-button>
                </div>
                <div class="right">
                  <y-button>
                    右上
                    <y-tooltip placement="right-start">right-start 文字提示</y-tooltip>
                  </y-button>
                  <y-button>
                    右中
                    <y-tooltip placement="right">right 文字提示</y-tooltip>
                  </y-button>
                  <y-button>
                    右下
                    <y-tooltip placement="right-end">right-end 文字提示</y-tooltip>
                  </y-button>
                </div>
              </div>
              <div class="bottom">
                <y-button>
                  下左
                  <y-tooltip placement="bottom-start">bottom-start 文字提示</y-tooltip>
                </y-button>
                <y-button>
                  下中
                  <y-tooltip placement="bottom">bottom 文字提示</y-tooltip>
                </y-button>
                <y-button>
                  下右
                  <y-tooltip placement="bottom-end">bottom-end 文字提示</y-tooltip>
                </y-button>
              </div>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              设置属性
              <code>placement</code>可修改显示方位，
              目前提供了
              <code>top-start</code>、
              <code>top</code>、
              <code>top-end</code>、
              <code>right-start</code>、
              <code>right</code>、
              <code>right-end</code>、
              <code>bottom-start</code>、
              <code>bottom</code>、
              <code>bottom-end</code>、
              <code>left-start</code>、
              <code>left</code>、
              <code>left-end</code>
              12个不同的方向显示Tooltip。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('JC').height}">
            <code-action-bar :name="getNav('JC').name" />
            <pre>
            <code>
  &lt;y-button&gt; 
    上左
    &lt;y-tooltip placement="top-start"&gt;top-start 文字提示&lt;/y-tooltip&gt;
  &lt;/y-button&gt;

  &lt;y-button&gt;
    上中
    &lt;y-tooltip placement="top"&gt;top 文字提示&lt;/y-tooltip&gt;
  &lt;/y-button&gt;

  &lt;y-button&gt;
    上右
    &lt;y-tooltip placement="top-end"&gt;top-end 文字提示&lt;/y-tooltip&gt;
  &lt;/y-button&gt;

  &lt;y-button&gt;
    左上
    &lt;y-tooltip placement="left-start"&gt;left-start 文字提示&lt;/y-tooltip&gt;
  &lt;/y-button&gt;

  &lt;y-button&gt;
    左中
    &lt;y-tooltip placement="left"&gt;left 文字提示&lt;/y-tooltip&gt;
  &lt;/y-button&gt;

  &lt;y-button&gt;
    左下
    &lt;y-tooltip placement="left-end"&gt;left-end 文字提示&lt;/y-tooltip&gt;
  &lt;/y-button&gt;

  &lt;y-button&gt;
    右上
    &lt;y-tooltip placement="right-start"&gt;right-start 文字提示&lt;/y-tooltip&gt;
  &lt;/y-button&gt;

  &lt;y-button&gt;
    右中
    &lt;y-tooltip placement="right"&gt;right 文字提示&lt;/y-tooltip&gt;
  &lt;/y-button&gt;

  &lt;y-button&gt;
    右下
    &lt;y-tooltip placement="right-end"&gt;right-end 文字提示&lt;/y-tooltip&gt;
  &lt;/y-button&gt;

  &lt;y-button&gt;
    下左
    &lt;y-tooltip placement="bottom-start"&gt;bottom-start 文字提示&lt;/y-tooltip&gt;
  &lt;/y-button&gt;

  &lt;y-button&gt;
    下中
    &lt;y-tooltip placement="bottom"&gt;bottom 文字提示&lt;/y-tooltip&gt;
  &lt;/y-button&gt;

  &lt;y-button&gt;
    下右
    &lt;y-tooltip placement="bottom-end"&gt;bottom-end 文字提示&lt;/y-tooltip&gt;
  &lt;/y-button&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('CFTJ')">
        <h3 id="CFTJ">{{getNav('CFTJ').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-button>
                hover触发
                <y-tooltip>hover触发 文字提示</y-tooltip>
              </y-button>
              <y-button>
                click触发
                <y-tooltip trigger="click">click触发 文字提示</y-tooltip>
              </y-button>
              <p>自定义</p>
              <y-button @click="visible1 = !visible1">click触发</y-button>
              <span style="position: relative">
                需要提示的一段文字
                <y-tooltip v-model="visible1" trigger="custom">custom触发 文字提示</y-tooltip>
              </span>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              设置属性
              <code>trigger</code>可修改触发条件，
              可选
              <code>hover</code>（默认）、
              <code>click</code>点击、
              <code>custom</code>自定义（需配合
              <code>v-model</code>
              使用）
              。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('CFTJ').height}">
            <code-action-bar :name="getNav('CFTJ').name" />
            <pre>
            <code>
  &lt;y-button&gt;
    hover触发
    &lt;y-tooltip&gt;hover触发 文字提示&lt;/y-tooltip&gt;
  &lt;/y-button&gt;
  &lt;y-button&gt;
    click触发
    &lt;y-tooltip trigger="click"&gt;click触发 文字提示&lt;/y-tooltip&gt;
  &lt;/y-button&gt;

  &lt;y-button @click="visible1 = !visible1"&gt;click触发&lt;/y-button&gt;
  &lt;span style="position: relative"&gt;
    需要提示的一段文字
    &lt;y-tooltip v-model="visible1" trigger="custom"&gt;custom触发 文字提示&lt;/y-tooltip&gt;
  &lt;/span&gt;
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
  name: "Tooltip",
  components: {
    "code-action-bar": () => import("@/views/code-action-bar.vue"),
    "footer-table": () => import("@/views/footer-table.vue")
  },
  mixins: [viewMixins],
  data() {
    return {
      visible1: false,
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "1.0.0",
          height: "400px"
        },
        {
          id: "CFTJ",
          name: "触发条件",
          version: "1.0.0",
          height: "240px"
        },
        {
          id: "PROPS",
          name: "Tooltip Props",
          version: "1.0.0"
        }
      ],
      propList: [
        {
          attr: "value",
          explain: `是否显示，可使用 <code class="keyword-code">v-model</code> 双向绑定`,
          type: "Boolean",
          default: "false"
        },
        {
          attr: "placement",
          explain: `显示方位`,
          type: "String",
          default: "top"
        },
        {
          attr: "trigger",
          explain: `触发方式`,
          type: "String",
          default: "hover"
        }
      ]
    };
  }
};
</script>

<style lang="less">
.tootip-preview {
  .top,
  .bottom {
    text-align: center;
    button {
      margin: 5px;
    }
  }
  .middle {
    .flex;
    padding: 0 10%;
    .left,
    .right {
      .flex-wrap(column);
      margin: 0 auto;
      width: 64px;
      button {
        margin: 5px;
      }
    }
  }
}
</style>