declare const useFilterable: ({ initialFilters, loadItems }: {
    initialFilters: any;
    loadItems: any;
}) => {
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
    reload: () => void;
    refetch: () => void;
};
export default useFilterable;
