<template>
  <div>
    <el-card class="head-action">
      <div class="head-action-left">
        <div>
          <span>项目名称：</span>
          <el-input placeholder="项目名称"/>
        </div>

        <div>
          <span>项目类型：</span>
          <el-select placeholder="项目类型">
            <el-option label="项目采购" value="1"/>
            <el-option label="设备维护" value="2"/>
          </el-select>
        </div>

        <div>
          <el-button type="primary">查询</el-button>
          <el-button>清空</el-button>
        </div>
      </div>
    </el-card>

    <el-card>
      <el-table :data="gradeList" border style="width: 100%">
        <el-table-column type="index" :label="$t('role.index')" width="60" align="center"/>
        <el-table-column prop="projectName" :label="$t('deposit.projectName')" align="center"/>
        <el-table-column prop="projectType" label="项目类型" align="center"/>
        <el-table-column prop="score" label="评分总分" align="center"/>
        <el-table-column :label="$t('role.action')" width="200" align="center">
          <el-button link size="small" type="primary">新增</el-button>
          <el-button link size="small" type="primary">{{ $t('policy.modify') }}</el-button>
          <el-button link size="small" type="primary">查看</el-button>
          <el-button link size="small" type="primary">删除</el-button>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <Pagination
        layout="total, sizes, prev, pager, next, jumper"
        :total="20"
        :page="1"
        :limit="10"
      />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import Pagination from '@/components/Pagination/index.vue'
import { gradeList } from '@/test/gradeList'
</script>

<style scoped lang="scss">
@import "@/styles/head-action.scss";
</style>
