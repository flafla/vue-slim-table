import {
  ref, computed, reactive, watch,
} from 'vue'

type CombinedFilters<T> = T & {
  page: number
}

type UseFiltetableArgs<T, S> = {
  initialFilters: T,
  loadItems: (_params: T & { page: number }) => Promise<S[]>
}

const SYNC_STATES = {
  INITIAL: 'initial',
  SYNCING: 'syncing',
  SYNCED: 'synced',
  FAILED: 'failed',
} as const

type SynsState = (typeof SYNC_STATES)[keyof typeof SYNC_STATES]

const useFilterable = <TFilters, TItem>({ initialFilters, loadItems }: UseFiltetableArgs<TFilters, TItem>) => {
  const page = ref(1)
  const items: { value: TItem[] } = reactive({ value: [] })
  const syncState = ref<SynsState>(SYNC_STATES.INITIAL)
  const filters = reactive({ value: initialFilters })

  const combinedFilters = computed<CombinedFilters<TFilters>>(() => ({
    page: page.value,
    ...filters.value as TFilters,
  }))

  const load = async () => {
    syncState.value = SYNC_STATES.SYNCING

    try {
      items.value = await loadItems(combinedFilters.value)
      syncState.value = SYNC_STATES.SYNCED
    } catch {
      items.value = []
      syncState.value = SYNC_STATES.FAILED
    }
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
