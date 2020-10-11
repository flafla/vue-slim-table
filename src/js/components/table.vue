<template>
  <div :class="wrapperClass">
    <table :class="tableClass" class="slim-table">
      <thead v-if="columns.length">
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
            class="slim-table-th"
            @click.prevent="column.orderable ? onOrderClick(column.key) : null">
            <slot
              :name="`head:${column.key}`"
              :column="column">
              {{ column.title }}
            </slot>
            <a
              v-if="column.orderable"
              href="#"
              :class="`slim-table-orderable ${orders[column.key] || ''}`" />
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
          <tr :key="row.id || i">
            <td
              v-for="column in columns"
              :key="column.key">
              <slot
                :name="`cell:${column.key}`" :row="row" :value="row[column.key]"
                :column="column" :index="i">
                {{ row[column.key] }}
              </slot>
            </td>
          </tr>
        </slot>

        <slot v-if="syncState === 'fetched' && rows.length === 0" name="empty-row">
          <tr>
            <td :colspan="columns.length">
              No records found
            </td>
          </tr>
        </slot>

        <slot v-if="syncState === 'syncing'" name="loading-row">
          <LoadingRow
            v-for="(row, i) in perPage"
            :key="`loadingRow${i}`"
            :columns-length="columns.length" />
        </slot>
      </tbody>
    </table>

    <Paginate
      v-if="pagesCount > 1"
      v-model="page"
      :page-count="pagesCount"
      container-class="pagination mt-3"
      page-class="page-item"
      page-link-class="page-link"
      prev-class="page-item"
      prev-link-class="page-link"
      next-class="page-item"
      next-link-class="page-link"
      prev-text="←"
      next-text="→" />
  </div>
</template>

<script>
import qs from 'qs'
import Paginate from 'vuejs-paginate'

import LoadingRow from './loading_row.vue'

export default {
  components: { LoadingRow, Paginate },
  props: {
    columns: { type: Array, required: true },
    remoteUrl: { type: String, required: true },
    perPage: { type: Number, default: 25 },
    perPageKey: { type: String, default: 'per_page' },
    customFilters: { type: Object, default: () => ({}) },
    onFetchedCallback: { type: Function, default: (rows) => rows },
    wrapperClass: { type: String, default: '' },
    tableClass: { type: String, default: '' },
  },
  data() {
    return {
      page: 1,
      rows: [],
      rowsTotalCount: 0,
      syncState: 'initial',
      orders: {},
    }
  },
  computed: {
    pagesCount() {
      return Math.ceil(this.rowsTotalCount / this.perPage)
    },
  },
  watch: {
    page: 'fetchData',
    customFilters: 'refetch',
    orders: 'refetch',
    perPage: 'refetch',
  },
  created() {
    this.fetchData()
  },
  methods: {
    reload() {
      this.fetchData(this.page)
    },
    async fetchData(page = 1) {
      const params = {
        [this.perPageKey]: this.perPage,
        page,
        ...this.customFilters,
      }

      const orderKeys = Object.keys(this.orders)
      if (orderKeys.length) {
        params.order = orderKeys.map((key) => ({ field: key, direction: this.orders[key] }))
      }

      this.syncState = 'syncing'
      this.rows = []

      const response = await fetch(`${this.remoteUrl}?${qs.stringify(params, { arrayFormat: 'brackets' })}`)
      const data = await response.json()

      if (this.onFetchedCallback) this.onFetchedCallback(data)

      this.rows = data.rows
      this.rowsTotalCount = response.headers.get('X-Total-Count') || 0
      this.syncState = 'fetched'
    },
    onOrderClick(key) {
      if (this.orders[key] === 'asc') {
        this.orders = { [key]: 'desc' }
      } else if (this.orders[key] === 'desc') {
        this.orders = {}
      } else {
        this.orders = { [key]: 'asc' }
      }
    },
    refetch() {
      if (this.page === 1) {
        this.fetchData(1)
      } else {
        this.page = 1
      }
    },
  },
}
</script>
