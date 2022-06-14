import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import styles from './index.module.scss'

export default defineComponent({
  setup() {
    const store = useStore()
    const icon = computed(() => store.getters.sidebarOpened ? 'hamburger-opened' : 'hamburger-closed')

    const toggleClick = () => store.commit('app/triggerSidebarOpened')

    return () => {
      return <div class={styles['hamburger-container']} onClick={toggleClick}>
        <span id="guide-hamburger">
          <svg-icon class={styles.hamburger} icon={icon}/>
        </span>
      </div>
    }
  }
})
