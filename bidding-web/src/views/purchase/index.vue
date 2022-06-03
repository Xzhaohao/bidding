<template>
  <com-header/>
  <div class="purchase-container">
    <section class="bid-banner"><span>招标采购</span>综合服务平台</section>

    <section class="choose-box">
      <choose-cell label="采购类型:" :list="purchaseTypes"/>
      <choose-cell label="选择时间:" :list="chooseTime"/>
    </section>

    <section class="purchase-main">
      <el-row class="card-list-container" :gutter="20">
        <el-col :span="8" v-for="i in 9" :key="i">
          <bid-card
              :title="dataTest.title"
              :pushTime="dataTest.pushTime"
              :endTime="dataTest.endTime"
              :num="dataTest.num"
              :maxPrice="dataTest.maxPrice"
          >
            <a href="javascript:;" class="purchase-item-detail">详情</a>
            <el-button type="primary">立即报价</el-button>
          </bid-card>
        </el-col>
      </el-row>
    </section>

    <section class="foot-pagination">
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
import { ref } from 'vue'
import { purchaseTypes, chooseTime } from '../../constant'
import ComHeader from '@/components/header/index.vue'
import ComFooter from '../../components/footer/'
import ChooseCell from '../../components/choose-cell/'
import BidCard from '../../components/bid-card/'
import Pagination from '@/components/Pagination/index.vue'

const dataTest = ref({
  title: '短信通道服务采购',
  pushTime: '2022-05-31 09:00:00',
  endTime: '2022-06-06 09:00:00',
  num: '900000条',
  maxPrice: '¥ 28,800.00'
})
</script>

<style scoped lang="scss">
@import "../../styles/common/bid-purchase";
@import "index";
</style>
