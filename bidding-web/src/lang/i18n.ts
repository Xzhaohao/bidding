import { createI18n } from 'vue-i18n'
import zh from './zh'
import en from './en'
import ja from './ja'

const i18n = createI18n({
  locale: 'zh',
  messages: {
    zh,
    en,
    ja
  }
})

export default i18n