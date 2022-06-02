import { defineComponent } from 'vue'
import styles from './notice-card.module.scss'

export default defineComponent({
  setup() {
    return () => {
      return <div class={styles['notice-card']}>
        <div class={styles['time-box']}>
          <div>2022-05</div>
          <div>22</div>
        </div>

        <div class={styles['info-box']}>
          <a href="javascript:;">中国—东盟信息港股份有限公司智能化网络设备采购项目 竞争性谈判公告</a>
          <div>一、项目基本情况1．项目编号：0633-2240142565872．项目名称：中国—东盟信息港股份有限公司智能化网络设备采购项目3．采购方式：竞争性谈判4．采购需求：中国—东盟信息港股份有限公司智能化网络设备采购1项。如需进一步了解详细内容，详见谈判文件。5．最高限价：人民币捌佰伍拾壹万元整（￥8,510,000.00），含税。二、供应商的资格要求1．基本资...</div>
        </div>
      </div>
    }
  }
})
