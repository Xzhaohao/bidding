<template>
  <div class="tags-view-container">
    <el-scrollbar>
      <router-link
        v-for="(tag, index) in $store.getters.tagsViewList"
        :key="tag.fullPath"
        class="tags-view-item"
        :class="isActive(tag) ? 'active' : ''"
        :to="{ path: tag.fullPath }"
        :style="{
          backgroundColor: isActive(tag) ? $store.getters.cssVar.menuBg : '',
          borderColor: isActive(tag) ? $store.getters.cssVar.menuBg : ''
        }"
        @contextmenu.prevent="openMenu($event, index)"
      >
        {{ tag.title }}

        <el-icon v-show="!isActive(tag)" @click.prevent.stop="onCloseClick(index)">
          <Close/>
        </el-icon>
      </router-link>
    </el-scrollbar>

    <context-menu :style="menuStyle" :index="selectIndex" v-show="visible"/>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import ContextMenu from './ContextMenu.vue'

const route = useRoute()

// 是否被选中
const isActive = (tag: any) => {
  return tag.path === route.path
}

// 关闭 tag 的点击事件
const store = useStore()
const onCloseClick = (index: any) => {
  store.commit('app/removeTagsView', {
    type: 'index',
    index: index
  })
}

// contextMenu 相关
const selectIndex = ref(0)
const visible = ref(false)
const menuStyle: any = reactive({
  left: 0,
  top: 0
})

// 鼠标右键
const openMenu = (e: any, index: number) => {
  const {
    x,
    y
  } = e
  menuStyle.left = x + 'px'
  menuStyle.top = y + 'px'
  selectIndex.value = index
  visible.value = true
}

// 关闭 menu
const closeMenu = () => {
  visible.value = false
}

// 监听变化
watch(visible, (val) => {
  if (val) {
    document.body.addEventListener('click', closeMenu)
  } else {
    document.body.removeEventListener('click', closeMenu)
  }
})
</script>

<style lang="scss" scoped>
@import "index";
</style>
