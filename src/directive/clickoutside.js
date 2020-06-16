export default {
  bind(el, binding, vnode) {
    function documentHandler(e) {
      if (vnode.context[binding.arg || 'parentEl'] && vnode.context[binding.arg || 'parentEl'].contains(e.target)) {
        return false
      }
      if (el.contains(e.target)) {
        return false;
      }
      if (binding.expression) {
        vnode.context[binding.expression](e)
      }
    }
    el.__vueClickOutside__ = documentHandler;
    document.addEventListener('click', documentHandler);
  },
  update() {

  },
  unbind(el, binding) {
    document.removeEventListener('click', el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  }
};