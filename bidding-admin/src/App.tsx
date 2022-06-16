import { defineComponent, onMounted } from 'vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

export default defineComponent({
  setup() {
    onMounted(() => {
      document.body.style.setProperty('--el-color-success', '#3be4a6')
      // document.body.style.setProperty('--el-color-success', '#43e97b')
      document.body.style.setProperty('--el-color-success-light-3', '#38f9d7')
      document.body.style.setProperty('--el-color-success-dark-2', '#00DDC6')
    })

    return () => {
      return <el-config-provider locale={zhCn}>
        <router-view/>
      </el-config-provider>
    }
  }
})
