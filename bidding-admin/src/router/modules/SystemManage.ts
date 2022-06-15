import Layout from '@/layout/index.vue'

export default {
  path: '/sys',
  name: 'system',
  redirect: '/sys/userManage',
  component: () => Layout,
  meta: {
    title: 'sys',
    icon: 'personnel'
  },
  children: [
    {
      path: '/sys/userManage',
      name: 'userManage',
      component: () => import('@/views/user-manage/index.vue'),
      meta: {
        title: 'userManage',
        icon: 'personnel-manage'
      }
    },
    {
      path: '/sys/import',
      name: 'userImport',
      component: () => import('@/views/import/index.vue'),
      meta: { title: 'excelImport' }
    },
    {
      path: '/sys/role',
      name: 'roleList',
      component: () => import('@/views/role-list/index.vue'),
      meta: {
        title: 'roleList',
        icon: 'role'
      }
    },
    {
      path: '/sys/permission',
      name: 'permissionList',
      component: () => import('@/views/permission-list/index.vue'),
      meta: {
        title: 'permissionList',
        icon: 'permission'
      }
    },
    {
      path: '/sys/info/:id',
      name: 'userInfo',
      component: () => import('@/views/user-info/index.vue'),
      // 将props传递给路由组件
      props: true,
      meta: { title: 'userInfo' }
    },
    {
      path: '/sys/dict',
      name: 'systemDict',
      component: () => import('@/views/system-dict/index.vue'),
      meta: {
        title: 'systemDict',
        icon: 'permission'
      }
    }
  ]
}
