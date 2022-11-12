import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import Space from 'antd/lib/space'
import Button from 'antd/lib/button'
import CheckOutlined from '@ant-design/icons/CheckOutlined'
import PlusOutlined from '@ant-design/icons/PlusOutlined'

import UserStore from 'stores/UserStore'
import MovieStore from 'stores/MovieStore'
import { MovieCommunityLink } from './MovieCommunityLink'
import styles from './MovieCommunityBar.module.scss'

export const MovieCommunityBar = observer(() => {
  const { totalReviews, totalCollections } = MovieStore
  const [isAuthModalOpen, setAuthModalOpen] = useState(false)
  const isInWatchlist = false

  const handleButtonClick = () => {
    const { id } = MovieStore.details

    if (!UserStore.isAuth) {
      return setAuthModalOpen(true)
    }

    // TODO Обработка добавления / удаления фильма из watchlist
  }

  return (
    <Space direction='vertical' align='start' className={styles.wrapper}>
      <Button
        // loading={loading}
        // disabled={loading}
        className={styles.btn}
        icon={isInWatchlist ? <CheckOutlined /> : <PlusOutlined />}
        onClick={handleButtonClick}
      >
        {isInWatchlist ? 'In Watchlist' : 'Add to Watchlist'}
      </Button>
      <div className={styles.links}>
        {totalReviews > 0 && <MovieCommunityLink path='reviews' count={totalReviews} title='User reviews' />}
        {totalCollections > 0 && <MovieCommunityLink path='collections' count={totalCollections} title='Collections' />}
      </div>
    </Space>
  )
})
