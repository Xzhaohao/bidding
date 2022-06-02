module.exports = {
  // 表示当前目录即为根目录，EsLint 规则将被限制到该目录下
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  // ESLint中基础配置需要继承的配置
  extends: [
    'plugin:vue/vue3-essential',
    'standard'
  ],
  // 解析器
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  // 需要修改的启用规则及各自的错误级别
  /**
   * 错误级别分为3种：
   * "off" 或 0： 关闭规则
   * "warn" 或 1：开启规则，使用警告级别的错误：warn（不会导致程序退出）
   * "error" 或 2：开启规则，使用错误级别的警告：error（当触发的时候，程序会退出）
   */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 关闭函数名后面括号之间空格的检验
    'space-before-function-paren': 'off',
    // 关闭组件命名规范检查
    'vue/multi-word-component-names': 'off',
    // 关闭：eslint不建议子元素通过v-model修改父元素传的props值
    'vue/no-mutating-props': 'off'
  }
}
