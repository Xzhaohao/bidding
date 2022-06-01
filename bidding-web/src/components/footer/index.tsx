import { defineComponent } from 'vue'
import styles from './index.module.scss'

export default defineComponent({
  setup() {
    return () => {
      return <footer>
        <div class={styles['foot-container']}>
          <div class={styles['footer-text']}>&copy; 2021-2022&nbsp;&nbsp;&nbsp;&nbsp;招投标服务平台（广西XX科技有限公司）版权所有</div>
          <div class={styles['footer-text']}>
            <span
              style="margin-right: 100px">Copyright&copy;kuro.com&nbsp;&nbsp;&nbsp;&nbsp;. All Rights Reserved.</span>
            <span>桂ICP备1999999999号&nbsp;&nbsp;&nbsp;&nbsp;桂公安备 11118888828998号</span>
          </div>
          <div class={styles['foot-logo']}>
            <img src="/src/assets/logo.png" alt="logo"/>
          </div>
        </div>
      </footer>
    }
  }
})