<template>
  <com-header/>
  <div class="purchase-container">
    <section class="bid-banner"><span>招标采购</span>综合服务平台</section>

    <section class="choose-box">
      <choose-cell label="采购类型:" :list="purchaseTypes" />
      <choose-cell label="选择时间:" :list="chooseTime" />
    </section>
  </div>
  <com-footer/>
</template>

<script setup lang="ts">
import { purchaseTypes, chooseTime } from '../../constant'
import ComHeader from '@/components/header/index.vue'
import ComFooter from '../../components/footer/'
import ChooseCell from '../../components/choose-cell/'
</script>

<style scoped lang="scss">
@import "../../styles/common/bid-purchase";
@import "index";
</style>
