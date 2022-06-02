import { useRouter } from 'vue-router'
import { Store } from 'vuex'

export default function useMenuSelected(store: Store<any>) {
  const router = useRouter()

  // 菜单项被选中
  const menuSelected = (key: string) => {
    if (key === 'langChange') return
    store.commit('app/setSelectedMenu', key)
    router.push(`/${key}`)
  }

  // logo被点击时触发
  const logoClicked = () => {
    store.commit('app/setSelectedMenu', '/')
  }

  return {
    menuSelected,
    logoClicked
  }
}
