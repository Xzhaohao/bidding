<template>
  <div :style="{ zIndex, height, width }" class="pan-item">
    <div class="pan-info">
      <div class="pan-info-roles-container">
        <slot />
      </div>
    </div>
    <div :style="{ backgroundImage: `url(${image})` }" class="pan-thumb"></div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
  image: {
    type: String
  },
  zIndex: {
    type: Number,
    default: 1
  },
  width: {
    type: String,
    default: '150px'
  },
  height: {
    type: String,
    default: '150px'
  }
})
</script>

<style lang="scss" scoped>
@import "index";
</style>
