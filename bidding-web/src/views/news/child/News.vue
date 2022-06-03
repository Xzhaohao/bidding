<template>
  <div class="news-warp">
    <h2>新闻资讯</h2>

    <section>
      <article-card
          title="蒼の彼方のフォーリズム – Fly me to your sky ! – ( 書籍 )"
          auther="中国-东盟信息港股份有限公司"
          summary="蒼の彼方のフォーリズム 鳶沢みさきルート公式ノベライズ。 作品名：蒼の彼方のフォーリズム – Fly me to your sky ! – 作者：渡辺僚一 装丁 ..."
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
