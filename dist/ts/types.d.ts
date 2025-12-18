import type { VNode } from 'vue';
export type TableColumn = {
    key: string;
    title: string;
    orderable?: boolean;
};
export type TableOrders = {
    [key: string]: 'asc' | 'desc';
};
export type TableFilters = {
    per_page: number;
    orders: TableOrders;
};
export type TableFetchParams = {
    page: number;
} & TableFilters;
export type TableRow = {
    id: string | number;
    [key: string]: unknown;
};
export type TableProps<T> = {
    columns: Array<TableColumn>;
    perPage: number;
    source: (_: TableFetchParams) => Promise<T[]> | T[];
};
export type TableSlots<T> = Partial<{
    'thead:before': () => VNode[];
    thead: (_props: {
        columns: TableColumn[];
        orders: TableOrders;
    }) => VNode[];
    'thead:after': () => VNode[];
    [key: `thead:${string}`]: (_props: {
        column: TableColumn;
        orders: TableOrders;
    }) => VNode[];
    'row:loading': () => VNode[];
    'row:empty': () => VNode[];
    row: (_props: {
        row: T;
        index: number;
        columns: TableColumn[];
    }) => VNode[];
    [key: `cell:${string}`]: (_props: {
        row: T;
        index: number;
        column: TableColumn;
        value: unknown;
    }) => VNode[];
    pagination: (_props: {
        page: number;
        rows: T[];
    }) => VNode[];
}>;
