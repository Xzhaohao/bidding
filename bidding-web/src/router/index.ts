import { createMemoryHistory, createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '招投标平台',
      keepAlive: false
    }
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('@/views/mine/index.vue'),
    meta: {
      title: '个人中心',
      keepAlive: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登陆注册-招投标平台',
      keepAlive: false
    }
  },
  {
    path: '/bid',
    name: 'Bid',
    component: () => import('@/views/bid/index.vue'),
    meta: {
      title: '采购公示-招投标平台',
      keepAlive: false
    }
  },
  {
    path: '/purchase',
    name: 'Purchase',
    component: () => import('@/views/purchase/index.vue'),
    meta: {
      title: '采购需求-招投标平台',
      keepAlive: false
    }
  },
  {
    path: '/notice',
    name: 'Notice',
    component: () => import('@/views/notice/index.vue'),
    meta: {
      title: '成交公示-招投标平台',
      keepAlive: false
    }
  },
  {
    path: '/policy',
    name: 'Policy',
    component: () => import('@/views/policy/index.vue'),
    meta: {
      title: '政策法规-招投标平台',
      keepAlive: false
    }
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/views/news/index.vue'),
    meta: {
      title: '新闻资讯-招投标平台',
      keepAlive: false
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('@/views/help/index.vue'),
    meta: {
      title: '帮助中心-招投标平台',
      keepAlive: false
    }
  },
  {
    path: '/:catchAll(.*)',
    name: '/404',
    component: () => import('@/views/404.vue')
  }
]


const router = createRouter({
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // @ts-ignore
  if (to.meta.title)  document.title = to.meta.title

  next()
})

export default router
