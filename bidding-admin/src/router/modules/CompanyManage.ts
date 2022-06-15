import Layout from '@/layout/index.vue'

export default {
  path: '/company',
  name: 'company',
  redirect: '/company/list',
  component: () => Layout,
  meta: {
    title: 'company',
    icon: 'personnel'
  },
  children: [
    {
      path: '/company/list',
      name: 'companyList',
      component: () => import('@/views/company-list/index.vue'),
      meta: {
        title: 'compList',
        icon: 'personnel-manage'
      }
    },
    {
      path: '/company/auth',
      name: 'companyAuth',
      component: () => import('@/views/company-auth/index.vue'),
      meta: {
        title: 'compAuth',
        icon: 'personnel-manage'
      }
    }
  ]
}
