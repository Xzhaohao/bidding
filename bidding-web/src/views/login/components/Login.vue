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
        @click="login"
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
import { useStore } from 'vuex'
import { loginForm, loginRules } from './validators-login'
// 验证码相关
import { changeImageCode, imgCode, uuid } from './useLoginCode'
changeImageCode()

// 登陆操作
const store = useStore()
const loginFormRef = ref(null)
const loading = ref(false)
const login = () => {
  // @ts-ignore
  loginFormRef.value.validate((valid: boolean) => {
    if (!valid) return

    loading.value = true
    const key = uuid.value
    store.dispatch('user/login', { key, ...loginForm.value })
      .then(() => {
        loading.value = false
      })
      .catch(err => {
        console.log(err)
        loading.value = false
      })
  })
}
</script>

<style scoped lang="scss">
@import "login";
</style>
