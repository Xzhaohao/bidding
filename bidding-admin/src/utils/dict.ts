// 状态，1正常，2删除
export const state = (arg: number): string => {
  switch (arg) {
    case 1:
      return '正常'
    case 2:
      return '删除'
    default:
      throw new Error('参数不合法')
  }
}

// 性别，1男，2女
export const gender = (g: number): string => {
  switch (g) {
    case 1:
      return '男'
    case 2:
      return '女'
    default:
      throw new Error('参数不合法')
  }
}
