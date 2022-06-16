<template>
  <el-card>
    <el-table :data="adviseData" border style="width: 100%">
      <el-table-column type="index" :label="$t('role.index')" width="60" align="center"/>
      <el-table-column prop="title" :label="$t('policy.title')" align="center"/>
      <el-table-column prop="company" :label="$t('advise.company')" align="center"/>
      <el-table-column prop="createTime" :label="$t('role.createTime')" width="120" align="center"/>
      <el-table-column :label="$t('role.action')" width="140" align="center">
        <el-button link size="small" type="primary">{{ $t('advise.detail') }}</el-button>
        <el-button link size="small" type="primary">{{ $t('dataDownload.remove') }}</el-button>
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
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Pagination from '@/components/Pagination/index.vue'

const adviseData = ref([
  { title: '建议把首页改一下', company: '星星信息科技有限公司', createTime: '2022-06-01' }
])
</script>

<style scoped lang="scss">

</style>
