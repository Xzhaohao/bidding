import { defineComponent, onMounted } from 'vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

export default defineComponent({
  setup() {
    onMounted(() => {
      // document.body.style.setProperty('--el-color-primary', '#9b63ee')
    })

    return () => {
      return <el-config-provider locale={zhCn}>
        <router-view/>
      </el-config-provider>
    }
  }
})
