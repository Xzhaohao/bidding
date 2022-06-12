import { MAIN_COLOR, DEFAULT_COLOR } from '@/constant'
import { getItem, setItem } from '@/utils/storage'

let variables = require('@/styles/variables.scss')

// todo variables.scss在TS项目下读取为空，在JS项目中正常
if (JSON.stringify(variables) === '{}') {
  variables = {
    menuText: '#bfcbd9',
    menuActiveText: '#ffffff',
    subMenuActiveText: '#f4f4f5',
    menuBg: '#304156',
    menuHover: '#263445',
    subMenuBg: '#1f2d3d',
    subMenuHover: '#001528',
    sideBarWidth: '210px'
  }
}

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
