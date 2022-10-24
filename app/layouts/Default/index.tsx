import Layout from 'antd/lib/layout'
import BackTop from 'antd/lib/back-top'
import { FC } from 'react'

import { HeadComponent } from 'components/HeadComponent'
import { DefaultLayoutHeader } from './Header'
import { NavigationDrawer } from './NavigationDrawer'
import Props from '../Layout.types'
import styles from './DefaultLayout.module.scss'

export const DefaultLayout: FC<Props> = ({ children, ...seoData }) => (
  <Layout className={styles.layout}>
    <HeadComponent {...seoData} />
    <BackTop className={styles.backTop} />
    <DefaultLayoutHeader />
    <NavigationDrawer />
    <Layout.Content className={styles.content}>{children}</Layout.Content>
    <footer style={{ height: '72px' }}>Footer</footer>
  </Layout>
)
