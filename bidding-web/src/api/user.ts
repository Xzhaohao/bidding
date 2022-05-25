import request from '../utils/http'
import { ElMessage } from 'element-plus'

class User {
  static async login(data: any) {
    const { data: result } = await request({
      url: '/pub/user/login',
      method: 'post',
      data
    })

    if (!result.status) return ElMessage(result.message)
    // ...
  }
}

export default User