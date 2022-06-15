import Layout from '@/layout/index.vue'

export default {
  path: '/base',
  name: 'base',
  redirect: '/base/list',
  component: () => Layout,
  meta: {
    title: 'base',
    icon: 'personnel'
  },
  children: [
    {
      path: '/base/news',
      name: 'newsManage',
      component: () => import('@/views/base-news/index.vue'),
      meta: {
        title: 'newsManage',
        icon: 'personnel-manage'
      }
    },
    {
      path: '/base/policy',
      name: 'policyManage',
      component: () => import('@/views/base-policy/index.vue'),
      meta: {
        title: 'policyManage',
        icon: 'personnel-manage'
      }
    },
    {
      path: '/base/notice',
      name: 'concludeTransaction',
      component: () => import('@/views/base-notice/index.vue'),
      meta: {
        title: 'concludeTransaction',
        icon: 'personnel-manage'
      }
    },
    {
      path: '/base/data',
      name: 'dataDownload',
      component: () => import('@/views/base-data/index.vue'),
      meta: {
        title: 'dataDownload',
        icon: 'personnel-manage'
      }
    },
    {
      path: '/base/advise',
      name: 'baseAdvise',
      component: () => import('@/views/base-advise/index.vue'),
      meta: {
        title: 'baseAdvise',
        icon: 'personnel-manage'
      }
    }
  ]
}
