import Divider from 'antd/lib/divider'
import Space from 'antd/lib/space'

import MovieStore from 'stores/MovieStore'
import { MovieTagline } from './Tagline'
import { MovieCredits } from './Credits'
import { MovieCommunityBar } from './CommunityBar'
import { MovieEstimates } from 'components/Movie/Estimates'
import styles from './MovieDescription.module.scss'

export const MovieDescription = () => (
  <section className={styles.wrapper}>
    <Divider className='divider y6' />
    <Space className={styles.container}>
      <div className={styles.content}>
        {MovieStore.details.tagline !== null && <MovieTagline />}
        <MovieEstimates placement='main' />
        <MovieCredits />
      </div>
      <MovieCommunityBar />
    </Space>
  </section>
)
