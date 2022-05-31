<template>
  <header>
    <router-link to="/">
      <img :src="logo" alt="logo" class="logo" :style="logoStyle">
    </router-link>

    <el-menu :default-active="activeIndex" mode="horizontal" :class="{'menu-dark-bg': menuDark}">
      <el-menu-item index="langChange" @click="changeLangMenuClick">{{ $t('header.lang') }}</el-menu-item>
      <el-menu-item index="purchaseAnnouncement">{{ $t('header.pAnnouncement') }}</el-menu-item>
      <el-menu-item index="purchaseRequirement">{{ $t('header.pRequirement') }}</el-menu-item>
      <el-menu-item index="concludedTransactions">{{ $t('header.cTransactions') }}</el-menu-item>
      <el-menu-item index="policies">{{ $t('header.policies') }}</el-menu-item>
      <el-menu-item index="newsInformation">{{ $t('header.news') }}</el-menu-item>
      <el-menu-item index="help">{{ $t('header.help') }}</el-menu-item>
      <el-menu-item index="register" v-if="!store.getters.hasUserInfo">{{ $t('header.register') }}</el-menu-item>
      <el-menu-item index="login" v-if="!store.getters.hasUserInfo">{{ $t('header.login') }}</el-menu-item>
      <el-menu-item index="company" v-if="store.getters.hasUserInfo">星海科技</el-menu-item>
    </el-menu>

    <el-dialog v-model="langChangeVisible" width="50%">
      <template #header>
        <h2 class="choose-lang-title">选择语言和区域</h2>
      </template>
      <div class="choose-lang-container">
        <ul class="lang-list">
          <li
              class="lang-list-item"
              :class="{'choose-lang-active': item.type === language}"
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
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { langArr } from '../../constant'

const activeIndex = ref('1')
const langChangeVisible = ref(false)

// 首页与非首页的样式不同
const logo = ref('/src/assets/hd_logo.png')
const logoStyle = ref({ top: '20px', left: '15px' })
const menuDark = ref(true)
const menuItemSelectedBg = ref('linear-gradient(rgba(155, 99, 238, 0.6), rgba(155, 99, 238, 0))')
const route = useRoute()
if (route.fullPath !== '/') {
  logo.value = '/src/assets/logo.png'
  logoStyle.value = { top: '0px', left: '0px' }
  menuDark.value = false
  menuItemSelectedBg.value = '#FFFFFF'
} else {
  logo.value = '/src/assets/hd_logo.png'
  logoStyle.value = { top: '20px', left: '15px' }
  menuDark.value = true
  menuItemSelectedBg.value = 'linear-gradient(rgba(155, 99, 238, 0.6), rgba(155, 99, 238, 0))'
}

const language = computed(() => store.getters.language)

// 点击切换语言菜单触发的事件
function changeLangMenuClick() {
  langChangeVisible.value = true
}

const store = useStore()
const i18n = useI18n()

// 具体的语言项被点击时触发的事件
function langItemClicked(type: string) {
  if (type === 'zh' || type === 'zh1') type = 'zh'
  i18n.locale.value = type
  store.commit('app/setLanguage', type)
  langChangeVisible.value = false
}

const notHomeItemHoverColor = ref('#9b63ee')
</script>

<style scoped lang="scss">
@import "index.scss";

// vue3支持 使用 v-bind 绑定 script 的样式

// 鼠标经过 menu-item 时
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  font-weight: 700;
  background: v-bind(menuItemSelectedBg);
  color: v-bind(notHomeItemHoverColor);
}
// menu-item 选中后
.el-menu--horizontal > .el-menu-item.is-active {
  background: v-bind(menuItemSelectedBg);
  font-weight: 700;
}
</style>
