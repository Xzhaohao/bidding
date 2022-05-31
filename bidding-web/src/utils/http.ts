import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
// @ts-ignore
import NProgress from 'nprogress'

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
  const token = window.sessionStorage.getItem('token')
  // @ts-ignore
  if (token) config.headers.Authorization = token
  return config
}, error => Promise.reject(error))

request.interceptors.response.use((config: AxiosResponse) => {
  if (!config.data.success) {
    ElMessage.error(config.data.message || '服务器端异常！')
  }
  NProgress.done()
  return config
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
