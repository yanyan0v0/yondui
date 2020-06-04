<template>
  <div class="main-row">
    <article class="code-article" v-scrolling>
      <h1>快速上手</h1>

      <!-- 分隔线 -->
      <div v-show="compareVersion('SYZQ')">
        <h2 id="SYZQ">{{getNav('SYZQ').name}}</h2>
        <p>此UI库是整合了市面上大部分的UI框架内的优秀内容，并进行了优化，是一款开箱即用的高效框架。</p>
      </div>

      <!-- 分隔线 -->
      <div v-show="compareVersion('AZ')">
        <h2 id="AZ">{{getNav('AZ').name}}</h2>
        <p>推荐使用 npm 来安装，享受生态圈和工具带来的便利，更好地和 webpack 配合使用。</p>
        <div v-highlight>
          <pre>
            <code>
  $ npm install y2-ui --save
            </code>
          </pre>
        </div>
      </div>

      <!-- 分隔线 -->
      <div v-show="compareVersion('YR')">
        <h2 id="YR">{{getNav('YR').name}}</h2>
        <p>一般在 webpack 入口页面 main.js 中如下配置：</p>
        <div v-highlight>
          <pre>
            <code>
  import Vue from 'vue';
  import App from 'app.vue';
  import Y2UI from 'y2-ui'

  Vue.use(Y2UI);

  new Vue({
    render: h => h(App)
  }).$mount('#app');
            </code>
          </pre>
        </div>
      </div>

      <!-- 分隔线 -->
      <div v-show="compareVersion('AXYR')">
        <h2 id="AXYR">{{getNav('AXYR').name}}</h2>
        <p>这样按需引入组件，就可以减小体积了：</p>
        <div v-highlight>
          <pre>
            <code>
  import { Button, Card } from 'y2-ui';
  Vue.component('y-button', Button);
  Vue.component('y-card', Card);
            </code>
          </pre>
        </div>
      </div>
    </article>

    <!-- 导航滚动条 -->
    <y-nav ref="nav" :data="filterVersion(navList)"></y-nav>
  </div>
</template>

<script>
import viewMixins from "@/util/viewMixins";
export default {
  mixins: [viewMixins],
  data() {
    return {
      navList: [
        {
          id: "SYZQ",
          name: "使用之前",
          version: "0.0.1"
        },
        {
          id: "AZ",
          name: "NPM安装",
          version: "0.0.1"
        },
        {
          id: "YR",
          name: "引入组件库",
          version: "0.0.1"
        },
        {
          id: "AXYR",
          name: "按需引入",
          version: "0.0.1"
        }
      ]
    };
  }
};
</script>