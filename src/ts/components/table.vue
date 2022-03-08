<template>
  <table class="vst">
    <thead v-if="columns.length">
      <tr>
        <th
          v-for="column in columns"
          :key="column.key"
          :class="['vst-th', { 'vst-orderable': column.orderable }]"
          @click.prevent="column.orderable ? onOrderClick(column.key) : null">
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
      <slot
        v-for="(row, i) in rows"
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

      <slot v-if="syncState === 'fetched' && rows.length === 0" name="row:empty">
        <tr>
          <td :colspan="columns.length">
            No records found
          </td>
        </tr>
      </slot>

      <slot v-if="syncState === 'syncing'" name="row:loading">
        <LoadingRow
          v-for="i in perPage"
          :key="`loadingRow${i}`"
          :columns-length="columns.length" />
      </slot>
    </tbody>
    <tfoot>
      <tr>
        <td :colspan="columns.length">
          <slot name="pagination" :page="page" :rows="rows">
            <ul
              v-if="page > 1 || rows.length === perPage || syncState === 'syncing'"
              class="vst-pagination mt-3">
              <li :class="['vst-page-item', { disabled: page === 1 || syncState === 'syncing' }]">
                <a class="vst-page-link" @click.prevent="page -= 1">←</a>
              </li>

              <li
                :class="['vst-page-item', {
                  disabled: rows.length < perPage || syncState === 'syncing'
                }]">
                <a class="vst-page-link" @click.prevent="page += 1">→</a>
              </li>
            </ul>
          </slot>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import qs from 'qs'
import LoadingRow from './loading_row.vue'

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

const page = ref(1)
const rows = ref([])
const syncState = ref('initial')
const orders = ref({} as TableOrders)

const fetchData = async function fetchData1(pg = 1) {
  const params: TableFetchParams = { per_page: props.perPage, page: pg }

  const orderKeys = Object.keys(orders.value)
  if (orderKeys.length) {
    params.order = orderKeys.map((key) => ({ field: key, direction: orders.value[key] }))
  }

  syncState.value = 'syncing'
  rows.value = []

  let data
  if (typeof props.source === 'string') {
    const response = await fetch(`${props.source}?${qs.stringify(params, { arrayFormat: 'brackets' })}`)
    data = await response.json()
  } else {
    data = await props.source(params)
  }

  rows.value = data
  syncState.value = 'fetched'
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

const refetch = () => {
  if (page.value === 1) {
    fetchData(1)
  } else {
    page.value = 1
  }
}

const reload = () => {
  fetchData(page.value)
}

watch(page, fetchData)
watch(orders, refetch)
watch(() => props.perPage, refetch)

fetchData()

defineExpose({
  refetch,
  reload,
  rows,
})
</script>
