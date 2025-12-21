<template>
  <tr>
    <td v-for="index in columnsLength" :key="index" class="vst-loading-row">
      <div />
    </td>
  </tr>
</template>

<script lang="ts" setup>
defineProps({
  columnsLength: { type: Number, required: true },
})
</script>
