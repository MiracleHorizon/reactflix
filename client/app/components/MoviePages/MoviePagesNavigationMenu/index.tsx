import Divider from 'antd/lib/divider'
import classNames from 'classnames'
import { useRouter } from 'next/router'

import MovieStore from 'stores/MovieStore'
import { LinkWrapper } from 'components/LinkWrapper'
import { getPathForRouteWithQueryId } from 'helpers/getPathForRouteWithQueryId'
import { MOVIE_PAGES_NAVIGATION_CATEGORIES } from 'utils/constants/navigation'
import styles from './MoviePagesNavigationMenu.module.scss'

export const MoviePagesNavigationMenu = () => {
  const { id, title } = MovieStore.details
  const router = useRouter()

  return (
    <div className={styles.wrapper}>
      <header>
        <LinkWrapper href={`/movie/${id}`}>{title}</LinkWrapper>
      </header>
      <Divider />
      <ul className={styles.list}>
        {MOVIE_PAGES_NAVIGATION_CATEGORIES.map(({ title, path }) => (
          <li
            key={path}
            className={classNames(styles.item, {
              [styles.active]: getPathForRouteWithQueryId(router.pathname, 'movie') === path,
            })}
          >
            <LinkWrapper href={`/movie/${id}/${path}`}>{title}</LinkWrapper>
          </li>
        ))}
      </ul>
    </div>
  )
}
