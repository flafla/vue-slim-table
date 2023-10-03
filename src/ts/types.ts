import { ShallowRef } from 'vue'

export type TableColumn = {
  key: string,
  title: string,
  orderable?: boolean
}

export type TableOrders = {
  [key: string]: 'asc' | 'desc'
}

export type TableFilters = {
  per_page: number,
  orders: ShallowRef<TableOrders>
}

export type TableFetchParams = {
  page: number
} & TableFilters

export type TableRow = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export type TableProps<T> = {
  columns: Array<TableColumn>
  perPage: number
  source: ((_: TableFetchParams) => Promise<T[]> | T[])
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export type TableSlots<T> = Partial<{
  'thead:before': () => any
  thead: (_props: { columns: TableColumn[], orders: TableOrders }) => any
  'thead:after': () => any
  [key: `thead:${string}`]: (_props: { column: TableColumn, orders: TableOrders }) => any
  'row:loading': () => any
  'row:empty': () => any
  row: (_props: { row: T, index: number, columns: TableColumn[] }) => any
  [key: `cell:${string}`]: (_props: { row: T, index: number, column: TableColumn, value: unknown }) => any
  pagination: (_props: { page: number, rows: T[] }) => any
}>
/* eslint-enable @typescript-eslint/no-explicit-any */
