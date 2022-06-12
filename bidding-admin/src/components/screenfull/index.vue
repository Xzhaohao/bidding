<template>
  <div @click='onToggle'>
    <el-tooltip :content="$t('navBar.screenfull')">
      <span id="guide-full">
        <svg-icon :icon="isFullscreen ? 'exit-fullscreen' : 'fullscreen'" />
      </span>
    </el-tooltip>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import screenFull from 'screenfull'

const isFullscreen = ref(false)

const onToggle = () => {
  screenFull.toggle()
}

// 监听 screenFull 的变化
const change = () => {
  isFullscreen.value = screenFull.isFullscreen
}

// 监听绑定
onMounted(() => {
  screenFull.on('change', change)
})

// 取消监听
onUnmounted(() => {
  screenFull.off('change', change)
})
</script>
