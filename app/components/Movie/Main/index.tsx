import { MovieDescription } from './Description'
import { MovieOverview } from './Overview'
import { MovieTopCast } from './TopCast'
import { MovieDetails } from './MovieDetails'
import styles from './MovieMain.module.scss'

export const MovieMain = () => (
  <main className={styles.wrapper}>
    <MovieDescription />
    <MovieOverview />
    <MovieTopCast />
    <MovieDetails />
  </main>
)
