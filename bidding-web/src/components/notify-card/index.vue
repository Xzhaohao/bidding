<template>
  <div class="card-container">
    <title-header :title="title" :link="link"/>

    <ul>
      <li v-for="(item, index) in list" :key="index">
        <el-link :href="item.link">{{ index + 1 }}. {{ item.title }}</el-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import TitleHeader from '@/components/title-header/index.vue'

defineProps({
  title: {
    type: String as PropType<string>,
    required: true
  },
  link: {
    type: String as PropType<string>,
    required: true
  },
  list: {
    type: Array as PropType<Array<any>>,
    default: []
  }
})
</script>

<style scoped lang="scss">
@import "index.scss";
</style>
