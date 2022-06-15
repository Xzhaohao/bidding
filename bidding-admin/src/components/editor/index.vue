<template>
  <div class="editor-container">
    <!-- 渲染区 -->
    <div id="editor-box"></div>

    <!-- 按钮 -->
    <div class="bottom">
      <el-button>{{ $t('edit.submit') }}</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import E from 'wangeditor'
import { DomElementSelector } from 'wangeditor/dist/utils/dom-core'
import i18next from 'i18next'

let editor
let el: DomElementSelector

const store = useStore()

onMounted(() => {
  el = document.getElementById('editor-box')
  initEditor()
})

const initEditor = () => {
  editor = new E(el)
  editor.config.zIndex = 1
  // 菜单栏提示
  editor.config.showMenuTooltips = true
  editor.config.menuTooltipPosition = 'down'
  // 国际化
  editor.config.lang = store.getters.language === 'zh' ? 'zh-CN' : 'en'
  editor.i18next = i18next
  editor.create()
}
</script>

<style scoped lang="scss">
.editor-container {
  .bottom {
    margin-top: 20px;
    text-align: right;
  }
}
</style>
