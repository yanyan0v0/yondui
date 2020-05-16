export default {
  inserted: function (el, binding, vnode) {
    el.onscroll = function (event) {
      let e = event.target
      if (binding.expression) {
        let params = eval(binding.expression)
        vnode.context.$refs[params[0]][params[1]]()
      } else {
        vnode.context.$refs['nav']['findActiveNav']()
      }
    }
  }
}
