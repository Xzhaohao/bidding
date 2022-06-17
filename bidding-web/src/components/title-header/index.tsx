import { defineComponent, PropType } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import styles from './index.module.scss'

export default defineComponent({
  name: 'TitleHeader',

  props: {
    title: {
      type: String as PropType<string>,
      required: true
    },
    link: {
      type: String as PropType<string>,
      required: false
    },
    padding: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    hidden: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },

  setup(props) {
    return () => {
      return <div class={styles['title-header']} style={props.padding ? 'padding: 0 10px;' : ''}>
        <div class={styles.left}>
          <div class={styles.line}></div>
          <h2 class={styles.title}>{props.title}</h2>
        </div>

        {/* @ts-ignore */}
        { props.hidden ? '' : <el-link type="primary" href={props.link}>更多<el-icon><ArrowRight/></el-icon></el-link> }
      </div>
    }
  }
})
