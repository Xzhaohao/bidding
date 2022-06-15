import Layout from '@/layout/index.vue'

export default {
  path: '/risk',
  name: 'risk',
  redirect: '/risk/list',
  component: () => Layout,
  meta: {
    title: 'risk',
    icon: 'personnel'
  },
  children: [
    {
      path: '/risk/list',
      name: 'riskList',
      component: () => import('@/views/risk-list/index.vue'),
      meta: {
        title: 'riskList',
        icon: 'personnel-manage'
      }
    },
    {
      path: '/risk/warn',
      name: 'riskWarn',
      component: () => import('@/views/risk-warn/index.vue'),
      meta: {
        title: 'riskWarn',
        icon: 'personnel-manage'
      }
    }
  ]
}
