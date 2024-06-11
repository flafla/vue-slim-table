import { Ref } from 'vue';
type UseFiltetableArgs<T, S> = {
    initialFilters: Ref<T>;
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
    isSyncing: import("vue").ComputedRef<boolean>;
    isSynced: import("vue").ComputedRef<boolean>;
    isFailed: import("vue").ComputedRef<boolean>;
    nextPage: () => void;
    prevPage: () => void;
    setPage: (num: number) => void;
    reload: () => Promise<void>;
    refetch: () => void;
};
export default _default;
