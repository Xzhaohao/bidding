import i18n from '@/i18n'
import { ref } from 'vue'

export interface LoginFormData {
  mobile: string;
  password: string;
}

export const loginForm = ref<LoginFormData>({
  mobile: '13555555555',
  password: 'liella123'
})

interface LoginFormRules {
  mobile: ({
    required: boolean;
    message: string;
    trigger: string;
  } | {
    required: boolean;
    validator: (rule: LoginFormRules, value: string, callback: Function) => void;
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

export const validateMobile = (rule: LoginFormRules, value: string, callback: Function) => {
  const regex = /^[1][3-9][0-9]{9}$/
  if (!regex.test(value)) {
    callback(new Error(i18n.global.t('login.mobileRule')))
  } else {
    callback()
  }
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
  mobile: [
    { required: true, message: i18n.global.t('login.mobileRequired'), trigger: 'blur' },
    { required: true, trigger: 'blur', validator: validateMobile }
  ],
  password: [
    { required: true, message: i18n.global.t('login.passwordRequired'), trigger: 'blur' },
    { required: true, trigger: 'blur', validator: validatePassword }
  ]
})
