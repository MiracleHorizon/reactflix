import { Link } from 'react-scroll'
import { useMemo } from 'react'

import MovieStore from 'stores/MovieStore'
import { MovieCreditsHandler } from 'modules/movie/MovieCreditsHandler'
import { MovieCreditDepartment } from 'models/movie/MovieCreditDepartment'
import styles from './MovieCreditsAnchorsMenu.module.scss'

const DEFAULT_LAYOUT_HEADER_HEIGHT = 72

// Todo Переработать концепция получения категорий команды фильмы.

export const MovieCreditsAnchorsMenu = () => {
  const credits = useMemo(() => {
    return Object.values(MovieCreditDepartment).map(department => {
      const creditsHandler = new MovieCreditsHandler(MovieStore.credits.crew)

      return {
        credits: creditsHandler.getCreditsByDepartment(department),
        department,
      }
    })
  }, [])

  return (
    <div className={styles.menu}>
      {credits.map(
        ({ credits, department }) =>
          credits.length > 0 && (
            <Link
              key={department}
              to={department}
              offset={-(DEFAULT_LAYOUT_HEADER_HEIGHT + 8)}
              spy={true}
              smooth={true}
              duration={500}
            >
              {department}
            </Link>
          )
      )}
    </div>
  )
}
