<template>
  <table class="vst">
    <thead v-if="columns.length">
      <tr>
        <th
          v-for="column in columns"
          :key="column.key"
          :class="['vst-th', { 'vst-orderable': column.orderable }]"
          @click.self.self="column.orderable ? onOrderClick(column.key) : null">
          <slot
            :name="`head:${column.key}`"
            :column="column">
            {{ column.title }}
          </slot>
          <a
            v-if="column.orderable"
            href="#"
            :class="`vst-orderable-toggle ${orders[column.key] || ''}`" />
        </th>
      </tr>
    </thead>
    <tbody>
      <slot v-if="isSyncing" name="row:loading">
        <LoadingRow
          v-for="i in perPage"
          :key="`loadingRow${i}`"
          :columns-length="columns.length" />
      </slot>

      <slot v-else-if="isSynced && rows.value.length === 0" name="row:empty">
        <tr>
          <td :colspan="columns.length">
            No records found
          </td>
        </tr>
      </slot>

      <template v-else-if="isSynced && rows.value.length">
        <slot
          v-for="(row, i) in rows.value"
          name="row"
          :row="row"
          :index="i"
          :columns="columns">
          <tr :key="row['id'] || i">
            <td
              v-for="column in columns"
              :key="column.key">
              <slot
                :name="`cell:${column.key}`"
                :row="row"
                :value="row[column.key]"
                :column="column"
                :index="i">
                {{ row[column.key] }}
              </slot>
            </td>
          </tr>
        </slot>
      </template>
    </tbody>
    <tfoot>
      <tr>
        <td :colspan="columns.length">
          <slot name="pagination" :page="page" :rows="rows.value">
            <ul
              v-if="page > 1 || rows.value.length === perPage || isSyncing"
              class="vst-pagination mt-3">
              <li :class="['vst-page-item', { disabled: page === 1 || isSyncing }]">
                <a class="vst-page-link" @click.prevent="prevPage">←</a>
              </li>

              <li
                :class="['vst-page-item', {
                  disabled: rows.value.length < perPage || isSyncing
                }]">
                <a class="vst-page-link" @click.prevent="nextPage">→</a>
              </li>
            </ul>
          </slot>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script setup lang="ts">
import { shallowRef, ShallowRef } from 'vue'
import qs from 'qs'
import LoadingRow from './loading_row.vue'

import useFilterable from '../use/filterable.ts'

interface TableColumn {
  key: string
  title: string
  orderable?: boolean
}

interface TableOrders {
  [key: string]: 'asc' | 'desc'
}

interface TableFetchParams {
  per_page: number
  page: number
  order?: Array<{
    field: string
    direction: 'asc' | 'desc'
  }>
}

interface TableProps {
  columns: Array<TableColumn>
  source: string | ((_: TableFetchParams) => Promise<Array<unknown>> | Array<unknown>)
  perPage?: number
}

const props = withDefaults(defineProps<TableProps>(), {
  perPage: 25,
})

const orders: ShallowRef<TableOrders> = shallowRef({})

const fetchData = async function fetchData1(params: TableFetchParams) {
  let data
  if (typeof props.source === 'string') {
    const response = await fetch(`${props.source}?${qs.stringify(params, { arrayFormat: 'brackets' })}`)
    data = await response.json()
  } else {
    data = await props.source(params)
  }

  return data
}

const onOrderClick = (key: string) => {
  if (orders.value[key] === 'asc') {
    orders.value = { [key]: 'desc' }
  } else if (orders.value[key] === 'desc') {
    orders.value = {}
  } else {
    orders.value = { [key]: 'asc' }
  }
}

const {
  page, isSyncing, isSynced, prevPage, nextPage, reload, refetch, items: rows,
} = useFilterable({
  initialFilters: { per_page: props.perPage, orders },
  loadItems: fetchData,
})

defineExpose({
  refetch,
  reload,
  rows,
})
</script>
