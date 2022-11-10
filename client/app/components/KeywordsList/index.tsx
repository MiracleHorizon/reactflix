import Button from 'antd/lib/button'
import { FC, memo } from 'react'

import styles from './KeywordsList.module.scss'

export const KeywordsList: FC<{ keywords: string[] }> = memo(({ keywords }) => (
  <ul className={styles.list}>
    {keywords.slice(0, 5).map(keyword => (
      <Button key={keyword}>{keyword}</Button>
    ))}
    {keywords.length > 5 && <Button className={styles.moreKeywordsBtn}>{keywords.length - 5} more</Button>}
  </ul>
))

KeywordsList.displayName = 'KeywordsList'
