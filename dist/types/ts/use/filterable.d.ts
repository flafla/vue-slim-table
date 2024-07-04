import { Ref, ComputedRef } from 'vue';
type UseFiltetableArgs<T, S> = {
    initialFilters: ComputedRef<T>;
    loadItems: (_params: T & {
        page: number;
    }) => Promise<S[]>;
};
export declare const SYNC_STATES: {
    readonly INITIAL: "INITIAL";
    readonly SYNCING: "SYNCING";
    readonly SYNCED: "SYNCED";
    readonly FAILED: "FAILED";
};
type SynsState = (typeof SYNC_STATES)[keyof typeof SYNC_STATES];
declare const _default: <TFilters, TItem>({ initialFilters, loadItems, }: UseFiltetableArgs<TFilters, TItem>) => {
    page: Ref<number>;
    items: Ref<TItem[]>;
    syncState: Ref<SynsState>;
    isSyncing: ComputedRef<boolean>;
    isSynced: ComputedRef<boolean>;
    isFailed: ComputedRef<boolean>;
    nextPage: () => void;
    prevPage: () => void;
    setPage: (num: number) => void;
    reload: () => Promise<void>;
    refetch: () => void;
};
export default _default;
