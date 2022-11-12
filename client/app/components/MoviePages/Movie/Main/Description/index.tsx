import Divider from 'antd/lib/divider'
import Space from 'antd/lib/space'

import MovieStore from 'stores/MovieStore'
import { MovieTagline } from './Tagline'
import { MovieTopCredits } from './TopCredits'
import { MovieCommunityBar } from './CommunityBar'
import { MovieEstimates } from 'components/MoviePages/Movie/Estimates'
import styles from './MovieDescription.module.scss'

export const MovieDescription = () => (
  <section className={styles.wrapper}>
    <Divider className='divider y6' />
    <Space className={styles.container}>
      <div>
        {MovieStore.details.tagline !== null && <MovieTagline />}
        <MovieEstimates placement='main' />
        <MovieTopCredits />
      </div>
      <MovieCommunityBar />
    </Space>
  </section>
)
