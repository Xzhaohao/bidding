<template>
  <upload-excel :onSuccess="onSuccess"/>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { USER_RELATIONS, formatDate } from '@/views/import/utils'
import UploadExcel from '@/components/upload-excel/index.vue'
import { userBatchImportApi } from '@/api/user'
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'
import { genderNum } from '@/utils/dict'

const i18n = useI18n()
const router = useRouter()
const onSuccess = async ({ results }: any) => {
  const uploadData = generateData(results)
  console.log(uploadData)
  await userBatchImportApi(uploadData)
  ElMessage.success(results.length + i18n.t('excel.importSuccess'))
  await router.push('/sys/userManage')
}

// 筛选数据
const generateData = (results: any) => {
  const arr: any = []

  results.forEach((item: any) => {
    const userInfo: any = {}

    Object.keys(item).forEach((key: any) => {
      switch (USER_RELATIONS[key]) {
        case 'createTime':
          userInfo[USER_RELATIONS[key]] = formatDate(item[key])
          break
        case 'gender':
          userInfo[USER_RELATIONS[key]] = genderNum(item[key])
          break
        case 'mobile':
          userInfo[USER_RELATIONS[key]] = item[key].toString()
          break
        case 'roles':
          userInfo[USER_RELATIONS[key]] = item[key].split(',')
          break
        default:
          userInfo[USER_RELATIONS[key]] = item[key]
      }
    })

    arr.push(userInfo)
  })
  return arr
}
</script>
