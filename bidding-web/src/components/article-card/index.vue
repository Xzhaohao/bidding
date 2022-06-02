<template>
  <div class="article-card">
    <a href="javascript:;">
      <div class="card-thumbnail">
        <img src="@/assets/thumbnail-392x270.jpeg" alt="thumbnail">
      </div>

      <div class="card-content">
        <p class="card-title">{{ title }}</p>
        <p class="card-time">{{ time }} ／ <span>{{ author }}</span></p>
        <div class="card-excerpt">{{ summary }}</div>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'

defineProps({
  img: {
    type: String as PropType<string>,
    required: false
  },
  title: {
    type: String as PropType<string>,
    required: true
  },
  author: {
    type: String as PropType<string>,
    default: 'XXXXX信息科技有限公司'
  },
  summary: {
    type: String as PropType<string>,
    required: true
  },
  time: {
    type: String as PropType<string>,
    required: true
  }
})
</script>

<style scoped lang="scss">
@import "index";
</style>
