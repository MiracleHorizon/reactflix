import List from 'antd/lib/list'
import Title from 'antd/lib/typography/Title'
import Text from 'antd/lib/typography/Text'

import { LinkWrapper } from 'components/LinkWrapper'
import { IDataItem } from '../DataList.types'
import styles from './DataListItem.module.scss'

export const DataListItem = ({ title, content }: IDataItem) => (
  <List.Item className={styles.item}>
    <Title level={5}>{title}</Title>
    {Array.isArray(content) ? (
      <ul className='marked_list'>
        {content.map(item =>
          typeof item === 'string' ? (
            item !== '' && <li key={item}>{item}</li>
          ) : (
            <LinkWrapper key={item.href} href={item.href}>
              {item.name}
            </LinkWrapper>
          )
        )}
      </ul>
    ) : (
      <Text>{content}</Text>
    )}
  </List.Item>
)
