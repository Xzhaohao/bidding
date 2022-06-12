import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import user from './modules/user'
import app from './modules/app'
import theme from './modules/theme'
import getters from './getters'

// 定义 injection key
export const key: InjectionKey<Store<any>> = Symbol('storeKey')

export function useStore() {
  return baseUseStore(key)
}

export default createStore({
  getters,
  modules: {
    app,
    user,
    theme
  }
})
