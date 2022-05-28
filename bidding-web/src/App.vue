<script setup lang="ts">
import { ref } from 'vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import ja from 'element-plus/lib/locale/lang/ja'

const locale = ref(zhCn)
const changeLang = (language: any) => {
  locale.value = language
}
</script>

<template>
  <el-config-provider :locale="locale">
    <router-view/>
  </el-config-provider>
</template>

<style lang="scss">
body {
  margin: 0 !important;
}
</style>
