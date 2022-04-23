interface UseFiltetableArgs {
    initialFilters: {
        [key: string]: any;
    };
    loadItems: any;
}
declare const useFilterable: ({ initialFilters, loadItems }: UseFiltetableArgs) => {
    page: import("vue").Ref<number>;
    items: {
        value: {
            [x: string]: any;
        }[];
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
