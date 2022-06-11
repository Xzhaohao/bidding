import request from '../utils/http'
import { RegisterFormData } from '../views/login/components/validators-register'

// 获取登陆图形验证码
export const loginImageCodeApi = () => request({
  url: '/pub/passport/code'
})

// 登陆
export const loginApi = (data: object) => request({
  url: '/pub/passport/login',
  method: 'POST',
  data
})

// 获取用户信息
export const fetchUserInfoApi = () => request({
  url: '/user/profile'
})

// 获取短信验证码
export const fetchSmsCodeApi = (data: object) => request({
  url: '/pub/passport/sms',
  method: 'POST',
  data
})

// 注册
export const registerApi = (data: RegisterFormData) => request({
  url: '/pub/passport/register',
  method: 'POST',
  data
})

// 退出登陆
export const logoutApi = () => request({
  url: '/user/logout',
  method: 'POST'
})
