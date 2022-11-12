import classNames from 'classnames'
import Space from 'antd/lib/space'
import Text from 'antd/lib/typography/Text'
import Tooltip from 'antd/lib/tooltip'
import { FC } from 'react'

import MovieStore from 'stores/MovieStore'
import { UserRatingButton } from './UserRatingButton'
import { RatingButton } from 'components/ui/buttons/RatingButton'
import { handleFeedbacksCount } from 'helpers/handleFeedbacksCount'
import styles from './MovieEstimates.module.scss'

export const MovieEstimates: FC<Props> = ({ placement }) => {
  const { id, title, vote_average, vote_count } = MovieStore.details

  return (
    <Space className={classNames('estimates', placement === 'header' ? 'lg-container-max' : 'lg-container-min')}>
      {Math.ceil(vote_average) > 0 && (
        <div className={styles.buttonContainer}>
          <Text className={styles.title} ellipsis>
            TMDb RATING
          </Text>
          <Tooltip placement='bottom' title={`${handleFeedbacksCount(vote_count)}`}>
            <RatingButton dest='overall' rating={+vote_average.toFixed(1)} />
          </Tooltip>
        </div>
      )}
      <UserRatingButton id={id} title={title} />
    </Space>
  )
}

interface Props {
  placement: 'header' | 'main'
}
