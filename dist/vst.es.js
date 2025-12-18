import { ref as b, watch as A, computed as S, defineComponent as T, createElementBlock as u, openBlock as n, createElementVNode as a, normalizeClass as $, shallowRef as V, createCommentVNode as E, renderSlot as d, Fragment as N, renderList as f, mergeProps as B, toHandlers as M, createTextVNode as L, toDisplayString as P, unref as t, createBlock as R, withModifiers as F } from "vue";
const g = {
  INITIAL: "INITIAL",
  SYNCING: "SYNCING",
  SYNCED: "SYNCED",
  FAILED: "FAILED"
}, q = ({ initialFilters: v, loadItems: h }) => {
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
  return A(v, c), A(o, c), c(), {
    page: o,
    items: l,
    syncState: i,
    isSyncing: S(() => i.value === g.SYNCING),
    isSynced: S(() => i.value === g.SYNCED),
    isFailed: S(() => i.value === g.FAILED),
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
}, z = ["colspan"], H = /* @__PURE__ */ a("div", null, null, -1), O = [
  H
], j = /* @__PURE__ */ T({
  __name: "LoadingRow",
  props: {
    columnsLength: { type: Number, required: !0 }
  },
  setup(v) {
    const h = Math.floor(Math.random() * 10) + 1;
    return (o, l) => (n(), u("tr", null, [
      a("td", {
        colspan: v.columnsLength,
        class: $(["vst-loading-row", `vst-loading-row-${h}`])
      }, O, 10, z)
    ]));
  }
}), J = { class: "vst" }, K = { key: 0 }, Q = { key: 0 }, U = ["colspan"], W = ["colspan"], X = {
  key: 0,
  class: "vst-pagination"
}, x = /* @__PURE__ */ T({
  __name: "VueSlimTable",
  props: {
    columns: {},
    perPage: { default: 25 },
    source: {}
  },
  setup(v, { expose: h }) {
    const o = v, l = V({}), i = async (e) => {
      let r = [];
      try {
        r = await o.source(e);
      } catch {
      }
      return r;
    }, c = (e, r) => {
      e.preventDefault(), l.value[r] === "asc" ? l.value = { [r]: "desc" } : l.value[r] === "desc" ? l.value = {} : l.value = { [r]: "asc" };
    }, I = S(() => ({
      per_page: o.perPage,
      orders: l.value
    })), {
      page: C,
      isSyncing: m,
      isSynced: w,
      prevPage: D,
      nextPage: Y,
      reload: _,
      refetch: G,
      items: p
    } = q({
      initialFilters: I,
      loadItems: i
    });
    return h({
      refetch: G,
      reload: _,
      rows: p
    }), (e, r) => (n(), u("table", J, [
      e.columns.length ? (n(), u("thead", K, [
        d(e.$slots, "thead:before"),
        d(e.$slots, "thead", {
          columns: e.columns,
          orders: l.value
        }, () => [
          a("tr", null, [
            (n(!0), u(N, null, f(e.columns, (s) => (n(), u("th", B({
              key: s.key,
              class: ["vst-th", { "vst-orderable": s.orderable }]
            }, M(s.orderable ? { click: (y) => c(y, s.key) } : {}, !0)), [
              s.orderable ? (n(), u("div", Q, [
                d(e.$slots, `thead:${s.key}`, {
                  column: s,
                  orders: l.value
                }, () => [
                  L(P(s.title), 1)
                ]),
                a("i", {
                  class: $(["vst-orderable-toggle", l.value[s.key]])
                }, null, 2)
              ])) : d(e.$slots, `thead:${s.key}`, {
                key: 1,
                column: s,
                orders: l.value
              }, () => [
                L(P(s.title), 1)
              ])
            ], 16))), 128))
          ])
        ]),
        d(e.$slots, "thead:after")
      ])) : E("", !0),
      a("tbody", null, [
        t(m) ? d(e.$slots, "row:loading", { key: 0 }, () => [
          (n(!0), u(N, null, f(e.perPage, (s) => (n(), R(j, {
            key: `loadingRow${s}`,
            "columns-length": e.columns.length
          }, null, 8, ["columns-length"]))), 128))
        ]) : t(w) && t(p).length === 0 ? d(e.$slots, "row:empty", { key: 1 }, () => [
          a("tr", null, [
            a("td", {
              colspan: e.columns.length
            }, " No records found ", 8, U)
          ])
        ]) : t(w) && t(p).length ? (n(!0), u(N, { key: 2 }, f(t(p), (s, y) => d(e.$slots, "row", {
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
                L(P(s[k.key]), 1)
              ])
            ]))), 128))
          ]))
        ])), 256)) : E("", !0)
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
                    onClick: r[0] || (r[0] = F(
                      //@ts-ignore
                      (...s) => t(D) && t(D)(...s),
                      ["prevent"]
                    ))
                  }, "←")
                ], 2),
                a("li", {
                  class: $(["vst-page-item", { disabled: t(p).length < e.perPage || t(m) }])
                }, [
                  a("a", {
                    class: "vst-page-link",
                    onClick: r[1] || (r[1] = F(
                      //@ts-ignore
                      (...s) => t(Y) && t(Y)(...s),
                      ["prevent"]
                    ))
                  }, "→")
                ], 2)
              ])) : E("", !0)
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
