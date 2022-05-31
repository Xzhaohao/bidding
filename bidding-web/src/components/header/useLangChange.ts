import { ref } from 'vue'
import { Store } from 'vuex'
import { useI18n } from 'vue-i18n'

export default function useLangChange(store: Store<any>) {
  const i18n = useI18n()

  // 控制选择语言的弹窗
  const langChangeVisible = ref(false)

  // 点击切换语言菜单触发的事件
  function changeLangMenuClick() {
    langChangeVisible.value = true
  }

  // 具体的语言项被点击时触发的事件
  function langItemClicked(type: string) {
    if (type === 'zh' || type === 'zh1') type = 'zh'
    i18n.locale.value = type
    store.commit('app/setLanguage', type)
    langChangeVisible.value = false
  }

  return {
    langChangeVisible,
    changeLangMenuClick,
    langItemClicked
  }
}