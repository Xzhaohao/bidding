import { ref } from 'vue'

interface LoginFormData {
  mobile: string;
  password: string;
  code: string;
}

export const loginForm = ref<LoginFormData>({
  mobile: '',
  password: '',
  code: ''
})

interface LoginFormRules {
  mobile: ({
    required: boolean;
    message: string;
    trigger: string;
  } | {
    min: number;
    max: number;
    message: string;
    trigger: string;
  })[];

  password: ({
    required: boolean;
    message: string;
    trigger: string;
  } | {
    min: number;
    max: number;
    message: string;
    trigger: string;
  })[];

  code: ({
    required: boolean;
    message: string;
    trigger: string;
  } | {
    min: number;
    max: number;
    message: string;
    trigger: string;
  } | {
    validator: (rule: LoginFormRules, value: string, callback: Function) => void;
    trigger: string;
  })[];
}

const validatePassword2 = (rule: LoginFormRules, value: string, callback: Function) => {
  if (value === '') {
    callback(new Error('请再次输入密码！'))
  } else if (value !== loginForm.value.password) {
    callback(new Error('两次输入的密码不一致！'))
  } else {
    callback()
  }
}

export const loginRules: Object = ref<LoginFormRules>({
  mobile: [
    { required: true, message: '请输入手机号码！', trigger: 'blur' },
    { min: 11, max: 11, message: '长度为11个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码！', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
  ],
  code: [
    { required: true, message: '请输入验证码！', trigger: 'blur' },
    { min: 4, max: 4, message: '长度在 3 到 20 个字符', trigger: 'blur' },
    { validator: validatePassword2, trigger: 'blur' }
  ]
})