import { ref } from 'vue'
import store from '@/store'
import { loginForm } from '@/views/login/rules'
import type { FormInstance } from 'element-plus'

const isShow = ref(false)
const loading = ref(false)

// 显示与隐藏人机验证
const onShow = () => {
  isShow.value = true
  loading.value = true
}

const onClose = () => {
  isShow.value = false
  loading.value = false
}

const handleLogin = (loginFormEl: FormInstance | undefined) => {
  if (!loginFormEl) return
  loginFormEl.validate(valid => {
    if (!valid) return

    onShow()
  })
}

const onSuccess = () => {
  store.dispatch('user/login', loginForm.value)
    .catch(err => {
      console.log(err)
    })
    .finally(() => onClose())
}

export {
  loading,
  isShow,
  handleLogin,
  onClose,
  onSuccess
}
