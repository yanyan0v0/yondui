export default {
  inserted: function (el, binding, vnode) {
    el.onscroll = function (event) {
      let e = event.target
      if (e.scrollTop + e.clientHeight === e.scrollHeight) {
        console.log('滚动到底部')
        if (binding.expression) {
          vnode.context[binding.expression]()
        }
      }
    }
  }
}
