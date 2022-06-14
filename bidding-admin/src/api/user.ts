import request from '@/utils/request'

// 获取员工列表
export const fetchUserListApi = (params: object) => request({
  url: '/user/list',
  params
})

// 批量导入员工信息
export const userBatchImportApi = (data: any) => request({
  url: '/user/batch/import',
  method: 'POST',
  data
})

export const deleteUserApi = (id: string) => request({
  url: `user/delete/${id}`,
  method: 'DELETE'
})
