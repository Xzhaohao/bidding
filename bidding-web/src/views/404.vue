<template>
  <com-header/>
  <div class="not-found">
    <img src="@/assets/404.jpeg" alt="404页面不存在！">
  </div>
  <com-footer/>
</template>

<script lang="ts" setup>
import ComHeader from '@/components/header/index.vue'
import ComFooter from '../components/footer/'
</script>

<style scoped lang="scss">
.not-found {
  @include page-main;
  height: 100%;
  display: flex;
  justify-content: center;
}
</style>