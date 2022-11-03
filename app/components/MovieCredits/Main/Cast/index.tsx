import MovieStore from 'stores/MovieStore'
import { LinkWrapper } from 'components/LinkWrapper'
import { ImageComponent } from 'components/ui/ImageComponent'

export const MovieCast = () => {
  const { cast } = MovieStore.credits

  return (
    <div>
      <ul style={{ padding: '20px 0' }}>
        {cast.map(actor => (
          <li key={actor.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
            <div style={{ width: '40px', marginRight: '14px' }}>
              <ImageComponent imagePath={actor.profile_path} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <LinkWrapper href={`/person/${actor.id}`}>
                <span>{actor.name}</span>
              </LinkWrapper>
              <strong>{actor.character}</strong>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
