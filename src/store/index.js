import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { HOME } from '@ui/util/config'
import { getSessionItem, setSessionItem } from '@ui/util/tools'

export default new Vuex.Store({
  state: {
    // 当前版本
    version: '0.0.1',
    // 当前菜单name
    activeMenuName: getSessionItem('activeMenuName') || HOME,
    // 当前菜单列表
    menuList: getSessionItem('menuList') || [],
  },
  mutations: {
    setVersion(state, version) {
      state.version = version
      setSessionItem('version', version)
    },
    setActiveMenuName(state, name) {
      state.activeMenuName = name
      setSessionItem('activeMenuName', name)
    },
    setMenuList(state, list) {
      state.menuList = list
      setSessionItem('menuList', list)
    },
  },
  actions: {
    //
  },
  modules: {
    //
  }
})
