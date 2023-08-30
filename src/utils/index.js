// Intl.NumberFormat

import { format } from 'date-fns'

export const formatNumber = (number) => {
  const locales = 'en-US'
  const options = {
    minimumFractionDigits: 2
  }
  return new Intl.NumberFormat(locales, options).format(number)
}

export const formatDate = (value = '') => {
  const newDate = new Date(value)
  return format(newDate, 'dd MMM yyyy')
}