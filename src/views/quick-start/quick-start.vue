<template>
  <div class="main-row">
    <article class="code-article" v-scrolling>
      <h1>快速上手</h1>

      <y-select>
        <y-option
          v-for="city in cityList"
          :key="city.name"
          :value="city.name"
          >{{ city.name }}</y-option
        >
      </y-select>

      <!-- 分隔线 -->
      <div v-show="compareVersion('SYZQ')">
        <h2 id="SYZQ">{{ getNav("SYZQ").name }}</h2>
        <p>
          此UI库是整合了市面上大部分的UI框架内的优秀内容，并进行了优化，是一款开箱即用的高效框架。
        </p>
      </div>

      <!-- 分隔线 -->
      <div v-show="compareVersion('AZ')">
        <h2 id="AZ">{{ getNav("AZ").name }}</h2>
        <p>
          推荐使用 npm 来安装，享受生态圈和工具带来的便利，更好地和 webpack
          配合使用。
        </p>
        <div v-highlight>
          <pre>
            <code>
  $ npm install yond-ui --save
            </code>
          </pre>
        </div>
      </div>

      <!-- 分隔线 -->
      <div v-show="compareVersion('YR')">
        <h2 id="YR">{{ getNav("YR").name }}</h2>
        <p>一般在 webpack 入口页面 main.js 中如下配置：</p>
        <div v-highlight>
          <pre>
            <code>
  import Vue from 'vue';
  import App from 'app.vue';
  import YondUI from 'yond-ui'
  import 'yond-ui/lib/yond-ui.css'
  
  Vue.use(YondUI);

  new Vue({
    render: h => h(App)
  }).$mount('#app');
            </code>
          </pre>
        </div>
      </div>

      <!-- 分隔线 -->
      <div v-show="compareVersion('AXYR')">
        <h2 id="AXYR">{{ getNav("AXYR").name }}</h2>
        <p>这样按需引入组件，就可以减小体积了：</p>
        <div v-highlight>
          <pre>
            <code>
  import { Button, Card } from 'yond-ui';
  Vue.component('y-button', Button);
  Vue.component('y-card', Card);
            </code>
          </pre>
        </div>
      </div>

      <!-- 分隔线 -->
      <div v-show="compareVersion('QJPZ')">
        <h2 id="QJPZ">{{ getNav("QJPZ").name }}</h2>
        <p>
          在引入 YondUI 时，可以传入一个全局配置对象。该对象目前支持 size 与
          zIndex 字段。size 用于改变组件的默认尺寸，zIndex 设置弹框的初始
          z-index（默认值：2020）：
        </p>
        <div v-highlight>
          <pre>
            <code>
  Vue.use(YondUI, {
    size: 'large',
    zIndex: 2020
  });
            </code>
          </pre>
        </div>
        <p>
          当按需引用时，由于不能通过Vue.use使用，可以直接在入口js里进行如下设置：
        </p>
        <div v-highlight>
          <pre>
            <code>
  Vue.prototype.$YONDUI = {
    size: 'small',
    zIndex: 2020
  }
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
import viewMixins from "@/mixins/view";
export default {
  mixins: [viewMixins],
  data() {
    return {
      cityList: [
        {
          name: "北京",
        },
        {
          name: "上海",
        },
        {
          name: "广州",
        },
        {
          name: "深圳",
        },
      ],
      navList: [
        {
          id: "SYZQ",
          name: "使用之前",
          version: "1.0.0",
        },
        {
          id: "AZ",
          name: "NPM安装",
          version: "1.0.0",
        },
        {
          id: "YR",
          name: "引入组件库",
          version: "1.0.0",
        },
        {
          id: "AXYR",
          name: "按需引入",
          version: "1.0.0",
        },
        {
          id: "QJPZ",
          name: "全局配置",
          version: "1.0.0",
        },
      ],
    };
  },
};
</script>