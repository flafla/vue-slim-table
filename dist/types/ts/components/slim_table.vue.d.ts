import type { PropType as __PropType } from 'vue';
export type TableColumn = {
    key: string;
    title: string;
    orderable?: boolean;
};
export type TableOrders = {
    [key: string]: 'asc' | 'desc';
};
export type TableFetchParams = {
    per_page: number;
    page: number;
    orders?: TableOrders;
};
export type TableRow = {
    [key: string]: any;
};
export type TableFilters = {
    per_page: number;
    orders: TableOrders;
};
export type TableProps = {
    columns: Array<TableColumn>;
    source: ((_: TableFetchParams) => Promise<TableRow[]> | TableRow[]);
    perPage?: number;
};
declare const _sfc_main: import("vue").DefineComponent<{
    columns: {
        type: __PropType<TableColumn[]>;
        required: true;
    };
    source: {
        type: __PropType<(_: TableFetchParams) => Promise<TableRow[]> | TableRow[]>;
        required: true;
    };
    perPage: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    columns: {
        type: __PropType<TableColumn[]>;
        required: true;
    };
    source: {
        type: __PropType<(_: TableFetchParams) => Promise<TableRow[]> | TableRow[]>;
        required: true;
    };
    perPage: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
}>>, {
    perPage: number | undefined;
}, {}>;
export default _sfc_main;
