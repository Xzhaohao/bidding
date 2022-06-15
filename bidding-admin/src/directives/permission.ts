import store from '../store'

function checkPermission(el: any, binding: any) {
  // 获取对应的权限
  const { value } = binding
  // 获取当前用户的所有功能权限
  const points = store.getters.userInfo.permission.points
  // value必须是一个数组
  if (value && value instanceof Array) {
    // 匹配对应的指令
    const hasPermission = points.some((point: any) => {
      return value.includes(point)
    })
    // 匹配失败
    if (!hasPermission) {
      el.parentNode && el.parentNode.removeChild(el)
    }
  } else {
    throw new Error('v-permission 的值必须是一个数组')
  }
}

export default {
  // 在绑定元素的父组件被挂载之后调用
  mounted(el: any, binding: any) {
    checkPermission(el, binding)
  },
  // 在包含子组件的 VNode 及其子组件的 VNode 更新后调用
  updated(el: any, binding: any) {
    checkPermission(el, binding)
  }
}
