import Vue from 'vue'
import App from '../App.vue'
import router from './router'
import store from './store'

// 组件库
import y2Ui from '@/components/index.js'
// 代码高亮
import vueHljs from "vue-hljs";
// css样式
// import '@/assets/less/common.less'
import '@/assets/less/article.less'
import "vue-hljs/dist/vue-hljs.min.css";

import { setDateFormat } from '@/util/tools'

Vue.use(y2Ui)
Vue.use(vueHljs)

setDateFormat() // 注册格式化时间函数
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
