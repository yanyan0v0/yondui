/**
 * @Date 2020-04-22
 * @author liaoyanyan
 * @description 通用方法配置
 */

export const getSessionItem = (name) => {
  try {
    return JSON.parse(window.sessionStorage.getItem(name))
  } catch (err) {
    return null
  }
}

export const setSessionItem = (name, value) => {
  return window.sessionStorage.setItem(name, JSON.stringify(value))
}

export const getLocalItem = (name) => {
  try {
    return JSON.parse(window.localStorage.getItem(name))
  } catch (err) {
    return null
  }
}

export const setLocalItem = (name, value) => {
  return window.localStorage.setItem(name, JSON.stringify(value))
}

export const logout = () => {
  window.sessionStorage.clear()
  window.localStorage.clear()
}

/**
 * @param day 与现在相差天数
 * @description 返回与现在相差天数的日期
 */
export const getDay = (day) => {
  let dd = new Date()
  // 获取day天后的日期
  dd.setDate(dd.getDate() + day)
  return dd.getFullYear() + '-' + (dd.getMonth() + 1) + '-' + dd.getDate()
}

/**
 * @param {*} fn 执行函数
 * @param {*} wait 等待时间
 * @description 防抖
 */
export const debounce = (fn, wait = 500) => {
  let timer
  return function () {
    let args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, args)
    }, wait)
  }
}

/**
 * @param {*} fn 执行函数
 * @param {*} wait 等待时间
 * @description 节流
 */
export const throttle = (fn, wait = 500) => {
  let last
  let timer
  return function () {
    let args = arguments
    let now = +new Date()
    if (last && now - last < wait) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        last = now
        fn.apply(this, args)
      }, wait)
    } else {
      last = now
      fn.apply(this, args)
    }
  }
}

/**
 * @description 绑定事件 on(element, event, handler)
 */
export const on = (function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()

/**
 * @description 解绑事件 off(element, event, handler)
 */
export const off = (function () {
  if (document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()

/**
 * 时间格式化
 * @param fmt
 * @returns {*}
 * @constructor
 */
export const FormatDate = () => {
  // eslint-disable-next-line no-extend-native
  Date.prototype.Format = function (fmt) {
    var o = {
      'M+': this.getMonth() + 1, // 月份
      'd+': this.getDate(), // 日
      'h+': this.getHours(), // 小时
      'm+': this.getMinutes(), // 分
      's+': this.getSeconds(), // 秒
      'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
      'S': this.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (var k in o) { if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
    return fmt
  }
}