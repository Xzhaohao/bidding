import { LANG } from '../../constant'
import { getItem, setItem } from '../../utils/storage'

export default {
  namespaced: true,
  state: () => ({
    language: getItem(LANG) || 'zh'
  }),
  mutations: {
    // 设置国际化
    setLanguage(state: any, lang: string) {
      setItem(LANG, lang)
      state.language = lang
    }
  }
}