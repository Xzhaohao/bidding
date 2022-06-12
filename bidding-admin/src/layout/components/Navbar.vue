<template>
  <div class="navbar">
    <!-- 左侧折叠菜单 -->
    <hamburger class="hamburger-container"/>
    <!-- 面包屑 -->
    <breadcrumb id="guide-breadcrumb" class="breadcrumb-container"/>

    <div class="right-menu">
      <!-- 功能引导 -->
      <guide class="right-menu-item hover-effect"></guide>
      <!-- 页面搜索 -->
      <head-search class="right-menu-item hover-effect"/>
      <!-- 全屏 -->
      <screen-full class="right-menu-item hover-effect"/>
      <!-- 换肤 -->
      <theme-picker class="right-menu-item hover-effect"/>
      <!-- 国际化 -->
      <lang-select class="right-menu-item hover-effect"/>

      <!-- 头像 -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar shape="square" :size="40" :src="$store.getters.userInfo.avatar"/>
          <el-icon><Tools /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>{{ $t('navBar.home') }}</el-dropdown-item>
            </router-link>
            <el-dropdown-item divided @click='logout'>{{ $t('navBar.logout') }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import Hamburger from './hamburger/index.vue'
import Breadcrumb from './breadcrumb/index.vue'
import HeadSearch from './headSearch/index.vue'
import ThemePicker from './themeSelect/index.vue'
import Guide from './guide/index.vue'
import ScreenFull from './screenfull/index.vue'
import LangSelect from '../../components/langSelect/index.vue'

// 退出登陆
const store = useStore()
const logout = () => store.dispatch('user/logout', 1)
</script>

<style lang='scss' scoped>
@import "Navbar";
</style>
