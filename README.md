# Vue Slim Tables

### Installation & basic usage
```sh
yarn add vue-slim-tables
// or
npm install vue-slim-tables
```

```html
<template>
  <VueSlimTables :columns="columns" :source="asyncSource" />
</template>

<script setup>
const columns = [
  { key: 'id', title: 'ID' },
  { key: 'name', title: 'Name' },
  { key: 'phone', title: 'Phone' }
]

const asyncSource = (params) => {
  return fetch('...', params).then((res) => res.json())
}
</script>
```

### Props
| Prop | Type | Required | Description |
| - | - | - | - |
| columns | Array | true | Array of column objects described below |
| source | Function | true | async load |
| perPage | Number | false | Number or rows to display. By default 25 will be used |

#### Column object
| Key | Type | Required | Description |
| - | - | - | - |
| key | String | true | `Uniq` key that used for ordering and slots |
| title | String | true | Displayed in thead cell |
| orderable | Boolean | false | Ordering by column `key` |

### Slots
| Slot | Props | Description |
| - | - | - |
| #thead:before | - | Add a row before main |
| #thead | { columns, orders } | Rewrite the entire thead row |
| #thead:after | - | Add a row after main |
| #thead:${column.key} | { column } | Rewrite thead cell with custom html |
| #row | { row, index, columns } | Rewrite the entire tbody row |
| #row:empty | - | Rewrite empty table row markup |
| #row:loading | - | Rewrite loading table rows markup |
| #cell:${column.key} | { row, index, column, value } | Rewrite tbody cell with custom html |
| #pagination | { page, rows } | Rewrite pagination with your own implementation |
