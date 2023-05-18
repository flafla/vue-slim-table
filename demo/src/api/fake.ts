import { todos } from './data'
import { TableFetchParams } from '../../../src/main'

export function asyncSource(params: TableFetchParams) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let items = todos

      let orders = [...Object.entries(params.orders)]
      if (orders.length) {
        const order = orders[0]
        items = [...todos].sort((a, b) => {
          return order[1] === 'desc' ? a[order[0]] - b[order[0]] : b[order[0]] - a[order[0]]
        })
      }
      return resolve(items.slice(params.per_page * (params.page - 1), params.per_page * params.page))
    }, 500)
  })
}
