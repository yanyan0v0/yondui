import { objToArray } from '@/util/tools'

// 指令式
import Alert from '@/components/alert'
import Button from '@/components/button/button.vue'
import Card from '@/components/card/card.vue'
import Chart from '@/components/chart/chart.vue'
import Checkbox from '@/components/checkbox/checkbox.vue'
import CheckboxGroup from '@/components/checkbox/checkbox-group.vue'
import ColorPicker from '@/components/color-picker/color-picker.vue'
import DatePicker from '@/components/date-picker/date-picker.vue'
import Dialog from '@/components/dialog/dialog.vue'
import Divider from '@/components/divider/divider.vue'
import Draw from '@/components/draw/draw.vue'
import Dropdown from '@/components/dropdown/dropdown.vue'
import DropdownMenu from '@/components/dropdown/dropdown-menu.vue'
import DropdownItem from '@/components/dropdown/dropdown-item.vue'
import Form from '@/components/form/form.vue'
import FormItem from '@/components/form/form-item.vue'
import Icon from '@/components/icon/icon.vue'
import Image from '@/components/image/image.vue'
import Input from '@/components/input/input.vue'
import Loading from '@/components/loading/loading.vue'
import Menu from '@/components/menu/menu.vue'
import Nav from '@/components/navigator/navigator.vue'
import Page from '@/components/page/page.vue'
import Option from '@/components/select/option.vue'
import Radio from '@/components/radio/radio.vue'
import RadioGroup from '@/components/radio/radio-group.vue'
import Rank from '@/components/rank/rank.vue'
import Table from '@/components/table/table.vue'
import Select from '@/components/select/select.vue'
import Slider from '@/components/slider/slider.vue'
import Switch from '@/components/switch/switch.vue'
import TimeLine from '@/components/timeline/timeline.vue'
import TimePicker from '@/components/time-picker/time-picker.vue'
import Tooltip from '@/components/tooltip/tooltip.vue'
import Upload from '@/components/upload/upload.vue'

// 函数式
import AlertJs from '@/components/alert/alert.js'
import DialogJs from '@/components/dialog/dialog.js'

import '@/assets/less/common.less'

export const components = {
  Alert,
  Button,
  Card,
  Chart,
  Checkbox,
  CheckboxGroup,
  ColorPicker,
  DatePicker,
  Dialog,
  Divider,
  Draw,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Form,
  FormItem,
  Icon,
  Image,
  Input,
  Loading,
  Menu,
  Nav,
  Page,
  Option,
  Radio,
  RadioGroup,
  Rank,
  Select,
  Slider,
  Switch,
  Table,
  TimeLine,
  TimePicker,
  Tooltip,
  Upload
}

export const componentJs = {
  AlertJs,
  DialogJs
}

const install = function (Vue, opts = {}) {
  if (install.installed) return;

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
  Vue.prototype.$dialog = DialogJs;

};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}