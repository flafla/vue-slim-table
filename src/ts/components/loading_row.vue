<template>
  <tr>
    <td
      :colspan="columnsLength"
      :class="['vst-loading-row', `vst-loading-row-${randNum}`]">
      <div />
    </td>
  </tr>
</template>

<script lang="ts" setup>
defineProps({
  columnsLength: { type: Number, required: true },
})

const randNum = Math.floor(Math.random() * 10) + 1
</script>
