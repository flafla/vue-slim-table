<template>
  <tr>
    <td
      :colspan="columnsLength"
      :class="['vst-loading-row', `vst-loading-row-${randNum}`]">
      <div></div>
    </td>
  </tr>
</template>

<script lang="ts" setup>
const props = defineProps({
  columnsLength: { type: Number, required: true }
})

const randNum = Math.floor(Math.random() * 10) + 1
</script>
