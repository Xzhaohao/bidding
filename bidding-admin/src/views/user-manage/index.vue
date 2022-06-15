<template>
  <div class="user-manage-container">
    <el-card class="header">
      <div>
        <el-button @click="onImportExcel" type="primary">{{ $t('excel.importExcel') }}</el-button>
        <el-button @click="onExportExcel" type="success">{{ $t('excel.exportExcel') }}</el-button>
      </div>
    </el-card>

    <el-card>
      <el-table
        v-loading="loading"
        :element-loading-text="$t('excel.loading')"
        :data="tableData" border style='width: 100%'
      >
        <!-- 序号 -->
        <el-table-column label="#" type="index" align="center"/>
        <!-- 姓名 -->
        <el-table-column prop="name" :label="$t('excel.name')" align="center"/>
        <!-- 性别 -->
        <el-table-column :label="$t('excel.gender')" align="center" #default="{ row }" width="80">
          {{ gender(row.gender) }}
        </el-table-column>
        <!-- 手机号 -->
        <el-table-column prop="mobile" :label="$t('excel.mobile')" align="center" width="130"/>
        <!-- 头像 -->
        <el-table-column :label="$t('excel.avatar')" align="center" #default="{ row }">
          <el-image class="avatar" :src='row.avatar' :preview-src-list='[row.avatar]'/>
        </el-table-column>
        <!-- 角色 -->
        <el-table-column :label="$t('excel.role')" #default="{ row }">
          <div v-if="row['roles'] && row['roles'].length > 0">
            <el-tag v-for="role in row['roles']" :key="role.id" size="small">
              {{ role['roleName'] }}
            </el-tag>
          </div>
          <div v-else>
            <el-tag size="small">{{ $t('excel.defaultRole') }}</el-tag>
          </div>
        </el-table-column>
        <!-- 时间 -->
        <el-table-column prop="createTime" :label="$t('excel.openTime')" align="center" width="120"/>
        <!-- 状态 -->
        <el-table-column :label="$t('role.status')" #default="{ row }" width="80" align="center">
          <tag-status :status="row.status"/>
        </el-table-column>
        <!-- 操作 -->
        <el-table-column :label="$t('excel.action')" fixed="right" width="230" align="center" #default="{ row }">
          <el-button type="primary" size="small">{{ $t('excel.show') }}</el-button>
          <el-button @click="onShowRole(row)" type="info" size="small">{{ $t('excel.showRole') }}</el-button>
          <el-button @click="onRemoveClicked(row)" type="danger" size="small">{{ $t('excel.remove') }}</el-button>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
        @size-change='handleSizeChange'
        @current-change='handleCurrentChange'
        v-model:currentPage="page"
        v-model:page-size="limit"
        :total="total"
        :page-sizes="[5, 8, 10, 20]"
        small
        layout="total, sizes, prev, pager, next, jumper"
      />
    </el-card>

    <!-- 导出excel 对话框 -->
    <export-excel v-model='exportToExcelVisible'/>
    <!-- 分配角色 对话框 -->
    <roles-dialog v-model='roleDialogVisible' :role='selectUserRole'/>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onActivated } from 'vue'
import { gender } from '@/utils/dict'
import { watchSwitchLang } from '@/utils/i18n'
import TagStatus from '@/components/tag-status'
import RolesDialog from './components/Roles.vue'
import ExportExcel from './components/ExportExcel.vue'

import {
  loading,
  tableData,
  page,
  limit,
  total,
  fetchUserList,
  handleCurrentChange,
  handleSizeChange
} from './useFetchUserData'

// 删除员工
import { onRemoveClicked } from './useDeleteUser'
// 导入导出员工
import { exportToExcelVisible, onImportExcel, onExportExcel } from './useExportImport'

fetchUserList()
watchSwitchLang(fetchUserList)
onActivated(fetchUserList)

// 分配角色
const selectUserRole = ref([])
const roleDialogVisible = ref(false)
const onShowRole = (row: any) => {
  roleDialogVisible.value = true
  selectUserRole.value = row.roles
}

// 每次打开dialog都可以重新获取数据
watch(roleDialogVisible, val => {
  if (!val) selectUserRole.value = []
})
</script>

<style lang="scss" scoped>
@import "index";
</style>
