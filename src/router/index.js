import Vue from 'vue'
import VueRouter from 'vue-router'
import { MENU_LIST } from "@/util/config";

Vue.use(VueRouter)

// 菜单转化成路由
function menuToRoute(list) {
  let routes = []
  for (let menu of list) {
    if (menu.children) {
      routes = routes.concat(menuToRoute(menu.children))
    } else {
      routes.push({
        path: '/' + menu.to,
        name: menu.to,
        component: () => import("@ui/views" + menu.file)
      })
    }
  }
  return routes
}

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@ui/views/index.vue'),
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@ui/views/home.vue'),
    children: menuToRoute(MENU_LIST)
  },
]

const router = new VueRouter({
  // mode: "history",
  routes
})

export default router
