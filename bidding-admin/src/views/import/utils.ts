export const USER_RELATIONS: any = {
  姓名: 'name',
  性别: 'gender',
  联系方式: 'mobile',
  开通时间: 'createTime',
  角色: 'roles'
}

export const formatDate = (numb: any) => {
  const time = new Date((numb - 1) * 24 * 3600000 + 1)
  time.setFullYear(time.getFullYear() - 70)
  const year: string = time.getFullYear() + ''
  const month: number = time.getMonth() + 1
  const date: number = time.getDate()

  return year + '-' + (month < 10 ? '0' + month : month) + '-' + (date < 10 ? '0' + date : date)
}
