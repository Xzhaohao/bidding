<template>
  <el-card>
    <el-table :data="allPermission" style="width: 100%;" border row-key="id" default-expand-all>
      <el-table-column prop="permissionName" :label="$t('permission.name')" width="180px"/>
    </el-table>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { fetchPermissionListApi } from '@/api/auth'
import { watchSwitchLang } from '@/utils/i18n'

const allPermission: any = ref([])
const getPermissionList = async () => {
  allPermission.value = await fetchPermissionListApi()
}

getPermissionList()
watchSwitchLang(getPermissionList)
</script>

<style lang="scss" scoped></style>
