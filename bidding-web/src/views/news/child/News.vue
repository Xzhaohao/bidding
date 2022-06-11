<template>
  <div class="news-warp">
    <h2>新闻资讯</h2>

    <section>
      <article-card
          title="2022年郴州、永州高速养护工程标线热熔涂料采购项目"
          summary="2022年郴州、永州高速养护工程标线热熔涂料采购项目2022年郴标线热熔涂料采购项目2022年郴州、永州高速养护工程标线热熔涂料采购项目2022年郴州、永州高速养护工程标线热熔涂料采购项目 ..."
          time="2022-05-30"
          v-for="i in 6"
          :key="i"
      />
    </section>

    <section class="page-container">
      <Pagination
          layout="total, prev, pager, next, jumper"
          :total="20"
          :page:sync="1"
          :limit:sync="9"
          @pagination="() => {}"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import ArticleCard from '../../../components/article-card/'
import Pagination from '@/components/Pagination/index.vue'
</script>

<style scoped lang="scss">
@import "com-style";
@import "news";
</style>
