<template>
  <div>
    <el-card class="head-action">
      <div class="head-action-left">
        <div>
          <span>产品名称：</span>
          <el-input placeholder="采购项目名称"/>
        </div>

        <div>
          <span>审核状态：</span>
          <el-select placeholder="审核状态">
            <el-option label="待审核" value="0"/>
            <el-option label="已通过" value="1"/>
            <el-option label="未通过" value="2"/>
          </el-select>
        </div>

        <div>
          <span>产品类型：</span>
          <el-select placeholder="产品类型">
            <el-option label="软件类（成品）" value="0"/>
            <el-option label="软件类（定制开发）" value="0"/>
            <el-option label="硬件类" value="1"/>
            <el-option label="服务类" value="2"/>
            <el-option label="集成类" value="2"/>
          </el-select>
        </div>

        <div>
          <span>时间范围：</span>
          <el-date-picker
            type="daterange"
            range-separator="至"
            start-placeholder="发布日期"
            end-placeholder="截止日期"
          />
        </div>

        <div>
          <el-button type="primary">查询</el-button>
          <el-button>清空</el-button>
        </div>
      </div>

      <el-button type="success">发布采购需求</el-button>
    </el-card>

    <el-card>
      <el-table :data="purchaseList" border style="width: 100%">
        <el-table-column prop="no" :label="$t('purchase.no')" width="120" align="center"/>
        <el-table-column prop="projectName" :label="$t('deposit.projectName')" align="center"/>
        <el-table-column prop="proType" :label="$t('purchase.proType')" align="center" width="140"/>
        <el-table-column prop="num" :label="$t('purchase.num')" align="center" width="140"/>
        <el-table-column prop="maxPrice" :label="$t('purchase.maxPrice')" align="center" width="120"/>
        <el-table-column prop="publishTime" :label="$t('purchase.publishTime')" align="center" width="140"/>
        <el-table-column prop="endTime" :label="$t('purchase.endTime')" align="center" width="140"/>
        <el-table-column prop="status" :label="$t('purchase.status')" align="center" width="120"/>
        <el-table-column prop="verify" :label="$t('purchase.verify')" align="center" width="120"/>
        <el-table-column :label="$t('role.action')" width="300" align="center">
          <el-button link size="small" type="primary">{{ $t('purchase.scoreSet') }}</el-button>
          <el-button link size="small" type="primary">{{ $t('purchase.put') }}</el-button>
          <el-button link size="small" type="primary">{{ $t('policy.detail') }}</el-button>
          <el-button link size="small" type="primary">{{ $t('policy.modify') }}</el-button>
          <el-button link size="small" type="primary">{{ $t('purchase.withdraw') }}</el-button>
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
import { purchaseList } from '@/test/purchaseList'
</script>

<style scoped lang="scss">
@import "@/styles/head-action.scss";
</style>
