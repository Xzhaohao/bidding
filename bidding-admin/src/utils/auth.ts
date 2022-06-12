import { getItem, setItem } from '@/utils/storage'
import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'

// 获取时间戳
export function getTimeStamp() {
  return getItem(TIME_STAMP)
}

// 设置时间戳
export function setTimeStamp() {
  setItem(TIME_STAMP, Date.now())
}

// 判断是否超时
export function isTimeOut() {
  const currentTime = Date.now()
  const timeStamp = getTimeStamp()
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}
