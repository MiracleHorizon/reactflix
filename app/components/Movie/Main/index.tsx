import { MovieDescription } from './Description'
import { MovieOverview } from './Overview'
import { MovieDetails } from './MovieDetails'
import styles from './MovieMain.module.scss'

export const MovieMain = () => (
  <main className={styles.wrapper}>
    <MovieDescription />
    <MovieOverview />
    <MovieDetails />
  </main>
)
