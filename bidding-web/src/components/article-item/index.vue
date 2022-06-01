<template>

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