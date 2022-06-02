import { ref } from 'vue'
import { LoginFormRules, validateMobile, validatePassword } from './validators'

interface LoginFormData {
  mobile: string;
  password: string;
  code: string;
  remember: boolean;
}

export const loginForm = ref<LoginFormData>({
  mobile: '',
  password: '',
  code: '',
  remember: true
})

const validateCode = (rule: LoginFormRules, value: string, callback: Function) => {
  const regex = /^[0-9a-zA-Z]{4}$/
  if (!regex.test(value)) {
    callback(new Error('验证码格式不合法！'))
  } else {
    callback()
  }
}

export const loginRules: Object = ref<LoginFormRules>({
  mobile: [
    { required: true, message: '请输入手机号码！', trigger: 'blur' },
    { validator: validateMobile, trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码！', trigger: 'blur' },
    { validator: validatePassword, trigger: 'blur' }
  ],
  code: [
    { required: true, message: '请输入验证码！', trigger: 'blur' },
    { validator: validateCode, trigger: 'blur' }
  ],
  remember: [
    { required: false }
  ]
})
