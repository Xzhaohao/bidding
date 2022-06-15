import Layout from '@/layout/index.vue'

export default {
  path: '/expert',
  name: 'expert',
  redirect: '/expert/list',
  component: () => Layout,
  meta: {
    title: 'expert',
    icon: 'personnel'
  },
  children: [
    {
      path: '/expert/list',
      name: 'expertList',
      component: () => import('@/views/expert-list/index.vue'),
      meta: {
        title: 'expert',
        icon: 'personnel-manage'
      }
    }
  ]
}
