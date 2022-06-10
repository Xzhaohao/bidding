import { ref } from 'vue'
import { loginImageCodeApi } from '../../../api/user'

const imgCode = ref('')
const uuid = ref('')

// 点击更换验证码
const changeImageCode = () => {
  loginImageCodeApi().then(({ data }) => {
    imgCode.value = data.data.code
    uuid.value = data.data.key
  })
}

export {
  changeImageCode,
  imgCode,
  uuid
}
