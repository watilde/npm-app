import en from './en.json'
import ja from './ja.json'

const localeData = {
  en,
  ja
}

export const defaultLocale = 'en'

export const locale = (navigator.languages && navigator.languages[0]) ||
  navigator.language || navigator.userLanguage

const localeWithoutRegionCode = locale.toLowerCase().split(/[_-]+/)[0]

export const messages = localeData[localeWithoutRegionCode] ||
  localeData[locale] || localeData[defaultLocale]

export const defaultMessage = localeData[defaultLocale]
