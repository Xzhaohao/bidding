<template>
  <div>
    <el-card class="head-action">
      <div class="head-action-left">
        <div>
          <span>{{ $t('competency.company') }}：</span>
          <el-input :placeholder="$t('competency.company')"/>
        </div>

        <div>
          <span>预审状态：</span>
          <el-select placeholder="预审状态">
            <el-option label="待审核" value="0"/>
            <el-option label="审核通过" value="1"/>
            <el-option label="审核拒绝" value="2"/>
          </el-select>
        </div>

        <div>
          <el-button type="primary">查询</el-button>
          <el-button>清空</el-button>
        </div>
      </div>
    </el-card>

    <el-card>
      <el-table :data="competencyList" border style="width: 100%">
        <el-table-column type="index" :label="$t('role.index')" width="60" align="center"/>
        <el-table-column prop="company" :label="$t('competency.company')" align="center"/>
        <el-table-column prop="type" :label="$t('competency.type')" align="center"/>
        <el-table-column prop="num" :label="$t('competency.num')" align="center"/>
        <el-table-column :label="$t('competency.businessLicence')" align="center" #default="{ row }" width="100">
          <el-image class="news-image" :src='row.businessLicence' :preview-src-list='[row.businessLicence]'/>
        </el-table-column>
        <el-table-column prop="creditPoints" :label="$t('competency.creditPoints')" align="center"/>
        <el-table-column prop="money" :label="$t('competency.money')" align="center"/>
        <el-table-column prop="state" :label="$t('competency.state')" align="center"/>
        <el-table-column :label="$t('role.action')" width="200" align="center">
          <el-button link size="small" type="primary">{{ $t('competency.approval') }}</el-button>
          <el-button link size="small" type="primary">{{ $t('competency.setAllow') }}</el-button>
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
import { competencyList } from '@/test/competencyList'
</script>

<style scoped lang="scss">
@import "@/styles/head-action.scss";
</style>
