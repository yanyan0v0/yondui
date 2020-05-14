import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index.vue'),
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/home.vue'),
    children: [
      {
        path: '/start',
        name: 'start',
        component: () => import('@/views/quick-start/quick-start.vue'),
      },
      {
        path: '/button',
        name: 'button',
        component: () => import('@/views/button/button.vue'),
      },
      {
        path: '/icon',
        name: 'icon',
        component: () => import('@/views/icon/icon.vue'),
      },
      {
        path: '/menu',
        name: 'menu',
        component: () => import('@/views/menu/menu.vue'),
      },
      {
        path: '/timeline',
        name: 'timeline',
        component: () => import('@/views/timeline/timeline.vue'),
      },
    ]
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
