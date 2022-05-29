<script setup lang="ts">
import { ref, getCurrentInstance, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import ComHeader from '@/components/header/index.vue'
import ComFooter from '@/components/footer/index.vue'

const { proxy }: any = getCurrentInstance()
const locale = ref(zhCn)
const changeLang = (language: any) => {
  locale.value = language
  proxy.$i18n.locale = language.name
}

const route = useRoute()

onMounted(() => {
  document.body.style.setProperty('--el-color-primary', '#9b63ee');
  document.body.style.setProperty('--el-menu-active-color', '#9b63ee');
})
</script>

<template>
  <el-config-provider :locale="locale">
    <com-header v-show="!route.fullPath.includes('login')" @changeLang="changeLang"/>
    <div class="app-container">
      <router-view/>
    </div>
    <com-footer v-show="!route.fullPath.includes('login')"/>
  </el-config-provider>
</template>

<style lang="scss">
body,
html,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  position: relative;
}

.app-container {
  min-height: calc(100vh - 200px);
}
</style>
