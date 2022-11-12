import MovieStore from 'stores/MovieStore'
import { DefaultLayout } from 'layouts/Default'
import { MovieCreditsHeader } from './Header'
import { MovieCreditsMain } from './Main'
import { getFullYearFromDateString } from 'helpers/getFullYearFromDateString'
import styles from './MovieCredits.module.scss'

export const MovieCredits = () => {
  const { original_title, release_date } = MovieStore.details

  return (
    <DefaultLayout title={`${original_title} (${getFullYearFromDateString(release_date)}) - Full Cast & Crew)`}>
      <div className={styles.wrapper}>
        <MovieCreditsHeader />
        <MovieCreditsMain />
      </div>
    </DefaultLayout>
  )
}

// Todo Перевести размеры шрифтов на странице в rem.
// Todo Сделать быстрый переход по разделам через якорные ссылки.
