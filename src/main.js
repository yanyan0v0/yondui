import Vue from 'vue'
import App from '../App.vue'
import router from './router'
import store from './store'

// 组件库
import y2Ui from '@/components/index.js'
// 代码高亮
import vueHljs from "vue-hljs";
// css样式
import '@/assets/less/common.less'
import '@/assets/iconfont/iconfont.css'
import "vue-hljs/dist/vue-hljs.min.css";

import { FormatDate } from '@/util/tools'
import customDirective from '@/directive'

Vue.use(y2Ui)
Vue.use(vueHljs)

FormatDate() // 注册格式化时间函数
customDirective(Vue) // 注册指令
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
