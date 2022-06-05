<template>
  <com-header/>

  <div class="customer-container">
    <el-container>
      <el-aside width="210px">
        <Sidebar class="sidebar-container"/>
      </el-aside>

      <el-main>
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item>账号设置</el-breadcrumb-item>
          <el-breadcrumb-item>基本信息</el-breadcrumb-item>
        </el-breadcrumb>

        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import ComHeader from '@/components/header/index.vue'
import Sidebar from './components/sidebar/index.vue'
import { ArrowRight } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
@import "index";
</style>
