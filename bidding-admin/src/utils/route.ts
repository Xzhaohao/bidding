import path from 'path'

// 获取所有的子级路由
const getChildrenRoutes = (routes: any) => {
  const result: any = []
  routes.forEach((route: any) => {
    if (route.children && route.children.length > 0) {
      result.push(...route.children)
    }
  })
  return result
}

// 处理脱离层级的路由
export const filterRoutes = (routes: any) => {
  const childrenRoutes = getChildrenRoutes(routes)
  return routes.filter((route: any) => {
    // 根据 route 在 childrenRoutes 中进行查重，把重复路由剔除
    return !childrenRoutes.find((childrenRoute: any) => {
      return childrenRoute.path === route.path
    })
  })
}

function isNull(data: any) {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
}

// 根据 routes数据(经过过滤)，返回对应的 menu规则数据
export const generateMenus = (routes: any, basePath = '') => {
  const result: any = []
  routes.forEach((item: any) => {
    // 不存在 children，不存在mate
    if (isNull(item.children) && isNull(item.meta)) return
    // 存在 children，不存在mate
    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...generateMenus(item.children))
      return
    }
    // 最终的menu需要进行跳转，此时我们需要合并path
    const routePath = path.resolve(basePath, item.path)
    // 路由分离之后，可能存在同名父路由的情况
    let route = result.find((item: any) => item.path === routePath)
    if (!route) {
      route = { ...item, path: routePath, children: [] }
      if (route.meta.icon && route.meta.title) {
        result.push(route)
      }
    }

    // 存在children && 存在mate
    if (!isNull(item.children)) {
      route.children.push(...generateMenus(item.children, route.path))
    }
  })
  return result
}
