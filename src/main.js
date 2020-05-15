import Vue from 'vue'
import App from '../App.vue'
import router from './router'
import store from './store'

// 组件库
import y2Ui from '@ui/components/index.js'
// 代码高亮
import vueHljs from "vue-hljs";
// css样式
import '@ui/assets/less/common.less'
import '@ui/assets/iconfont/iconfont.css'
import "vue-hljs/dist/vue-hljs.min.css";

import { FormatDate } from '@ui/util/tools'
import customDirective from '@ui/directive'

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
