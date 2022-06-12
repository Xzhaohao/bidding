<template>
  <div class='head-search' :class='{ show: isShow }'>
    <span id="guide-search" @click.stop="onShowClick">
      <svg-icon class-name="search-icon" icon="search" />
    </span>

    <el-select
      ref="headSearchSelectRef"
      class="head-search-select"
      v-model="search"
      filterable
      default-first-option
      remote
      :placeholder="$t('navBar.headerSearch')"
      :remote-method="querySearch"
      @change="onSelectChange"
    >
      <el-option
        v-for='op in searchOptions'
        :key='op.item.path'
        :label='op.item.title.join(" > ")'
        :value='op.item'
      />
    </el-select>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { filterRoutes } from '@/utils/route'
import { generateRoutes } from './FuseData'
import { watchSwitchLang } from '@/utils/i18n'
import Fuse from 'fuse.js'

// 数据源
const router = useRouter()
let searchPool = computed(() => {
  const fRoutes = filterRoutes(router.getRoutes())
  return generateRoutes(fRoutes)
})

// 搜索库相关
let fuse
const initFuse = searchPool => {
  fuse = new Fuse(searchPool, {
    // 是否按优先级进行排序
    shouldSort: true,
    // 匹配长度超过这个值的才会被认为是匹配的
    minMatchCharLength: 1,
    // 将被搜索的键列表。 这支持嵌套路径、加权搜索、在字符串和对象数组中搜索。
    // name：搜索的键，weight：对应的权重
    keys: [
      { name: 'title', weight: 0.7 },
      { name: 'path', weight: 0.3 }
    ]
  })
}
initFuse(searchPool.value)

// 控制search显示
const isShow = ref(false)
const onShowClick = () => {
  isShow.value = !isShow.value
  headSearchSelectRef.value.focus()
}

// 搜索方法
const search = ref('')
// 搜索结果
const searchOptions = ref([])
// 搜索方法
const querySearch = query => {
  if (query !== '') {
    searchOptions.value = fuse.search(query)
  } else {
    searchOptions.value = []
  }
}

// 选中回调
const onSelectChange = val => {
  router.push(val.path)
}

// 监听 search 打开，处理 close 事件
watch(isShow, (val) => {
  if (val) {
    document.body.addEventListener('click', onClose)
  } else {
    document.body.removeEventListener('click', onClose)
  }
})

// 关闭 search 的处理事件
const headSearchSelectRef = ref(null)
const onClose = () => {
  headSearchSelectRef.value.blur()
  isShow.value = false
  searchOptions.value = []
}

// 处理国际化
watchSwitchLang(() => {
  searchPool = computed(() => {
    const fRoutes = filterRoutes(router.getRoutes())
    return generateRoutes(fRoutes)
  })
  initFuse(searchPool.value)
})
</script>

<style lang="scss" scoped>
.head-search {
  font-size: 0 !important;

  ::v-deep .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }

  .head-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    ::v-deep .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }

  &.show {
    .head-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
