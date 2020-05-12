import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { HOME } from '@/util/config'
import { getSessionItem, setSessionItem } from '@/util/tools'

export default new Vuex.Store({
  state: {
    // 当前菜单name
    activeMenuName: getSessionItem('activeMenuName') || HOME,
    // 当前菜单列表
    menuList: getSessionItem('menuList') || [],
  },
  mutations: {
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
