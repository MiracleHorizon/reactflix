import Modal from 'antd/lib/modal/Modal'
import Rate from 'antd/lib/rate'
import Button from 'antd/lib/button'
import { FC, useState } from 'react'

import { SetState } from 'types'
import styles from './RateModal.module.scss'

export const RateModal: FC<Props> = ({ title, userRating, isModalOpen, setModalOpen }) => {
  const [rating, setRating] = useState<number | null>(userRating)

  const handleSetRating = () => {
    setModalOpen(false)
  }

  const handleRemoveRating = () => {
    setModalOpen(false)
  }

  const handleChangeRating = (value: number) => setRating(value)

  const handleCloseModal = () => {
    setRating(userRating)
    setModalOpen(false)
  }

  return (
    <Modal
      title={title}
      open={isModalOpen}
      confirmLoading
      centered
      onCancel={handleCloseModal}
      footer={[
        <Button key='remove' type='ghost' onClick={handleRemoveRating}>
          Remove rating
        </Button>,
        <Button key='rate' type='primary' onClick={handleSetRating}>
          Rate
        </Button>,
      ]}
    >
      <div className={styles.modal}>
        <Rate count={10} allowClear={false} defaultValue={rating || 0} onChange={handleChangeRating} />
      </div>
    </Modal>
  )
}

interface Props {
  title: string
  userRating: number | null
  isModalOpen: boolean
  setModalOpen: SetState<boolean>
}
