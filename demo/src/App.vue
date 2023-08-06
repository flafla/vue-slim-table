<script setup lang="ts">
import VueSlimTable from '../../src/ts/components/slim_table.vue'
import { asyncSource } from './api/fake'

const columns = [
  { key: 'id', title: 'ID', orderable: true },
  { key: 'userId', title: 'User ID', orderable: true },
  { key: 'title', title: 'Title', orderable: true },
  { key: 'completed', title: 'Completed', orderable: true }
]
</script>

<template>
  <VueSlimTable
    :columns="columns"
    :source="asyncSource"
    :per-page="25"
  >
    <template #thead:id="{ column }">
      {{ column.title + '?' }}
    </template>
    <!-- <template #row="{ row }">
      <tr>
        <td colspan=4>{{ JSON.stringify(row) }}</td>
      </tr>
    </template> -->

    <template #cell:id="{ row }">
      {{ row.id + '!' }}
    </template>

    <!-- <template #pagination="{ rows }">
      <span>pagination {{ rows.length }}</span>
    </template> -->
  </VueSlimTable>
</template>

<style lang="scss">
  @import '../../src/stylesheets/index.scss'
</style>
