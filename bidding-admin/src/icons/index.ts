// 导入所有的 svg 图标

import svgIcon from '@/components/svgIcon/index.vue'

// https://webpack.docschina.org/guides/dependency-management/#requirecontext
const svgRequire = require.context('./svg', false, /\.svg$/)

const requireAll = (requireContext: any) => requireContext.keys().map(requireContext)
requireAll(svgRequire)

export default (app: any) => {
  app.component('svg-icon', svgIcon)
}
