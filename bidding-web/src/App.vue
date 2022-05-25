<script setup lang="ts">
import { ref } from 'vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import ja from 'element-plus/lib/locale/lang/ja'

const locale = ref(zhCn)
const changeLang = language => {
  locale.value = language
}
</script>

<template>
  <el-config-provider :locale="locale">
    <router-view/>
    <div>{{ $t('message.home') }}</div>
  </el-config-provider>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
