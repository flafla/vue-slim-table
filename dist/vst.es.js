var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { defineComponent, openBlock, createElementBlock, createElementVNode, normalizeClass, computed, ref, reactive, isReactive, watch, shallowRef, renderSlot, Fragment, renderList, createTextVNode, toDisplayString, unref, createCommentVNode, createBlock, withModifiers } from "vue";
var index = "";
const _hoisted_1$1 = ["colspan"];
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("div", null, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    columnsLength: { type: Number, required: true }
  },
  setup(__props) {
    const randNum = Math.floor(Math.random() * 10) + 1;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("tr", null, [
        createElementVNode("td", {
          colspan: __props.columnsLength,
          class: normalizeClass(["vst-loading-row", `vst-loading-row-${randNum}`])
        }, _hoisted_3$1, 10, _hoisted_1$1)
      ]);
    };
  }
});
const SYNC_STATES = {
  INITIAL: "initial",
  SYNCING: "syncing",
  SYNCED: "synced",
  FAILED: "failed"
};
const useFilterable = ({ initialFilters, loadItems }) => {
  const page = ref(1);
  const items = reactive({ value: [] });
  const syncState = ref(SYNC_STATES.INITIAL);
  const reactiveInitialFilters = isReactive(initialFilters) ? initialFilters : reactive({ value: initialFilters });
  const filters = computed(() => __spreadValues({
    page: page.value
  }, reactiveInitialFilters.value));
  const load = () => {
    syncState.value = SYNC_STATES.SYNCING;
    return loadItems(filters.value).then((res) => {
      items.value = res;
      syncState.value = SYNC_STATES.SYNCED;
    }).catch(() => {
      items.value = [];
      syncState.value = SYNC_STATES.FAILED;
    });
  };
  watch(filters, load);
  load();
  return {
    page,
    items,
    syncState,
    nextPage: () => {
      page.value += 1;
    },
    prevPage: () => {
      page.value -= 1;
    },
    isSyncing: computed(() => syncState.value === SYNC_STATES.SYNCING),
    isSynced: computed(() => syncState.value === SYNC_STATES.SYNCED),
    isFailed: computed(() => syncState.value === SYNC_STATES.FAILED),
    reload: () => {
      load();
    },
    refetch: () => {
      if (page.value === 1) {
        load();
      } else {
        page.value = 1;
      }
    }
  };
};
const stringify = (obj, parentPrefix) => (outputArray, [key, val]) => {
  if (val === null || val === void 0) {
    return outputArray;
  }
  const encodedKey = encodeURIComponent(key);
  const prefix = parentPrefix ? `${parentPrefix}[${encodedKey}]` : encodedKey;
  if (["number", "string"].includes(typeof val)) {
    outputArray.push(`${prefix}=${encodeURIComponent(val)}`);
    return outputArray;
  }
  outputArray.push(Object.entries(val).reduce(stringify(val, prefix), []).join("&"));
  return outputArray;
};
var toQueryString = (obj) => Object.entries(obj).reduce(stringify(), []).join("&");
const _hoisted_1 = { class: "vst" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { key: 0 };
const _hoisted_5 = ["colspan"];
const _hoisted_6 = ["colspan"];
const _hoisted_7 = {
  key: 0,
  class: "vst-pagination mt-3"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    columns: null,
    source: null,
    perPage: { default: 25 }
  },
  setup(__props, { expose }) {
    const props = __props;
    const orders = shallowRef({});
    const fetchData = async (params) => {
      let data;
      if (typeof props.source === "string") {
        const response = await fetch(`${props.source}?${toQueryString(params)}`);
        data = await response.json();
      } else {
        data = await props.source(params);
      }
      return data;
    };
    const onOrderClick = (key) => {
      if (orders.value[key] === "asc") {
        orders.value = { [key]: "desc" };
      } else if (orders.value[key] === "desc") {
        orders.value = {};
      } else {
        orders.value = { [key]: "asc" };
      }
    };
    const {
      page,
      isSyncing,
      isSynced,
      prevPage,
      nextPage,
      reload,
      refetch,
      items: rows
    } = useFilterable({
      initialFilters: { per_page: props.perPage, orders },
      loadItems: fetchData
    });
    expose({
      refetch,
      reload,
      rows
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("table", _hoisted_1, [
        __props.columns.length ? (openBlock(), createElementBlock("thead", _hoisted_2, [
          renderSlot(_ctx.$slots, "thead:before", { columns: __props.columns }),
          createElementVNode("tr", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, (column) => {
              return openBlock(), createElementBlock("th", {
                key: column.key,
                class: normalizeClass(["vst-th", { "vst-orderable": column.orderable }]),
                onClick: ($event) => column.orderable ? onOrderClick(column.key) : null
              }, [
                column.orderable ? (openBlock(), createElementBlock("div", _hoisted_4, [
                  renderSlot(_ctx.$slots, `head:${column.key}`, { column }, () => [
                    createTextVNode(toDisplayString(column.title), 1)
                  ]),
                  column.orderable ? (openBlock(), createElementBlock("a", {
                    key: 0,
                    href: "#",
                    class: normalizeClass(["vst-orderable-toggle", unref(orders)[column.key]])
                  }, null, 2)) : createCommentVNode("", true)
                ])) : renderSlot(_ctx.$slots, `head:${column.key}`, {
                  key: 1,
                  column
                }, () => [
                  createTextVNode(toDisplayString(column.title), 1)
                ])
              ], 10, _hoisted_3);
            }), 128))
          ]),
          renderSlot(_ctx.$slots, "thead:after", { columns: __props.columns })
        ])) : createCommentVNode("", true),
        createElementVNode("tbody", null, [
          unref(isSyncing) ? renderSlot(_ctx.$slots, "row:loading", { key: 0 }, () => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.perPage, (i) => {
              return openBlock(), createBlock(_sfc_main$1, {
                key: `loadingRow${i}`,
                "columns-length": __props.columns.length
              }, null, 8, ["columns-length"]);
            }), 128))
          ]) : unref(isSynced) && unref(rows).value.length === 0 ? renderSlot(_ctx.$slots, "row:empty", { key: 1 }, () => [
            createElementVNode("tr", null, [
              createElementVNode("td", {
                colspan: __props.columns.length
              }, " No records found ", 8, _hoisted_5)
            ])
          ]) : unref(isSynced) && unref(rows).value.length ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(unref(rows).value, (row, i) => {
            return renderSlot(_ctx.$slots, "row", {
              row,
              index: i,
              columns: __props.columns
            }, () => [
              (openBlock(), createElementBlock("tr", {
                key: row["id"] || i
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, (column) => {
                  return openBlock(), createElementBlock("td", {
                    key: column.key
                  }, [
                    renderSlot(_ctx.$slots, `cell:${column.key}`, {
                      row,
                      value: row[column.key],
                      column,
                      index: i
                    }, () => [
                      createTextVNode(toDisplayString(row[column.key]), 1)
                    ])
                  ]);
                }), 128))
              ]))
            ]);
          }), 256)) : createCommentVNode("", true)
        ]),
        createElementVNode("tfoot", null, [
          createElementVNode("tr", null, [
            createElementVNode("td", {
              colspan: __props.columns.length
            }, [
              renderSlot(_ctx.$slots, "pagination", {
                page: unref(page),
                rows: unref(rows).value
              }, () => [
                unref(page) > 1 || unref(rows).value.length === __props.perPage || unref(isSyncing) ? (openBlock(), createElementBlock("ul", _hoisted_7, [
                  createElementVNode("li", {
                    class: normalizeClass(["vst-page-item", { disabled: unref(page) === 1 || unref(isSyncing) }])
                  }, [
                    createElementVNode("a", {
                      class: "vst-page-link",
                      onClick: _cache[0] || (_cache[0] = withModifiers((...args) => unref(prevPage) && unref(prevPage)(...args), ["prevent"]))
                    }, "\u2190")
                  ], 2),
                  createElementVNode("li", {
                    class: normalizeClass(["vst-page-item", {
                      disabled: unref(rows).value.length < __props.perPage || unref(isSyncing)
                    }])
                  }, [
                    createElementVNode("a", {
                      class: "vst-page-link",
                      onClick: _cache[1] || (_cache[1] = withModifiers((...args) => unref(nextPage) && unref(nextPage)(...args), ["prevent"]))
                    }, "\u2192")
                  ], 2)
                ])) : createCommentVNode("", true)
              ])
            ], 8, _hoisted_6)
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
//# sourceMappingURL=vst.es.js.map
