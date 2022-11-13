import Spin from 'antd/lib/spin'
import Layout from 'antd/lib/layout'
import LoadingOutlined from '@ant-design/icons/LoadingOutlined'

import styles from './PageContentLoader.module.scss'

export const PageContentLoader = () => (
  <Layout.Content className={styles.loader}>
    <Spin size='large' delay={330} indicator={<LoadingOutlined />} />
  </Layout.Content>
)
