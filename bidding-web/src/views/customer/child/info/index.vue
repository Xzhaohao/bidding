<template>
  <el-card>
    <el-row>
      <el-col :span="8">用户名：<span>星铭科技</span></el-col>
      <el-col :span="8">姓名：<span>许星铭</span></el-col>
      <el-col :span="8">性别：<span>男</span></el-col>
    </el-row>
    <el-row>
      <el-col :span="8">手机号：<span>13355655555</span></el-col>
      <el-col :span="8">邮箱：<span>13355655555@163.com</span></el-col>
      <el-col :span="8">注册时间：<span>2022-05-31</span></el-col>
    </el-row>

    <el-button type="primary">编辑信息</el-button>
    <el-button type="warning">修改密码</el-button>
  </el-card>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.el-card {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
}

.el-row {
  margin-bottom: 15px;

  span {
    color: $grayDark;
  }
}
</style>
