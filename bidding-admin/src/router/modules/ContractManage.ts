import Layout from '@/layout/index.vue'

export default {
  path: '/contract',
  name: 'contract',
  redirect: '/contract/list',
  component: () => Layout,
  meta: {
    title: 'contract',
    icon: 'personnel'
  },
  children: [
    {
      path: '/contract/list',
      name: 'contractTransaction',
      component: () => import('@/views/contract-list/index.vue'),
      meta: {
        title: 'contractTransaction',
        icon: 'personnel-manage'
      }
    },
    {
      path: '/contract/trace',
      name: 'contractTrace',
      component: () => import('@/views/contract-trace/index.vue'),
      meta: {
        title: 'contractTrace',
        icon: 'personnel-manage'
      }
    },
    {
      path: '/contract/settle',
      name: 'contractSettle',
      component: () => import('@/views/contract-settle/index.vue'),
      meta: {
        title: 'contractSettle',
        icon: 'personnel-manage'
      }
    }
  ]
}
