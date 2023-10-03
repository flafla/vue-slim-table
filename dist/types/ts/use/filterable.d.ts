type UseFiltetableArgs<T, S> = {
    initialFilters: T;
    loadItems: (_params: T & {
        page: number;
    }) => Promise<S[]>;
};
declare const SYNC_STATES: {
    readonly INITIAL: "initial";
    readonly SYNCING: "syncing";
    readonly SYNCED: "synced";
    readonly FAILED: "failed";
};
type SynsState = (typeof SYNC_STATES)[keyof typeof SYNC_STATES];
declare const useFilterable: <TFilters, TItem>({ initialFilters, loadItems }: UseFiltetableArgs<TFilters, TItem>) => {
    page: import("vue").Ref<number>;
    items: {
        value: TItem[];
    };
    syncState: import("vue").Ref<SynsState>;
    nextPage: () => void;
    prevPage: () => void;
    isSyncing: import("vue").ComputedRef<boolean>;
    isSynced: import("vue").ComputedRef<boolean>;
    isFailed: import("vue").ComputedRef<boolean>;
    reload: () => void;
    refetch: () => void;
};
export default useFilterable;
