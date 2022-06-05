<template>
  <el-sub-menu :index="route.path">
    <template #title>
      <el-icon><Menu /></el-icon>
      <span>{{ route.title }}</span>
    </template>
    <el-menu-item v-for="item in route.child" :key="item.path" :index="item.path">{{ item.title }}</el-menu-item>
  </el-sub-menu>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import { MenuRouteItem } from '../../route-list'

defineProps({
  route: {
    type: Object as PropType<MenuRouteItem>,
    required: true
  }
})
</script>
