import Title from 'antd/lib/typography/Title'
import Text from 'antd/lib/typography/Text'
import Collapse from 'antd/lib/collapse'
import Divider from 'antd/lib/divider'
import CaretRightOutlined from '@ant-design/icons/CaretRightOutlined'
import { FC, useMemo } from 'react'
import { Element } from 'react-scroll'

import MovieStore from 'stores/MovieStore'
import { LinkWrapper } from 'components/LinkWrapper'
import { MovieCreditsHandler } from 'modules/movie/MovieCreditsHandler'
import { MovieCreditDepartment } from 'models/movie/MovieCreditDepartment'
import styles from './CreditsList.module.scss'

export const MovieCreditsList: FC<Props> = ({ title, creditsDepartment, children }) => {
  const credits = useMemo(() => {
    if (!children) {
      const creditsHandler = new MovieCreditsHandler(MovieStore.credits.crew)

      return creditsHandler.getCreditsByDepartment(creditsDepartment)
    }

    return []
  }, [children, creditsDepartment])

  if (!children && credits.length === 0) return null

  return (
    <>
      <Divider className={styles.divider}/>
      <section className={styles.container}>
      <Element name={creditsDepartment}>
        <Collapse
          ghost
          className={styles.collapse}
          defaultActiveKey={creditsDepartment === MovieCreditDepartment.DIRECTING ? 'panel' : undefined}
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        >
          <Collapse.Panel
            key='panel'
            header={
              <Title level={4} ellipsis={{ rows: 2 }} className={styles.title}>
                {title}
              </Title>
            }
          >
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
          </Collapse.Panel>
        </Collapse>
      </Element>
    </section>
    </>
  )
}

interface Props {
  title: string
  creditsDepartment: MovieCreditDepartment
  children?: JSX.Element
}
