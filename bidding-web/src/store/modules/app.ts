import { LANG, MENU } from '../../constant'
import { getItem, setItem } from '../../utils/storage'

export default {
  namespaced: true,
  state: () => ({
    language: getItem(LANG) || 'zh',
    selectedMenu: getItem(MENU) || '/'
  }),
  mutations: {
    // 设置国际化
    setLanguage(state: any, lang: string) {
      setItem(LANG, lang)
      state.language = lang
    },
    // 设置当前选择的菜单
    setSelectedMenu(state: any, menu: string) {
      setItem(MENU, menu)
      state.selectedMenu = menu
    }
  }
}