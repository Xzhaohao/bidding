import i18n from '@/i18n'
import { watch } from 'vue'
import store from '@/store'

export function generateTitle (title: string) {
  return i18n.global.t('route.' + title)
}

/**
 * 监听语言变化，重新计算数据源初始化
 * @param {...any} cbs 所有的回调
 */
export function watchSwitchLang (...cbs: any) {
  watch(
    () => store.getters.language,
    () => {
      cbs.forEach((cb: Function) => cb(store.getters.language))
    }
  )
}
