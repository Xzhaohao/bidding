<template>
  <el-radio-group v-model="defaultLabel" size="default" @change="radioChange">
    <el-radio-button :label="item" v-for="(item, i) in list" :key="i" />
  </el-radio-group>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineProps({
  list: {
    type: Array,
    default: () => []
  },
  defaultLabel: {
    type: String,
    default: ''
  },
  onChange: {
    type: Function
  }
})

const emit = defineEmits<{(e: 'onChange', label: any): void }>()

const radioChange = (label: any) => {
  emit('onChange', label)
}
</script>

<style scoped lang="scss">
:deep(.el-radio-button) {
  margin-right: 20px;
}
:deep(.el-radio-button__inner) {
  border: unset !important;
  border-radius: $baseRadius !important;
  font-size: 14px;
  font-weight: 400;
}
</style>
