<template>
  <com-header/>
  <div class="not-found">
    <img src="@/assets/404.jpeg" alt="404页面不存在！">
  </div>
  <com-footer/>
</template>

<script lang="ts" setup>
import ComHeader from '@/components/header/index.vue'
import ComFooter from '@/components/footer/index.vue'
</script>

<style scoped lang="scss">
.not-found {
  @include page-main;
  padding-top: 60px;
  height: 100%;
  display: flex;
  justify-content: center;
}
</style>