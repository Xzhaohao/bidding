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
import { defineProps } from 'vue'
import TitleHeader from '@/components/title-header/index.vue'

defineProps({
  title: {
    type: String
  },
  link: {
    type: String
  },
  list: {
    type: Array
  }
})
</script>

<style scoped lang="scss">
@import "index.scss";
</style>

<style lang="scss">
.card-container .el-link__inner {
  display: block;
  width: 100%;
  @include line-text-overflow;
}
</style>