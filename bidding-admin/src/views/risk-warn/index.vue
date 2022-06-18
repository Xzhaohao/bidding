<template>
  <div>
    <el-card class="head-action">
      <div class="head-action-left">
        <div>
          <span>执行单号：</span>
          <el-input placeholder="执行单号"/>
        </div>

        <div>
          <span>合同号：</span>
          <el-input placeholder="合同号"/>
        </div>

        <div>
          <span>状态：</span>
          <el-select placeholder="状态">
            <el-option label="已处理" value="0"/>
            <el-option label="未处理" value="1"/>
          </el-select>
        </div>

        <div>
          <el-button type="primary">查询</el-button>
          <el-button>清空</el-button>
        </div>
      </div>
    </el-card>

    <el-card>
      <el-table :data="warnList" border stripe style="width: 100%">
        <el-table-column prop="executeNo" :label="$t('risk.executeNo')" align="center"/>
        <el-table-column prop="contractNo" :label="$t('risk.contractNo')" align="center"/>
        <el-table-column prop="riskType" label="风险类型" align="center"/>
        <el-table-column prop="description" label="风险提示描述" align="center"/>
        <el-table-column prop="reminded" label="被提醒人" align="center"/>
        <el-table-column prop="remindedMobile" label="被提醒人联系方式" align="center"/>
        <el-table-column prop="remindedTime" label="提醒日期" align="center"/>
        <el-table-column :label="$t('policy.status')" width="100" align="center">
          <el-tag style="border-color: transparent;" effect="dark" color="#ff5f9f">未处理</el-tag>
        </el-table-column>
        <el-table-column :label="$t('role.action')" width="100" align="center">
          <el-button link size="small" type="primary">处理</el-button>
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

<script setup>
import Pagination from '@/components/Pagination/index.vue'
import { warnList } from '@/test/warnList'
</script>

<style lang="scss" scoped>
@import "@/styles/head-action.scss";
</style>
