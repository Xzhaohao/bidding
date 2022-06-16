<template>
  <div>
    <el-card class="head-action">
      <div class="head-action-left">
        <div>
          <span>标题内容：</span>
          <el-input placeholder="标题内容"/>
        </div>

        <div>
          <span>状态：</span>
          <el-select placeholder="状态">
            <el-option label="审核中" value="0"/>
            <el-option label="发布" value="1"/>
            <el-option label="撤销" value="2"/>
            <el-option label="删除" value="3"/>
          </el-select>
        </div>

        <div>
          <el-button type="primary">查询</el-button>
          <el-button>清空</el-button>
        </div>
      </div>

      <el-button type="success" :icon="Plus">{{ $t('policy.add') }}</el-button>
    </el-card>

    <el-card>
      <el-table :data="policyData" border style="width: 100%">
        <el-table-column type="index" :label="$t('role.index')" width="60" align="center"/>
        <el-table-column prop="title" :label="$t('policy.title')" align="center"/>
        <el-table-column :label="$t('policy.top')" #default="{ row }" width="100" align="center">
          <tag-status :status="Number(row.top)" :state="2"/>
        </el-table-column>
        <el-table-column prop="sort" :label="$t('policy.sort')" align="center" width="80"/>
        <el-table-column #default="{ row }" :label="$t('policy.status')" align="center" width="80">
          {{ articleStatus(row.status) }}
        </el-table-column>
        <el-table-column prop="publishTime" :label="$t('policy.publishTime')" width="140" align="center"/>
        <el-table-column prop="createTime" :label="$t('role.createTime')" width="140" align="center"/>
        <el-table-column :label="$t('role.action')" width="200" align="center" #default="{ row }">
          <el-button link size="small" type="primary">{{ $t('policy.detail') }}</el-button>
          <el-button link size="small" type="primary">{{ $t('policy.modify') }}</el-button>
          <el-button link size="small" type="primary" v-if="row.status === 1">{{ $t('policy.rescind') }}</el-button>
          <el-button link size="small" type="primary" v-if="row.status === 2">{{ $t('policy.publish') }}</el-button>
          <el-button link size="small" type="primary">{{ $t('dataDownload.remove') }}</el-button>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <Pagination
        layout="total, sizes, prev, pager, next, jumper"
        :total="20"
        :page="page"
        :limit="limit"
        @pagination="() => {}"
      />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { articleStatus } from '@/utils/dict'
import { Plus } from '@element-plus/icons-vue'
import TagStatus from '@/components/tag-status'
import Pagination from '@/components/Pagination/index.vue'

const page = ref(1)
const limit = ref(10)

const policyData = ref([
  {
    title: '中华人民共和国财政部令第102号《政府购买服务管理办法》',
    top: false,
    sort: 1,
    status: 2,
    publishTime: '2022-06-01',
    createTime: '2022-06-01'
  }
])
</script>

<style scoped lang="scss">
@import "@/styles/head-action.scss";
</style>
