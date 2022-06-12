import router from './router'
import store from './store'

// 白名单
const whiteList = ['/login', '/404']

/**
 * 路由前置守卫
 *
 * @param {*} to 要到哪里去
 * @param {*} from 你从哪里来
 * @param {*} next 是否要去
 */
router.beforeEach(async (to, from, next) => {
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 判断用户信息是否存在
      if (!store.getters.hasUserInfo) {
        await store.dispatch('user/getUserInfo')
      }
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
