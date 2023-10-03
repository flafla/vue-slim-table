import type { TableOrders, TableRow, TableProps } from '../../ts/types';
declare const _default: <TRow extends TableRow>(__VLS_props: TableProps<TRow> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: Pick<{
    props: TableProps<TRow>;
    expose(exposed: {
        refetch: () => void;
        reload: () => void;
        rows: {
            value: TRow[];
        };
    }): void;
    attrs: any;
    slots: Partial<{
        [key: `thead:${string}`]: (_props: {
            column: import('../../ts/types').TableColumn;
            orders: TableOrders;
        }) => any;
        [key: `cell:${string}`]: (_props: {
            row: TRow;
            index: number;
            column: import('../../ts/types').TableColumn;
            value: unknown;
        }) => any;
        'thead:before': () => any;
        thead: (_props: {
            columns: import('../../ts/types').TableColumn[];
            orders: TableOrders;
        }) => any;
        'thead:after': () => any;
        'row:loading': () => any;
        'row:empty': () => any;
        row: (_props: {
            row: TRow;
            index: number;
            columns: import('../../ts/types').TableColumn[];
        }) => any;
        pagination: (_props: {
            page: number;
            rows: TRow[];
        }) => any;
    }>;
    emit: any;
}, "attrs" | "emit" | "slots"> | undefined, __VLS_setup?: Promise<{
    props: TableProps<TRow>;
    expose(exposed: {
        refetch: () => void;
        reload: () => void;
        rows: {
            value: TRow[];
        };
    }): void;
    attrs: any;
    slots: Partial<{
        [key: `thead:${string}`]: (_props: {
            column: import('../../ts/types').TableColumn;
            orders: TableOrders;
        }) => any;
        [key: `cell:${string}`]: (_props: {
            row: TRow;
            index: number;
            column: import('../../ts/types').TableColumn;
            value: unknown;
        }) => any;
        'thead:before': () => any;
        thead: (_props: {
            columns: import('../../ts/types').TableColumn[];
            orders: TableOrders;
        }) => any;
        'thead:after': () => any;
        'row:loading': () => any;
        'row:empty': () => any;
        row: (_props: {
            row: TRow;
            index: number;
            columns: import('../../ts/types').TableColumn[];
        }) => any;
        pagination: (_props: {
            page: number;
            rows: TRow[];
        }) => any;
    }>;
    emit: any;
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: TableProps<TRow>;
        expose(exposed: {
            refetch: () => void;
            reload: () => void;
            rows: {
                value: TRow[];
            };
        }): void;
        attrs: any;
        slots: Partial<{
            [key: `thead:${string}`]: (_props: {
                column: import('../../ts/types').TableColumn;
                orders: TableOrders;
            }) => any;
            [key: `cell:${string}`]: (_props: {
                row: TRow;
                index: number;
                column: import('../../ts/types').TableColumn;
                value: unknown;
            }) => any;
            'thead:before': () => any;
            thead: (_props: {
                columns: import('../../ts/types').TableColumn[];
                orders: TableOrders;
            }) => any;
            'thead:after': () => any;
            'row:loading': () => any;
            'row:empty': () => any;
            row: (_props: {
                row: TRow;
                index: number;
                columns: import('../../ts/types').TableColumn[];
            }) => any;
            pagination: (_props: {
                page: number;
                rows: TRow[];
            }) => any;
        }>;
        emit: any;
    } | undefined;
};
export default _default;
