import Vue from 'vue'
import Loading from './Loading.vue'
import TimeLine from './TimeLine.vue'
import BarRank from './BarRank.vue'
const Components = {
  Loading,
  TimeLine,
  BarRank
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

import { FormatDate } from '@/util/tools'
import customDirective from '@/directive'

FormatDate() // 注册格式化时间函数
customDirective(Vue) // 注册指令


export default Components