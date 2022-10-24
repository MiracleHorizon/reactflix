import { FC, memo } from 'react'
import Title from 'antd/lib/typography/Title'

import { LinkWrapper } from 'components/LinkWrapper'
import styles from './QuoteTitle.module.scss'

export const QuoteTitle: FC<Props> = memo(({ title, href }) => (
  <div className={styles.container}>
    {href ? (
      <LinkWrapper href={href}>
        <Title level={2} ellipsis={{ rows: 2 }}>
          {title}
        </Title>
      </LinkWrapper>
    ) : (
      <Title level={2} ellipsis={{ rows: 2 }}>
        {title}
      </Title>
    )}
  </div>
))

QuoteTitle.displayName = 'QuoteTitle'

interface Props {
  title: string
  href?: string
}
