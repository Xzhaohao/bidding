<template>
  <com-header/>

  <div class="home-container">
    <!-- 大背景 -->
    <section class="visual">
      <!-- 成交公示 和 政策法规 -->
      <div class="notify-rule">
        <notify-card :title="$t('card.cTransactions')" link="/register" :list="list"/>
        <notify-card :title="$t('card.policies')" link="/register" :list="list"/>
      </div>
    </section>

    <!-- 采购公示 -->
    <section class="p-announcement">
      <title-header title="采购公示" link="/404" padding/>

      <el-row class="card-list-container" :gutter="20">
        <el-col :span="8" v-for="i in 6" :key="i">
          <bid-card />
        </el-col>
      </el-row>
    </section>

    <!-- 采购需求 -->
    <section class="p-required">
      <title-header title="采购需求" link="/404" padding/>

      <el-table
          :data="tableData"
          stripe size="large"
          style="width: 100%; margin-top: 10px;"
          :header-cell-style="{background: '#ECF1FE', color: '#7a43b6'}"
      >
        <el-table-column prop="name" label="名称"/>
        <el-table-column prop="type" label="采购类型" width="120" align="center"/>
        <el-table-column prop="num" label="数量" width="130" align="center"/>
        <el-table-column prop="time" label="截止日期" width="170" show-overflow-tooltip/>
        <el-table-column prop="price" label="最高限价(元)" width="170" align="center"/>
        <el-table-column prop="status" label="操作" width="120" align="center"/>
      </el-table>
    </section>
  </div>

  <com-footer/>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ComHeader from '@/components/header/index.vue'
import ComFooter from '../../components/footer/'
import NotifyCard from '@/components/notify-card/index.vue'
import TitleHeader from '@/components/title-header/index.vue'
import BidCard from '@/components/bid-card/index.vue'

const list = ref([
  { title: '中国—东盟信息港股份有限公司智能化网络设备采购项目 竞争性谈判公告竞争性谈判公告竞争性谈判', link: '/404' },
  { title: '中国—东盟信息港股份有限公司智能化网络设备采购项目 竞争性谈判公告', link: '/404' },
  { title: '中国—东盟信息港股份有限公司智能化网络设备采购项目 竞争性谈判公告', link: '/404' },
  { title: '中国—东盟信息港股份有限公司智能化网络设备采购项目 竞争性谈判公告', link: '/404' },
  { title: '中国—东盟信息港股份有限公司智能化网络设备采购项目 竞争性谈判公告', link: '/404' }
])

const tableData = [
  { name: '短信通道服务采购', type: '服务类', num: 9000000, time: '2022-09-11 09:00:00', price: '¥ 636,000.00', status: '已截止' },
  { name: '短信通道服务采购', type: '服务类', num: 900000, time: '2022-09-11 09:00:00', price: '¥ 636,000.00', status: '已截止' },
  { name: '短信通道服务采购', type: '服务类', num: 900000, time: '2022-09-11 09:00:00', price: '¥ 636,000.00', status: '已截止' },
  { name: '短信通道服务采购', type: '服务类', num: 900000, time: '2022-09-11 09:00:00', price: '¥ 636,000.00', status: '已截止' },
  { name: '短信通道服务采购', type: '服务类', num: 900000, time: '2022-09-11 09:00:00', price: '¥ 636,000.00', status: '已截止' },
  { name: '短信通道服务采购', type: '服务类', num: 900000, time: '2022-09-11 09:00:00', price: '¥ 636,000.00', status: '已截止' },
  { name: '短信通道服务采购', type: '服务类', num: 900000, time: '2022-09-11 09:00:00', price: '¥ 636,000.00', status: '已截止' },
  { name: '短信通道服务采购', type: '服务类', num: 900000, time: '2022-09-11 09:00:00', price: '¥ 636,000.00', status: '已截止' },
  { name: '短信通道服务采购', type: '服务类', num: 900000, time: '2022-09-11 09:00:00', price: '¥ 636,000.00', status: '已截止' },
  { name: '短信通道服务采购', type: '服务类', num: 900000, time: '2022-09-11 09:00:00', price: '¥ 636,000.00', status: '已截止' }
]
</script>

<style scoped lang="scss">
@import "index.scss";
</style>
