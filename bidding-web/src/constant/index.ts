// 国际化支持的语言选项
export const langArr = [
  { name: '简体中文', country: '中国', type: 'zh' },
  { name: '繁體中文', country: '香港台灣', type: 'zh1' },
  { name: 'English', country: 'United States', type: 'en' },
  { name: '日本語', country: '日本', type: 'ja' },
]

// 招标筛选条件
export const bidTypes = ['全部', '公开招标', '询比价项目', '竞争性谈判', '竞争性磋商', '公开比选']
export const bidStatus = ['全部', '招标中', '评标中', '已公示', '已废标', '招标失败']
export const bidTime = ['不限', '近一周', '近一个月', '近三个月', '近半年', '近一年']

// 国际化
export const LANG = 'language'

// 顶部菜单
export const MENU = 'home_menu'

export const TOKEN = 'token'

// token时间戳
export const TIME_STAMP = 'timeStamp'
// 超时时长
export const TOKEN_TIMEOUT_VALUE = 3600 * 12 * 1000