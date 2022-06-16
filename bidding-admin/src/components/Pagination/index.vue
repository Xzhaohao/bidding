<template>
  <div :class="{ hidden: hidden }" class="pagination-container">
    <el-pagination
        v-model:currentPage="currentPage"
        v-model:page-size="pageSize"
        :background="background"
        :layout="layout"
        small
        :page-sizes="pageSizes"
        :total="total"
        v-bind="$attrs"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps } from 'vue'

const emit = defineEmits(['update:page', 'update:limit', 'pagination'])

const props = defineProps({
  total: {
    require: true,
    type: Number
  },
  page: {
    type: Number,
    default: 1
  },
  limit: {
    type: Number,
    default: 10
  },
  pageSizes: {
    type: Array,
    default() {
      return [10, 15, 20, 30, 50]
    }
  },
  layout: {
    type: String,
    default: 'total, sizes, prev, pager, next, jumper'
  },
  background: {
    type: Boolean,
    default: true
  },
  hidden: {
    type: Boolean,
    default: false
  }
})

const currentPage = computed({
  get() {
    return props.page
  },
  set(val) {
    emit('update:page', val)
  }
})

const pageSize = computed({
  get() {
    return props.limit
  },
  set(val) {
    emit('update:limit', val)
  }
})

const handleSizeChange = (val: number) => {
  emit('pagination', { page: currentPage, limit: val })
}

const handleCurrentChange = (val: number) => {
  emit('pagination', { page: val, limit: pageSize })
}
</script>

<style scoped lang="scss">
.pagination-container {
  display: flex;
  justify-content: center;
  background: #fff;
  padding-top: 20px;
}
.pagination-container.hidden {
  display: none;
}
</style>
