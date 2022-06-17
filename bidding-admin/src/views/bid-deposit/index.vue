<template>
  <div>
    <el-card class="head-action">
      <div class="head-action-left">
        <div>
          <span>{{ $t('deposit.projectName') }}：</span>
          <el-input :placeholder="$t('deposit.projectName')"/>
        </div>

        <div>
          <el-button type="primary">查询</el-button>
          <el-button>清空</el-button>
        </div>
      </div>
    </el-card>

    <el-card>
      <el-table :data="depositList" border style="width: 100%">
        <el-table-column type="index" :label="$t('role.index')" width="60" align="center"/>
        <el-table-column prop="projectName" :label="$t('deposit.projectName')" align="center"/>
        <el-table-column prop="method" :label="$t('deposit.method')" align="center" width="120"/>
        <el-table-column prop="company" :label="$t('deposit.company')" align="center"/>
        <el-table-column prop="bank" :label="$t('deposit.bank')" align="center"/>
        <el-table-column prop="bankAccount" :label="$t('deposit.bankAccount')" align="center"/>
        <el-table-column prop="amount" :label="$t('deposit.amount')" align="center" width="120"/>
        <el-table-column prop="applicant" :label="$t('deposit.applicant')" align="center" width="100"/>
        <el-table-column prop="payTime" :label="$t('deposit.payTime')" align="center" width="120"/>
        <el-table-column prop="refundmentTime" :label="$t('deposit.refundmentTime')" align="center" width="120"/>
        <el-table-column :label="$t('role.action')" width="100" align="center">
          <el-button size="small" type="danger">{{ $t('dataDownload.remove') }}</el-button>
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
import { depositList } from '@/test/depositList'
</script>

<style scoped lang="scss">
@import "@/styles/head-action.scss";
</style>
