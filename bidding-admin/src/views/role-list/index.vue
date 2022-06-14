<template>
  <el-card>
    <el-table :data="allRoles" border style="width: 100%">
      <el-table-column type="index" :label="$t('role.index')" width="60" align="center"/>
      <el-table-column prop="roleName" :label="$t('role.name')" align="center"/>
      <el-table-column prop="description" :label="$t('role.desc')" align="center"/>
      <el-table-column prop="roleCode" :label="$t('role.roleCode')" align="center"/>
      <el-table-column prop="createTime" :label="$t('role.createTime')" align="center"/>
      <el-table-column :label="$t('role.status')" #default="{ row }" width="120" align="center">
        <tag-status :status="row.status"/>
      </el-table-column>
      <el-table-column :label="$t('role.action')" width="200" align="center">
        <el-button type="primary">{{ $t('role.assignPermissions') }}</el-button>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { fetchRoleListApi } from '@/api/auth'
import { watchSwitchLang } from '@/utils/i18n'
import TagStatus from '@/components/tag-status'

const allRoles: any = ref([])
const getRoleList = async () => {
  allRoles.value = await fetchRoleListApi()
}

getRoleList()
watchSwitchLang(getRoleList)
</script>

<style lang="scss" scoped>
:deep(.el-tag) {
  border-color: transparent;
}
</style>
