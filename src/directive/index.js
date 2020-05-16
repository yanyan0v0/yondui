import scrollBottom from './scrollBottom'
import scrolling from './scrolling'

const customDirective = Vue => {
  /**
   * 滚动底部指令 v-scrollBottom="callback"
   * callback 执行回调的函数
   */
  Vue.directive('scrollBottom', scrollBottom)
  /**
   * 滚动中指令 v-scrolling="callback"
   * callback 执行回调的函数
   */
  Vue.directive('scrolling', scrolling)
}

export default customDirective
