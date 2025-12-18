import { defineComponent as T, openBlock as n, createElementBlock as o, createElementVNode as a, normalizeClass as S, ref as b, watch as A, computed as I, shallowRef as B, renderSlot as u, Fragment as N, renderList as f, mergeProps as M, toHandlers as R, createTextVNode as E, toDisplayString as L, createCommentVNode as P, unref as l, createBlock as q, withModifiers as F } from "vue";
const z = ["colspan"], H = /* @__PURE__ */ T({
  __name: "LoadingRow",
  props: {
    columnsLength: { type: Number, required: !0 }
  },
  setup(v) {
    const h = Math.floor(Math.random() * 10) + 1;
    return (t, d) => (n(), o("tr", null, [
      a("td", {
        colspan: v.columnsLength,
        class: S(["vst-loading-row", `vst-loading-row-${h}`])
      }, d[0] || (d[0] = [
        a("div", null, null, -1)
      ]), 10, z)
    ]));
  }
}), g = {
  INITIAL: "INITIAL",
  SYNCING: "SYNCING",
  SYNCED: "SYNCED",
  FAILED: "FAILED"
}, O = ({
  initialFilters: v,
  loadItems: h
}) => {
  const t = b(1), d = b([]), i = b(g.INITIAL), c = async () => {
    i.value = g.SYNCING;
    try {
      d.value = await h({
        ...v.value,
        page: t.value
      }), i.value = g.SYNCED;
    } catch {
      d.value = [], i.value = g.FAILED;
    }
  };
  return A(v, c), A(t, c), c(), {
    page: t,
    items: d,
    syncState: i,
    isSyncing: I(() => i.value === g.SYNCING),
    isSynced: I(() => i.value === g.SYNCED),
    isFailed: I(() => i.value === g.FAILED),
    nextPage: () => {
      t.value += 1;
    },
    prevPage: () => {
      t.value -= 1;
    },
    setPage: ($) => {
      t.value = $;
    },
    reload: c,
    refetch: () => {
      t.value === 1 ? c() : t.value = 1;
    }
  };
}, _ = { class: "vst" }, j = { key: 0 }, J = { key: 0 }, K = ["colspan"], Q = ["colspan"], U = {
  key: 0,
  class: "vst-pagination"
}, X = /* @__PURE__ */ T({
  __name: "VueSlimTable",
  props: {
    columns: {},
    perPage: { default: 25 },
    source: {}
  },
  setup(v, { expose: h }) {
    const t = B({}), d = v, i = async (e) => {
      let r = [];
      try {
        r = await d.source(e);
      } catch {
      }
      return r;
    }, c = (e, r) => {
      e.preventDefault(), t.value[r] === "asc" ? t.value = { [r]: "desc" } : t.value[r] === "desc" ? t.value = {} : t.value = { [r]: "asc" };
    }, $ = I(() => ({
      per_page: d.perPage,
      orders: t.value
    })), {
      page: C,
      isSyncing: m,
      isSynced: w,
      prevPage: D,
      nextPage: Y,
      reload: G,
      refetch: V,
      items: p
    } = O({
      initialFilters: $,
      loadItems: i
    });
    return h({
      refetch: V,
      reload: G,
      rows: p
    }), (e, r) => (n(), o("table", _, [
      e.columns.length ? (n(), o("thead", j, [
        u(e.$slots, "thead:before"),
        u(e.$slots, "thead", {
          columns: e.columns,
          orders: t.value
        }, () => [
          a("tr", null, [
            (n(!0), o(N, null, f(e.columns, (s) => (n(), o("th", M({
              key: s.key,
              class: ["vst-th", { "vst-orderable": s.orderable }]
            }, R(s.orderable ? { click: (y) => c(y, s.key) } : {}, !0)), [
              s.orderable ? (n(), o("div", J, [
                u(e.$slots, `thead:${s.key}`, {
                  column: s,
                  orders: t.value
                }, () => [
                  E(L(s.title), 1)
                ]),
                a("i", {
                  class: S(["vst-orderable-toggle", t.value[s.key]])
                }, null, 2)
              ])) : u(e.$slots, `thead:${s.key}`, {
                key: 1,
                column: s,
                orders: t.value
              }, () => [
                E(L(s.title), 1)
              ])
            ], 16))), 128))
          ])
        ]),
        u(e.$slots, "thead:after")
      ])) : P("", !0),
      a("tbody", null, [
        l(m) ? u(e.$slots, "row:loading", { key: 0 }, () => [
          (n(!0), o(N, null, f(e.perPage, (s) => (n(), q(H, {
            key: `loadingRow${s}`,
            "columns-length": e.columns.length
          }, null, 8, ["columns-length"]))), 128))
        ]) : l(w) && l(p).length === 0 ? u(e.$slots, "row:empty", { key: 1 }, () => [
          a("tr", null, [
            a("td", {
              colspan: e.columns.length
            }, " No records found ", 8, K)
          ])
        ]) : l(w) && l(p).length ? (n(!0), o(N, { key: 2 }, f(l(p), (s, y) => u(e.$slots, "row", {
          row: s,
          index: y,
          columns: e.columns
        }, () => [
          (n(), o("tr", {
            key: s.id || y
          }, [
            (n(!0), o(N, null, f(e.columns, (k) => (n(), o("td", {
              key: k.key
            }, [
              u(e.$slots, `cell:${k.key}`, {
                row: s,
                value: s[k.key],
                column: k,
                index: y
              }, () => [
                E(L(s[k.key]), 1)
              ])
            ]))), 128))
          ]))
        ])), 256)) : P("", !0)
      ]),
      a("tfoot", null, [
        a("tr", null, [
          a("td", {
            colspan: e.columns.length
          }, [
            u(e.$slots, "pagination", {
              page: l(C),
              rows: l(p)
            }, () => [
              l(C) > 1 || l(p).length === e.perPage || l(m) ? (n(), o("ul", U, [
                a("li", {
                  class: S(["vst-page-item", { disabled: l(C) === 1 || l(m) }])
                }, [
                  a("a", {
                    class: "vst-page-link",
                    onClick: r[0] || (r[0] = F(
                      //@ts-ignore
                      (...s) => l(D) && l(D)(...s),
                      ["prevent"]
                    ))
                  }, "←")
                ], 2),
                a("li", {
                  class: S(["vst-page-item", { disabled: l(p).length < e.perPage || l(m) }])
                }, [
                  a("a", {
                    class: "vst-page-link",
                    onClick: r[1] || (r[1] = F(
                      //@ts-ignore
                      (...s) => l(Y) && l(Y)(...s),
                      ["prevent"]
                    ))
                  }, "→")
                ], 2)
              ])) : P("", !0)
            ])
          ], 8, Q)
        ])
      ])
    ]));
  }
});
export {
  X as default
};
//# sourceMappingURL=vst.es.js.map
