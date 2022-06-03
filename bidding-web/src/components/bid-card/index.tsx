import { defineComponent } from 'vue'
import styles from './index.module.scss'

export default defineComponent({
  name: 'BidCard',

  setup() {
    return () => {
      return <div class={styles['bid-card']}>
        <h3 class={styles['card-header']}>中国—东盟信息港股份有限公司新大楼办公场所工位扩容强弱电改造采购项目</h3>

        <div class={styles['card-body']}>
          <el-row>
            <el-col span={9}>项目编号</el-col>
            <el-col span={15}>0747-2260SCCGX089</el-col>
          </el-row>
          <el-row>
            <el-col span={9}>招标方式</el-col>
            <el-col span={15}>竞争性谈判</el-col>
          </el-row>
          <el-row>
            <el-col span={9}>项目编号</el-col>
            <el-col span={15}>0747-2260SCCGX089</el-col>
          </el-row>
          <el-row>
            <el-col span={9}>项目编号</el-col>
            <el-col span={15}>0747-2260SCCGX089</el-col>
          </el-row>
        </div>

        <div class={styles['card-footer']}>
          <el-button type="primary">竞谈答复</el-button>
          <div class={styles['audit-status']}>已公示</div>
        </div>
      </div>
    }
  }
})
