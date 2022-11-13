import Title from 'antd/lib/typography/Title'
import Text from 'antd/lib/typography/Text'
import classNames from 'classnames'
import { FC, useMemo } from 'react'
import { Element } from 'react-scroll'

import MovieStore from 'stores/MovieStore'
import { LinkWrapper } from 'components/LinkWrapper'
import { MovieCreditsHandler } from 'modules/movie/MovieCreditsHandler'
import { MovieCreditDepartment } from 'models/movie/MovieCreditDepartment'
import styles from './CreditsList.module.scss'

// Todo Откорректировать пропсы.
// Todo Элемент сделать секцией.
// Todo Переписать список в коллапс.

export const MovieCreditsList: FC<Props> = ({ title, isLastInLine, creditsDepartment, children }) => {
  const credits = useMemo(() => {
    if (children) return []

    const creditsHandler = new MovieCreditsHandler(MovieStore.credits.crew)

    return creditsHandler.getCreditsByDepartment(creditsDepartment)
  }, [children, creditsDepartment])

  if (!children && credits.length === 0) return null

  return (
    <Element
      name={creditsDepartment}
      className={classNames(styles.container, { [styles.borderBottom]: !isLastInLine })}
    >
      <>
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
      </>
    </Element>
  )
}

interface Props {
  title: string
  isLastInLine: boolean
  creditsDepartment: MovieCreditDepartment
  children?: JSX.Element
}
