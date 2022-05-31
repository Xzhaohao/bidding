<template>
  <div class="login-container">
    <img src="@/assets/login_bg_p1.png" alt="登陆页背景" class="login-bg-p1">
    <img src="@/assets/login_bg_p2.png" alt="登陆页背景" class="login-bg-p2">

    <div class="login-box">
      <h4 class="login-box-title">
        {{ isLogin ? '登陆' : '注册' }}
        <span v-if="isLogin">没有账号？<a href="javascript:;" @click="changeForm">去注册</a></span>
        <span v-else>已有账号<a href="javascript:;" @click="changeForm"> 去登陆</a></span>
      </h4>

      <login-form v-if="isLogin"/>
      <register-form v-else/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import LoginForm from './components/Login.vue'
import RegisterForm from './components/Register.vue'

const route = useRoute()
const isLogin = ref(route.query.type === '1')
const changeForm = () => {
  isLogin.value = !isLogin.value
}
</script>

<style scoped lang="scss">
@import "index";
</style>