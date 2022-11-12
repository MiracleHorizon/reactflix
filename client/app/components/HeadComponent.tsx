import Head from 'next/head'

import { SeoParams } from 'types'
import { APP_NAME } from 'utils/constants/app'
import { APP_DESCRIPTION, APP_KEYWORDS } from 'utils/constants/seo'

export const HeadComponent = ({ title, description, keywords }: SeoParams) => (
  <Head>
    <title>{title ? title : APP_NAME}</title>
    <meta name='description' content={`${APP_DESCRIPTION} ${description || ''}`} />
    <meta name='keywords' content={APP_KEYWORDS.concat(keywords ? keywords : []).join(', ')} />
    <meta name='robots' content='index, follow' />
    <link rel='icon' href='/favicon.ico' />
  </Head>
)
