<template>
  <header>
    <router-link to="/">
      <img :src="logo" alt="logo" class="logo" :style="logoStyle" @click="logoClicked">
    </router-link>

    <el-menu @select="menuSelected" :default-active="store.getters.selectedMenu" mode="horizontal" :class="{'menu-dark-bg': menuDark}">
      <el-menu-item index="langChange" @click="changeLangMenuClick">{{ $t('header.lang') }}</el-menu-item>
      <el-menu-item index="bid">{{ $t('header.pAnnouncement') }}</el-menu-item>
      <el-menu-item index="purchase">{{ $t('header.pRequirement') }}</el-menu-item>
      <el-menu-item index="notice">{{ $t('header.cTransactions') }}</el-menu-item>
      <el-menu-item index="news">{{ $t('header.news') }}</el-menu-item>
      <el-menu-item index="help">{{ $t('header.help') }}</el-menu-item>
      <el-menu-item index="login?type=1" v-if="!store.getters.hasUserInfo">{{ $t('header.login') }}</el-menu-item>
      <el-menu-item index="login?type=2" v-if="!store.getters.hasUserInfo">{{ $t('header.register') }}</el-menu-item>
      <el-menu-item index="customer" v-if="store.getters.hasUserInfo">
        {{ store.getters.userInfo.company }}
      </el-menu-item>
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
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { langArr, MENU } from '../../constant'
import { getItem } from '../../utils/storage'
import useHeaderStyle from './useHeaderStyle'
import useLangChange from './useLangChange'
import useMenuSelected from './useMenuSelected'

// 监听路由变化
const route = useRoute()
watch(route, () => {
  const routeName = route.path.replace(/\//g, '')
  if (routeName !== getItem(MENU)) {
    store.commit('app/setSelectedMenu', routeName)
  }
})

// 样式相关
const { logo, logoStyle, menuDark, menuItemSelectedBg } = useHeaderStyle()

const store = useStore()
// 当前选择的语言
const language = computed(() => store.getters.language)
// 国际化相关
const { langChangeVisible, langItemClicked, changeLangMenuClick } = useLangChange(store)

// 菜单相关
const { menuSelected, logoClicked } = useMenuSelected(store)
</script>

<style scoped lang="scss">
@import "index.scss";

// vue3支持 使用 v-bind 绑定 script 的样式

// 鼠标经过 menu-item 时
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  font-weight: 700;
  background: v-bind(menuItemSelectedBg);
  color: #9b63ee;
}

// menu-item 选中后
.el-menu--horizontal > .el-menu-item.is-active {
  background: v-bind(menuItemSelectedBg);
  font-weight: 700;
}
</style>
