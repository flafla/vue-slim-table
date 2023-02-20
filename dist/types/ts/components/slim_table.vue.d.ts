import { ShallowRef } from 'vue';
interface TableColumn {
    key: string;
    title: string;
    orderable?: boolean;
}
interface TableOrders {
    [key: string]: 'asc' | 'desc';
}
interface TableFetchParams {
    per_page: number;
    page: number;
    orders?: TableOrders;
}
interface TableRow {
    [key: string]: any;
}
declare const _sfc_main: import("vue").DefineComponent<{
    columns: {
        type: ArrayConstructor;
        required: true;
    };
    source: {
        type: (StringConstructor | FunctionConstructor)[];
        required: true;
    };
    perPage: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}, {
    props: {
        columns: Array<TableColumn>;
        source: string | ((_: TableFetchParams) => Promise<TableRow[]> | TableRow[]);
        perPage: number;
    };
    orders: ShallowRef<TableOrders>;
    loadItems: (params: TableFetchParams) => Promise<TableRow[]>;
    onOrderClick: (key: string) => void;
    page: import("vue").Ref<number>;
    isSyncing: import("vue").ComputedRef<boolean>;
    isSynced: import("vue").ComputedRef<boolean>;
    prevPage: () => void;
    nextPage: () => void;
    reload: () => void;
    refetch: () => void;
    rows: {
        value: TableRow[];
    };
    LoadingRow: import("vue").DefineComponent<{
        columnsLength: {
            type: NumberConstructor;
            required: true;
        };
    }, {
        randNum: number;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        columnsLength: {
            type: NumberConstructor;
            required: true;
        };
    }>>, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    columns: {
        type: ArrayConstructor;
        required: true;
    };
    source: {
        type: (StringConstructor | FunctionConstructor)[];
        required: true;
    };
    perPage: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}>>, {
    perPage: number;
}>;
export default _sfc_main;
