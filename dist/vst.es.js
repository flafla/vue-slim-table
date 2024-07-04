import { defineComponent as F, openBlock as n, createElementBlock as u, createElementVNode as a, normalizeClass as $, ref as b, watch as _, computed as I, shallowRef as B, renderSlot as d, Fragment as N, renderList as f, mergeProps as M, toHandlers as V, createTextVNode as E, toDisplayString as P, createCommentVNode as w, unref as t, createBlock as R, withModifiers as A } from "vue";
const q = ["colspan"], z = /* @__PURE__ */ a("div", null, null, -1), H = [
  z
], O = /* @__PURE__ */ F({
  __name: "loading_row",
  props: {
    columnsLength: { type: Number, required: !0 }
  },
  setup(v) {
    const h = Math.floor(Math.random() * 10) + 1;
    return (o, l) => (n(), u("tr", null, [
      a("td", {
        colspan: v.columnsLength,
        class: $(["vst-loading-row", `vst-loading-row-${h}`])
      }, H, 10, q)
    ]));
  }
}), g = {
  INITIAL: "INITIAL",
  SYNCING: "SYNCING",
  SYNCED: "SYNCED",
  FAILED: "FAILED"
}, j = ({
  initialFilters: v,
  loadItems: h
}) => {
  const o = b(1), l = b([]), i = b(g.INITIAL), c = async () => {
    i.value = g.SYNCING;
    try {
      l.value = await h({
        ...v.value,
        page: o.value
      }), i.value = g.SYNCED;
    } catch {
      l.value = [], i.value = g.FAILED;
    }
  };
  return _(v, c), _(o, c), c(), {
    page: o,
    items: l,
    syncState: i,
    isSyncing: I(() => i.value === g.SYNCING),
    isSynced: I(() => i.value === g.SYNCED),
    isFailed: I(() => i.value === g.FAILED),
    nextPage: () => {
      o.value += 1;
    },
    prevPage: () => {
      o.value -= 1;
    },
    setPage: (S) => {
      o.value = S;
    },
    reload: c,
    refetch: () => {
      o.value === 1 ? c() : o.value = 1;
    }
  };
}, J = { class: "vst" }, K = { key: 0 }, Q = { key: 0 }, U = ["colspan"], W = ["colspan"], X = {
  key: 0,
  class: "vst-pagination"
}, x = /* @__PURE__ */ F({
  __name: "slim_table",
  props: {
    columns: {},
    perPage: { default: 25 },
    source: {}
  },
  setup(v, { expose: h }) {
    const o = v, l = B({}), i = async (e) => {
      let r = [];
      try {
        r = await o.source(e);
      } catch {
      }
      return r;
    }, c = (e, r) => {
      e.preventDefault(), l.value[r] === "asc" ? l.value = { [r]: "desc" } : l.value[r] === "desc" ? l.value = {} : l.value = { [r]: "asc" };
    }, S = I(() => ({
      per_page: o.perPage,
      orders: l
    })), {
      page: C,
      isSyncing: m,
      isSynced: D,
      prevPage: L,
      nextPage: Y,
      reload: T,
      refetch: G,
      items: p
    } = j({
      initialFilters: S,
      loadItems: i
    });
    return h({
      refetch: G,
      reload: T,
      rows: p
    }), (e, r) => (n(), u("table", J, [
      e.columns.length ? (n(), u("thead", K, [
        d(e.$slots, "thead:before"),
        d(e.$slots, "thead", {
          columns: e.columns,
          orders: l.value
        }, () => [
          a("tr", null, [
            (n(!0), u(N, null, f(e.columns, (s) => (n(), u("th", M({
              key: s.key,
              class: ["vst-th", { "vst-orderable": s.orderable }]
            }, V(s.orderable ? { click: (y) => c(y, s.key) } : {}, !0)), [
              s.orderable ? (n(), u("div", Q, [
                d(e.$slots, `thead:${s.key}`, {
                  column: s,
                  orders: l.value
                }, () => [
                  E(P(s.title), 1)
                ]),
                a("i", {
                  class: $(["vst-orderable-toggle", l.value[s.key]])
                }, null, 2)
              ])) : d(e.$slots, `thead:${s.key}`, {
                key: 1,
                column: s,
                orders: l.value
              }, () => [
                E(P(s.title), 1)
              ])
            ], 16))), 128))
          ])
        ]),
        d(e.$slots, "thead:after")
      ])) : w("", !0),
      a("tbody", null, [
        t(m) ? d(e.$slots, "row:loading", { key: 0 }, () => [
          (n(!0), u(N, null, f(e.perPage, (s) => (n(), R(O, {
            key: `loadingRow${s}`,
            "columns-length": e.columns.length
          }, null, 8, ["columns-length"]))), 128))
        ]) : t(D) && t(p).length === 0 ? d(e.$slots, "row:empty", { key: 1 }, () => [
          a("tr", null, [
            a("td", {
              colspan: e.columns.length
            }, " No records found ", 8, U)
          ])
        ]) : t(D) && t(p).length ? (n(!0), u(N, { key: 2 }, f(t(p), (s, y) => d(e.$slots, "row", {
          row: s,
          index: y,
          columns: e.columns
        }, () => [
          (n(), u("tr", {
            key: s.id || y
          }, [
            (n(!0), u(N, null, f(e.columns, (k) => (n(), u("td", {
              key: k.key
            }, [
              d(e.$slots, `cell:${k.key}`, {
                row: s,
                value: s[k.key],
                column: k,
                index: y
              }, () => [
                E(P(s[k.key]), 1)
              ])
            ]))), 128))
          ]))
        ])), 256)) : w("", !0)
      ]),
      a("tfoot", null, [
        a("tr", null, [
          a("td", {
            colspan: e.columns.length
          }, [
            d(e.$slots, "pagination", {
              page: t(C),
              rows: t(p)
            }, () => [
              t(C) > 1 || t(p).length === e.perPage || t(m) ? (n(), u("ul", X, [
                a("li", {
                  class: $(["vst-page-item", { disabled: t(C) === 1 || t(m) }])
                }, [
                  a("a", {
                    class: "vst-page-link",
                    onClick: r[0] || (r[0] = A(
                      //@ts-ignore
                      (...s) => t(L) && t(L)(...s),
                      ["prevent"]
                    ))
                  }, "←")
                ], 2),
                a("li", {
                  class: $(["vst-page-item", { disabled: t(p).length < e.perPage || t(m) }])
                }, [
                  a("a", {
                    class: "vst-page-link",
                    onClick: r[1] || (r[1] = A(
                      //@ts-ignore
                      (...s) => t(Y) && t(Y)(...s),
                      ["prevent"]
                    ))
                  }, "→")
                ], 2)
              ])) : w("", !0)
            ])
          ], 8, W)
        ])
      ])
    ]));
  }
});
export {
  x as default
};
//# sourceMappingURL=vst.es.js.map
