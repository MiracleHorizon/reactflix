import Text from 'antd/lib/typography/Text'
import { FC, useState } from 'react'

import { RatingButton } from 'components/ui/buttons/RatingButton'
import { RateModal } from 'components/ui/modals/RateModal'
import styles from './MovieEstimates.module.scss'

export const UserRatingButton: FC<Props> = ({ id, title }) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const userRating: number | null = 8

  const handleShowModal = () => setModalOpen(true)

  return (
    <div className={styles.buttonContainer}>
      <Text className={styles.title}>YOUR RATING</Text>
      <RatingButton dest='user' rating={userRating} onClick={handleShowModal} />
      <RateModal title={title} userRating={userRating} isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
    </div>
  )
}

interface Props {
  id: number
  title: string
}
