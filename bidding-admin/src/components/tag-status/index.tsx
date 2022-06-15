import { defineComponent, PropType } from 'vue'
import { state, state2 } from '@/utils/dict'

export default defineComponent({
  name: 'TagStatus',
  props: {
    status: {
      type: Number as PropType<number>,
      required: true
    },
    state: {
      type: Number as PropType<number>,
      default: 1
    }
  },
  setup(props) {
    return () => {
      return <el-tag
        style="border-color: transparent;"
        effect="dark"
        color={props.status === 1 ? '#31c27c' : '#ff5f9f'}
      >
        {props.state === 1 ? state(props.status) : state2(Boolean(props.status))}
      </el-tag>
    }
  }
})
