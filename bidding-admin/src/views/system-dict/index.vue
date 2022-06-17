<template>
  <div>
    <el-card class="head-action">
      <div class="head-action-left">
        <div>
          <span>关键字：</span>
          <el-input placeholder="名称关键字"/>
        </div>

        <div>
          <span>状态：</span>
          <el-select placeholder="状态">
            <el-option label="正常" value="1"/>
            <el-option label="删除" value="2"/>
          </el-select>
        </div>

        <div>
          <el-button type="primary">查询</el-button>
          <el-button>清空</el-button>
        </div>
      </div>

      <div>
        <el-button type="danger" :icon="Delete">{{ $t('dict.bitchDelete') }}</el-button>
        <el-button type="success" :icon="Plus">{{ $t('policy.add') }}</el-button>
      </div>
    </el-card>

    <el-card>
      <el-table :data="dictList" border style="width: 100%">
        <el-table-column type="selection" width="55" />
        <el-table-column prop="name" :label="$t('dict.name')" align="center"/>
        <el-table-column prop="code" :label="$t('dict.code')" align="center"/>
        <el-table-column prop="num" :label="$t('dict.num')" align="center" width="100"/>
        <el-table-column prop="description" :label="$t('dict.description')" align="center"/>
        <el-table-column :label="$t('dict.status')" #default="{ row }" width="100" align="center">
          <tag-status :status="Number(row.status)" :state="1"/>
        </el-table-column>
        <el-table-column prop="createTime" :label="$t('role.createTime')" width="140" align="center"/>
        <el-table-column :label="$t('role.action')" width="200" align="center">
          <el-button link size="small" type="primary">{{ $t('policy.modify') }}</el-button>
          <el-button link size="small" type="primary">{{ $t('dataDownload.remove') }}</el-button>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { Plus, Delete } from '@element-plus/icons-vue'
import TagStatus from '@/components/tag-status'
import { dictList } from '@/test/dictList'
</script>

<style scoped lang="scss">
@import "@/styles/head-action.scss";
</style>
