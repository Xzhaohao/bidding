<template>
  <el-card>
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
import Pagination from '@/components/Pagination/index.vue'
</script>

<style scoped lang="scss">

</style>
