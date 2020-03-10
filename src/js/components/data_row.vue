<template>
  <tr>
    <td v-for="col in columns">
      <component v-if="col.component" :is="col.component" :params="row" :value="row[col.key]" />
      <template v-else>{{row[col.key]}}</template>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    columns: { type: Array, required: true },
    row: { type: Object, required: true }
  }
}
</script>
