<template>
  <div class="home-container">
    <section class="visual">
      <div class="notify-rule">
        <notify-card title="成交公示" link="/register" :list="list" />
        <notify-card title="政策法规" link="/register" :list="list" />
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NotifyCard from '@/components/notify-card/index.vue'

const list = ref([
    { title: '中国—东盟信息港股份有限公司智能化网络设备采购项目 竞争性谈判公告竞争性谈判公告竞争性谈判', link: '/404' },
    { title: '中国—东盟信息港股份有限公司智能化网络设备采购项目 竞争性谈判公告', link: '/404' },
    { title: '中国—东盟信息港股份有限公司智能化网络设备采购项目 竞争性谈判公告', link: '/404' },
    { title: '中国—东盟信息港股份有限公司智能化网络设备采购项目 竞争性谈判公告', link: '/404' },
    { title: '中国—东盟信息港股份有限公司智能化网络设备采购项目 竞争性谈判公告', link: '/404' }
])
</script>

<style scoped lang="scss">
@import "index.scss";
</style>