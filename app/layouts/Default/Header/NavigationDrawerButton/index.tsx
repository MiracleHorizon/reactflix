import Button from 'antd/lib/button'
import MenuOutlined from '@ant-design/icons/MenuOutlined'

import AppStore from 'stores/AppStore'
import styles from './NavigationDrawerButton.module.scss'

export const NavigationDrawerButton = () => {
  const handleOpenDrawer = () => AppStore.openNavDrawer()

  return <Button className={styles.btn} icon={<MenuOutlined />} onClick={handleOpenDrawer} />
}
