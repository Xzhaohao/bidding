<template>
  <el-dialog
    :title="$t('excel.title')"
    :model-value="modelValue"
    @close="closed"
    width="30%"
  >
    <el-input v-model="excelName" :placeholder="$t('excel.placeholder')"/>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="closed">{{ $t('excel.close') }}</el-button>
        <el-button type="primary" @click="onConfirm" :loading="loading">{{ $t('excel.confirm') }}</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { watchSwitchLang } from '@/utils/i18n'
import { fetchUserListApi } from '@/api/user'
import { USER_RELATIONS } from '@/views/import/utils'
import { formatJson } from './useFormatJson'

defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const emits = defineEmits(['update:modelValue'])

const closed = () => {
  emits('update:modelValue', false)
}

// 导出的excel文件默认名
const i18n = useI18n()
let exportDefaultName = i18n.t('excel.defaultName')
const excelName = ref('')
excelName.value = exportDefaultName
watchSwitchLang(() => {
  exportDefaultName = i18n.t('excel.defaultName')
  excelName.value = exportDefaultName
})

// 确定导出
const loading = ref(false)
const onConfirm = async () => {
  loading.value = true
  const { rows }: any = await fetchUserListApi({})
  // 导入工具包
  const excel = await import('@/utils/export2Excel')
  console.log(rows)
  const data = formatJson(USER_RELATIONS, rows)
  excel.export_json_to_excel({
    // excel表头
    header: Object.keys(USER_RELATIONS),
    // excel数据,
    data,
    // 文件名称
    filename: excelName.value || exportDefaultName
  })
  closed()
}
</script>
