import { defineComponent, PropType } from 'vue'
import TitleHeader from '../../components/title-header/'
import styles from './index.module.scss'

export default defineComponent({
  name: 'NotifyCard',

  props: {
    title: {
      type: String as PropType<string>,
      required: true
    },
    link: {
      type: String as PropType<string>,
      required: true
    },
    list: {
      type: Array as PropType<Array<any>>,
      default: () => []
    }
  },

  setup(props) {
    return () => {
      return <div class={styles['card-container']}>
        <TitleHeader title={props.title} link={props.link}/>

        <ul>
          {
            props.list?.map((item, index) => <li>
              <a href={item.link}>{index + 1}. {item.title}</a>
            </li>)
          }
        </ul>
      </div>
    }
  }
})
