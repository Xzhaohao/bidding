import { defineComponent, PropType } from 'vue'
import { state } from '@/utils/dict'

export default defineComponent({
  name: 'TagStatus',
  props: {
    status: {
      type: Number as PropType<number>,
      required: true
    }
  },
  setup(props) {
    return () => {
      return <el-tag
        style="border-color: transparent;"
        effect="dark"
        color={props.status === 1 ? '#31c27c' : '#ff5f9f'}
      >
        {state(props.status)}
      </el-tag>
    }
  }
})
