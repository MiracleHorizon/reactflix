import { format } from 'date-fns'

export class DateFns {
  public static setMonthDayYearFormat(dateString: string): string {
    const dateFormat = 'LLLL d, y'

    // return await import('date-fns').then(({ format }) => format(new Date(dateString), dateFormat))
    return format(new Date(dateString), dateFormat)
  }
}
