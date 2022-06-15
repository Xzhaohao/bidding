import { ref } from 'vue'
import router from '@/router'

// excel 导入按钮点击事件
const onImportExcel = () => {
  router.push('/sys/import').then()
}

// 导出相关
const exportToExcelVisible = ref(false)
const onExportExcel = () => {
  exportToExcelVisible.value = true
}

export {
  exportToExcelVisible,
  onImportExcel,
  onExportExcel
}
