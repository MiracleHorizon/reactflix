import Title from 'antd/lib/typography/Title'
import { FC, useMemo } from 'react'

import MovieStore from 'stores/MovieStore'
import { LinkWrapper } from 'components/LinkWrapper'
import { MovieCreditDepartment } from 'models/movie/MovieCreditDepartment'
import { MovieCreditsHandler } from 'modules/movie/MovieCreditsHandler'

// Todo Добавить роль человека

export const MovieCreditsList: FC<Props> = ({ title, creditsDepartment, children }) => {
  const credits = useMemo(() => {
    const creditsHandler = new MovieCreditsHandler(MovieStore.credits.crew)

    return creditsDepartment ? creditsHandler.getCreditsByDepartment(creditsDepartment) : []
  }, [creditsDepartment])

  if (!children && credits.length === 0) return null

  return (
    <section>
      <Title level={4} ellipsis={{ rows: 2 }}>
        {title}
      </Title>
      {!children ? (
        <ul>
          {credits.map(credit => (
            <li key={credit.id}>
              <LinkWrapper href={`/person/${credit.id}`}>{credit.name}</LinkWrapper>
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
