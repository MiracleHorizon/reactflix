import Space from 'antd/lib/space'
import Button from 'antd/lib/button'

import { LinkWrapper } from 'components/LinkWrapper'
import styles from './AuthButtonsGroup.module.scss'

export const AuthButtonsGroup = () => (
  <Space className={styles.container}>
    <LinkWrapper href='/register'>
      <Button className={styles.join} type='primary'>
        Join now
      </Button>
    </LinkWrapper>
    <LinkWrapper href='/login'>
      <Button>Sign in</Button>
    </LinkWrapper>
  </Space>
)
