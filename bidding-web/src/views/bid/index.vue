<template>
  <com-header/>

  <div class="bid-container">
    <section class="bid-banner"><span>招标采购</span>综合服务平台</section>

    <section class="choose-box">
      <choose-cell label="招标方式:" :list="bidTypes"/>
      <choose-cell label="招标状态:" :list="bidStatus"/>
      <choose-cell label="选择时间:" :list="chooseTime"/>
    </section>

    <section class="bid-main">
      <el-row class="card-list-container" :gutter="20">
        <el-col :span="8" v-for="i in 9" :key="i">
          <bid-card :title="dataTest.title" :no="dataTest.no" :bid-type="dataTest.bidType" :push-time="dataTest.pushTime" :end-time="dataTest.endTime">
            <el-button type="primary">竞谈答复</el-button>
            <div style="color: #909399;">已公示</div>
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
import { bidTypes, bidStatus, chooseTime } from '../../constant'
import ComHeader from '@/components/header/index.vue'
import ComFooter from '../../components/footer/'
import ChooseCell from '../../components/choose-cell/'
import BidCard from '../../components/bid-card/'
import Pagination from '@/components/Pagination/index.vue'
import { ref } from 'vue'

const dataTest = ref({
  title: 'XX科技股份有限公司新大楼办公场所工位扩容强弱电改造采购项目',
  no: '0747-2260SCCGX089',
  bidType: '竞争性谈判',
  pushTime: '2022-05-31 09:00:00',
  endTime: '2022-06-06 09:00:00'
})
</script>

<style scoped lang="scss">
@import "../../styles/common/bid-purchase";
@import "index";
</style>
