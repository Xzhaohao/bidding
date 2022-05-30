// 快捷访问
const getters = {
  token: (state: any) => state.user.token,
  hasUserInfo: (state: any) => JSON.stringify(state.user.userInfo) !== '{}',
  userInfo: (state: any) => state.user.userInfo,
  language: (state: any) => state.app.language
}

export default getters
