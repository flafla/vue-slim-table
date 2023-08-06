import type { Todo } from '../types'
import { todos } from './data'
import { TableFetchParams } from '../../../src/main'

export function asyncSource(params: TableFetchParams): Promise<Todo[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      let items = todos

      let orders = [...Object.entries(params.orders)]
      if (orders.length) {
        const order = orders[0]
        items = [...todos].sort((a, b) => {
          const key = order[0] as keyof Todo
          return order[1] === 'desc' ? a[key] - b[key] : b[key] - a[key]
        })
      }
      return resolve(items.slice(params.per_page * (params.page - 1), params.per_page * params.page))
    }, 500)
  })
}

export function syncSource(params: TableFetchParams): Todo[] {
  let items = todos

  let orders = [...Object.entries(params.orders)]
  if (orders.length) {
    const order = orders[0]
    items = [...todos].sort((a, b) => {
      const key = order[0] as keyof Todo
      return order[1] === 'desc' ? a[key] - b[key] : b[key] - a[key]
    })
  }
  return items.slice(params.per_page * (params.page - 1), params.per_page * params.page)
}
