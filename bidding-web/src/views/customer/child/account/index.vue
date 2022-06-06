<template>
  <el-card>
    <div class="account-head">
      <el-button type="primary" size="large">新增子账户</el-button>
    </div>

    <el-table stripe>
      <el-table-column prop="name" label="用户名称"/>
      <el-table-column prop="type" label="用户账号" align="center"/>
      <el-table-column prop="num" label="手机号" align="center"/>
      <el-table-column prop="num" label="注册时间" align="center"/>
      <el-table-column prop="num" label="操作" align="center"/>
    </el-table>

    <section class="foot-pagination">
      <Pagination
          layout="total, prev, pager, next, jumper"
          :total="20"
          :to="280"
          :page:sync="1"
          :limit:sync="9"
          @pagination="() => {}"
      />
    </section>
  </el-card>
</template>

<script setup lang="ts">
import Pagination from '@/components/Pagination/index.vue'
</script>

<style scoped lang="scss">
.el-card {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
}

.account-head {
  text-align: right;
  margin-bottom: 30px;
}

.foot-pagination {
  display: flex;
  justify-content: center;
}
</style>
