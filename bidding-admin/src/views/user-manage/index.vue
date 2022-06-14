<template>
  <div class="user-manage-container">
    <el-card class="header">
      <div>
        <el-button type="primary">{{ $t('excel.importExcel') }}</el-button>
        <el-button type="success">{{ $t('excel.exportExcel') }}</el-button>
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
        <el-table-column :label="$t('excel.action')" fixed="right" width="230" align="center">
          <el-button type="primary" size="small">{{ $t('excel.show') }}</el-button>
          <el-button type="info" size="small">{{ $t('excel.showRole') }}</el-button>
          <el-button type="danger" size="small">{{ $t('excel.remove') }}</el-button>
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
  </div>
</template>

<script lang="ts" setup>
import { gender } from '@/utils/dict'
import TagStatus from '@/components/tag-status'

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
</script>

<style lang="scss" scoped>
@import "index";
</style>
