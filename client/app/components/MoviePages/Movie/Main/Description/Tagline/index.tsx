import Title from 'antd/lib/typography/Title'

import MovieStore from 'stores/MovieStore'
import styles from './MovieTagline.module.scss'

export const MovieTagline = () => {
  const { tagline, original_title } = MovieStore.details

  return (
    <header className={styles.tagline}>
      <Title level={3} ellipsis={{ rows: 2 }}>
        {tagline !== '' ? tagline : original_title}
      </Title>
    </header>
  )
}
