import List from 'antd/lib/list'

import MovieStore from 'stores/MovieStore'
import { QuoteTitle } from 'components/ui/QuoteTitle'
import { MovieTopCastItem } from './Item'
import styles from './MovieTopCast.module.scss'

export const MovieTopCast = () => {
  const {
    details: { id },
    credits: { cast },
  } = MovieStore

  return (
    <section>
      <QuoteTitle title='Top cast' href={`/movie/${id}/credits`} />
      <List
        className={styles.list}
        dataSource={cast.slice(0, 20)}
        renderItem={item => <MovieTopCastItem {...item} />}
      />
    </section>
  )
}
