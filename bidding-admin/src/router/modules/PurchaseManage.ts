import Layout from '@/layout/index.vue'

export default {
  path: '/purchase',
  name: 'purchase',
  redirect: '/purchase/list',
  component: () => Layout,
  meta: {
    title: 'purchase',
    icon: 'personnel'
  },
  children: [
    {
      path: '/purchase/list',
      name: 'purchaseList',
      component: () => import('@/views/purchase-list/index.vue'),
      meta: {
        title: 'purchaseList',
        icon: 'personnel-manage'
      }
    },
    {
      path: '/purchase/order',
      name: 'purchaseOrder',
      component: () => import('@/views/purchase-order/index.vue'),
      meta: {
        title: 'purchaseOrder',
        icon: 'personnel-manage'
      }
    },
    {
      path: '/purchase/supply',
      name: 'purchaseSupply',
      component: () => import('@/views/purchase-supply/index.vue'),
      meta: {
        title: 'purchaseSupply',
        icon: 'personnel-manage'
      }
    }
  ]
}
