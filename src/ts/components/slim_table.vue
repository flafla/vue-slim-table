<template>
  <table class="vst">
    <thead v-if="columns.length">
      <slot name="thead" :columns="columns" :orders="orders">
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
            :class="['vst-th', { 'vst-orderable': column.orderable }]"
            v-on="column.orderable ? { click: () => onOrderClick(column.key) } : {}">
            <div v-if="column.orderable">
              <slot
                :name="`thead:${column.key}`"
                :column="column"
                :orders="orders">
                {{ column.title }}
              </slot>

              <a href="#" :class="['vst-orderable-toggle', orders[column.key]]" />
            </div>

            <slot
              v-else
              :name="`thead:${column.key}`"
              :column="column">
              {{ column.title }}
            </slot>
          </th>
        </tr>
      </slot>
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

<script setup lang="ts" generic="TRow extends TableRow">
import { shallowRef } from 'vue'
import LoadingRow from './loading_row.vue'

import useFilterable from '../use/filterable'

import type {
  TableOrders, TableFetchParams, TableRow, TableFilters, TableProps, TableSlots,
} from '@/ts/types'

const orders = shallowRef<TableOrders>({})
const props = defineProps<TableProps<TRow>>()

const loadItems = async (params: TableFetchParams) => {
  let data: TRow[] = []

  try {
    data = await props.source(params)
  } catch {
    // TODO: show errors
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
} = useFilterable<TableFilters, TRow>({
  initialFilters: { per_page: props.perPage, orders },
  loadItems,
})

defineSlots<TableSlots<TRow>>()

defineExpose({
  refetch,
  reload,
  rows,
})
</script>
