import { MovieDescription } from './Description'
import { MovieOverview } from './Overview'
import styles from './MovieMain.module.scss'

export const MovieMain = () => (
  <main className={styles.wrapper}>
    <MovieDescription />
    <MovieOverview />
  </main>
)
