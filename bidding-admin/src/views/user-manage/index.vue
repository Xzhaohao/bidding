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

    <!-- 分配角色 对话框 -->
    <roles-dialog v-model='roleDialogVisible' :role='selectUserRole' />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onActivated } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { gender } from '@/utils/dict'
import { watchSwitchLang } from '@/utils/i18n'
import { deleteUserApi } from '@/api/user'
import { ElMessage, ElMessageBox } from 'element-plus'
import TagStatus from '@/components/tag-status'
import RolesDialog from './components/Roles.vue'

import {
  loading,
  tableData,
  page,
  limit,
  total,
  fetchUserList,
  handleCurrentChange,
  handleSizeChange
} from '@/views/user-manage/useFetchUserData'

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

// excel 导入按钮点击事件
const router = useRouter()
const onImportExcel = () => {
  router.push('/sys/import')
}

// 导出相关
const exportToExcelVisible = ref(false)
const onExportExcel = () => {
  exportToExcelVisible.value = true
}

// 删除员工
const i18n = useI18n()
const onRemoveClicked = (row: any) => {
  ElMessageBox.confirm(
    i18n.t('excel.dialogTitle1') + row.name + i18n.t('excel.dialogTitle2'),
    { type: 'warning' }
  ).then(async () => {
    await deleteUserApi(row.id)
    ElMessage.success(i18n.t('excel.removeSuccess'))
    fetchUserList()
  })
}
</script>

<style lang="scss" scoped>
@import "index";
</style>
