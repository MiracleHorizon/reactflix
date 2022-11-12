import Spin from 'antd/lib/spin'
import Layout from 'antd/lib/layout'

import styles from './PageContentLoader.module.scss'

export const PageContentLoader = () => (
  <Layout.Content className={styles.loader}>
    <Spin size='large' delay={330} />
  </Layout.Content>
)
