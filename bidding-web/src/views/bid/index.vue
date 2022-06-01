<template>
  <com-header/>

  <div class="bid-container">
    <section class="bid-banner"><span>招标采购</span>综合服务平台</section>

    <section class="choose-box">
      <div class="choose-cell">
        <div class="choose-cell-bd">招标方式:</div>
        <radio-button :list="bidTypes" :defaultLabel="bidTypes[0]"/>
      </div>
      <div class="choose-cell">
        <div class="choose-cell-bd">招标状态:</div>
        <radio-button :list="bidStatus" :defaultLabel="bidStatus[0]"/>
      </div>
      <div class="choose-cell">
        <div class="choose-cell-bd">选择时间:</div>
        <radio-button :list="bidTime" :defaultLabel="bidTime[0]"/>
      </div>
    </section>

    <section class="bid-main">
      <el-row class="card-list-container" :gutter="20">
        <el-col :span="8" v-for="i in 9">
          <bid-card/>
        </el-col>
      </el-row>
    </section>

    <section class="bid-pagination">
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
import { bidTypes, bidStatus, bidTime } from '../../constant'
import ComHeader from '@/components/header/index.vue'
import ComFooter from '../../components/footer/'
import RadioButton from '@/components/radio-button/index.vue'
import BidCard from '@/components/bid-card/index.vue'
import Pagination from '@/components/Pagination/index.vue'

</script>

<style scoped lang="scss">
@import "index";
</style>