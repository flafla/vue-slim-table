# Vue Slim Tables

### Installation & basic usage
```sh
yarn add vue-slim-tables
// or
npm install vue-slim-tables
```

```html
<template>
    <VueSlimTables :columns="columns" source="/users" />
</template>

<script>
    export default {
        created() {
            this.columns = [
                { key: 'id', title: 'ID' },
                { key: 'name', title: 'Name' },
                { key: 'phone', title: 'Phone' }
            ]
        }
    }
</script>
```

### Props
| Prop | Type | Required | Description |
| - | - | - | - |
| columns | Array | true | Array of column objects described below |
| source | [String, Function] | true | `string` is for async fetching rows<br/>`function` for more complicated async load |
| perPage | Number | false | Number or rows to display |

#### Column object
| Key | Type | Required | Description |
| - | - | - | - |
| key | String | true | `Uniq` key that used for ordering and slots |
| title | String | true | Displayed in thead |
| orderable | Boolean | false | Ordering by column `key` |

### Slots
| Slot | Props | Description |
| - | - | - |
| #head:${column.key} | { column } | Rewrite column thead with custom html |
| #row | { row, index, columns } | Rewrite whole row |
| #row:empty | - | Rewrite empty table row markup |
| #row:loading | - | Rewrite loading table rows markup |
| #cell:${column.key} | { row, index, column, value } | Rewrite cell with custom html |
| #pagination | { page, rows } | Rewrite pagination with your own implementation |
| #thead:before | { columns } | Render row before base header |
| #thead:after | { columns } | Render row after base header |
