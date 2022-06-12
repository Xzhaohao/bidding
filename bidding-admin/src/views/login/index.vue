<template>
  <div class="login-container">
    <el-form class="login-form" ref="loginFormRef" :model="loginForm" :rules="loginRules">
      <div class="title-container">
        <h3 class="title">{{ $t('login.title') }}</h3>
      </div>

      <!--用户名-->
      <el-form-item prop="username">
        <span class="svg-container"><svg-icon icon="user"/></span>

        <el-input
          v-model="loginForm.username"
          autocomplete="off" :placeholder="$t('login.username')"
          name="username" type="text"
        />
      </el-form-item>

      <!--密码-->
      <el-form-item prop="password">
        <span class="svg-container"><svg-icon icon="password"/></span>

        <el-input
          v-model="loginForm.password"
          autocomplete="off"
          :placeholder="$t('login.password')"
          name="password"
          :type="passwordType"
        />

        <span class="show-pwd">
          <span class="svg-container" @click="onchangePwd">
            <svg-icon :icon="passwordType === 'password' ? 'eye' : 'eye-open'"/>
          </span>
        </span>
      </el-form-item>

      <el-button
        :loading="loading" @click="handleLogin(loginFormRef)"
        type='primary' size="large"
        style='width: 100%;margin-bottom: 30px;'
      >
        {{ $t('login.loginBtn') }}
      </el-button>

    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { loginForm, loginRules } from './rules'
import type { FormInstance } from 'element-plus'

// 密码明文/秘文状态
import { passwordType, onchangePwd } from '@/views/login/useChangePasswordType'
// 登陆相关
import { loading, handleLogin } from '@/views/login/useLoginHandle'

const loginFormRef = ref<FormInstance>()
</script>

<style scoped lang="scss">
@import "index";
</style>
