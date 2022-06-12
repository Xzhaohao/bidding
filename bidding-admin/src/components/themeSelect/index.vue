<template>
  <el-dropdown
    v-bind='$attrs'
    trigger='click'
    class='theme'
    @command='handleSetTheme'
  >
    <div>
      <el-tooltip :content='$t("navBar.themeChange")'>
        <span id='guide-theme'>
          <svg-icon icon='change-theme' />
        </span>
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command='color'>
          {{ $t('theme.themeColorChange') }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

  <!--弹出层-->
  <div>
    <select-color v-model='selectColorVisible' />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SelectColor from './components/SelectColor'

const selectColorVisible = ref(false)

const handleSetTheme = command => {
  selectColorVisible.value = true
}
</script>
