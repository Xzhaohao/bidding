import { ref } from 'vue'
import { RegisterFormRules, validatePassword, validateMobile, validateSmsCode } from './validators'

interface RegisterFormData {
  mobile: string;
  code: string;
  password: string;
  password2: string;
}

export const registerForm = ref<RegisterFormData>({
  mobile: '',
  code: '',
  password: '',
  password2: ''
})


const validatePassword2 = (rule: RegisterFormRules, value: string, callback: Function) => {
  if (value !== registerForm.value.password) {
    callback(new Error('两次输入的密码不一致！'))
  } else {
    callback()
  }
}


export const registerRules: Object = ref<RegisterFormRules>({
  mobile: [
    { required: true, message: '请输入手机号码！', trigger: 'blur' },
    { validator: validateMobile, trigger: 'blur' }
  ],
  code: [
    { required: true, message: '请输入验证码！', trigger: 'blur' },
    { validator: validateSmsCode, trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码！', trigger: 'blur' },
    { validator: validatePassword, trigger: 'blur' }
  ],
  password2: [
    { required: true, message: '请输入密码！', trigger: 'blur' },
    { validator: validatePassword2, trigger: 'blur' }
  ]
})