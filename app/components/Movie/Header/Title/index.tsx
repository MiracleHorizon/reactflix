import Title from 'antd/lib/typography/Title'
import { useMemo } from 'react'

import AppStore from 'stores/AppStore'
import MovieStore from 'stores/MovieStore'
import { getDurationFromRuntime } from 'helpers/getDurationFromRuntime'
import { getFullYearFromDateString } from 'helpers/getFullYearFromDateString'
import styles from './MovieTitle.module.scss'

export const MovieTitle = () => {
  const { runtime, title, original_title, original_language, release_date, adult } = MovieStore.details
  const { hours, minutes } = useMemo(() => getDurationFromRuntime(runtime), [runtime])

  return (
    <div className={styles.container}>
      <Title level={1} ellipsis={{ rows: 2 }}>
        {title}
      </Title>
      {original_language !== AppStore.searchLanguage.toLowerCase() && (
        <Title level={4} ellipsis={{ rows: 2 }}>
          Original title: {original_title}
        </Title>
      )}
      <ul className='marked_list'>
        <li>{getFullYearFromDateString(release_date)}</li>
        {adult && <li>18+</li>}
        <li>
          {hours > 0 && `${hours}h`} {minutes > 0 && `${minutes}m`}{' '}
        </li>
      </ul>
    </div>
  )
}
