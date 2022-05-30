// 存储数据
export const setItem = (key: string, value: any) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

// 获取数据
export const getItem = (key: string) => {
  const data: any = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}

// 删除指定数据
export const removeItem = (key: string) => {
  window.localStorage.removeItem(key)
}

// 删除所有数据
export const removeAll = () => {
  window.localStorage.clear()
}
