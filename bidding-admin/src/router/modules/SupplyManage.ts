import Layout from '@/layout/index.vue'

export default {
  path: '/supplier',
  name: 'supplier',
  redirect: '/supplier/list',
  component: () => Layout,
  meta: {
    title: 'supplier',
    icon: 'personnel'
  },
  children: [
    {
      path: '/supplier/list',
      name: 'supplierList',
      component: () => import('@/views/supplier-list/index.vue'),
      meta: {
        title: 'supplierList',
        icon: 'personnel-manage'
      }
    },
    {
      path: '/supplier/auth',
      name: 'supplierAuth',
      component: () => import('@/views/supplier-auth/index.vue'),
      meta: {
        title: 'supplierAuth',
        icon: 'personnel-manage'
      }
    },
    {
      path: '/supplier/history',
      name: 'supplyHistory',
      component: () => import('@/views/supply-history/index.vue'),
      meta: {
        title: 'supplyHistory',
        icon: 'personnel-manage'
      }
    },
    {
      path: '/supplier/blacklist',
      name: 'supplierBlacklist',
      component: () => import('@/views/supplier-blacklist/index.vue'),
      meta: {
        title: 'supplierBlacklist',
        icon: 'personnel-manage'
      }
    }
  ]
}
