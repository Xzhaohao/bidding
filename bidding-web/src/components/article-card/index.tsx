import { defineComponent, PropType } from 'vue'
import styles from './index.module.scss'

export default defineComponent({
  name: 'ArticleCard',

  props: {
    img: {
      type: String as PropType<string>,
      required: false
    },
    title: {
      type: String as PropType<string>,
      required: true
    },
    author: {
      type: String as PropType<string>,
      default: 'XXXXX信息科技有限公司'
    },
    summary: {
      type: String as PropType<string>,
      required: true
    },
    time: {
      type: String as PropType<string>,
      required: true
    }
  },

  setup(props) {
    return () => {
      return <div class={styles['article-card']}>
        <a href="javascript:;">
          <div class={styles['card-thumbnail']}>
            <img src="/src/assets/thumbnail-392x270.jpeg" alt="thumbnail"/>
          </div>

          <div class={styles['card-content']}>
            <p class={styles['card-title']}>{props.title}</p>
            <p class={styles['card-time']}>{props.time} ／ <span>{props.author}</span></p>
            <div class={styles['card-excerpt']}>{props.summary}</div>
          </div>
        </a>
      </div>
    }
  }
})
