type CombinedFilters<Filters> = Filters & {
    page: number;
};
interface UseFiltetableArgs<Filters, Item> {
    initialFilters: Filters;
    loadItems: (_filters: CombinedFilters<Filters>) => Promise<Item[]>;
}
declare const useFilterable: <Filters, Item>({ initialFilters, loadItems }: UseFiltetableArgs<Filters, Item>) => {
    page: import("vue").Ref<number>;
    items: {
        value: Item[];
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
