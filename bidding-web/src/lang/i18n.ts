import { createI18n } from 'vue-i18n'
import store from '../store'
import zh from './zh'
import en from './en'
import ja from './ja'

const messages = {
  zh,
  en,
  ja
}

// 国际化缓存处理
function getLanguage() {
  return store && store.getters && store.getters.language
}

const i18n = createI18n({
  // 使用 composition API，则需要将其值设置为false
  legacy: false,
  // 全局注入 $t函数
  globalInjection: true,
  locale: getLanguage(),
  messages
})

export default i18n