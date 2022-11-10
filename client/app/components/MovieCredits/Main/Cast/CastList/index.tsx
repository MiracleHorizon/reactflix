import MovieStore from 'stores/MovieStore'
import { MovieCastItem } from '../CastItem'
import styles from './MovieCastList.module.scss'

export const MovieCastList = () => (
  <ul className={styles.list}>
    {MovieStore.credits.cast.map(actor => (
      <MovieCastItem key={actor.id} {...actor} />
    ))}
  </ul>
)
