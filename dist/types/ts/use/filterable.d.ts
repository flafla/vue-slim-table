type UseFiltetableArgs<T, S> = {
    initialFilters: T;
    loadItems: (_params: T & {
        page: number;
    }) => Promise<S[]>;
};
declare const useFilterable: <TFilters, TItem>({ initialFilters, loadItems }: UseFiltetableArgs<TFilters, TItem>) => {
    page: import("vue").Ref<number>;
    items: {
        value: TItem[];
    };
    syncState: import("vue").Ref<string>;
    nextPage: () => void;
    prevPage: () => void;
    isSyncing: import("vue").ComputedRef<boolean>;
    isSynced: import("vue").ComputedRef<boolean>;
    isFailed: import("vue").ComputedRef<boolean>;
    reload: () => void;
    refetch: () => void;
};
export default useFilterable;
