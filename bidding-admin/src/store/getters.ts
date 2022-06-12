import { generateColors } from '@/utils/theme'
import { getItem } from '@/utils/storage'
import { MAIN_COLOR } from '@/constant'

// 快捷访问
const getters = {
  token: (state: any) => state.user.token,
  hasUserInfo: (state: any) => JSON.stringify(state.user.userInfo) !== '{}',
  userInfo: (state: any) => state.user.userInfo,
  cssVar: (state: any) => ({ ...state.theme.variables, ...generateColors(getItem(MAIN_COLOR)) }),
  sidebarOpened: (state: any) => state.app.sidebarOpened,
  language: (state: any) => state.app.language,
  mainColor: (state: any) => state.theme.mainColor,
  tagsViewList: (state: any) => state.app.tagsViewList
}

export default getters
