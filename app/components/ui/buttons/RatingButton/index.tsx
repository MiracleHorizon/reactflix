import classNames from 'classnames'
import Button from 'antd/lib/button'
import StarFilled from '@ant-design/icons/StarFilled'
import { FC } from 'react'

import styles from './RatingButton.module.scss'

export const RatingButton: FC<Props> = ({ dest, rating, onClick }) => (
  <Button
    className={classNames(styles.btn, dest === 'user' ? styles.blueStar : styles.defaultStar)}
    type='text'
    icon={<StarFilled />}
    onClick={onClick}
  >
    {rating ? (
      <div>
        <strong>{rating}</strong>
        <span className={styles.separator}>/</span>
        <span className={styles.maxRating}>10</span>
      </div>
    ) : (
      'Rate'
    )}
  </Button>
)

interface Props {
  dest: 'overall' | 'user'
  rating: number | null
  onClick?: () => void
}
