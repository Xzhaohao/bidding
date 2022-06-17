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

// 状态，true是，false否
export const state2 = (arg: boolean): string => {
  if (arg) {
    return '是'
  } else {
    return '否'
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

// 性别，1男，2女
export const genderNum = (g: string): number => {
  switch (g) {
    case '男':
      return 1
    case '女':
      return 2
    default:
      throw new Error('参数不合法')
  }
}

// 新闻资讯、政策法规、成交公示状态
export const articleStatus = (arg: number): string => {
  switch (arg) {
    case 0:
      return '草稿'
    case 1:
      return '发布'
    case 2:
      return '撤销'
    case 3:
      return '删除'
    default:
      throw new Error('参数不合法')
  }
}

// 专家状态
export const expertStatus = (arg: number): string => {
  switch (arg) {
    case 0:
      return '已入库'
    case 1:
      return '已出库'
    case 2:
      return '待审核'
    case 3:
      return '审核不通过'
    default:
      throw new Error('参数不合法')
  }
}
