<template>
  <com-header/>

  <div class="news-container">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>新闻资讯</el-breadcrumb-item>
    </el-breadcrumb>

    <section>
      <article-card
          title="蒼の彼方のフォーリズム – Fly me to your sky ! – ( 書籍 )"
          auther="中国-东盟信息港股份有限公司"
          summary="蒼の彼方のフォーリズム 鳶沢みさきルート公式ノベライズ。 作品名：蒼の彼方のフォーリズム – Fly me to your sky ! – 作者：渡辺僚一 装丁 ..."
          time="2022-05-30"
          v-for="i in 6"
      />
    </section>

    <section class="page-container">
      <Pagination
          layout="total, prev, pager, next, jumper"
          :total="20"
          :page.sync="1"
          :limit.sync="9"
          @pagination="() => {}"
      />
    </section>
  </div>

  <com-footer/>
</template>

<script setup lang="ts">
import ComHeader from '@/components/header/index.vue'
import ComFooter from '../../components/footer/'
import ArticleCard from '@/components/article-card/index.vue'
import Pagination from '@/components/Pagination/index.vue'
import { ArrowRight } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
@import "index";
</style>