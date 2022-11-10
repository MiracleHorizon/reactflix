import Menu from 'antd/lib/menu'
import Avatar from 'antd/lib/avatar/avatar'
import Dropdown from 'antd/lib/dropdown'
import UserOutlined from '@ant-design/icons/UserOutlined'
import { memo } from 'react'

import UserStore from 'stores/UserStore'
import { LinkWrapper } from 'components/LinkWrapper'
import { HEADER_USER_MENU_OPTIONS } from 'utils/constants/app'
import { IUser } from 'models/IUser'
import styles from './UserBar.module.scss'

export const UserBar = memo(({ login, avatarPath }: IUser) => {
  const handleSignOut = () => UserStore.signOut()

  return (
    <Dropdown
      placement='bottomLeft'
      trigger={['click']}
      overlayClassName={styles.overlay}
      overlay={
        <Menu
          items={[
            { label: login, key: login },
            { type: 'divider' },
            ...HEADER_USER_MENU_OPTIONS.map(({ title, path }) => ({
              key: path,
              label: <LinkWrapper href={`/profile/${path}`}>{title}</LinkWrapper>,
            })),
            { label: 'Sign out', key: 'signOut', danger: true, onClick: handleSignOut },
          ]}
        />
      }
    >
      <Avatar src={avatarPath} icon={!avatarPath && <UserOutlined />} className={styles.avatar} />
    </Dropdown>
  )
})

UserBar.displayName = 'UserBar'
