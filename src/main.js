import Vue from 'vue'
import App from '../App.vue'
import router from './router'
import store from './store'

// 组件库
import Y2UI from '@/components/index.js'
// css样式
import '@/assets/less/common.less'
import '@/assets/iconfont/iconfont.css'

import { FormatDate } from '@/util/tools'
import customDirective from '@/directive'

Vue.use(Y2UI)

FormatDate() // 注册格式化时间函数
customDirective(Vue) // 注册指令
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
