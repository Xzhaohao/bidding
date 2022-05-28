<template>
  <header>
    <div class="head-container">
      <span>欢迎来到招投标服务平台</span>

      <div class="head-right">
        <el-link type="primary">登陆</el-link>
        <el-divider direction="vertical" />
        <el-link type="primary">免费注册</el-link>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
header {
  background-color: $bgGray;
  height: 40px;

  .head-container {
    width: $g_width;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>