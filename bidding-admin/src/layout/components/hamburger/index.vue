<template>
  <div class='hamburger-container' @click='toggleClick'>
    <span id="guide-hamburger">
      <svg-icon class='hamburger' :icon='icon' />
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const icon = computed(() => store.getters.sidebarOpened ? 'hamburger-opened' : 'hamburger-closed')

const toggleClick = () => store.commit('app/triggerSidebarOpened')
</script>

<style lang='scss' scoped>
.hamburger-container {
  padding: 0 16px;

  .hamburger {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
}
</style>
