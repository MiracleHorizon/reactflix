import MovieStore from 'stores/MovieStore'
import { DefaultLayout } from 'layouts/Default'
import { MovieHeader } from './Header'
import { MovieMain } from './Main'
import { APP_NAME } from 'utils/constants/app'
import styles from './Movie.module.scss'

export const Movie = () => {
  const {
    details: { title },
    keywords, //!
  } = MovieStore

  return (
    <DefaultLayout title={`${APP_NAME} | ${title}`} keywords={keywords}>
      <div className={styles.wrapper}>
        <MovieHeader />
        <MovieMain />
      </div>
    </DefaultLayout>
  )
}
