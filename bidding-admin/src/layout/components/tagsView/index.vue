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

        <i v-show="!isActive(tag)" class="el-icon-close" @click.prevent.stop="onCloseClick(index)"></i>
      </router-link>
    </el-scrollbar>

    <context-menu :style="menuStyle" :index="selectIndex" v-show="visible" />
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import ContextMenu from './ContextMenu.vue'

const route = useRoute()

// 是否被选中
const isActive = tag => {
  return tag.path === route.path
}

// 关闭 tag 的点击事件
const store = useStore()
const onCloseClick = index => {
  store.commit('app/removeTagsView', {
    type: 'index',
    index: index
  })
}

// contextMenu 相关
const selectIndex = ref(0)
const visible = ref(false)
const menuStyle = reactive({
  left: 0,
  top: 0
})

// 鼠标右键
const openMenu = (e, index) => {
  const { x, y } = e
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
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);

  .tags-view-item {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;

    &:first-of-type {
      margin-left: 15px;
    }

    &:last-of-type {
      margin-right: 15px;
    }

    &.active {
      color: #fff;

      &::before {
        content: '';
        background: #fff;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: relative;
        margin-right: 4px;
      }
    }

    // close 按钮
    .el-icon-close {
      width: 16px !important;
      height: 16px !important;
      line-height: 10px;
      vertical-align: 2px;
      border-radius: 50%;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform-origin: 100% 50%;

      &:before {
        transform: scale(0.6);
        display: inline-block;
        vertical-align: -3px;
      }

      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
}
</style>
