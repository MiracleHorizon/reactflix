import { FC } from 'react'
import Text from 'antd/lib/typography/Text'

import { LinkWrapper } from 'components/LinkWrapper'

export const MovieCommunityLink: FC<Props> = ({ path, count, title }) => (
  <LinkWrapper href={`/movie/${path}`}>
    <Text>
      <strong>{count}</strong> {title}
    </Text>
  </LinkWrapper>
)

interface Props {
  path: string
  count: number
  title: string
}
