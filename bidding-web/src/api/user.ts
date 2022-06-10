import request from '../utils/http'

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

// 退出登陆
export const logoutApi = () => request({
  url: '/user/logout',
  method: 'POST'
})
