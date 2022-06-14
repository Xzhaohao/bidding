<template>
  <div class="login-container">
    <el-form class="login-form" ref="loginFormRef" :model="loginForm" :rules="loginRules">
      <div class="title-container">
        <h3 class="title">{{ $t('login.title') }}</h3>
        <lang-select class="lang-select" effect="light" />
      </div>

      <!--用户名-->
      <el-form-item prop="mobile">
        <span class="svg-container"><svg-icon icon="user"/></span>

        <el-input
          v-model="loginForm.mobile"
          autocomplete="off" :placeholder="$t('login.mobile')"
          name="username" type="text"
        />
      </el-form-item>

      <!--密码-->
      <el-tooltip v-model:visible="capsTooltip" manual :content="$t('login.capslock')" placement="right">
        <el-form-item prop="password">
          <span class="svg-container"><svg-icon icon="password"/></span>

          <el-input
            v-model="loginForm.password"
            autocomplete="off"
            :placeholder="$t('login.password')"
            name="password"
            :type="passwordType"
            @blur="capsTooltip = false"
            @keyup="checkCapslock"
          />

          <span class="show-pwd">
          <span class="svg-container" @click="onchangePwd">
            <svg-icon :icon="passwordType === 'password' ? 'eye' : 'eye-open'"/>
          </span>
        </span>
        </el-form-item>
      </el-tooltip>

      <el-button
        :loading="loading" @click="handleLogin(loginFormRef)"
        type='primary' size="large"
        style='width: 100%;margin-bottom: 30px;'
      >
        {{ $t('login.loginBtn') }}
      </el-button>

    </el-form>

    <vcode :show="isShow" @success="onSuccess" @close="onClose"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { loginForm, loginRules } from './rules'
import type { FormInstance } from 'element-plus'
import LangSelect from '@/components/langSelect/index.vue'
import Vcode from 'vue3-puzzle-vcode'

// 密码明文/秘文状态
import { passwordType, onchangePwd } from '@/views/login/useChangePasswordType'
// 登陆相关
import { loading, isShow, handleLogin, onSuccess, onClose } from '@/views/login/useLoginHandle'

const loginFormRef = ref<FormInstance>()

// 键盘大写提示
const capsTooltip = ref(false)
const checkCapslock = (e: any) => {
  const { key } = e
  capsTooltip.value = key && key.length === 1 && (key >= 'A' && key <= 'Z')
}
</script>

<style scoped lang="scss">
@import "index";
</style>
