<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import MHeader from '@/components/header/index.vue'

const { proxy }: any = getCurrentInstance()
const locale = ref(zhCn)
const changeLang = (language: any) => {
  locale.value = language
  proxy.$i18n.locale = language.name
}
</script>

<template>
  <el-config-provider :locale="locale">
    <m-header @changeLang="changeLang"/>
    <router-view/>
  </el-config-provider>
</template>

<style lang="scss">
body,
html,
#app,
p {
  margin: 0;
  padding: 0;
}
</style>
