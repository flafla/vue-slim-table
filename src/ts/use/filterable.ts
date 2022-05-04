import {
  ref, computed, reactive, watch,
} from 'vue'

type CombinedFilters<Filters> = Filters & {
  page: number
}

interface UseFiltetableArgs<Filters, Item> {
  initialFilters: Filters,
  loadItems: (_filters: CombinedFilters<Filters>) => Promise<Item[]>
}

const SYNC_STATES = {
  INITIAL: 'initial',
  SYNCING: 'syncing',
  SYNCED: 'synced',
  FAILED: 'failed',
}

const useFilterable = <Filters, Item>({ initialFilters, loadItems }: UseFiltetableArgs<Filters, Item>) => {
  const page = ref(1)
  const items = reactive({ value: [] as Item[] }) as { value: Item[] }
  const syncState = ref(SYNC_STATES.INITIAL)
  const filters = reactive({ value: initialFilters })

  const combinedFilters = computed(() => ({
    page: page.value,
    ...filters.value as Filters,
  }))

  const load = () => {
    syncState.value = SYNC_STATES.SYNCING

    return loadItems(combinedFilters.value)
      .then((res: Item[]) => {
        items.value = res
        syncState.value = SYNC_STATES.SYNCED
      })
      .catch(() => {
        items.value = []
        syncState.value = SYNC_STATES.FAILED
      })
  }
  load()

  watch(combinedFilters, load)

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
    isSyncing: computed(() => syncState.value === SYNC_STATES.SYNCING),
    isSynced: computed(() => syncState.value === SYNC_STATES.SYNCED),
    isFailed: computed(() => syncState.value === SYNC_STATES.FAILED),
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
