import request from '@/utils/request'

// 获取员工列表
export const fetchUserListApi = (params: object) => request({
  url: '/user/list',
  params
})
