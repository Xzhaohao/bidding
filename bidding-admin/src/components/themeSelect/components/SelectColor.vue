<template>
  <el-dialog title='提示' :model-value='modelValue' @close='closed' width='22%'>
    <div class='content'>
      <p>{{$t('theme.themeColorChange')}}</p>
      <el-color-picker v-model='mColor' :predefine='predefineColors' />
    </div>
    <template #footer>
      <el-button @click='closed'>{{ $t('universal.cancel') }}</el-button>
      <el-button type='primary' @click='confirm'>{{ $t('universal.confirm') }}</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'
import { useStore } from 'vuex'
import { generateNewStyle, writeNewStyle } from '@/utils/theme'

defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const emits = defineEmits(['update:modelValue'])

// 关闭对话框
const closed = () => {
  emits('update:modelValue', false)
}

const store = useStore()

// 默认色值
const mColor = ref(store.getters.mainColor)

// 确定修改主题色
const confirm = async () => {
  const newStyle = await generateNewStyle(mColor.value)
  writeNewStyle(newStyle)
  store.commit('theme/setMainColor', mColor.value)
  closed()
}

// 预定义色值
const predefineColors = [
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#00a4ff',
  '#c71585',
  '#ff9999',
  '#c7158577',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)'
]
</script>

<style lang='scss' scoped>
.content {
  text-align: center;

  .title {
    margin-bottom: 12px;
  }
}
</style>
