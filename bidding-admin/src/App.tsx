import { defineComponent } from 'vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

export default defineComponent({
  setup() {
    return () => {
      return <el-config-provider locale={zhCn}>
        <router-view/>
      </el-config-provider>
    }
  }
})
