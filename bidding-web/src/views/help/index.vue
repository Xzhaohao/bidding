<template>
  <com-header/>

  <div class="help-container">
    <section class="suggestion">
      <h3 class="help-title">意见建议</h3>
      <el-form label-width="70px">
        <el-form-item label="标题" prop="title">
          <el-input clearable placeholder="请输入标题"/>
        </el-form-item>
        <el-form-item label="意见建议" prop="content">
          <el-input
              autocomplete="off"
              :rows="7"
              type="textarea"
              show-word-limit
              maxlength="300"
              clearable
              placeholder="请输入您要反馈的意见建议"
          />
        </el-form-item>
      </el-form>
    </section>

    <section class="file-download">
      <h3 class="help-title">资料下载</h3>
      <ul>
        <li v-for="(item, index) in fileArr" :key="item">
          <a href="javascript:;">{{ index + 1 }}. {{ item }}</a>
        </li>
      </ul>
    </section>
  </div>

  <com-footer/>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { fileArr } from '../../constant'
import ComHeader from '@/components/header/index.vue'
import ComFooter from '../../components/footer/'
</script>

<style scoped lang="scss">
@import "index";
</style>