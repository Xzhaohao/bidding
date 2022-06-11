<script setup lang="ts">
import { onMounted } from 'vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

onMounted(() => {
  document.body.style.setProperty('--el-color-primary', '#9b63ee')
  document.body.style.setProperty('--el-menu-active-color', '#9b63ee')
  document.body.style.setProperty('--el-color-primary-light-3', '#c68bf9')
  document.body.style.setProperty('--el-color-primary-light-5', '#c68bf9')
  document.body.style.setProperty('--el-box-shadow-light', '0 0 40px rgb(0 0 0 / 20%)')
})
</script>

<template>
  <el-config-provider :locale="zhCn">
    <router-view/>
  </el-config-provider>
</template>

<style lang="scss">
body,
html,
#app {
  margin: 0;
  padding: 0;
  min-width: 100%;
  min-height: 100%;
}

#app {
  position: relative;
}
</style>
