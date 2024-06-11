import {
  ref, computed, watch, Ref,
} from 'vue'

type UseFiltetableArgs<T, S> = {
  initialFilters: Ref<T>
  loadItems: (_params: T & { page: number }) => Promise<S[]>
}

export const SYNC_STATES = {
  INITIAL: 'INITIAL',
  SYNCING: 'SYNCING',
  SYNCED: 'SYNCED',
  FAILED: 'FAILED',
} as const

type SynsState = (typeof SYNC_STATES)[keyof typeof SYNC_STATES]

export default <TFilters, TItem>({
  initialFilters,
  loadItems,
}: UseFiltetableArgs<TFilters, TItem>) => {
  const page = ref(1)
  const items: Ref<TItem[]> = ref([])
  const syncState = ref<SynsState>(SYNC_STATES.INITIAL)

  const reload = async () => {
    syncState.value = SYNC_STATES.SYNCING

    try {
      items.value = await loadItems({
        ...initialFilters.value,
        page: page.value,
      })
      syncState.value = SYNC_STATES.SYNCED
    } catch {
      items.value = []
      syncState.value = SYNC_STATES.FAILED
    }
  }

  watch(initialFilters, reload)
  watch(page, reload)
  reload()

  return {
    page,
    items,
    syncState,
    isSyncing: computed(() => syncState.value === SYNC_STATES.SYNCING),
    isSynced: computed(() => syncState.value === SYNC_STATES.SYNCED),
    isFailed: computed(() => syncState.value === SYNC_STATES.FAILED),
    nextPage: () => {
      page.value += 1
    },
    prevPage: () => {
      page.value -= 1
    },
    setPage: (num: number) => {
      page.value = num
    },
    reload,
    refetch: () => {
      if (page.value === 1) {
        reload()
      } else {
        page.value = 1
      }
    },
  }
}
