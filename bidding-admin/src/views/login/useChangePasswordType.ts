import { ref } from 'vue'

const passwordType = ref('password')

// 修改密码明文/秘文状态
const onchangePwd = () => {
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}

export {
  passwordType,
  onchangePwd
}
