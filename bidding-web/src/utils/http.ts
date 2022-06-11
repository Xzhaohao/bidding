import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
import store from '../store'
import NProgress from 'nprogress'
import { isTimeOut } from './auth'

const request = axios.create({
  baseURL: process.env.baseURL,
  timeout: 5000,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
})

request.interceptors.request.use((config: AxiosRequestConfig) => {
  NProgress.start()
  if (store.getters.token) {
    // 登陆超时
    if (isTimeOut()) {
      store.dispatch('user/logout').then()
      return Promise.reject(new Error('token 失效了!'))
    }
    config.headers!.Authorization = store.getters.token
  }
  return config
}, error => Promise.reject(error))

request.interceptors.response.use((response: AxiosResponse) => {
  NProgress.done()

  const { status, message, code } = response.data
  if (status) {
    return response.data
  } else {
    // 577: 令牌过期 ｜ 被挤下线 ｜ 在另一台设备登陆
    if (code === 577) {
      store.dispatch('user/logout').then()
    }
    ElMessage.error(message || '服务器端异常！')
    return Promise.reject(new Error(message))
  }
}, error => {
  if (!error.response) {
    ElMessage.error('服务器连接失败，请稍后重试！')
  }
  if (error.response.status === 504 || error.response.status === 404) {
    ElMessage.error('服务器被吃了( ╯□╰ )！')
  } else if (error.response.status === 403) {
    ElMessage.error('权限不足！')
  } else {
    if (error.response.data.msg) {
      ElMessage.error(error.response.data.message)
    } else {
      ElMessage.error('未知错误！')
    }
  }
  return Promise.reject(error)
})

export default request
