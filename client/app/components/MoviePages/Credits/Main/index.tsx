import { MovieCastList } from './Cast/CastList'
import { MovieCreditsList } from './CreditsList'
import { MovieCreditDepartment } from 'models/movie/MovieCreditDepartment'
import styles from './MovieCreditsMain.module.scss'

const credits = [
  { title: 'Directed by', creditsDepartment: MovieCreditDepartment.DIRECTING },
  { title: 'Writing credits', creditsDepartment: MovieCreditDepartment.WRITING },
  { title: 'Cast', children: <MovieCastList /> },
  { title: 'Produced by', creditsDepartment: MovieCreditDepartment.PRODUCTION },
  { title: 'Editing by', creditsDepartment: MovieCreditDepartment.EDITING },
  { title: 'Costume and Make-Up by', creditsDepartment: MovieCreditDepartment.COSTUME },
  { title: 'Sound Department', creditsDepartment: MovieCreditDepartment.SOUND },
  { title: 'Art Department', creditsDepartment: MovieCreditDepartment.ART },
  { title: 'Visual Effects by', creditsDepartment: MovieCreditDepartment.VISUAL_EFFECTS },
  { title: 'Camera and Electrical Department', creditsDepartment: MovieCreditDepartment.CAMERA },
  { title: 'Lighting by', creditsDepartment: MovieCreditDepartment.LIGHTING },
  { title: 'Additional Crew', creditsDepartment: MovieCreditDepartment.CREW },
]

export const MovieCreditsMain = () => (
  <main className={styles.container}>
    {credits.map((category, index) => (
      <MovieCreditsList key={category.title} isLastInLine={index === credits.length - 1} {...category} />
    ))}
  </main>
)
