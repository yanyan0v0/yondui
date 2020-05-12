import YLoading from '@/components/Loading.vue'
import YTimeLine from '@/components/TimeLine.vue'
import YRanker from '@/components/Ranker.vue'
import YButton from '@/components/Button.vue'
const components = {
  YLoading,
  YTimeLine,
  YRanker,
  YButton
}

import { FormatDate } from '@/util/tools'
import customDirective from '@/directive'

const install = function (Vue) {
  if (install.installed) return;

  FormatDate() // 注册格式化时间函数
  customDirective(Vue) // 注册指令

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}