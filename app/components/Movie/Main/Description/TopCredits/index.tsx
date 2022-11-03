import Collapse from 'antd/lib/collapse'
import { useMemo } from 'react'
import { observer } from 'mobx-react-lite'

import MovieStore from 'stores/MovieStore'
import { DataList } from 'components/ui/DataList'
import { MovieCreditsHandler } from 'modules/movie/MovieCreditsHandler'
import styles from './MovieTopCredits.module.scss'

export const MovieTopCredits = observer(() => {
  const { credits, contentLength } = useMemo(() => {
    return new MovieCreditsHandler(MovieStore.credits.crew).topCredits
  }, [])

  if (contentLength <= 0) return null

  return (
    <div className={styles.wrapper}>
      <div className='lg-container-max'>
        <DataList data={credits} />
      </div>
      <Collapse ghost className={styles.collapse}>
        <Collapse.Panel key='credits' header='Top credits'>
          <DataList data={credits} />
        </Collapse.Panel>
      </Collapse>
    </div>
  )
})
