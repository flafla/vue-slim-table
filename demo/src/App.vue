<script setup lang="ts">
import VueSlimTable from '../../src/main'
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
  >
  </VueSlimTable>
</template>

<style scoped>
</style>
