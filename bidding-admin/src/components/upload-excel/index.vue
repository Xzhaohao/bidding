<template>
  <div class="upload-excel">
    <div class="btn-upload">
      <el-button :loading="loading" type="primary" @click="uploadBtnClick">
        {{ $t('uploadExcel.upload') }}
      </el-button>
    </div>

    <!-- excel上传 -->
    <input
      ref="excelUploadInput"
      type="file"
      class="excel-upload-input"
      accept=".xlsx, .xls"
      @change="handleChange"
    />

    <!-- 拖拽 -->
    <div
      class="drop"
      @drop.stop.prevent="handleDrop"
      @dragover.stop.prevent="handleDragover"
      @dragenter.stop.prevent="handleDragover"
    >
      <el-icon>
        <UploadFilled/>
      </el-icon>
      <span>{{ $t('uploadExcel.drop') }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'
import { getHeaderRow, isExcel } from './util'
import { ElMessage } from 'element-plus'

const XLSX = require('xlsx')

const props = defineProps({
  // 上传之前的回调
  beforeUpload: Function,
  // 上传成功之后的回调
  onSuccess: Function
})

const loading = ref(false)
const excelUploadInput: any = ref(null)

// 点击上传按钮，触发隐藏域的点击事件
const uploadBtnClick = () => {
  excelUploadInput.value.click()
}

const handleChange = (e: any) => {
  const files = e.target.files
  const rawFile = files[0]
  if (!rawFile) return
  upload(rawFile)
}

// 拖拽上传
const handleDrop = (e: any) => {
  // 上传中
  if (loading.value) return
  const files = e.dataTransfer.files
  if (files.length !== 1) {
    return ElMessage.error('必须要有一个文件')
  }
  const rawFile = files[0]
  if (!isExcel(rawFile)) {
    return ElMessage.error('文件必须是.xlsx或.xls或.csv格式')
  }
  upload(rawFile)
}

const handleDragover = (e: any) => {
  e.dataTransfer.dropEffect = 'copy'
}

// 触发上传事件
const upload = (rawFile: any) => {
  excelUploadInput.value.value = null
  // 如果用户没有指定上传前回调
  if (!props.beforeUpload) {
    readerData(rawFile)
    return
  }
  // 如果用户指定了上传前的回调，那么只有返回 true的时候，才会执行后续的操作
  const before = props.beforeUpload(rawFile)
  if (before) {
    readerData(rawFile)
  }
}

// 解析 excel数据（异步）
const readerData = (rawFile: any) => {
  loading.value = true
  return new Promise<void>((resolve, reject) => {
    const reader = new FileReader()
    // 读取操作完成时触发
    reader.onload = (e: any) => {
      // 获取到解析后的数据
      const data = e.target.result
      // 利用 XLSX 对数据进行解析
      const workbook = XLSX.read(data, { type: 'array' })
      // 获取第一张表格(工作簿)名称
      const firstSheetName = workbook.SheetNames[0]
      // 读取 sheet 的数据
      const workSheet = workbook.Sheets[firstSheetName]
      // 解析数据表头
      const header = getHeaderRow(workSheet)
      // 解析数据体
      const results = XLSX.utils.sheet_to_json(workSheet)
      // 传入解析之后的数据
      generateData({
        header,
        results
      })

      loading.value = false
      resolve()
    }
    reader.readAsArrayBuffer(rawFile)
  })
}

// 根据导入内容，生成数据
const generateData = (excelData: { header: string[]; results: any }) => {
  props.onSuccess && props.onSuccess(excelData)
}
</script>

<style lang="scss" scoped>
@import "index";
</style>
