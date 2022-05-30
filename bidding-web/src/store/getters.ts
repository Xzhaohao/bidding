import { getItem } from '../utils/storage'

// 快捷访问
const getters = {
  // token: state => state.user.token,
  // hasUserInfo: state => JSON.stringify(state.user.userInfo) !== '{}',
  // userInfo: state => state.user.userInfo,
  language: (state: any) => state.app.language
}

export default getters
