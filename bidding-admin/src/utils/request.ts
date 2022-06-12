import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
import store from '../store'
import { isTimeOut } from '@/utils/auth'
import NProgress from 'nprogress'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use((config: AxiosRequestConfig) => {
  NProgress.start()
  if (store.getters.token) {
    // 登陆超时
    if (isTimeOut()) {
      store.dispatch('user/logout').then()
      return Promise.reject(new Error('token 失效了'))
    }
    config.headers!.Authorization = store.getters.token
  }
  return config
}, error => Promise.reject(error))

service.interceptors.response.use((response: AxiosResponse) => {
  NProgress.done()
  const { status, message, data, code } = response.data
  if (status) {
    return data
  } else {
    if (code === 577) {
      store.dispatch('user/logout').then()
    }
    ElMessage.error(message)
    return Promise.reject(new Error(message))
  }
}, error => {
  ElMessage.error(error.message)
  return Promise.reject(error)
})

export default service
