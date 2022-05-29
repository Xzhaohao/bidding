<template>
  <header>
    <router-link to="/">
      <img src="@/assets/hd_logo.png" alt="logo" class="logo">
    </router-link>

    <el-menu :default-active="activeIndex" mode="horizontal">
      <el-menu-item index="langChange" @click="changeLangMenuClick">{{ $t('header.lang') }}</el-menu-item>
      <el-menu-item index="purchaseAnnouncement">{{ $t('header.pAnnouncement') }}</el-menu-item>
      <el-menu-item index="purchaseRequirement">{{ $t('header.pRequirement') }}</el-menu-item>
      <el-menu-item index="concludedTransactions">{{ $t('header.cTransactions') }}</el-menu-item>
      <el-menu-item index="policies">{{ $t('header.policies') }}</el-menu-item>
      <el-menu-item index="newsInformation">{{ $t('header.news') }}</el-menu-item>
      <el-menu-item index="help">{{ $t('header.help') }}</el-menu-item>
      <el-menu-item index="register">{{ $t('header.register') }}</el-menu-item>
      <el-menu-item index="login">{{ $t('header.login') }}</el-menu-item>
      <el-menu-item index="company">星海科技</el-menu-item>
    </el-menu>

    <el-dialog v-model="langChangeVisible" width="50%">
      <template #header>
        <h2 class="choose-lang-title">选择语言和区域</h2>
      </template>
      <div class="choose-lang-container">
        <ul class="lang-list">
          <li
              class="lang-list-item"
              :class="{'choose-lang-active': item.type === 'zh'}"
              v-for="item in langArr"
              :key="item.name"
              @click="langItemClicked(item.type)"
          >
            <div class="lang-name">{{ item.name }}</div>
            <div class="lang-country">{{ item.country }}</div>
          </li>
        </ul>
      </div>
    </el-dialog>
  </header>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import { langArr } from '../../constant/lang-list'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import ja from 'element-plus/lib/locale/lang/ja'

const activeIndex = ref('1')
const langChangeVisible = ref(false)

const emit = defineEmits<{
  (e: 'changeLang', language: any): void
}>()

// 点击切换语言菜单触发的事件
function changeLangMenuClick() {
  langChangeVisible.value = true
}

// 具体的语言项被点击时触发的事件
function langItemClicked(type: string) {
  if (type === 'zh' || type === 'zh1') {
    emit('changeLang', zhCn)
  } else if (type === 'en') {
    emit('changeLang', en)
  } else if (type === 'ja') {
    emit('changeLang', ja)
  }
  langChangeVisible.value = false
}
</script>

<style scoped lang="scss">
@import "index.scss";
</style>

<style>
header .el-dialog__body {
  padding-left: 0;
  padding-right: 0;
}

header .el-dialog {
  border-radius: 8px;
}

header .el-dialog__header {
  height: 40px;
}
</style>