<template>
  <div>
    <div class='logo-container'>
      <el-avatar
        :size='logoHeight'
        shape='square'
        src='https://kuro-campus.oss-cn-shenzhen.aliyuncs.com/random-avatar/13.jpg' />
      <h1 class='logo-title' v-if='$store.getters.sidebarOpened'>Vue3-NLGC</h1>
    </div>

    <el-scrollbar>
      <sidebar-menu />
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu'

// logo高度
const logoHeight = 44
</script>

<style lang='scss' scoped>
.logo-container {
  height: v-bind(logoHeight) + 'px';
  padding: 10px 0 22px 0;
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

  .el-avatar {
    --el-avatar-background-color: none;
  }
}
</style>
