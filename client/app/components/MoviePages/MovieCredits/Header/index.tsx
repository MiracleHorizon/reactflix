import Title from 'antd/lib/typography/Title'
import Paragraph from 'antd/lib/typography/Paragraph'
import Link from 'antd/lib/typography/Link'

import MovieStore from 'stores/MovieStore'
import { LinkWrapper } from 'components/LinkWrapper'
import { ImageComponent } from 'components/ui/ImageComponent'
import { getFullYearFromDateString } from 'helpers/getFullYearFromDateString'
import styles from './MovieCreditsHeader.module.scss'

export const MovieCreditsHeader = () => {
  const { id, original_title, poster_path, release_date } = MovieStore.details
  const href = `/movie/${id}`

  return (
    <header className={styles.header}>
      <div className={styles.poster}>
        <LinkWrapper href={href}>
          <ImageComponent imagePath={poster_path} alt='Poster' />
        </LinkWrapper>
      </div>
      <div className={styles.title}>
        <div>
          <LinkWrapper href={href}>{original_title}</LinkWrapper>
          <Paragraph>({getFullYearFromDateString(release_date)})</Paragraph>
        </div>
        <Title level={1}>Full Cast & Crew</Title>
      </div>
    </header>
  )
}
