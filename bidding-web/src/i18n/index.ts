import { createI18n } from 'vue-i18n'
import store from '../store'
import zh from './lang/zh'
import en from './lang/en'
import ja from './lang/ja'
import sr from './lang/sr'
import fi from './lang/fi'

const messages = {
  zh,
  en,
  ja,
  sr,
  fi
}

// 国际化缓存处理
function getLanguage() {
  return store && store.getters && store.getters.language
}

const index = createI18n({
  // 使用 composition API，则需要将其值设置为false
  legacy: false,
  // 全局注入 $t函数
  globalInjection: true,
  locale: getLanguage(),
  messages
})

export default index