import { GetServerSidePropsContext, NextPage } from 'next'

import MovieStore from 'stores/MovieStore'
import { Movie } from 'components/MoviePages/Movie'
import { MovieService } from 'services/MovieService'
import { getServerSidePropsParamsId } from 'helpers/getServerSidePropsParamsId'
import { IMovieResponse } from 'models/api/responses/movie/IMovieResponse'
import { IImage } from 'models/api/IImage'

const MoviePage: NextPage<Props> = ({ images, movie }) => {
  MovieStore.images = images
  MovieStore.initializeData(movie)

  return <Movie />
}

export default MoviePage

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const id = getServerSidePropsParamsId(context)

  const images = await MovieService.fetchImages(id)
  const movie = await MovieService.fetchMovie(id)

  return {
    props: {
      images: Object.values(images)
        .filter(item => Array.isArray(item))
        .flat(),
      movie,
    },
  }
}

interface Props {
  images: IImage[]
  movie: IMovieResponse
}
