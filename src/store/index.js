import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { getSessionItem, setSessionItem } from '@/util/tools'

export default new Vuex.Store({
  state: {
    // 当前版本
    version: '0.1.7',
    // 当前激活的菜单数组
    activeMenu: getSessionItem('activeMenu') || [],
    // 当前菜单列表
    menuList: getSessionItem('menuList') || [],
  },
  mutations: {
    setVersion(state, version) {
      state.version = version
      setSessionItem('version', version)
    },
    setActiveMenu(state, list) {
      state.activeMenu = list
      setSessionItem('activeMenu', list)
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
