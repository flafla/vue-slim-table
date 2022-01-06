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
        <tr :key="row.id || i">
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
          v-for="(row, i) in perPage"
          :key="`loadingRow${i}`"
          :columns-length="columns.length" />
      </slot>
    </tbody>
    <tfoot>
      <tr>
        <td :colspan="columns.length">
          <slot name="pagination" :page="page" :rows="rows">
            <ul v-if="page > 1 || rows.length === perPage" class="vst-pagination mt-3">
              <li :class="['vst-page-item', { disabled: page === 1 }]">
                <a class="vst-page-link" @click.prevent="page -= 1">←</a>
              </li>

              <li :class="['vst-page-item', { disabled: rows.length < perPage }]">
                <a class="vst-page-link" @click.prevent="page += 1">→</a>
              </li>
            </ul>
          </slot>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import qs from 'qs'
import LoadingRow from './loading_row.vue'

export default {
  components: { LoadingRow },
  props: {
    columns: { type: Array, required: true },
    source: { type: [String, Function], required: true },
    perPage: { type: Number, default: 25 },
  },
  data() {
    return {
      page: 1,
      rows: [],
      syncState: 'initial',
      orders: {},
    }
  },
  watch: {
    page: 'fetchData',
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
      const params = { per_page: this.perPage, page }

      const orderKeys = Object.keys(this.orders)
      if (orderKeys.length) {
        params.order = orderKeys.map((key) => ({ field: key, direction: this.orders[key] }))
      }

      this.syncState = 'syncing'
      this.rows = []

      let data
      if (typeof this.source === 'string') {
        const response = await fetch(`${this.source}?${qs.stringify(params, { arrayFormat: 'brackets' })}`)
        data = await response.json()
      } else {
        data = await this.source(params)
      }

      this.rows = data
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
