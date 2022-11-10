export const getApiImagePath = (imagePath: string): string => {
  return process.env.TMDB_IMG_API + imagePath
}
