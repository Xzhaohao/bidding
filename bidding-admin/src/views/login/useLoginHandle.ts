import { ref } from 'vue'
import store from '@/store'
import { loginForm } from '@/views/login/rules'
import type { FormInstance } from 'element-plus'

const loading = ref(false)

const handleLogin = (loginFormEl: FormInstance | undefined) => {
  if (!loginFormEl) return
  loginFormEl.validate(valid => {
    if (!valid) return
    loading.value = true
    store.dispatch('user/login', loginForm.value)
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        loading.value = false
      })
  })
}

export {
  loading,
  handleLogin
}
