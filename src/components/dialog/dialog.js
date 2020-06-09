import Vue from 'vue'
import Dialog from './dialog.vue'

const _Dialog = function (data) {
  data = data || {}
  const DialogConstructor = Vue.extend(Dialog)
  const instance = new DialogConstructor({
    propsData: {
      value: true,
      title: data.title || '',
      // showClose: false,
      ...data
    },
    data: {
      htmlRender: false,
      type: data.type || 'info',
      content: data.content,
      onOk: data.onOk,
      onCancel: data.onCancel,
    }
  }).$mount()
  document.body.appendChild(instance.$el)
}

const typeList = ['info', 'success', 'warning', 'error']
typeList.forEach(type => {
  _Dialog[type] = data => {
    let _data = {}
    // 可接受data为字符串的传参
    if (typeof data === 'string') {
      _data = {
        type,
        title: data
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
    return _Dialog(_data)
  }
})

export default _Dialog