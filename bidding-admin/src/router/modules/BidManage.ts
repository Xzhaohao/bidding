import Layout from '@/layout/index.vue'

export default {
  path: '/bid',
  name: 'bid',
  redirect: '/bid/list',
  component: () => Layout,
  meta: {
    title: 'bid',
    icon: 'personnel'
  },
  children: [
    {
      path: '/bid/list',
      name: 'inviteBids',
      component: () => import('@/views/bid-list/index.vue'),
      meta: {
        title: 'inviteBids',
        icon: 'personnel-manage'
      }
    },
    {
      path: '/bid/bear',
      name: 'bidBear',
      component: () => import('@/views/bid-bear/index.vue'),
      meta: {
        title: 'bidBear',
        icon: 'personnel-manage'
      }
    },
    {
      path: '/bid/publicity',
      name: 'bidPublicity',
      component: () => import('@/views/bid-publicity/index.vue'),
      meta: {
        title: 'bidPublicity',
        icon: 'personnel-manage'
      }
    },
    {
      path: '/bid/contract',
      name: 'bidContract',
      component: () => import('@/views/bid-contract/index.vue'),
      meta: {
        title: 'bidContract',
        icon: 'personnel-manage'
      }
    },
    {
      path: '/bid/review',
      name: 'bidReview',
      component: () => import('@/views/bid-review/index.vue'),
      meta: {
        title: 'bidReview',
        icon: 'personnel-manage'
      }
    },
    {
      path: '/bid/question',
      name: 'bidQuestion',
      component: () => import('@/views/bid-question/index.vue'),
      meta: {
        title: 'bidQuestion',
        icon: 'personnel-manage'
      }
    },
    {
      path: '/bid/grade',
      name: 'bidGrade',
      component: () => import('@/views/bid-grade/index.vue'),
      meta: {
        title: 'bidGrade',
        icon: 'personnel-manage'
      }
    },
    {
      path: '/bid/competency',
      name: 'bidCompetency',
      component: () => import('@/views/bid-competency/index.vue'),
      meta: {
        title: 'bidCompetency',
        icon: 'personnel-manage'
      }
    },
    {
      path: '/bid/deposit',
      name: 'bidDeposit',
      component: () => import('@/views/bid-deposit/index.vue'),
      meta: {
        title: 'bidDeposit',
        icon: 'personnel-manage'
      }
    }
  ]
}
