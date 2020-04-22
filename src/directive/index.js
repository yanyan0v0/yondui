import scrollBottom from './scrollBottom'

const customDirective = Vue => {
  /**
   * 拖拽指令 v-draggable="callback"
   * callback 执行回调的函数
   */
  Vue.directive('scrollBottom', scrollBottom)
}

export default customDirective
