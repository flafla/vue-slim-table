import type { TableOrders, TableProps, TableRow } from '@/ts/types';
declare const __VLS_export: <TRow extends TableRow>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_exposed?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<TableProps<TRow>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (typeof globalThis extends {
        __VLS_PROPS_FALLBACK: infer P;
    } ? P : {});
    expose: (exposed: import("vue").ShallowUnwrapRef<{
        refetch: () => void;
        reload: () => Promise<void>;
        rows: import("vue").Ref<TRow[]>;
    }>) => void;
    attrs: any;
    slots: Partial<{
        [key: `thead:${string}`]: (_props: {
            column: import("@/ts/types").TableColumn;
            orders: TableOrders;
        }) => import("vue").VNode[];
        [key: `cell:${string}`]: (_props: {
            row: TRow;
            index: number;
            column: import("@/ts/types").TableColumn;
            value: unknown;
        }) => import("vue").VNode[];
        'thead:before': () => import("vue").VNode[];
        thead: (_props: {
            columns: import("@/ts/types").TableColumn[];
            orders: TableOrders;
        }) => import("vue").VNode[];
        'thead:after': () => import("vue").VNode[];
        'row:loading': () => import("vue").VNode[];
        'row:empty': () => import("vue").VNode[];
        row: (_props: {
            row: TRow;
            index: number;
            columns: import("@/ts/types").TableColumn[];
        }) => import("vue").VNode[];
        pagination: (_props: {
            page: number;
            rows: TRow[];
        }) => import("vue").VNode[];
    }>;
    emit: {};
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_PrettifyLocal<T> = (T extends any ? {
    [K in keyof T]: T[K];
} : {
    [K in keyof T as K]: T[K];
}) & {};
