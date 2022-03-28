import {
  ref, computed, reactive, watch, isReactive,
} from 'vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Item { [key: string]: any }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useFilterable = ({ initialFilters, loadItems }: { initialFilters: any, loadItems: any }) => {
  const page = ref(1)
  const items = reactive({ value: [] as Item[] })
  const syncState = ref('initial')
  const reactiveInitialFilters = isReactive(initialFilters) ? initialFilters : reactive({ value: initialFilters })

  const filters = computed(() => ({
    page: page.value,
    ...reactiveInitialFilters.value,
  }))

  const load = () => {
    syncState.value = 'syncing'

    loadItems(filters.value)
      .then((res: Item[]) => {
        items.value = res
        syncState.value = 'synced'
      })
      .catch(() => {
        items.value = []
        syncState.value = 'failed'
      })
  }

  watch(filters, () => {
    load()
  })

  load()

  return {
    page,
    items,
    syncState,
    nextPage: () => {
      page.value += 1
    },
    prevPage: () => {
      page.value -= 1
    },
    isSyncing: computed(() => syncState.value === 'syncing'),
    isSynced: computed(() => syncState.value === 'synced'),
    reload: () => {
      load()
    },
    refetch: () => {
      if (page.value === 1) {
        load()
      } else {
        page.value = 1
      }
    },
  }
}

export default useFilterable
