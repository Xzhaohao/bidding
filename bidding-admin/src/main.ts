import { createApp } from 'vue'
import App from './App'
import router from './router'
import store from './store'
import i18n from './i18n'

// Element-Plus
import ElementPlus, { ElMessage } from 'element-plus'
import 'element-plus/dist/index.css'

// 路由鉴权
import './permission'

// 初始化样式
import './styles/index.scss'

// 导入 svgIcon
import installIcons from './icons'

const app = createApp(App)

app.config.globalProperties.$message = ElMessage

installIcons(app)

app.use(router)
  .use(store)
  .use(ElementPlus)
  .use(i18n)
  .mount('#app')
