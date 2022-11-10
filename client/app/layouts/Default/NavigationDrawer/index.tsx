import Drawer from 'antd/lib/drawer'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useMediaQuery } from 'usehooks-ts'

import { NavigationMenu } from 'layouts/Default/NavigationMenu'
import AppStore from 'stores/AppStore'
import styles from './NavigationDrawer.module.scss'

export const NavigationDrawer = observer(() => {
  const isSmallScreen = useMediaQuery('(min-width: 0px) and (max-width: 768px)')

  const handleCloseDrawer = () => AppStore.closeNavDrawer()

  useEffect(() => {
    if (!isSmallScreen) handleCloseDrawer()
  }, [isSmallScreen])

  return (
    <Drawer
      closable
      keyboard
      destroyOnClose
      title='Menu'
      placement='left'
      open={AppStore.navDrawerOpen}
      className={styles.drawer}
      onClose={handleCloseDrawer}
    >
      <NavigationMenu placement='drawer' />
    </Drawer>
  )
})
