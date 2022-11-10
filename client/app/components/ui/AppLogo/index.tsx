import Title from 'antd/lib/typography/Title'

import { LinkWrapper } from 'components/LinkWrapper'
import { APP_NAME } from 'utils/constants/app'
import styles from './AppLogo.module.scss'

export const AppLogo = () => (
  <LinkWrapper href='/'>
    <div className={styles.logo}>
      <Title level={2}>{APP_NAME.toUpperCase()}</Title>
    </div>
  </LinkWrapper>
)
