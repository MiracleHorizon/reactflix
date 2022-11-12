import Title from 'antd/lib/typography/Title'
import Text from 'antd/lib/typography/Text'
import { FC, useMemo } from 'react'

import MovieStore from 'stores/MovieStore'
import { LinkWrapper } from 'components/LinkWrapper'
import { MovieCreditsHandler } from 'modules/movie/MovieCreditsHandler'
import { MovieCreditDepartment } from 'models/movie/MovieCreditDepartment'
import styles from './CreditsList.module.scss'

export const MovieCreditsList: FC<Props> = ({ title, creditsDepartment, children }) => {
  const credits = useMemo(() => {
    const creditsHandler = new MovieCreditsHandler(MovieStore.credits.crew)

    return creditsDepartment ? creditsHandler.getCreditsByDepartment(creditsDepartment) : []
  }, [creditsDepartment])

  if (!children && credits.length === 0) return null

  return (
    <section className={styles.container}>
      <Title level={3} ellipsis={{ rows: 2 }} className={styles.title}>
        {title}
      </Title>
      {!children ? (
        <ul className={styles.list}>
          {credits.map(credit => (
            <li key={credit.id + title}>
              <LinkWrapper href={`/person/${credit.id}`}>{credit.name}</LinkWrapper>
              <Text>({credit.job})</Text>
            </li>
          ))}
        </ul>
      ) : (
        children
      )}
    </section>
  )
}

interface Props {
  title: string
  creditsDepartment?: MovieCreditDepartment
  children?: JSX.Element
}
