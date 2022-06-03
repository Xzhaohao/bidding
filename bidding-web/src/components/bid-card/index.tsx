import { defineComponent, PropType } from 'vue'
import styles from './index.module.scss'

export default defineComponent({
  name: 'BidCard',

  props: {
    title: {
      type: String as PropType<string>,
      required: true
    },
    no: {
      type: String as PropType<string>,
      required: false
    },
    bidType: {
      type: String as PropType<string>,
      required: false
    },
    pushTime: {
      type: String as PropType<string>,
      required: true
    },
    endTime: {
      type: String as PropType<string>,
      required: true
    },
    num: {
      type: String as PropType<string>,
      required: false
    },
    maxPrice: {
      type: String as PropType<string>,
      required: false
    }
  },

  setup(props, { slots }) {
    return () => {
      return <div class={styles['bid-card']}>
        <h3 class={styles['card-header']}>{props.title}</h3>

        <div class={styles['card-body']}>
          {
            props.no
              ? <el-row style="margin: 3px 0;">
                <el-col span={9}>项目编号</el-col>
                <el-col span={15}>{props.no}</el-col>
              </el-row>
              : null
          }
          {
            props.bidType
              ? <el-row style="margin: 3px 0;">
                <el-col span={9}>招标方式</el-col>
                <el-col span={15}>{props.bidType}</el-col>
              </el-row>
              : null
          }
          <el-row style="margin: 3px 0;">
            <el-col span={9}>发布时间</el-col>
            <el-col span={15}>{props.pushTime}</el-col>
          </el-row>
          <el-row style="margin: 3px 0;">
            <el-col span={9}>截止时间</el-col>
            <el-col span={15}>{props.endTime}</el-col>
          </el-row>
          {
            props.num
              ? <el-row style="margin: 3px 0;">
                <el-col span={9}>采购数量</el-col>
                <el-col span={15}>{props.num}</el-col>
              </el-row>
              : null
          }
          {
            props.maxPrice
              ? <el-row style="margin: 3px 0;">
                <el-col span={9}>最高限价</el-col>
                <el-col span={15} style="font-size: 16px; color: #cc3300;">{props.maxPrice}</el-col>
              </el-row>
              : null
          }
        </div>

        <div class={styles['card-footer']}>
          {slots.default && slots.default()}
        </div>
      </div>
    }
  }
})
