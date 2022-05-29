import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus, { ElMessage } from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import i18n from './lang/i18n'

const app = createApp(App)

app.config.globalProperties.$message = ElMessage

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
  .use(ElementPlus)
  .use(i18n)
  .mount('#app')
