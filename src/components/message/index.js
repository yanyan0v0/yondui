import Vue from 'vue'
import Message from './message.vue'

const MessageConstructor = Vue.extend(Message)

// 保存instance实例
let instances = []

const _Message = function (data) {
  const instance = new MessageConstructor({
    data
  })
  instance.$mount()
  document.body.appendChild(instance.$el)
  let top = 15
  for (let i of instances) {
    top += (i.$el.offsetHeight + 15)
  }
  instance.top = top
  instance.visible = true
  instances.push(instance)
  return instance;
}

const typeList = ['info', 'success', 'warning', 'error']
typeList.forEach(type => {
  _Message[type] = data => {
    data.type = type
    // 可接受data为字符串的传参
    return _Message((typeof data === 'string') ? {
      message: data
    } : data)
  }
})

export const refresh = (vm) => {
  // 从数组中移除
  let index = instances.findIndex(item => item._uid === vm._uid)
  let height = instances[index].$el.offsetHeight
  instances.splice(index, 1)
  // 修改其他元素的top属性
  for (let i = index; i < instances.length; i++) {
    instances[i].top -= (height + 15)
  }
}

export default _Message