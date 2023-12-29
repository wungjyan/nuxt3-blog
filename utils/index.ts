import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export function formatDate(date: string | Date, format: string) {
  return dayjs(date).format(format)
}

export function formatDateToTimeAgo(date: string | Date) {
  return dayjs(date).fromNow()
}

export function getPostListByYearSorted(list: Array<any>) {
  const obj = list.reduce((acc: Record<any, any>, item: any) => {
    const key: string = formatDate(item.date, 'YYYY')
    if (!acc[key]) {
      acc[key] = [item]
    }
    else {
      acc[key].push(item)
      return acc
    }
    return acc
  }, {})

  return Object.entries(obj).sort((a: any, b: any) => (b[0] - a[0])).map(arr => arr[1])
}
