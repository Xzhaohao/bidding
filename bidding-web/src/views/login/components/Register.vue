<template>
  <el-form size="large" :model="registerForm" :rules="registerRules" ref="registerFormRef" class="register-form">
    <el-form-item prop="mobile">
      <el-input v-model="registerForm.mobile" placeholder="手机号"/>
    </el-form-item>
    <el-form-item prop="code">
      <div class="sms-code">
        <el-input v-model="registerForm.code" placeholder="短信验证码"/>
        <el-button type="primary">获取短信验证码</el-button>
      </div>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="registerForm.password" placeholder="密码" type="password" show-password/>
    </el-form-item>
    <el-form-item prop="password2">
      <el-input v-model="registerForm.password2" placeholder="确认密码" type="password" show-password/>
    </el-form-item>

    <el-button size="large" type="primary" style="width: 100%;">注册</el-button>

    <div class="accept">
      <el-checkbox v-model="accept" label="阅读并接受"/>
      <a href="javascript:;">《用户协议》</a>
      <span>及</span>
      <a href="javascript:;">《隐私权保护声明》</a>
    </div>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { registerForm, registerRules } from './validators-register'

const accept = ref(false)
</script>

<style scoped lang="scss">
@import "register";
</style>

<style>
.register-form .accept .el-checkbox__label {
  font-weight: 400;
}
</style>