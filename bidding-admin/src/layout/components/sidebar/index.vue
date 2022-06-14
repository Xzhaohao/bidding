<template>
  <div>
    <div class="logo-container">
      <img src="@/assets/logo.png" alt="logo" class="logo">
      <h1 class="logo-title" v-if="$store.getters.sidebarOpened">招标采购管理</h1>
    </div>

    <el-scrollbar>
      <sidebar-menu />
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import SidebarMenu from './SidebarMenu.vue'

// logo高度
const logoHeight = 44
</script>

<style lang="scss" scoped>
.logo-container {
  height: v-bind(logoHeight) + 'px';
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }

  .logo {
    width: 40px;
    height: 40px;
    border-radius: 3px;
  }
}
</style>
