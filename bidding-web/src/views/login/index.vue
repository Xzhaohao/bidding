<template>
  <div class="login-container">
    <img src="@/assets/login_bg_p1.png" alt="登陆页背景" class="login-bg-p1">
    <img src="@/assets/login_bg_p2.png" alt="登陆页背景" class="login-bg-p2">

    <div class="login-box">
      <h4 class="login-box-title">
        登陆
        <span>没有账号？<a href="/register">去注册</a></span>
      </h4>

      <el-form size="large">
        <el-form-item prop="mobile">
          <el-input placeholder="手机号"/>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="密码" type="password" show-password/>
        </el-form-item>
        <el-form-item prop="code">
          <div class="code-img">
            <el-input placeholder="图形验证码"/>
            <img src="data:image/jpg;base64,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" alt="">
          </div>
        </el-form-item>

        <div class="remember">
          <el-checkbox label="记住登陆状态" name="type"/>
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
      </el-form>

      <el-button size="large" type="primary" style="width: 100%;">登陆</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import "index";
</style>

<style>
.login-container .login-box .remember .el-checkbox__label {
  font-weight: 400;
}
</style>