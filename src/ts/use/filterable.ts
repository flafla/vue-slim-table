import {
  ref, computed, reactive, watch, isReactive,
} from 'vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Item { [key: string]: any }

interface UseFiltetableArgs {
  initialFilters: {
    [key: string]: any // eslint-disable-line @typescript-eslint/no-explicit-any
  },
  loadItems: any // eslint-disable-line @typescript-eslint/no-explicit-any
}

const SYNC_STATES = {
  INITIAL: 'initial',
  SYNCING: 'syncing',
  SYNCED: 'synced',
  FAILED: 'failed',
}

const useFilterable = ({ initialFilters, loadItems }: UseFiltetableArgs) => {
  const page = ref(1)
  const items = reactive({ value: [] as Item[] })
  const syncState = ref(SYNC_STATES.INITIAL)
  const reactiveInitialFilters = isReactive(initialFilters) ? initialFilters : reactive({ value: initialFilters })

  const filters = computed(() => ({
    page: page.value,
    ...reactiveInitialFilters.value,
  }))

  const load = () => {
    syncState.value = SYNC_STATES.SYNCING

    return loadItems(filters.value)
      .then((res: Item[]) => {
        items.value = res
        syncState.value = SYNC_STATES.SYNCED
      })
      .catch(() => {
        items.value = []
        syncState.value = SYNC_STATES.FAILED
      })
  }

  watch(filters, load)

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
