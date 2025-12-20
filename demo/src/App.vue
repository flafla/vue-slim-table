<script setup lang="ts">
// import VueSlimTable from '../../src/ts/components/VueSlimTable.vue'
import VueSlimTable from 'vue-slim-tables'
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
        <td class="vst-loading-row" colspan="2">
          <div />
        </td>
        <td colspan=2>{{ JSON.stringify(row) }}</td>
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
  @import 'vue-slim-tables/stylesheets';
  // @import '../../src/stylesheets/index.scss';

  @media (prefers-color-scheme: dark) {
    body {
      background-color: oklch(0 0 0);
    }
  }
</style>
