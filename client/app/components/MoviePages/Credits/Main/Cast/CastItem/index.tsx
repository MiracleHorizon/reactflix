import { FC, memo } from 'react'

import { ImageComponent } from 'components/ui/ImageComponent'
import { LinkWrapper } from 'components/LinkWrapper'
import { IMovieCastCredit } from 'models/movie/credits/IMovieCastCredit'
import styles from './MovieCastItem.module.scss'

export const MovieCastItem: FC<IMovieCastCredit> = memo(({ id, profile_path, name, character }) => (
  <li className={styles.item}>
    <div className={styles.imageContainer}>
      <ImageComponent imagePath={profile_path} />
    </div>
    <div className={styles.desc}>
      <LinkWrapper href={`/person/${id}`}>
        <span>{name}</span>
      </LinkWrapper>
      <span className={styles.character}>{character}</span>
    </div>
  </li>
))

MovieCastItem.displayName = 'MovieCastItem'
