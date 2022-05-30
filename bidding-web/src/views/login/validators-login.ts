import { ref } from 'vue'

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

interface LoginFormRules {
  mobile: ({
    required: boolean;
    message: string;
    trigger: string;
  } | {
    validator: (rule: LoginFormRules, value: string, callback: Function) => void;
    trigger: string;
  })[];

  password: ({
    required: boolean;
    message: string;
    trigger: string;
  } | {
    validator: (rule: LoginFormRules, value: string, callback: Function) => void;
    trigger: string;
  })[];

  code: ({
    required: boolean;
    message: string;
    trigger: string;
  } | {
    validator: (rule: LoginFormRules, value: string, callback: Function) => void;
    trigger: string;
  })[];

  remember: ({
    required: boolean;
  })[];
}

const validateMobile = (rule: LoginFormRules, value: string, callback: Function) => {
  const regex = /^[1][3-9][0-9]{9}$/
  if (!regex.test(value)) {
    callback(new Error('手机号格式不正确！'))
  } else {
    callback()
  }
}

const validatePassword = (rule: LoginFormRules, value: string, callback: Function) => {
  const regex = /^(?![\d]+$)(?![a-z]+$)(?![A-Z]+$)[\da-zA-z]{6,16}$/
  if (!regex.test(value)) {
    callback(new Error('密码至少包含数字，大、小写字母中的2种，且长度在6-16位之间！'))
  } else {
    callback()
  }
}

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