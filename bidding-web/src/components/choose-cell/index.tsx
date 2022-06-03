import { defineComponent, PropType } from 'vue'
import styles from './index.module.scss'
import RadioButton from '@/components/radio-button/index.vue'

export default defineComponent({
  name: 'choose-cell',

  props: {
    label: {
      type: String as PropType<string>,
      required: true
    },
    list: {
      type: Array as PropType<Array<string>>,
      default: () => []
    },
    defaultSelected: {
      type: String as PropType<string>,
      required: false
    }
  },

  setup(props) {
    const selected = props.defaultSelected ? props.defaultSelected : props.list[0]

    return () => {
      return <div class={styles['choose-cell']}>
        <div class={styles['choose-cell-bd']}>{props.label}</div>
        <RadioButton list={props.list} defaultLabel={selected}/>
      </div>
    }
  }
})
