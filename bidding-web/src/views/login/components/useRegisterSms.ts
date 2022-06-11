import { ref } from 'vue'
import { fetchSmsCodeApi } from '../../../api/user'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import { registerForm } from './validators-register'

const smsBtnDisable = ref(false)
const smsCountDown = ref('获取短信验证码')

// 获取短信验证码
const getSmsCode = async (registerFormEl: FormInstance | undefined) => {
  if (!registerFormEl) return
  // 确认手机号是否已经通过校验
  await registerFormEl.validateField('mobile', async (valid: boolean) => {
    if (!valid) return

    const mobile = registerForm.value.mobile
    const { data } = await fetchSmsCodeApi({ mobile })
    if (data.status) {
      // 禁用获取验证码按钮
      smsBtnDisable.value = true
      ElMessage.success(data.message)

      // 一分钟倒计时
      let authTime = 60
      if (authTime > 0) {
        const timer = setInterval(() => {
          authTime--
          smsCountDown.value = authTime + ' S'
          if (authTime <= 0) {
            smsBtnDisable.value = false
            authTime = 60
            smsCountDown.value = '获取短信验证码'
            clearInterval(timer)
          }
        }, 1000)
      }
    }
  })
}

export {
  getSmsCode,
  smsBtnDisable,
  smsCountDown
}
