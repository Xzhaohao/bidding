<template>
  <com-header />

  <div class="notice-container">
    <img src="/src/assets/notice_banner.jpeg" alt="banner">

    <section class="notice-list">
      <el-divider><h2>成交公示</h2></el-divider>

      <notice-card v-for="i in 6" :key="i" />
    </section>

    <section class="page-box">
      <Pagination
          layout="total, prev, pager, next, jumper"
          :total="20"
          :to="260"
          :page:sync="1"
          :limit:sync="9"
          @pagination="() => {}"
      />
    </section>
  </div>

  <com-footer />
</template>

<script setup lang="ts">
import ComHeader from '@/components/header/index.vue'
import ComFooter from '../../components/footer/'
import NoticeCard from './components/NoticeCard'
import Pagination from '@/components/Pagination/index.vue'
</script>

<style scoped lang="scss">
@import "index";
</style>
