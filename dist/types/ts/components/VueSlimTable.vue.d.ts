import { TableOrders, TableRow, TableProps } from '../types';

declare const _default: <TRow extends TableRow>(__VLS_props: Awaited<typeof __VLS_setup>["props"], __VLS_ctx?: __VLS_Prettify<Pick<Awaited<typeof __VLS_setup>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_Prettify<__VLS_OmitKeepDiscriminatedUnion<(Partial<{}> & Omit<{} & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, never>) & TableProps<TRow>, keyof import('vue').VNodeProps | keyof import('vue').AllowedComponentProps>> & {} & (import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps);
    expose(exposed: import('vue').ShallowUnwrapRef<{
        refetch: () => void;
        reload: () => Promise<void>;
        rows: import('vue').Ref<TRow[], TRow[]>;
    }>): void;
    attrs: any;
    slots: ReturnType<() => Readonly<Partial<{
        [key: `thead:${string}`]: (_props: {
            column: import('../types').TableColumn;
            orders: TableOrders;
        }) => any;
        [key: `cell:${string}`]: (_props: {
            row: TRow;
            index: number;
            column: import('../types').TableColumn;
            value: unknown;
        }) => any;
        'thead:before': () => any;
        thead: (_props: {
            columns: import('../types').TableColumn[];
            orders: TableOrders;
        }) => any;
        'thead:after': () => any;
        'row:loading': () => any;
        'row:empty': () => any;
        row: (_props: {
            row: TRow;
            index: number;
            columns: import('../types').TableColumn[];
        }) => any;
        pagination: (_props: {
            page: number;
            rows: TRow[];
        }) => any;
    }>> & Partial<{
        [key: `thead:${string}`]: (_props: {
            column: import('../types').TableColumn;
            orders: TableOrders;
        }) => any;
        [key: `cell:${string}`]: (_props: {
            row: TRow;
            index: number;
            column: import('../types').TableColumn;
            value: unknown;
        }) => any;
        'thead:before': () => any;
        thead: (_props: {
            columns: import('../types').TableColumn[];
            orders: TableOrders;
        }) => any;
        'thead:after': () => any;
        'row:loading': () => any;
        'row:empty': () => any;
        row: (_props: {
            row: TRow;
            index: number;
            columns: import('../types').TableColumn[];
        }) => any;
        pagination: (_props: {
            page: number;
            rows: TRow[];
        }) => any;
    }>>;
    emit: typeof __VLS_emit;
}>) => import('vue').VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
