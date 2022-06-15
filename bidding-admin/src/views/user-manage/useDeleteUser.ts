import { ElMessage, ElMessageBox } from 'element-plus/es'
import { deleteUserApi } from '@/api/user'
import { fetchUserList } from '@/views/user-manage/useFetchUserData'
import i18n from '@/i18n'

const { t } = i18n.global

// 删除员工
const onRemoveClicked = (row: any) => {
  ElMessageBox.confirm(
    t('excel.dialogTitle1') + row.name + t('excel.dialogTitle2'),
    { type: 'warning' }
  ).then(async () => {
    await deleteUserApi(row.id)
    ElMessage.success(t('excel.removeSuccess'))
    fetchUserList()
  })
}

export {
  onRemoveClicked
}
