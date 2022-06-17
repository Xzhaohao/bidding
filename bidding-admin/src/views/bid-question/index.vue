<template>
  <div>
    <el-card class="head-action">
      <div class="head-action-left">
        <div>
          <span>{{ $t('deposit.projectName') }}：</span>
          <el-input :placeholder="$t('deposit.projectName')"/>
        </div>

        <div>
          <span>是否已答复：</span>
          <el-select placeholder="是否已答复">
            <el-option label="否" value="0"/>
            <el-option label="是" value="1"/>
          </el-select>
        </div>

        <div>
          <el-button type="primary">查询</el-button>
          <el-button>清空</el-button>
        </div>
      </div>
    </el-card>

    <el-card>
      <el-table :data="questionList" border style="width: 100%">
        <el-table-column type="index" :label="$t('role.index')" width="60" align="center"/>
        <el-table-column prop="projectName" :label="$t('deposit.projectName')" align="center"/>
        <el-table-column prop="supplier" :label="$t('question.supplier')" align="center"/>
        <el-table-column prop="questioner" :label="$t('question.questioner')" align="center"/>
        <el-table-column :label="$t('question.isReply')" #default="{ row }" width="100" align="center">
          <tag-status :status="Number(row.isReply)" :state="2"/>
        </el-table-column>
        <el-table-column prop="createTime" :label="$t('role.createTime')" align="center" width="120"/>
        <el-table-column :label="$t('role.action')" width="120" align="center">
          <el-button size="small" link type="primary">{{ $t('policy.detail') }}</el-button>
          <el-button size="small" link type="primary">{{ $t('question.reply') }}</el-button>
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
import TagStatus from '@/components/tag-status'
import { questionList } from '@/test/questionList'
</script>

<style scoped lang="scss">
@import "@/styles/head-action.scss";
</style>
