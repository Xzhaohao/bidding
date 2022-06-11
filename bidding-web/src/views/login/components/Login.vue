<template>
  <el-form size="large" :model="loginForm" :rules="loginRules" ref="loginFormRef" class="login-form">
    <el-form-item prop="mobile">
      <el-input v-model="loginForm.mobile" placeholder="手机号"/>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="loginForm.password" placeholder="密码" type="password" show-password/>
    </el-form-item>
    <el-form-item prop="code">
      <div class="code-img">
        <el-input v-model="loginForm.code" placeholder="图形验证码"/>
        <img @click="changeImageCode" :src="imgCode" alt="图形验证码">
      </div>
    </el-form-item>

    <div class="remember">
      <el-checkbox v-model="loginForm.remember" label="记住登陆状态"/>
      <div>
        <a href="/help" class="help">帮助
          <el-icon>
            <QuestionFilled/>
          </el-icon>
        </a>
        <el-divider direction="vertical"/>
        <a href="/forget">忘记密码</a>
      </div>
    </div>

    <el-button
        @click="login(loginFormRef)"
        size="large" type="primary"
        style="width: 100%;"
        :loading="loading"
    >
      登陆
    </el-button>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { loginForm, loginRules } from './validators-login'
// 验证码相关
import { changeImageCode, imgCode } from './useLoginCode'
// 登陆相关
import { login, loading } from './useLoginHandle'

changeImageCode()

const loginFormRef = ref<FormInstance>()
</script>

<style scoped lang="scss">
@import "login";
</style>
