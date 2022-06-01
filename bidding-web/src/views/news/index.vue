<template>
  <com-header/>

  <div class="news-container">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>新闻资讯</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

  <com-footer/>
</template>

<script setup lang="ts">
import ComHeader from '@/components/header/index.vue'
import ComFooter from '../../components/footer/'
import { ArrowRight } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
@import "index";
</style>