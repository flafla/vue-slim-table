import { ref as C, watch as A, computed as S, defineComponent as T, createElementBlock as r, openBlock as a, Fragment as k, renderList as m, createElementVNode as n, shallowRef as V, createCommentVNode as b, renderSlot as d, mergeProps as B, toHandlers as R, createTextVNode as E, toDisplayString as L, normalizeClass as P, unref as t, createBlock as q, withModifiers as F } from "vue";
const p = {
  INITIAL: "INITIAL",
  SYNCING: "SYNCING",
  SYNCED: "SYNCED",
  FAILED: "FAILED"
}, z = ({ initialFilters: v, loadItems: N }) => {
  const o = C(1), l = C([]), i = C(p.INITIAL), c = async () => {
    i.value = p.SYNCING;
    try {
      l.value = await N({
        ...v.value,
        page: o.value
      }), i.value = p.SYNCED;
    } catch {
      l.value = [], i.value = p.FAILED;
    }
  };
  return A(v, c), A(o, c), c(), {
    page: o,
    items: l,
    syncState: i,
    isSyncing: S(() => i.value === p.SYNCING),
    isSynced: S(() => i.value === p.SYNCED),
    isFailed: S(() => i.value === p.FAILED),
    nextPage: () => {
      o.value += 1;
    },
    prevPage: () => {
      o.value -= 1;
    },
    setPage: (I) => {
      o.value = I;
    },
    reload: c,
    refetch: () => {
      o.value === 1 ? c() : o.value = 1;
    }
  };
}, H = /* @__PURE__ */ n("div", null, null, -1), M = [
  H
], O = /* @__PURE__ */ T({
  __name: "LoadingRow",
  props: {
    columnsLength: { type: Number, required: !0 }
  },
  setup(v) {
    return (N, o) => (a(), r("tr", null, [
      (a(!0), r(k, null, m(v.columnsLength, (l) => (a(), r("td", {
        key: l,
        class: "vst-loading-row"
      }, M))), 128))
    ]));
  }
}), j = { class: "vst" }, J = { key: 0 }, K = { key: 0 }, Q = ["colspan"], U = ["colspan"], W = {
  key: 0,
  class: "vst-pagination"
}, Z = /* @__PURE__ */ T({
  __name: "VueSlimTable",
  props: {
    columns: {},
    perPage: { default: 25 },
    source: {}
  },
  setup(v, { expose: N }) {
    const o = v, l = V({}), i = async (e) => {
      let u = [];
      try {
        u = await o.source(e);
      } catch {
      }
      return u;
    }, c = (e, u) => {
      e.preventDefault(), l.value[u] === "asc" ? l.value = { [u]: "desc" } : l.value[u] === "desc" ? l.value = {} : l.value = { [u]: "asc" };
    }, I = S(() => ({
      per_page: o.perPage,
      orders: l.value
    })), {
      page: $,
      isSyncing: f,
      isSynced: D,
      prevPage: w,
      nextPage: Y,
      reload: _,
      refetch: G,
      items: g
    } = z({
      initialFilters: I,
      loadItems: i
    });
    return N({
      refetch: G,
      reload: _,
      rows: g
    }), (e, u) => (a(), r("table", j, [
      e.columns.length ? (a(), r("thead", J, [
        d(e.$slots, "thead:before"),
        d(e.$slots, "thead", {
          columns: e.columns,
          orders: l.value
        }, () => [
          n("tr", null, [
            (a(!0), r(k, null, m(e.columns, (s) => (a(), r("th", B({
              key: s.key,
              class: ["vst-th", { "vst-orderable": s.orderable }]
            }, R(s.orderable ? { click: (h) => c(h, s.key) } : {}, !0)), [
              s.orderable ? (a(), r("div", K, [
                d(e.$slots, `thead:${s.key}`, {
                  column: s,
                  orders: l.value
                }, () => [
                  E(L(s.title), 1)
                ]),
                n("i", {
                  class: P(["vst-orderable-toggle", l.value[s.key]])
                }, null, 2)
              ])) : d(e.$slots, `thead:${s.key}`, {
                key: 1,
                column: s,
                orders: l.value
              }, () => [
                E(L(s.title), 1)
              ])
            ], 16))), 128))
          ])
        ]),
        d(e.$slots, "thead:after")
      ])) : b("", !0),
      n("tbody", null, [
        t(f) ? d(e.$slots, "row:loading", { key: 0 }, () => [
          (a(!0), r(k, null, m(e.perPage, (s) => (a(), q(O, {
            key: `loadingRow${s}`,
            "columns-length": e.columns.length
          }, null, 8, ["columns-length"]))), 128))
        ]) : t(D) && t(g).length === 0 ? d(e.$slots, "row:empty", { key: 1 }, () => [
          n("tr", null, [
            n("td", {
              colspan: e.columns.length
            }, " No records found ", 8, Q)
          ])
        ]) : t(D) && t(g).length ? (a(!0), r(k, { key: 2 }, m(t(g), (s, h) => d(e.$slots, "row", {
          row: s,
          index: h,
          columns: e.columns
        }, () => [
          (a(), r("tr", {
            key: s.id || h
          }, [
            (a(!0), r(k, null, m(e.columns, (y) => (a(), r("td", {
              key: y.key
            }, [
              d(e.$slots, `cell:${y.key}`, {
                row: s,
                value: s[y.key],
                column: y,
                index: h
              }, () => [
                E(L(s[y.key]), 1)
              ])
            ]))), 128))
          ]))
        ])), 256)) : b("", !0)
      ]),
      n("tfoot", null, [
        n("tr", null, [
          n("td", {
            colspan: e.columns.length
          }, [
            d(e.$slots, "pagination", {
              page: t($),
              rows: t(g)
            }, () => [
              t($) > 1 || t(g).length === e.perPage || t(f) ? (a(), r("ul", W, [
                n("li", {
                  class: P(["vst-page-item", { disabled: t($) === 1 || t(f) }])
                }, [
                  n("a", {
                    class: "vst-page-link",
                    onClick: u[0] || (u[0] = F(
                      //@ts-ignore
                      (...s) => t(w) && t(w)(...s),
                      ["prevent"]
                    ))
                  }, "←")
                ], 2),
                n("li", {
                  class: P(["vst-page-item", { disabled: t(g).length < e.perPage || t(f) }])
                }, [
                  n("a", {
                    class: "vst-page-link",
                    onClick: u[1] || (u[1] = F(
                      //@ts-ignore
                      (...s) => t(Y) && t(Y)(...s),
                      ["prevent"]
                    ))
                  }, "→")
                ], 2)
              ])) : b("", !0)
            ])
          ], 8, U)
        ])
      ])
    ]));
  }
});
export {
  Z as default
};
//# sourceMappingURL=vst.es.js.map
