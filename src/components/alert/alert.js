import Vue from 'vue'
import Alert from './alert.vue'

const AlertConstructor = Vue.extend(Alert)

// 保存instance实例
let instances = []

const _Alert = function (data) {

  const instance = new AlertConstructor({
    // 传递prop属性值
    propsData: {
      type: data.type || 'text',
      showClose: data.showClose,
      theme: data.theme,
      hideIcon: data.hideIcon,
    },
    // 传递data属性值
    data: {
      htmlRender: false,
      top: instances.length ? instances[instances.length - 1].top + 15 : 0,
      duration: data.duration == undefined ? 3000 : data.duration,
      message: data.message,
      onClose: data.onClose
    }
  })
  instance.$mount()
  document.body.appendChild(instance.$el)
  let top = 15
  for (let i of instances) {
    top += (i.$el.offsetHeight + 15)
  }
  instance.top = top
  // instance.visible = true
  instances.push(instance)
  return instance;
}

const typeList = ['text', 'success', 'warning', 'error']
typeList.forEach(type => {
  _Alert[type] = data => {
    let _data = {}
    // 可接受data为字符串的传参
    if (typeof data === 'string') {
      _data = {
        type,
        message: data
      }
    } else if (typeof data === 'undefined') {
      _data = {
        type
      }
    } else {
      _data = {
        ...data,
        type
      }
    }
    return _Alert(_data)
  }
})

_Alert.refresh = (vm) => {
  // 从数组中移除
  let index = instances.findIndex(item => item._uid === vm._uid)
  let height = instances[index].$el.offsetHeight
  instances.splice(index, 1)
  // 修改其他元素的top属性
  for (let i = index; i < instances.length; i++) {
    instances[i].top -= (height + 15)
  }
}

export default _Alert