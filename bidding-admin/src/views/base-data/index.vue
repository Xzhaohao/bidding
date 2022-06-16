<template>
  <div>
    <el-card class="head-action">
      <el-button type="success" :icon="Plus">{{ $t('dataDownload.add') }}</el-button>
    </el-card>

    <el-card>
      <el-table :data="dataDownload" border style="width: 100%">
        <el-table-column type="index" :label="$t('role.index')" width="60" align="center"/>
        <el-table-column prop="fileName" :label="$t('dataDownload.fileName')" align="center"/>
        <el-table-column prop="fileSize" :label="$t('dataDownload.fileSize')" align="center"/>
        <el-table-column prop="fileType" :label="$t('dataDownload.fileType')" align="center"/>
        <el-table-column prop="fileDesc" :label="$t('dataDownload.fileDesc')" align="center"/>
        <el-table-column prop="createTime" :label="$t('role.createTime')" align="center"/>
        <el-table-column :label="$t('role.action')" width="200" align="center">
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
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import Pagination from '@/components/Pagination/index.vue'

const dataDownload = ref([
  { fileName: '投标说明书', fileSize: 18264, fileType: 'PDF', fileDesc: '投标说明', createTime: '2022-06-01' }
])
</script>

<style scoped lang="scss">
@import "@/styles/head-action.scss";
</style>
