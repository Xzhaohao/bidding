import { ref } from 'vue'
import { FormInstance } from 'element-plus/es'
import { uuid } from './useLoginCode'
import { loginForm } from './validators-login'
import store from '../../../store'

const loading = ref(false)

const login = (loginFormEl: FormInstance | undefined) => {
  if (!loginFormEl) return
  loginFormEl.validate((valid: boolean) => {
    if (!valid) return

    loading.value = true
    const key = uuid.value
    store.dispatch('user/login', { key, ...loginForm.value })
      .then(() => {
        loading.value = false
      })
      .catch(err => {
        console.log(err)
        loading.value = false
      })
  })
}

export {
  login,
  loading
}
