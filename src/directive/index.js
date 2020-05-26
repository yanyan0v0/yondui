import scrollbottom from './scrollbottom'
import scrolling from './scrolling'
import clickoutside from './clickoutside'

const customDirective = Vue => {
  /**
   * 滚动底部指令 v-scrollbottom="callback"
   * callback 执行回调的函数
   */
  Vue.directive('scrollbottom', scrollbottom)
  /**
   * 滚动中指令 v-scrolling="callback"
   * callback 执行回调的函数
   */
  Vue.directive('scrolling', scrolling)
  /**
   * 点击外部指令 v-clickoutside="callback"
   * callback 执行回调的函数
   */
  Vue.directive('clickoutside', clickoutside)
}

export default customDirective
