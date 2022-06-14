import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

// 公共路由
const publicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: 'dashboard', icon: 'dashboard' }
      },
      {
        path: '/cockpit',
        name: 'cockpit',
        component: () => import('@/views/cockpit/index.vue'),
        meta: { title: 'cockpit', icon: 'dashboard' }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404.vue')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/error-page/401.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  }
]

// 私有路由
const privateRoutes: Array<RouteRecordRaw> = [
  {
    path: '/sys',
    name: 'system',
    redirect: '/sys/userManage',
    component: () => Layout,
    meta: { title: 'sys', icon: 'personnel' },
    children: [
      {
        path: '/sys/userManage',
        name: 'userManage',
        component: () => import('@/views/user-manage/index.vue'),
        meta: { title: 'userManage', icon: 'personnel-manage' }
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
        meta: { title: 'roleList', icon: 'role' }
      },
      {
        path: '/sys/permission',
        name: 'permissionList',
        component: () => import('@/views/permission-list/index.vue'),
        meta: { title: 'permissionList', icon: 'permission' }
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
        meta: { title: 'systemDict', icon: 'permission' }
      }
    ]
  },
  {
    path: '/base',
    name: 'base',
    redirect: '/base/list',
    component: () => Layout,
    meta: { title: 'base', icon: 'personnel' },
    children: [
      {
        path: '/base/news',
        name: 'newsManage',
        component: () => import('@/views/base-news/index.vue'),
        meta: { title: 'newsManage', icon: 'personnel-manage' }
      },
      {
        path: '/base/policy',
        name: 'policyManage',
        component: () => import('@/views/base-policy/index.vue'),
        meta: { title: 'policyManage', icon: 'personnel-manage' }
      },
      {
        path: '/base/notice',
        name: 'concludeTransaction',
        component: () => import('@/views/base-notice/index.vue'),
        meta: { title: 'concludeTransaction', icon: 'personnel-manage' }
      },
      {
        path: '/base/data',
        name: 'dataDownload',
        component: () => import('@/views/base-data/index.vue'),
        meta: { title: 'dataDownload', icon: 'personnel-manage' }
      },
      {
        path: '/base/advise',
        name: 'baseAdvise',
        component: () => import('@/views/base-advise/index.vue'),
        meta: { title: 'baseAdvise', icon: 'personnel-manage' }
      }
    ]
  },
  {
    path: '/company',
    name: 'company',
    redirect: '/company/list',
    component: () => Layout,
    meta: { title: 'company', icon: 'personnel' },
    children: [
      {
        path: '/company/list',
        name: 'companyList',
        component: () => import('@/views/company-list/index.vue'),
        meta: { title: 'compList', icon: 'personnel-manage' }
      },
      {
        path: '/company/auth',
        name: 'companyAuth',
        component: () => import('@/views/company-auth/index.vue'),
        meta: { title: 'compAuth', icon: 'personnel-manage' }
      }
    ]
  },
  {
    path: '/expert',
    name: 'expert',
    redirect: '/expert/list',
    component: () => Layout,
    meta: { title: 'expert', icon: 'personnel' },
    children: [
      {
        path: '/expert/list',
        name: 'expertList',
        component: () => import('@/views/expert-list/index.vue'),
        meta: { title: 'expert', icon: 'personnel-manage' }
      }
    ]
  },
  {
    path: '/purchase',
    name: 'purchase',
    redirect: '/purchase/list',
    component: () => Layout,
    meta: { title: 'purchase', icon: 'personnel' },
    children: [
      {
        path: '/purchase/list',
        name: 'purchaseList',
        component: () => import('@/views/purchase-list/index.vue'),
        meta: { title: 'purchaseList', icon: 'personnel-manage' }
      },
      {
        path: '/purchase/order',
        name: 'purchaseOrder',
        component: () => import('@/views/purchase-order/index.vue'),
        meta: { title: 'purchaseOrder', icon: 'personnel-manage' }
      },
      {
        path: '/purchase/supply',
        name: 'purchaseSupply',
        component: () => import('@/views/purchase-supply/index.vue'),
        meta: { title: 'purchaseSupply', icon: 'personnel-manage' }
      }
    ]
  },
  {
    path: '/bid',
    name: 'bid',
    redirect: '/bid/list',
    component: () => Layout,
    meta: { title: 'bid', icon: 'personnel' },
    children: [
      {
        path: '/bid/list',
        name: 'inviteBids',
        component: () => import('@/views/bid-list/index.vue'),
        meta: { title: 'inviteBids', icon: 'personnel-manage' }
      },
      {
        path: '/bid/bear',
        name: 'bidBear',
        component: () => import('@/views/bid-bear/index.vue'),
        meta: { title: 'bidBear', icon: 'personnel-manage' }
      },
      {
        path: '/bid/publicity',
        name: 'bidPublicity',
        component: () => import('@/views/bid-publicity/index.vue'),
        meta: { title: 'bidPublicity', icon: 'personnel-manage' }
      },
      {
        path: '/bid/contract',
        name: 'bidContract',
        component: () => import('@/views/bid-contract/index.vue'),
        meta: { title: 'bidContract', icon: 'personnel-manage' }
      },
      {
        path: '/bid/review',
        name: 'bidReview',
        component: () => import('@/views/bid-review/index.vue'),
        meta: { title: 'bidReview', icon: 'personnel-manage' }
      },
      {
        path: '/bid/question',
        name: 'bidQuestion',
        component: () => import('@/views/bid-question/index.vue'),
        meta: { title: 'bidQuestion', icon: 'personnel-manage' }
      },
      {
        path: '/bid/grade',
        name: 'bidGrade',
        component: () => import('@/views/bid-grade/index.vue'),
        meta: { title: 'bidGrade', icon: 'personnel-manage' }
      },
      {
        path: '/bid/competency',
        name: 'bidCompetency',
        component: () => import('@/views/bid-competency/index.vue'),
        meta: { title: 'bidCompetency', icon: 'personnel-manage' }
      },
      {
        path: '/bid/deposit',
        name: 'bidDeposit',
        component: () => import('@/views/bid-deposit/index.vue'),
        meta: { title: 'bidDeposit', icon: 'personnel-manage' }
      }
    ]
  },
  {
    path: '/supplier',
    name: 'supplier',
    redirect: '/supplier/list',
    component: () => Layout,
    meta: { title: 'supplier', icon: 'personnel' },
    children: [
      {
        path: '/supplier/list',
        name: 'supplierList',
        component: () => import('@/views/supplier-list/index.vue'),
        meta: { title: 'supplierList', icon: 'personnel-manage' }
      },
      {
        path: '/supplier/auth',
        name: 'supplierAuth',
        component: () => import('@/views/supplier-auth/index.vue'),
        meta: { title: 'supplierAuth', icon: 'personnel-manage' }
      },
      {
        path: '/supplier/history',
        name: 'supplyHistory',
        component: () => import('@/views/supply-history/index.vue'),
        meta: { title: 'supplyHistory', icon: 'personnel-manage' }
      },
      {
        path: '/supplier/blacklist',
        name: 'supplierBlacklist',
        component: () => import('@/views/supplier-blacklist/index.vue'),
        meta: { title: 'supplierBlacklist', icon: 'personnel-manage' }
      }
    ]
  },
  {
    path: '/agency',
    name: 'agency',
    redirect: '/agency/list',
    component: () => Layout,
    meta: { title: 'agency', icon: 'personnel' },
    children: [
      {
        path: '/agency/list',
        name: 'agencyList',
        component: () => import('@/views/agency-list/index.vue'),
        meta: { title: 'agencyList', icon: 'personnel-manage' }
      },
      {
        path: '/agency/count',
        name: 'agencyCount',
        component: () => import('@/views/agency-count/index.vue'),
        meta: { title: 'agencyCount', icon: 'personnel-manage' }
      }
    ]
  },
  {
    path: '/contract',
    name: 'contract',
    redirect: '/contract/list',
    component: () => Layout,
    meta: { title: 'contract', icon: 'personnel' },
    children: [
      {
        path: '/contract/list',
        name: 'contractTransaction',
        component: () => import('@/views/contract-list/index.vue'),
        meta: { title: 'contractTransaction', icon: 'personnel-manage' }
      },
      {
        path: '/contract/trace',
        name: 'contractTrace',
        component: () => import('@/views/contract-trace/index.vue'),
        meta: { title: 'contractTrace', icon: 'personnel-manage' }
      },
      {
        path: '/contract/settle',
        name: 'contractSettle',
        component: () => import('@/views/contract-settle/index.vue'),
        meta: { title: 'contractSettle', icon: 'personnel-manage' }
      }
    ]
  },
  {
    path: '/risk',
    name: 'risk',
    redirect: '/risk/list',
    component: () => Layout,
    meta: { title: 'risk', icon: 'personnel' },
    children: [
      {
        path: '/risk/list',
        name: 'riskList',
        component: () => import('@/views/risk-list/index.vue'),
        meta: { title: 'riskList', icon: 'personnel-manage' }
      },
      {
        path: '/risk/warn',
        name: 'riskWarn',
        component: () => import('@/views/risk-warn/index.vue'),
        meta: { title: 'riskWarn', icon: 'personnel-manage' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
