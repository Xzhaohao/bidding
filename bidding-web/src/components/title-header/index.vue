<template>
  <div class="title-header">
    <div class="left">
      <div class="line"></div>
      <h2 class="title">{{ title }}</h2>
    </div>

    <el-link type="primary" :href="link">更多<el-icon><ArrowRight /></el-icon></el-link>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String
  },
  link: {
    type: String
  }
})
</script>

<style scoped lang="scss">
@import "index.scss";
</style>