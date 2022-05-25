import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: () => import('@/views/Home.vue'),
  //   meta: {
  //     title: '',
  //     keepAlive: false
  //   }
  // },
  // {
  //   path: '/mine',
  //   name: 'Mine',
  //   component: () => import('@/views/Mine.vue'),
  //   meta: {
  //     title: '',
  //     keepAlive: false
  //   }
  // }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
