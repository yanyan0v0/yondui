import Button from '@/components/button/button.vue'
import Card from '@/components/card/card.vue'
import Divider from '@/components/divider/divider.vue'
import Icon from '@/components/icon/icon.vue'
import Loading from '@/components/loading/loading.vue'
import Menu from '@/components/menu/menu.vue'
import Rank from '@/components/rank/rank.vue'
import TimeLine from '@/components/timeline/timeline.vue'
const components = [
  Button,
  Card,
  Divider,
  Icon,
  Loading,
  Menu,
  Rank,
  TimeLine,
]

// import { FormatDate } from '@/util/tools'
// import customDirective from '@/directive'

const install = function (Vue) {
  if (install.installed) return;

  // FormatDate() // 注册格式化时间函数
  // customDirective(Vue) // 注册指令

  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}