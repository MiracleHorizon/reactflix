import List from 'antd/lib/list'
import Avatar from 'antd/lib/avatar/avatar'
import UserOutlined from '@ant-design/icons/UserOutlined'
import Title from 'antd/lib/typography/Title'
import Paragraph from 'antd/lib/typography/Paragraph'

import { LinkWrapper } from 'components/LinkWrapper'
import { IMovieCastCredit } from 'models/movie/credits/IMovieCastCredit'
import { getApiImagePath } from 'helpers/getApiImagePath'
import styles from './MovieTopCastItem.module.scss'

const avatarSize = { xs: 140, sm: 140, md: 180, lg: 100, xl: 100, xxl: 100 }

export const MovieTopCastItem = ({ id, name, character, profile_path }: IMovieCastCredit) => (
  <List.Item className={styles.item}>
    <LinkWrapper href={`/person/${id}`}>
      <Avatar
        className={styles.avatar}
        size={avatarSize}
        src={profile_path && getApiImagePath(profile_path)}
        icon={<UserOutlined />}
        alt={name}
      />
    </LinkWrapper>
    <div className={styles.description}>
      <LinkWrapper href={`/person/${id}`}>
        <Title className={styles.title} level={5} ellipsis>
          {name}
        </Title>
      </LinkWrapper>
      <Paragraph className={styles.character} ellipsis>
        {character.replace('(uncredited)', '')}
      </Paragraph>
    </div>
  </List.Item>
)
