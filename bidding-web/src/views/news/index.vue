<template>
  <com-header/>

  <div class="news-container">
    <router-view />

    <!-- 右侧菜单 -->
    <div class="news-menu">
      <div class="news-menu-title">● 新闻与政策</div>
      <ul>
        <li @click="newsPageMenuClicked(0)"><a href="javascript:;">新闻资讯</a></li>
        <li @click="newsPageMenuClicked(1)"><a href="javascript:;">政策法规</a></li>
      </ul>
    </div>
  </div>

  <com-footer/>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import ComHeader from '@/components/header/index.vue'
import ComFooter from '../../components/footer/'

const routerArr = ['/news/list', '/news/policy']
const router = useRouter()
const newsPageMenuClicked = (menu: number) => router.push(routerArr[menu])
</script>

<style scoped lang="scss">
@import "index";
</style>
