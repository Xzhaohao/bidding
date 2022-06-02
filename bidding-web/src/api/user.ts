import request from '../utils/http'

// 登陆
export const loginApi = (data: object) => request({
  url: '/user/login',
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
