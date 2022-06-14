import { ref } from 'vue'
import { fetchUserListApi } from '@/api/user'

const loading = ref(false)
const tableData = ref([])
const total = ref(0)
const page = ref<Number>(1)
const limit = ref<Number>(10)

// 获取数据
const fetchUserList = () => {
  loading.value = true
  fetchUserListApi({
    page: page.value,
    limit: limit.value
  })
    .then((res: any) => {
      tableData.value = res.rows
      total.value = res.total
    })
    .finally(() => {
      setTimeout(() => {
        loading.value = false
      }, 200)
    })
}

// 显示条数改变
const handleSizeChange = (val: number) => {
  limit.value = val
  fetchUserList()
}

// 分页改变
const handleCurrentChange = (val: number) => {
  page.value = val
  fetchUserList()
}

export {
  loading,
  tableData,
  total,
  page,
  limit,
  fetchUserList,
  handleSizeChange,
  handleCurrentChange
}
