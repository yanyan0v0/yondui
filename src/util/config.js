/**
 * @date 2020-04-22 
 * @author liaoyanyan
 * @description 通用常量配置 常量名全部大写加下划线
 */

// 菜单列表
export const MENU_LIST = [
  {
    id: 1,
    name: "快速上手",
    to: "start",
    file: '/quick-start/quick-start.vue'
  },
  {
    id: 2,
    name: "组件",
    children: [
      {
        id: 210,
        name: "Alert 消息提示",
        icon: "jinggao",
        to: "alert",
        file: '/alert/alert.vue'
      },
      {
        id: 21,
        name: "Button 按钮",
        icon: "anniu",
        to: "button",
        file: '/button/button.vue'
      },
      {
        id: 216,
        name: "Chart 图表",
        icon: "chart-bar",
        to: "chart",
        file: '/chart/chart.vue'
      },
      {
        id: 221,
        name: "Checkbox 多选框",
        icon: "checkbox-selected",
        to: "checkbox",
        file: '/checkbox/checkbox.vue'
      },
      {
        id: 212,
        name: "ColorPicker 颜色选择器",
        icon: "tiaoseban",
        to: "colorPicker",
        file: '/color-picker/color-picker.vue'
      },
      {
        id: 223,
        name: "DatePicker 时间选择器",
        icon: "calendar",
        to: "datePicker",
        file: '/date-picker/date-picker.vue'
      },
      {
        id: 220,
        name: "Dialog 对话框",
        icon: "windows",
        to: "dialog",
        file: '/dialog/dialog.vue'
      },
      {
        id: 27,
        name: "Divider 分割线",
        icon: "xian",
        to: "divider",
        file: '/divider/divider.vue'
      },
      {
        id: 211,
        name: "Draw 绘图",
        icon: "huabi",
        to: "draw",
        file: '/draw/draw.vue'
      },
      {
        id: 219,
        name: "Dropdown 下拉菜单",
        icon: "xiala",
        to: "dropdown",
        file: '/dropdown/dropdown.vue'
      },
      {
        id: 22,
        name: "Icon 图标",
        icon: "tubiao",
        to: "icon",
        file: '/icon/icon.vue'
      },
      {
        id: 29,
        name: "Image 图片",
        icon: "tupian",
        to: "image",
        file: '/image/image.vue'
      },
      {
        id: 26,
        name: "Input 输入框",
        icon: "bianji",
        to: "input",
        file: '/input/input.vue'
      },
      {
        id: 215,
        name: "Loading 加载中",
        icon: "shuaxin-you",
        to: "loading",
        file: '/loading/loading.vue'
      },
      {
        id: 23,
        name: "Menu 菜单",
        icon: "caidan",
        to: "menu",
        file: '/menu/menu.vue'
      },
      {
        id: 222,
        name: "Radio 单选框",
        icon: "radio-selected",
        to: "radio",
        file: '/radio/radio.vue'
      },
      {
        id: 24,
        name: "Rank 排行",
        icon: "paihang",
        to: "rank",
        file: '/rank/rank.vue'
      },
      {
        id: 218,
        name: "Select 选择框",
        icon: "sanjiao-xia",
        to: "select",
        file: '/select/select.vue'
      },
      {
        id: 213,
        name: "Slider 滑块",
        icon: "xian",
        to: "slider",
        file: '/slider/slider.vue'
      },
      {
        id: 217,
        name: "Switch 开关",
        icon: "switch",
        to: "switch",
        file: '/switch/switch.vue'
      },
      {
        id: 28,
        name: "Table 表格",
        icon: "biaoge",
        to: "table",
        file: '/table/table.vue'
      },
      {
        id: 25,
        name: "Timeline 时间轴列表",
        icon: "shijianzhou",
        to: "timeline",
        file: '/timeline/timeline.vue'
      },
      {
        id: 214,
        name: "Tooltip 提示框",
        icon: "xiaoxi",
        to: "tooltip",
        file: '/tooltip/tooltip.vue'
      },
    ]
  }
]

// 所有修改尺寸的组件 其高度都遵循此设定
export const SIZE = {
  'large': 35,
  'default': 30,
  'small': 25,
  'mini': 20
}

// alert, dialog ... 所需的提示类型
export const TYPE_ICONS = {
  text: "tishi-mianxing",
  info: "tishi-mianxing",
  success: "chenggong",
  warning: "jinggao",
  error: "shanchu"
}

// 折线图表和饼状图表所用的颜色
export const PIE_COLORS = [
  '#FCAF5C',
  '#5FCEF3',
  '#7CECC8',
  '#478BDB',
  '#1A8DFE',
  '#ff9900',
  '#2ac0f5',
  '#19be6b',
  '#00FBFF',
  '#FE9FA4',
  '#ff9900',
  '#B8E986'
]

// 柱状图表所用的颜色
export const BAR_COLORS = [
  ['#F7A58F', '#FF8000'],
  ['#7AA2EA', '#AC93E7'],
  ['#FCAF5C', '#FCCF6C'],
  ['#459DF7', '#67C2FB'],
  ['#329FD8', '#4CDDE5'],
  ['#389EFB', '#4BA0FD'],
  ['#80A0EA', '#AC93E7'],
  ['#667DF1', '#a0aef5'],
  ['#0076FE', '#3f94f7'],
  ['#A2CEFF', '#cce0f7'],
  ['#2db7f5', '#60cbfb'],
  ['#5cadff', '#9dcaf9'],
  ['#2b85e4', '#5ea0e6'],
  ['#2d8cf0', '#387cc3'],
  ['#3691b9', '#5da0bd'],
  ['#087fb5', '#2985af'],
  ['#2b85e4', '#5ea0e6'],
  ['#2d8cf0', '#387cc3']
]

// 各种主题色
export const THEME_COLORS = {
  primary: '#2d8cf0',
  lightPrimary: '#5cadff',
  darkPrimary: '#2b85e4',

  success: '#19be6b',
  error: '#ed4014',
  warning: '#ff9900',

  title: '#17233d',
  text: '#515a6e',
  subtext: '#808695',
  disabled: '#c5c8ce',
  border: '#dcdee2',

  keyword: '#2db7f5',
}

// API表格所需的列
export const PROP_COLUMNS = [
  {
    key: "attr",
    title: "属性",
    width: 150
  },
  {
    type: 'html',
    key: "explain",
    title: "说明",
    minWidth: 100
  },
  {
    key: "type",
    title: "类型",
    width: 150
  },
  {
    key: "default",
    title: "默认值",
    width: 120
  }
]
export const SLOT_COLUMNS = [
  {
    key: "attr",
    title: "属性"
  },
  {
    key: "explain",
    title: "说明"
  }
]
export const EVENT_COLUMNS = [
  {
    key: "attr",
    title: "事件名"
  },
  {
    key: "explain",
    title: "说明"
  },
  {
    type: 'html',
    key: "return",
    title: "返回值"
  }
]

// 省份经纬度
export const PROVINCE_COORDS = {
  '新疆': [86.61, 40.79],
  '西藏': [89.13, 30.66],
  '内蒙古': [112.17, 42.81],
  '宁夏': [106.27, 36.76],
  '广西': [108.67, 23.68],
  '澳门': [113.54, 22.19],
  '香港': [114.17, 22.32],
  '北京': [116.40, 40.40],
  '上海': [121.46, 31.28],
  '重庆': [107.51, 29.63],
  '天津': [117.04, 39.52],
  '黑龙江': [128.34, 47.05],
  '吉林': [126.32, 43.38],
  '辽宁': [123.42, 41.29],
  '山西': [111.95, 37.65],
  '河北': [115.21, 38.44],
  '青海': [97.07, 35.62],
  '甘肃': [103.82, 36.05],
  '山东': [118.01, 36.37],
  '陕西': [108.94, 34.46],
  '河南': [113.46, 34.25],
  '安徽': [117.28, 31.86],
  '江苏': [120.26, 32.54],
  '四川': [103.36, 30.65],
  '湖北': [112.29, 30.98],
  '浙江': [120.15, 29.28],
  '湖南': [112.08, 27.79],
  '江西': [115.89, 27.97],
  '贵州': [106.91, 26.67],
  '福建': [118.31, 26.07],
  '云南': [101.71, 24.84],
  '台湾': [121.01, 23.54],
  '广东': [113.98, 22.82],
  '海南': [110.03, 19.33],
}

// 城市经纬度
export const CITY_COORDS = {
  '海门': [121.15, 31.89],
  '鄂尔多斯': [109.781327, 39.608266],
  '招远': [120.38, 37.35],
  '舟山': [122.207216, 29.985295],
  '齐齐哈尔': [123.97, 47.33],
  '盐城': [120.13, 33.38],
  '赤峰': [118.87, 42.28],
  '青岛': [120.33, 36.07],
  '乳山': [121.52, 36.89],
  '金昌': [102.188043, 38.520089],
  '泉州': [118.58, 24.93],
  '莱西': [120.53, 36.86],
  '日照': [119.46, 35.42],
  '胶南': [119.97, 35.88],
  '南通': [121.05, 32.08],
  '拉萨': [91.11, 29.97],
  '云浮': [112.02, 22.93],
  '梅州': [116.1, 24.55],
  '文登': [122.05, 37.2],
  '攀枝花': [101.718637, 26.582347],
  '威海': [122.1, 37.5],
  '承德': [117.93, 40.97],
  '厦门': [118.1, 24.46],
  '汕尾': [115.375279, 22.786211],
  '潮州': [116.63, 23.68],
  '丹东': [124.37, 40.13],
  '太仓': [121.1, 31.45],
  '曲靖': [103.79, 25.51],
  '烟台': [121.39, 37.52],
  '福州': [119.3, 26.08],
  '瓦房店': [121.979603, 39.627114],
  '即墨': [120.45, 36.38],
  '抚顺': [123.97, 41.97],
  '玉溪': [102.52, 24.35],
  '张家口': [114.87, 40.82],
  '阳泉': [113.57, 37.85],
  '莱州': [119.942327, 37.177017],
  '湖州': [120.1, 30.86],
  '汕头': [116.69, 23.39],
  '昆山': [120.95, 31.39],
  '宁波': [121.56, 29.86],
  '湛江': [110.359377, 21.270708],
  '揭阳': [116.35, 23.55],
  '荣成': [122.41, 37.16],
  '连云港': [119.16, 34.59],
  '葫芦岛': [120.836932, 40.711052],
  '常熟': [120.74, 31.64],
  '东莞': [113.75, 23.04],
  '河源': [114.68, 23.73],
  '淮安': [119.15, 33.5],
  '泰州': [119.9, 32.49],
  '南宁': [108.33, 22.84],
  '营口': [122.18, 40.65],
  '惠州': [114.4, 23.09],
  '江阴': [120.26, 31.91],
  '蓬莱': [120.75, 37.8],
  '韶关': [113.62, 24.84],
  '嘉峪关': [98.289152, 39.77313],
  '广州': [113.23, 23.16],
  '延安': [109.47, 36.6],
  '太原': [112.53, 37.87],
  '清远': [113.01, 23.7],
  '中山': [113.38, 22.52],
  '昆明': [102.73, 25.04],
  '寿光': [118.73, 36.86],
  '盘锦': [122.070714, 41.119997],
  '长治': [113.08, 36.18],
  '深圳': [114.07, 22.62],
  '珠海': [113.52, 22.3],
  '宿迁': [118.3, 33.96],
  '咸阳': [108.72, 34.36],
  '铜川': [109.11, 35.09],
  '平度': [119.97, 36.77],
  '佛山': [113.11, 23.05],
  '海口': [110.35, 20.02],
  '江门': [113.06, 22.61],
  '章丘': [117.53, 36.72],
  '肇庆': [112.44, 23.05],
  '大连': [121.62, 38.92],
  '临汾': [111.5, 36.08],
  '吴江': [120.63, 31.16],
  '石嘴山': [106.39, 39.04],
  '沈阳': [123.38, 41.8],
  '苏州': [120.62, 31.32],
  '茂名': [110.88, 21.68],
  '嘉兴': [120.76, 30.77],
  '长春': [125.35, 43.88],
  '胶州': [120.03336, 36.264622],
  '银川': [106.27, 38.47],
  '张家港': [120.555821, 31.875428],
  '三门峡': [111.19, 34.76],
  '锦州': [121.15, 41.13],
  '南昌': [115.89, 28.68],
  '柳州': [109.4, 24.33],
  '三亚': [109.511909, 18.252847],
  '自贡': [104.778442, 29.33903],
  '阳江': [111.95, 21.85],
  '泸州': [105.39, 28.91],
  '西宁': [101.74, 36.56],
  '宜宾': [104.56, 29.77],
  '呼和浩特': [111.65, 40.82],
  '成都': [104.06, 30.67],
  '大同': [113.3, 40.12],
  '镇江': [119.44, 32.2],
  '桂林': [110.28, 25.29],
  '张家界': [110.479191, 29.117096],
  '宜兴': [119.82, 31.36],
  '北海': [109.12, 21.49],
  '西安': [108.95, 34.27],
  '金坛': [119.56, 31.74],
  '东营': [118.49, 37.46],
  '牡丹江': [129.58, 44.6],
  '遵义': [106.9, 27.7],
  '绍兴': [120.58, 30.01],
  '扬州': [119.42, 32.39],
  '常州': [119.95, 31.79],
  '潍坊': [119.1, 36.62],
  '台州': [121.420757, 28.656386],
  '南京': [118.78, 32.04],
  '滨州': [118.03, 37.36],
  '贵阳': [106.71, 26.57],
  '无锡': [120.29, 31.59],
  '本溪': [123.73, 41.3],
  '克拉玛依': [84.77, 45.59],
  '渭南': [109.5, 34.52],
  '马鞍山': [118.48, 31.56],
  '宝鸡': [107.15, 34.38],
  '焦作': [113.21, 35.24],
  '句容': [119.16, 31.95],
  '徐州': [117.2, 34.26],
  '衡水': [115.72, 37.72],
  '包头': [110, 40.58],
  '绵阳': [104.73, 31.48],
  '乌鲁木齐': [87.68, 43.77],
  '枣庄': [117.57, 34.86],
  '杭州': [120.19, 30.26],
  '淄博': [118.05, 36.78],
  '鞍山': [122.85, 41.12],
  '溧阳': [119.48, 31.43],
  '库尔勒': [86.06, 41.68],
  '安阳': [114.35, 36.1],
  '开封': [114.35, 34.79],
  '济南': [117, 36.65],
  '德阳': [104.37, 31.13],
  '温州': [120.65, 28.01],
  '九江': [115.97, 29.71],
  '邯郸': [114.47, 36.6],
  '临安': [119.72, 30.23],
  '兰州': [103.73, 36.03],
  '沧州': [116.83, 38.33],
  '临沂': [118.35, 35.05],
  '南充': [106.110698, 30.837793],
  '富阳': [119.95, 30.07],
  '泰安': [117.13, 36.18],
  '诸暨': [120.23, 29.71],
  '郑州': [113.65, 34.76],
  '哈尔滨': [126.63, 45.75],
  '聊城': [115.97, 36.45],
  '芜湖': [118.38, 31.33],
  '唐山': [118.02, 39.63],
  '平顶山': [113.29, 33.75],
  '邢台': [114.48, 37.05],
  '德州': [116.29, 37.45],
  '济宁': [116.59, 35.38],
  '荆州': [112.239741, 30.335165],
  '宜昌': [111.3, 30.7],
  '义乌': [120.06, 29.32],
  '丽水': [119.92, 28.45],
  '洛阳': [112.44, 34.7],
  '秦皇岛': [119.57, 39.95],
  '株洲': [113.16, 27.83],
  '石家庄': [114.48, 38.03],
  '莱芜': [117.67, 36.19],
  '常德': [111.69, 29.05],
  '保定': [115.48, 38.85],
  '湘潭': [112.91, 27.87],
  '金华': [119.64, 29.12],
  '岳阳': [113.09, 29.37],
  '长沙': [113, 28.21],
  '衢州': [118.88, 28.97],
  '廊坊': [116.7, 39.53],
  '菏泽': [115.480656, 35.23375],
  '合肥': [117.27, 31.86],
  '武汉': [114.31, 30.52],
  '大庆': [125.03, 46.58],
  '广元': [105.88917, 32.642632]
}