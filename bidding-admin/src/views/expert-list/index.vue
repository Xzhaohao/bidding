<template>
  <div>
    <el-card class="head-action">
      <div class="head-action-left">
        <div>
          <span>姓名：</span>
          <el-input placeholder="姓名"/>
        </div>

        <div>
          <span>手机：</span>
          <el-input placeholder="手机"/>
        </div>

        <div>
          <span>入库：</span>
          <el-select placeholder="入库状态">
            <el-option label="已入库" value="0"/>
            <el-option label="已出库" value="1"/>
            <el-option label="待审核" value="2"/>
            <el-option label="审核不通过" value="3"/>
          </el-select>
        </div>

        <div>
          <span>冻结：</span>
          <el-select placeholder="冻结状态">
            <el-option label="已冻结" value="0"/>
            <el-option label="正常" value="1"/>
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
      <el-table :data="expertList" border style="width: 100%">
        <el-table-column type="index" :label="$t('role.index')" width="60" align="center"/>
        <el-table-column prop="name" :label="$t('expert.name')" align="center"/>
        <el-table-column prop="mobile" :label="$t('expert.mobile')" align="center" width="140"/>
        <el-table-column prop="status" :label="$t('expert.status')" width="100" align="center"/>
        <el-table-column :label="$t('expert.enabled')" #default="{ row }" width="100" align="center">
          <tag-status :status="Number(row.enabled)" :state="2"/>
        </el-table-column>
        <el-table-column prop="createTime" :label="$t('role.createTime')" width="140" align="center"/>
        <el-table-column :label="$t('role.action')" width="280" align="center">
          <el-button link size="small" type="primary">{{ $t('policy.detail') }}</el-button>
          <el-button link size="small" type="primary">{{ $t('policy.modify') }}</el-button>
          <el-button link size="small" type="primary">{{ $t('expert.out') }}</el-button>
          <el-button link size="small" type="primary">{{ $t('expert.reIn') }}</el-button>
          <el-button link size="small" type="primary">{{ $t('expert.verify') }}</el-button>
          <el-button link size="small" type="primary">{{ $t('dataDownload.remove') }}</el-button>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <Pagination
        layout="total, sizes, prev, pager, next, jumper"
        :total="20"
        :page="1"
        :limit="10"
        @pagination="() => {}"
      />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import TagStatus from '@/components/tag-status'
import Pagination from '@/components/Pagination/index.vue'

const expertList = ref([
  { name: '王叫兽', mobile: '13555555555', status: 1, enabled: false, createTime: '2022-06-01' }
])
</script>

<style scoped lang="scss">
@import "@/styles/head-action.scss";
</style>
