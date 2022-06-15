import { publicRoutes, privateRoutes } from '@/router'
import { RouteRecordRaw } from 'vue-router'

export default {
  namespaced: true,
  state: () => ({
    // 初始路由表
    routes: publicRoutes
  }),
  mutations: {
    // 增加路由
    setRoutes(state: any, newRoutes: Array<RouteRecordRaw>) {
      state.routes = [...publicRoutes, ...newRoutes]
    }
  },
  actions: {
    /**
     * 根据权限数据筛选路由
     * @param context
     * @param menus 权限数据
     */
    filterRoutes(context: any, menus: any) {
      // 筛选之后，获取需要通过 addRoute 进行添加的路由表数组
      const routes = []
      menus.forEach((key: any) => {
        routes.push(...privateRoutes.filter(item => item.name === key))
      })

      routes.push({
        path: '/:catchAll(.*)',
        redirect: '/404'
      })

      context.commit('setRoutes', routes)
      return routes
    }
  }
}
