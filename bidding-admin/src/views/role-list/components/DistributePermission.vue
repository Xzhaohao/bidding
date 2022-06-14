<template>
  <el-dialog
    :model-value="modelValue"
    :title='$t("excel.roleDialogTitle")'
    @close='closed'
  >
    <el-tree
      ref="treeRef"
      :data="permissionList"
      :props="defaultProps"
      node-key="id"
      show-checkbox
      check-strictly
      default-expand-all
    />

    <template #footer>
      <div>
        <el-button @click="closed">{{ $t('universal.cancel') }}</el-button>
        <el-button type="primary" @click="onConfirm">{{ $t('universal.confirm') }}</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, PropType, ref, watch } from 'vue'
import { watchSwitchLang } from '@/utils/i18n'
import { ElMessage } from 'element-plus'
import { fetchPermissionListApi } from '@/api/auth'

const props = defineProps({
  modelValue: {
    type: Boolean as PropType<boolean>,
    required: true
  },
  roleId: {
    type: String as PropType<string>,
    required: true
  }
})

const emits = defineEmits(['update:modelValue'])

const closed = () => {
  emits('update:modelValue', false)
}

const onConfirm = async () => {
  ElMessage.error('权限不足！')
  closed()
}

// 获取所有权限
const permissionList: any = ref([])
const getPermissionList = async () => {
  permissionList.value = await fetchPermissionListApi()
}
getPermissionList()
watchSwitchLang(getPermissionList)

// 属性结构配置
const defaultProps = {
  children: 'children',
  label: 'permissionName'
}

const treeRef: any = ref(null)
// 当前角色的权限
const getRolePermission = async () => {
  // const checkedKeys = await fetchRolePermissionApi(props.roleId)
  // treeRef.value.setCheckedKeys(checkedKeys)
}
watch(() => props.roleId, value => {
  if (value) getRolePermission()
})
</script>
