<template>
  <div>
    <el-card class="head-action">
      <div class="head-action-left">
        <div>
          <span>项目名称：</span>
          <el-input placeholder="项目名称"/>
        </div>

        <div>
          <span>招标方式：</span>
          <el-select placeholder="招标方式">
            <el-option label="询比价" value="0"/>
            <el-option label="竞谈招标" value="1"/>
            <el-option label="邀请招标" value="2"/>
            <el-option label="公开招标" value="3"/>
          </el-select>
        </div>

        <div>
          <el-button type="primary">查询</el-button>
          <el-button>清空</el-button>
        </div>
      </div>
    </el-card>

    <el-card>
      <el-table :data="contractList" border style="width: 100%">
        <el-table-column prop="no" label="招标编号" align="center"/>
        <el-table-column prop="projectName" label="招标项目" align="center"/>
        <el-table-column prop="way" label="招标方式" align="center"/>
        <el-table-column prop="type" label="招标类型" align="center"/>
        <el-table-column prop="address" label="招标地点" align="center"/>
        <el-table-column prop="company" label="招标单位" align="center"/>
        <el-table-column prop="publishTime" label="发布时间" align="center"/>
        <el-table-column prop="endTime" label="截止时间" align="center"/>
        <el-table-column prop="noticeTime" label="中标公示时间" align="center"/>
        <el-table-column prop="contractNo" label="合同编号" align="center"/>
        <el-table-column prop="state" label="状态" align="center"/>
        <el-table-column :label="$t('role.action')" width="200" align="center">
          <el-button link size="small" type="primary">{{ $t('policy.detail') }}</el-button>
          <el-button link size="small" type="primary">填写合同信息</el-button>
          <el-button link size="small" type="primary">合同评审</el-button>
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
import { contractList } from '@/test/bidContract'
</script>

<style scoped lang="scss">
@import "@/styles/head-action.scss";
</style>
