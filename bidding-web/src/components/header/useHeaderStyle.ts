import { ref } from 'vue'
import { useRoute } from 'vue-router'

// 首页与非首页的样式不同
export default function useHeaderStyle() {
  const route = useRoute()

  const logo = ref('/src/assets/hd_logo.png')
  const logoStyle = ref({ top: '20px', left: '15px' })
  const menuDark = ref(true)
  const menuItemSelectedBg = ref('linear-gradient(rgba(155, 99, 238, 0.6), rgba(155, 99, 238, 0))')

  if (route.fullPath === '/') {
    logo.value = '/src/assets/hd_logo.png'
    logoStyle.value = { top: '20px', left: '15px' }
    menuDark.value = true
    menuItemSelectedBg.value = 'linear-gradient(rgba(155, 99, 238, 0.6), rgba(155, 99, 238, 0))'
  } else {
    logo.value = '/src/assets/logo.png'
    logoStyle.value = { top: '0px', left: '0px' }
    menuDark.value = false
    menuItemSelectedBg.value = '#FFFFFF'
  }

  return {
    logo,
    logoStyle,
    menuDark,
    menuItemSelectedBg
  }
}