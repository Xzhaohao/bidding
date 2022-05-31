import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import getters from './getters'
import app from './modules/app'
import user from './modules/user'

// 定义 injection key
export const key: InjectionKey<Store<any>> = Symbol('storeKey')

export function useStore() {
  return baseUseStore(key)
}

export default createStore({
  getters,
  modules: {
    app,
    user
  }
})
