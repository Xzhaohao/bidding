import { MAIN_COLOR, DEFAULT_COLOR } from '@/constant'
import { getItem, setItem } from '@/utils/storage'
// @ts-ignore
import variables from '@/styles/variables.scss'

export default {
  namespaced: true,
  state: () => ({
    mainColor: getItem(MAIN_COLOR) || DEFAULT_COLOR,
    variables: variables
  }),
  mutations: {
    setMainColor(state: any, newColor: any) {
      state.mainColor = newColor
      state.variables.menuBg = newColor
      setItem(MAIN_COLOR, newColor)
    }
  },
  actions: {}
}
