import { objToArray } from '@/util/tools'

// 指令式
import Alert from '@/components/alert/alert.vue'
import Button from '@/components/button/button.vue'
import Card from '@/components/card/card.vue'
import Chart from '@/components/chart/chart.vue'
import ColorPicker from '@/components/color-picker/color-picker.vue'
import Dialog from '@/components/dialog/dialog.vue'
import Divider from '@/components/divider/divider.vue'
import Draw from '@/components/draw/draw.vue'
import Dropdown from '@/components/dropdown/dropdown.vue'
import DropdownMenu from '@/components/dropdown/dropdown-menu.vue'
import DropdownItem from '@/components/dropdown/dropdown-item.vue'
import Icon from '@/components/icon/icon.vue'
import Image from '@/components/image/image.vue'
import Input from '@/components/input/input.vue'
import Loading from '@/components/loading/loading.vue'
import Menu from '@/components/menu/menu.vue'
import Nav from '@/components/navigator/navigator.vue'
import Option from '@/components/select/components/option.vue'
import Rank from '@/components/rank/rank.vue'
import Table from '@/components/table/table.vue'
import Select from '@/components/select/select.vue'
import Slider from '@/components/slider/slider.vue'
import Switch from '@/components/switch/switch.vue'
import TimeLine from '@/components/timeline/timeline.vue'
import Tooltip from '@/components/tooltip/tooltip.vue'

// 函数式
import AlertJs from '@/components/alert/index.js'

const components = {
  Alert,
  Button,
  Card,
  Chart,
  ColorPicker,
  Dialog,
  Divider,
  Draw,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Icon,
  Image,
  Input,
  Loading,
  Menu,
  Nav,
  Option,
  Rank,
  Select,
  Slider,
  Switch,
  Table,
  TimeLine,
  Tooltip
}

// import customDirective from '@/directive'

const install = function (Vue, opts = {}) {
  if (install.installed) return;

  // setDateFormat() // 注册格式化时间函数
  // customDirective(Vue) // 注册指令

  objToArray(components).forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$YONDUI = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2020,
    getZindex() {
      return this.zIndex++
    }
  };

  Vue.prototype.$alert = AlertJs;

};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}