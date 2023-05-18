import { ShallowRef } from 'vue'

export type TableColumn = {
  key: string,
  title: string,
  orderable?: boolean
}

export type TableOrders = {
  [key: string]: 'asc' | 'desc'
}

export type TableFetchParams = {
  per_page: number,
  page: number,
  orders: TableOrders
}

export type TableRow = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export type TableFilters = {
  per_page: number,
  orders: ShallowRef<TableOrders>
}

export type TableProps = {
  columns: Array<TableColumn>
  source: ((_: TableFetchParams) => Promise<TableRow[]> | TableRow[])
  perPage?: number
}
