import { ref } from 'vue'
import { registerForm } from './validators-register'
import type { FormInstance } from 'element-plus'
import { registerApi } from '../../../api/user'
import { ElMessage } from 'element-plus'
// @ts-ignore
import md5 from 'md5'

const accept = ref(false)
const loading = ref(false)

const handleRegister = (registerFormEl: FormInstance | undefined) => {
  if (!registerFormEl) return

  registerFormEl.validate(async (valid: boolean) => {
    if (!valid) return
    if (!accept.value) return ElMessage.warning('请勾选协议!')

    loading.value = true
    const { mobile, company, password, password2, code } = registerForm.value
    // 密码经过md5加密后再传到后台
    const data: any = await registerApi({ mobile, company, code, password: md5(password), password2: md5(password2) })
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
