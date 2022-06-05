export interface MenuRouteItem {
  path: string;
  title: string;
  child: { path: string; title: string; }[];
}

export const routes = [
  {
    path: '/b',
    title: '供应与采购',
    child: [
      { path: '/504', title: '我的供应资源' },
      { path: '/501', title: '我的供应订单' },
      { path: '/502', title: '我的采购需求' },
      { path: '/503', title: '我的采购报价' },
      { path: '/505', title: '我的成交订单' },
      { path: '/506', title: '供求合同管理' },
      { path: '/507', title: '合同执行信息' }
    ]
  },
  {
    path: '/ss',
    title: '招投标管理',
    child: [
      { path: '/604', title: '招投标信息' },
      { path: '/601', title: '保证金管理' },
      { path: '/602', title: '招投标结果' },
      { path: '/603', title: '合同管理' }
    ]
  },
  {
    path: '/setting',
    title: '账号设置',
    child: [
      { path: '/404', title: '我的消息' },
      { path: '/customer/info', title: '基本信息' },
      { path: '/402', title: '认证信息' },
      { path: '/403', title: '子账户管理' }
    ]
  }
]
