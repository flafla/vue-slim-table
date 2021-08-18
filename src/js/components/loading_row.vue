<template>
  <tr>
    <td
      :colspan="columnsLength"
      :class="['vst-loading-row', `vst-loading-row-${randNum}`]">
      <div />
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    columnsLength: { type: Number, required: true },
  },
  data() {
    return {
      randNum: Math.floor(Math.random() * 10) + 1,
    }
  },
}
</script>
