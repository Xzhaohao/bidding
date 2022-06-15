import request from '@/utils/request'

// 获取所有角色
export const fetchRoleListApi = () => request({
  url: '/auth/role'
})

// 获取所有权限
export const fetchPermissionListApi = () => request({
  url: '/auth/permission'
})

export const updateRoleApi = () => request({
  url: '/auth/updateRole',
  method: 'PUT'
})
