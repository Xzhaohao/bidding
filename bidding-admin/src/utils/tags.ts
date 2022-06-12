// 在白名单里面的都是不希望被保存的
const whiteList = ['/login', '/404', '/401']

/**
 * path 是否需要被缓存
 * @param {*} path
 * @returns
 */
export function isTags (path: string) {
  return !whiteList.includes(path)
}
