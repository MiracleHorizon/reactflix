import Paragraph from 'antd/lib/typography/Paragraph'

import MovieStore from 'stores/MovieStore'
import { QuoteTitle } from 'components/ui/QuoteTitle'
import { KeywordsList } from 'components/KeywordsList'
import styles from './MovieOverview.module.scss'

export const MovieOverview = () => {
  const {
    keywords,
    details: { overview },
  } = MovieStore

  return (
    <section className={styles.overview}>
      <QuoteTitle title='Overview' />
      {overview && <Paragraph ellipsis={{ rows: 5, expandable: true, symbol: 'more' }}>{overview}</Paragraph>}
      {keywords.length > 0 && <KeywordsList keywords={keywords} />}
    </section>
  )
}
