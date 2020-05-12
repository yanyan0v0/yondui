import Button from '@/components/button/button.vue'
import Icon from '@/components/icon/icon.vue'
import Loading from '@/components/Loading.vue'
import Menu from '@/components/menu/menu.vue'
import Ranker from '@/components/Ranker.vue'
import TimeLine from '@/components/TimeLine.vue'
const components = {
  'y-button': Button,
  'y-icon': Icon,
  'y-loading': Loading,
  'y-menu': Menu,
  'y-ranker': Ranker,
  'y-timeline': TimeLine,
}

// import { FormatDate } from '@/util/tools'
// import customDirective from '@/directive'

const install = function (Vue) {
  if (install.installed) return;

  // FormatDate() // 注册格式化时间函数
  // customDirective(Vue) // 注册指令

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