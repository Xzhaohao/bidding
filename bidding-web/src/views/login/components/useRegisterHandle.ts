import { ref } from 'vue'
import { registerForm } from './validators-register'
import type { FormInstance } from 'element-plus'
import { registerApi } from '../../../api/user'
import { ElMessage } from 'element-plus'

const accept = ref(false)
const loading = ref(false)

const handleRegister = (registerFormEl: FormInstance | undefined) => {
  if (!registerFormEl) return

  registerFormEl.validate(async (valid: boolean) => {
    if (!valid) return
    if (!accept.value) return ElMessage.warning('请勾选协议!')

    loading.value = true
    const { data } = await registerApi(registerForm.value)
    loading.value = false
    if (data.status) {
      ElMessage.success(data.message)
      // 重置表单
      registerFormEl.resetFields()
    }
  })
}

export {
  handleRegister,
  accept,
  loading
}
