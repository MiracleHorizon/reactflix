import { SearchLanguages } from 'models/api/search/SearchLanguages'

export const handleSearchLanguage = (language: SearchLanguages): string => {
  switch (language) {
    case SearchLanguages.EN:
      return 'en-US'
    case SearchLanguages.RU:
      return 'ru-RU'
  }
}
