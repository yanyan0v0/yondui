import Button from '@ui/components/button/button.vue'
import Card from '@ui/components/card/card.vue'
import Divider from '@ui/components/divider/divider.vue'
import Icon from '@ui/components/icon/icon.vue'
import Loading from '@ui/components/loading/loading.vue'
import Menu from '@ui/components/menu/menu.vue'
import Nav from '@ui/components/navigator/navigator.vue'
import Rank from '@ui/components/rank/rank.vue'
import Table from '@ui/components/table/table.vue'
import TimeLine from '@ui/components/timeline/timeline.vue'
const components = [
  Button,
  Card,
  Divider,
  Icon,
  Loading,
  Menu,
  Nav,
  Rank,
  Table,
  TimeLine,
]

// import { FormatDate } from '@ui/util/tools'
// import customDirective from '@ui/directive'

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
  Button,
  Card,
  Divider,
  Icon,
  Loading,
  Menu,
  Nav,
  Rank,
  Table,
  TimeLine,
}