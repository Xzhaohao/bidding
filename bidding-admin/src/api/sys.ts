import request from '@/utils/request'
import { LoginFormData } from '@/views/login/rules'

// 登陆
export const loginApi = (data: LoginFormData) => request({
  url: '/sys/login',
  method: 'POST',
  data
})

// 获取用户信息
export const fetchUserInfoApi = () => request({
  url: '/sys/profile'
})

// 退出登陆
export const logoutApi = () => request({
  url: '/sys/logout',
  method: 'POST'
})
