import { objToArray } from '@ui/util/tools'

// 指令式
import Button from '@ui/components/button/button.vue'
import Card from '@ui/components/card/card.vue'
import ColorPicker from '@ui/components/color-picker/color-picker.vue'
import Divider from '@ui/components/divider/divider.vue'
import Draw from '@ui/components/draw/draw.vue'
import Icon from '@ui/components/icon/icon.vue'
import Image from '@ui/components/image/image.vue'
import Input from '@ui/components/input/input.vue'
import Loading from '@ui/components/loading/loading.vue'
import Menu from '@ui/components/menu/menu.vue'
import Nav from '@ui/components/navigator/navigator.vue'
import Rank from '@ui/components/rank/rank.vue'
import Table from '@ui/components/table/table.vue'
import Slider from '@ui/components/slider/slider.vue'
import TimeLine from '@ui/components/timeline/timeline.vue'
import Tooltip from '@ui/components/tooltip/tooltip.vue'

// 函数式
import Message from '@ui/components/message/index.js'

const components = {
  Button,
  Card,
  ColorPicker,
  Divider,
  Draw,
  Icon,
  Image,
  Input,
  Loading,
  Menu,
  Nav,
  Rank,
  Slider,
  Table,
  TimeLine,
  Tooltip
}

// import customDirective from '@ui/directive'

const install = function (Vue) {
  if (install.installed) return;

  // setDateFormat() // 注册格式化时间函数
  // customDirective(Vue) // 注册指令

  objToArray(components).forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$message = Message;

};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}