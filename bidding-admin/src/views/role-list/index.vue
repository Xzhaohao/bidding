<template>
  <div>
    <el-card>
      <el-table :data="allRoles" border style="width: 100%">
        <el-table-column type="index" :label="$t('role.index')" width="120"/>
        <el-table-column type="roleName" :label="$t('role.name')"/>
        <el-table-column type="describe" :label="$t('role.desc')"/>
        <el-table-column :label="$t('role.action')" width="200">
          <el-button type="primary">{{ $t('role.assignPermissions') }}</el-button>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { fetchRoleListApi } from '@/api/auth'
import { watchSwitchLang } from '@/utils/i18n'

const allRoles: any = ref([])
const getRoleList = async () => {
  allRoles.value = await fetchRoleListApi()
}

getRoleList()
watchSwitchLang(getRoleList)
</script>

<style lang="scss" scoped>

</style>
