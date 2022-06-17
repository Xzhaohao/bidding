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
    path: '/news',
    name: 'News',
    component: () => import('@/views/news/index.vue'),
    redirect: '/news/list',
    children: [
      { path: '/news/list', name: 'NewsList', component: () => import('@/views/news/child/News.vue') },
      { path: '/news/policy', name: 'Policy', component: () => import('@/views/news/child/Policy.vue') }
    ]
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
    path: '/identification',
    name: 'Identification',
    component: () => import('@/views/identification/index.vue'),
    meta: {
      title: '完善资料-招投标平台',
      keepAlive: false
    }
  },
  {
    path: '/customer',
    name: 'Customer',
    component: () => import('@/views/customer/index.vue'),
    redirect: '/customer/info',
    children: [
      { path: '/customer/info', name: 'CustomerInfo', component: () => import('@/views/customer/child/info/index.vue') },
      { path: '/customer/account', name: 'childAccount', component: () => import('@/views/customer/child/account/index.vue') },
      { path: '/customer/message', name: 'CustomerMessage', component: () => import('@/views/customer/child/message/index.vue') },
      { path: '/customer/cert', name: 'CustomerCert', component: () => import('@/views/customer/child/cert/index.vue') }
    ]
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
  if (to.meta.title) document.title = to.meta.title as string

  next()
})

export default router
