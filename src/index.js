import Vue from 'vue'
import YLoading from '@/components/Loading.vue'
import YTimeLine from '@/components/TimeLine.vue'
import YBarRank from '@/components/BarRank.vue'
const Components = {
  YLoading,
  YTimeLine,
  YBarRank
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

import { FormatDate } from '@/util/tools'
import customDirective from '@/directive'

FormatDate() // 注册格式化时间函数
customDirective(Vue) // 注册指令


export default Components