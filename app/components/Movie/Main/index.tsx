import { MovieDescription } from './Description'
import styles from './MovieMain.module.scss'

export const MovieMain = () => (
  <main className={styles.wrapper}>
    <MovieDescription />
  </main>
)
