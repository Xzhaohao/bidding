import Layout from '@/layout/index.vue'

export default {
  path: '/agency',
  name: 'agency',
  redirect: '/agency/list',
  component: () => Layout,
  meta: {
    title: 'agency',
    icon: 'personnel'
  },
  children: [
    {
      path: '/agency/list',
      name: 'agencyList',
      component: () => import('@/views/agency-list/index.vue'),
      meta: {
        title: 'agencyList',
        icon: 'personnel-manage'
      }
    },
    {
      path: '/agency/count',
      name: 'agencyCount',
      component: () => import('@/views/agency-count/index.vue'),
      meta: {
        title: 'agencyCount',
        icon: 'personnel-manage'
      }
    }
  ]
}
