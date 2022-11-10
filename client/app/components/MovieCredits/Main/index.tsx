import { MovieCastList } from './Cast/CastList'
import { MovieCreditsList } from './CreditsList'
import { MovieCreditDepartment } from 'models/movie/MovieCreditDepartment'
import styles from './MovieCreditsMain.module.scss'

const credits = [
  { title: 'Directed by', creditsDepartment: MovieCreditDepartment.DIRECTING },
  { title: 'Writing credits', creditsDepartment: MovieCreditDepartment.WRITING },
  { title: 'Cast', children: <MovieCastList /> },
  { title: 'Produced by', creditsDepartment: MovieCreditDepartment.PRODUCTION },
  { title: 'Costume and MakeUp by', creditsDepartment: MovieCreditDepartment.COSTUME },
  { title: 'Sound Department', creditsDepartment: MovieCreditDepartment.SOUND },
  { title: 'Art Department', creditsDepartment: MovieCreditDepartment.ART },
  { title: 'Camera and Electrical Department', creditsDepartment: MovieCreditDepartment.CAMERA },
  { title: 'Visual Effects by', creditsDepartment: MovieCreditDepartment.VISUAL_EFFECTS },
  // { title: '', creditsDepartment: MovieCreditDepartment.DIRECTING },
] // Todo Добавить новые департаменты

export const MovieCreditsMain = () => (
  <main className={styles.container}>
    {credits.map(category => (
      <MovieCreditsList key={category.title} {...category} />
    ))}
  </main>
)
