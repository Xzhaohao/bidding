<template>
  <com-header/>

  <div class="news-container">
    <router-view />

    <!-- 右侧菜单 -->
    <div class="news-menu">
      <div class="news-menu-title">● 新闻与政策</div>
      <ul>
        <li><a href="javascript:;">新闻资讯</a></li>
        <li><a href="javascript:;">政策法规</a></li>
      </ul>
    </div>
  </div>

  <com-footer/>
</template>

<script setup lang="ts">
import ComHeader from '@/components/header/index.vue'
import ComFooter from '../../components/footer/'
</script>

<style scoped lang="scss">
@import "index";
</style>