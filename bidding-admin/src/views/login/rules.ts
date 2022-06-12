import i18n from '@/i18n'
import { ref } from 'vue'

export interface LoginFormData {
  username: string;
  password: string;
}

export const loginForm = ref<LoginFormData>({
  username: 'admin',
  password: 'x123456'
})

interface LoginFormRules {
  username: ({
    required: boolean;
    message: string;
    trigger: string;
  })[];

  password: ({
    required: boolean;
    message: string;
    trigger: string;
  } | {
    required: boolean;
    validator: (rule: LoginFormRules, value: string, callback: Function) => void;
    trigger: string;
  })[];
}

const validatePassword = (rule: LoginFormRules, value: string, callback: Function) => {
  const regex = /^(?![\d]+$)(?![a-z]+$)(?![A-Z]+$)[\da-zA-z]{6,16}$/
  if (!regex.test(value)) {
    callback(new Error(i18n.global.t('login.passwordRule')))
  } else {
    callback()
  }
}

export const loginRules = ref({
  username: [
    { required: true, message: i18n.global.t('login.usernameRule'), trigger: 'blur' }
  ],
  password: [
    { required: true, message: i18n.global.t('login.passwordRequired'), trigger: 'blur' },
    { required: true, trigger: 'blur', validator: validatePassword }
  ]
})
