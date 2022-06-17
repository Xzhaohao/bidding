<template>
  <com-header/>

  <div class="ident-container">
    <title-header title="完善资料" hidden="false"/>

    <section class="warn-cell">
      <el-alert title="请务必按照营业执照登记的信息填写" type="warning" show-icon :closable="false" />
    </section>

    <section class="form-cell">
      <el-alert title="企业基本信息" :closable="false" />

      <el-form size="large" label-width="140px">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="企业名称" required>
              <el-input placeholder="企业名称"/>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="企业性质" required>
              <el-select placeholder="企业性质">
                <el-option label="国营"/>
                <el-option label="个体"/>
                <el-option label="合资"/>
                <el-option label="外资"/>
                <el-option label="私营"/>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="法人代表" required>
              <el-input placeholder="法人代表"/>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="统一社会信用代码" required>
              <el-input placeholder="统一社会信用代码"/>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="所属行业" required>
              <el-select placeholder="所属行业">
                <el-option label="农、林、牧、渔业采矿业"/>
                <el-option label="制造业"/>
                <el-option label="电力、热力、燃气及水生产和供应业建筑业"/>
                <el-option label="批发和零售业"/>
                <el-option label="交通运输、仓储和邮政业"/>
                <el-option label="住宿和餐饮业"/>
                <el-option label="信息传输、软件和信息技术服务业金融业"/>
                <el-option label="房地产业"/>
                <el-option label="租赁和商务服务业"/>
                <el-option label="科学研究和技术服务业"/>
                <el-option label="水利、环境和公共设施管理业居民服务、修理和其他服务业"/>
                <el-option label="教育"/>
                <el-option label="卫生和社会工作"/>
                <el-option label="文化、体育和娱乐业"/>
                <el-option label="公共管理、社会保障和社会组织"/>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="公司电话" required>
              <el-input placeholder="公司电话"/>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="客服电话">
              <el-input placeholder="客服电话"/>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="工商注册地址" required>
              <el-input placeholder="工商注册地址"/>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="企业传真">
              <el-input placeholder="企业传真"/>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="手机号码" required>
              <el-input placeholder="手机号码"/>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="备注">
          <el-input :rows="3" type="textarea" placeholder="备注"/>
        </el-form-item>
      </el-form>
    </section>

    <section class="form-cell">
      <el-alert title="转账凭证" :closable="false" />
      <div class="alert">
        <p>请向XX科技有限公司对公账户</p>
        <strong>【6100 0000 0000 0000 0000】</strong>
        <p>转账</p>
        <strong>0.66</strong>
        <p>元。并将转账凭证/回执单上传作为审核依据。</p>
      </div>

      <el-form size="large" label-position="top">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="对公账号" required>
              <el-input placeholder="对公账号"/>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="转账银行" required>
              <el-input placeholder="转账银行"/>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="转账时间" required>
              <el-date-picker type="datetime" placeholder="选择转账时间"/>
            </el-form-item>
          </el-col>
        </el-row>

        <el-upload :limit="1" :auto-upload="false">
          <template #trigger>
            <el-button type="primary">上传转账凭证/回执单</el-button>
          </template>
        </el-upload>
      </el-form>
    </section>

    <section class="form-cell">
      <el-alert title="上传附件" :closable="false" />
      <el-alert title="文件上传须知" type="warning">
        <template #default>
          <ol>
            <li>请保证所传证件照文字清晰可识别！上传单个附件大小限制为1M；</li>
            <li>原件照片，扫描件或加盖公章的复印件，大小不超过5M。</li>
          </ol>
        </template>
      </el-alert>

      <el-form size="large" label-position="top">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="法人证件正面" required>
              <el-upload :limit="1" :auto-upload="false">
                <template #trigger>
                  <el-button type="primary">上传法人证件正面</el-button>
                </template>
              </el-upload>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="法人证件反面" required>
              <el-upload :limit="1" :auto-upload="false">
                <template #trigger>
                  <el-button type="primary">上传法人证件反面</el-button>
                </template>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="营业执照" required>
              <el-upload :limit="1" :auto-upload="false">
                <template #trigger>
                  <el-button type="primary">上传营业执照</el-button>
                </template>
              </el-upload>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="标识(LOGO)" required>
              <el-upload :limit="1" :auto-upload="false">
                <template #trigger>
                  <el-button type="primary">上传标识(LOGO)</el-button>
                </template>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </section>

    <section class="submit-cell">
      <el-button size="large" type="primary">提交</el-button>
    </section>
  </div>

  <com-footer/>
</template>

<script setup lang="ts">
import ComHeader from '@/components/header/index.vue'
import ComFooter from '../../components/footer/'
import TitleHeader from '../../components/title-header/'
</script>

<style scoped lang="scss">
@import "index";
</style>
