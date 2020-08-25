<template>
  <div :class="wrapperClass">
    <table :class="tableClass" class="slim-table">
      <thead>
        <tr>
          <th v-for="col in columns" class="slim-table-th" @click.prevent="col.orderable ? onOrderClick(col.key) : null">
            <span>{{ col.title }}</span>
            <a v-if="col.orderable" :class="`slim-table-orderable ${orders[col.key] || ''}`"></a>
          </th>
        </tr>
      </thead>
      <tbody>
        <component :is="rowComponent" v-for="row, i in rows" :key="`dataRow${i}`" :row="row" :columns="columns" />

        <tr v-if="syncState === 'fetched' && rows.length === 0">
          <td :colspan="columns.length" class="text-center" :class="emptyRowsClass">
            {{ emptyRowsText }}
          </td>
        </tr>

        <LoadingRow v-if="syncState == 'syncing'" v-for="row, i in perPage" :key="`loadingRow${i}`" :columnsLength="columns.length" />
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
      prev-text="<-"
      next-text="->"
    />
  </div>
</template>

<script>
  import qs from 'qs'
  import Paginate from 'vuejs-paginate'

  import LoadingRow from './loading_row.vue'
  import DataRow from './data_row.vue'

  export default {
    props: {
      columns: { type: Array, required: true },
      remoteUrl: { type: String, required: true },
      perPage: { type: Number, default: 25 },
      perPageKey: { type: String, default: 'per_page' },
      customFilters: { type: Object, default() { return {} } },
      onFetchedCallback: Function,
      wrapperClass: String,
      tableClass: String,
      emptyRowsClass: String,
      emptyRowsText: { type: String, default: 'No records found' },
      totalRowsCountKey: { type: String, default: 'total_count' },
      rowComponent: { type: Object, default() { return DataRow } }
    },
    data() {
      return {
        page: 1,
        rows: [],
        rowsTotalCount: 0,
        syncState: 'initial',
        orders: {}
      }
    },
    computed: {
      pagesCount() {
        return Math.ceil(this.rowsTotalCount / this.perPage)
      }
    },
    methods: {
      reload() {
        this.fetchData(this.page)
      },
      fetchData(page) {
        const params = {
          [this.perPageKey]: this.perPage,
          page: page,
          ...this.customFilters
        }

        const orderKeys = Object.keys(this.orders)
        if (orderKeys.length) {
          params.order = orderKeys.map(key => {
            return { field: key, direction: this.orders[key] }
          })
        }

        this.syncState = 'syncing'
        this.rows = []

        fetch(`${this.remoteUrl}?${qs.stringify(params, { arrayFormat: 'brackets' })}`)
          .then(res => res.json())
          .then(res => {
            this.rows = res.rows
            this.rowsTotalCount = res[this.totalRowsCountKey]
            this.onFetchedCallback && this.onFetchedCallback(res)
            this.syncState = 'fetched'
          })
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
      }
    },
    watch: {
      page(val) {
        this.fetchData(val)
      },
      customFilters() {
        this.refetch()
      },
      orders() {
        this.refetch()
      },
      perPage() {
        this.refetch()
      }
    },
    components: { LoadingRow, DataRow, Paginate },
    mounted() {
      this.reload()
    }
  }
</script>
