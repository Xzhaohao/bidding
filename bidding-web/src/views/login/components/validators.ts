export interface LoginFormRules {
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


export interface RegisterFormRules {
  mobile: ({
    required: boolean;
    message: string;
    trigger: string;
  } | {
    validator: (rule: RegisterFormRules, value: string, callback: Function) => void;
    trigger: string;
  })[];

  code: ({
    required: boolean;
    message: string;
    trigger: string;
  } | {
    validator: (rule: RegisterFormRules, value: string, callback: Function) => void;
    trigger: string;
  })[];

  password: ({
    required: boolean;
    message: string;
    trigger: string;
  } | {
    validator: (rule: RegisterFormRules, value: string, callback: Function) => void;
    trigger: string;
  })[];

  password2: ({
    required: boolean;
    message: string;
    trigger: string;
  } | {
    validator: (rule: RegisterFormRules, value: string, callback: Function) => void;
    trigger: string;
  })[];
}


export const validateMobile = (rule: LoginFormRules | RegisterFormRules, value: string, callback: Function) => {
  const regex = /^[1][3-9][0-9]{9}$/
  if (!regex.test(value)) {
    callback(new Error('手机号格式不正确！'))
  } else {
    callback()
  }
}


export const validateSmsCode = (rule: RegisterFormRules, value: string, callback: Function) => {
  const regex = /^[0-9]{6}$/
  if (!regex.test(value)) {
    callback(new Error('短信验证码格式不正确！'))
  } else {
    callback()
  }
}


export const validatePassword = (rule: LoginFormRules | RegisterFormRules, value: string, callback: Function) => {
  const regex = /^(?![\d]+$)(?![a-z]+$)(?![A-Z]+$)[\da-zA-z]{6,16}$/
  if (!regex.test(value)) {
    callback(new Error('密码至少包含数字，大、小写字母中的2种，且长度在6-16位之间！'))
  } else {
    callback()
  }
}