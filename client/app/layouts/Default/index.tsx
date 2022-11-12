import Layout from 'antd/lib/layout'
import BackTop from 'antd/lib/back-top'
import { FC } from 'react'

import { HeadComponent } from 'components/HeadComponent'
import { PageContentLoader } from 'components/ui/loaders/PageContent'
import { DefaultLayoutHeader } from './Header'
import { NavigationDrawer } from './NavigationDrawer'
import { useChangeRoute } from 'hooks/useChangeRoute'
import Props from '../Layout.types'
import styles from './DefaultLayout.module.scss'

export const DefaultLayout: FC<Props> = ({ children, ...seoData }) => (
  <Layout className={styles.layout}>
    <HeadComponent {...seoData} />
    <BackTop className={styles.backTop} />
    <DefaultLayoutHeader />
    <NavigationDrawer />
    {!useChangeRoute() ? <Layout.Content className={styles.content}>{children}</Layout.Content> : <PageContentLoader />}
    <footer style={{ height: '72px' }}>Footer</footer>
  </Layout>
)
