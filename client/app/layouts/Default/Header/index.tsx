import { Header } from 'antd/lib/layout/layout'

import { AppLogo } from 'components/ui/AppLogo'
import { NavigationDrawerButton } from './NavigationDrawerButton'
import { HeaderNavigationMenu } from './NavigationMenu'
import { HeaderUserMenu } from './UserMenu'
import styles from './DefaultLayoutHeader.module.scss'

export const DefaultLayoutHeader = () => (
  <Header className={styles.container}>
    <NavigationDrawerButton />
    <AppLogo />
    <div className={styles.content}>
      <HeaderNavigationMenu />
      <HeaderUserMenu />
    </div>
  </Header>
)
