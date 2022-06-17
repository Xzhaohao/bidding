import { ref } from 'vue'

export const dictList = ref([
  {
    name: '男',
    code: 'gender',
    description: '性别',
    status: 1,
    num: 1,
    createTime: '2022-06-01'
  },
  {
    name: '女',
    code: 'gender',
    description: '性别',
    status: 1,
    num: 2,
    createTime: '2022-06-01'
  },
  {
    name: '审核中',
    code: 'articleState',
    description: '新闻资讯、政策法规、成交公示的状态',
    status: 1,
    num: 0,
    createTime: '2022-06-01'
  },
  {
    name: '发布',
    code: 'articleState',
    description: '新闻资讯、政策法规、成交公示的状态',
    status: 1,
    num: 1,
    createTime: '2022-06-01'
  },
  {
    name: '撤销',
    code: 'articleState',
    description: '新闻资讯、政策法规、成交公示的状态',
    status: 1,
    num: 2,
    createTime: '2022-06-01'
  },
  {
    name: '删除',
    code: 'articleState',
    description: '新闻资讯、政策法规、成交公示的状态',
    status: 1,
    num: 3,
    createTime: '2022-06-01'
  }
])
