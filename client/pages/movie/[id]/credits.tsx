import { GetServerSidePropsContext, NextPage } from 'next'

import MovieStore from 'stores/MovieStore'
import { MovieCredits } from 'components/MoviePages/MovieCredits'
import { MovieService } from 'services/MovieService'
import { getServerSidePropsParamsId } from 'helpers/getServerSidePropsParamsId'
import { IMovieCredits } from 'models/movie/credits/IMovieCredits'
import { IMovieDetails } from 'models/movie/IMovieDetails'

const MovieCreditsPage: NextPage<{ credits: IMovieCredits; details: IMovieDetails }> = ({ credits, details }) => {
  MovieStore.details = details
  MovieStore.credits = credits

  return <MovieCredits />
}

export default MovieCreditsPage

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const id = getServerSidePropsParamsId(context)

  const details = await MovieService.fetchDetails(id)
  const credits = await MovieService.fetchCredits(id)

  return {
    props: {
      details,
      credits,
    },
  }
}
