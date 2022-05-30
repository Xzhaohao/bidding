import { fetchUserInfoApi, loginApi, logoutApi } from '../../api/user'
import { getItem, removeAll, setItem } from '../../utils/storage'
import { TOKEN } from '../../constant'
import { setTimeStamp } from '../../utils/auth'
// @ts-ignore
import md5 from 'md5'
import router from '../../router'

export default {
  // 表示此模块是一个单独的模块，不会和子模块合并
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state: any, token: string) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state: any, userInfo: object) {
      state.userInfo = userInfo
    }
  },
  actions: {
    login(context: any, userInfo: any) {
      const { username, password } = userInfo
      return new Promise((resolve: any, reject) => {
        // 登陆请求动作
        loginApi({ username, password: md5(password) })
          .then(data => {
            // @ts-ignore
            this.commit('user/setToken', data.token)
            router.push('/')
            // 保存登陆时间
            setTimeStamp()
            resolve()
          })
          .catch(err => reject(err))
      })
    },

    async getUserInfo(context: any) {
      const res = await fetchUserInfoApi()
      // @ts-ignore
      this.commit('user/setUserInfo', res)
      return res
    },

    async logout(context: any, type: number) {
      const token = getItem(TOKEN)
      if (token && type === 1) await logoutApi()

      // @ts-ignore
      this.commit('user/setToken', '')
      // @ts-ignore
      this.commit('user/setUserInfo', {})

      removeAll()
      await router.push('/login')
      // todo 清理权限相关配置
    }
  }
}