import { MovieTitle } from './Title'
import { MovieEstimates } from '../Estimates'
import styles from './MovieHeader.module.scss'

export const MovieHeader = () => (
  <header className={styles.header}>
    <MovieTitle />
    <MovieEstimates placement='header' />
  </header>
)
