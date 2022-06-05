<template>
  <!--  <el-menu-->
  <!--      :unique-opened='true'-->
  <!--      :default-active='activeMenu'-->
  <!--      :active-text-color='$store.getters.cssVar.menuActiveText'-->
  <!--      :background-color='$store.getters.cssVar.menuBg'-->
  <!--      :text-color='$store.getters.cssVar.menuText'-->
  <!--      router-->
  <!--  >-->
  <!--    <sidebar-item v-for='item in routes' :key='item.path' :route='item'/>-->
  <!--  </el-menu>-->
  <el-menu
      :unique-opened='true'
      default-active="/customer/info"
      background-color="#304156"
      active-text-color="#9b63ee"
      text-color="#fff"
      router
  >
    <sidebar-item v-for='item in routes' :key='item.path' :route='item'/>
  </el-menu>
</template>

<script setup lang="ts">
// import { computed } from 'vue'
// import { useRoute } from 'vue-router'
import { routes } from '../../route-list'
import SidebarItem from './SidebarItem.vue'

// 默认激活项
// const route = useRoute()
// const activeMenu = computed(() => {
//   const { path } = route
//   return path
// })
</script>
