import { NavigationMenu } from 'layouts/Default/NavigationMenu'
import styles from './HeaderNavigationMenu.module.scss'

export const HeaderNavigationMenu = () => (
  <nav className={styles.nav}>
    <NavigationMenu placement='header' />
  </nav>
)
