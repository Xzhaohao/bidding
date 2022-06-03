<template>
  <com-header/>

  <div class="bid-container">
    <section class="bid-banner"><span>招标采购</span>综合服务平台</section>

    <section class="choose-box">
      <choose-cell label="招标方式:" :list="bidTypes" />
      <choose-cell label="招标状态:" :list="bidStatus" />
      <choose-cell label="选择时间:" :list="chooseTime" />
    </section>

    <section class="bid-main">
      <el-row class="card-list-container" :gutter="20">
        <el-col :span="8" v-for="i in 9" :key="i">
          <bid-card/>
        </el-col>
      </el-row>
    </section>

    <section class="bid-pagination">
      <Pagination
          layout="total, prev, pager, next, jumper"
          :total="20"
          :to="280"
          :page:sync="1"
          :limit:sync="9"
          @pagination="() => {}"
      />
    </section>
  </div>

  <com-footer/>
</template>

<script setup lang="ts">
import { bidTypes, bidStatus, chooseTime } from '../../constant'
import ComHeader from '@/components/header/index.vue'
import ComFooter from '../../components/footer/'
import ChooseCell from '../../components/choose-cell/'
import BidCard from '../../components/bid-card/'
import Pagination from '@/components/Pagination/index.vue'

</script>

<style scoped lang="scss">
@import "../../styles/common/bid-purchase";
@import "index";
</style>
