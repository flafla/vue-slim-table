import { defineComponent as Y, openBlock as n, createElementBlock as r, createElementVNode as a, normalizeClass as S, ref as _, reactive as D, computed as f, watch as B, shallowRef as G, renderSlot as u, Fragment as $, renderList as N, mergeProps as M, toHandlers as V, createTextVNode as C, toDisplayString as I, createCommentVNode as w, unref as s, createBlock as R, withModifiers as L } from "vue";
const q = ["colspan"], z = /* @__PURE__ */ a("div", null, null, -1), H = [
  z
], O = /* @__PURE__ */ Y({
  __name: "loading_row",
  props: {
    columnsLength: { type: Number, required: !0 }
  },
  setup(h) {
    const y = Math.floor(Math.random() * 10) + 1;
    return (i, l) => (n(), r("tr", null, [
      a("td", {
        colspan: h.columnsLength,
        class: S(["vst-loading-row", `vst-loading-row-${y}`])
      }, H, 10, q)
    ]));
  }
}), p = {
  INITIAL: "initial",
  SYNCING: "syncing",
  SYNCED: "synced",
  FAILED: "failed"
}, j = ({ initialFilters: h, loadItems: y }) => {
  const i = _(1), l = D({ value: [] }), d = _(p.INITIAL), b = D({ value: h }), g = f(() => ({
    page: i.value,
    ...b.value
  })), c = async () => {
    d.value = p.SYNCING;
    try {
      l.value = await y(g.value), d.value = p.SYNCED;
    } catch {
      l.value = [], d.value = p.FAILED;
    }
  };
  return c(), B(g, c), {
    page: i,
    items: l,
    syncState: d,
    nextPage: () => {
      i.value += 1;
    },
    prevPage: () => {
      i.value -= 1;
    },
    isSyncing: f(() => d.value === p.SYNCING),
    isSynced: f(() => d.value === p.SYNCED),
    isFailed: f(() => d.value === p.FAILED),
    reload: () => {
      c();
    },
    refetch: () => {
      i.value === 1 ? c() : i.value = 1;
    }
  };
}, J = { class: "vst" }, K = { key: 0 }, Q = { key: 0 }, U = ["colspan"], W = ["colspan"], X = {
  key: 0,
  class: "vst-pagination mt-3"
}, x = /* @__PURE__ */ Y({
  __name: "slim_table",
  props: {
    columns: {},
    perPage: {},
    source: { type: Function }
  },
  setup(h, { expose: y }) {
    const i = h, l = G({}), d = async (e) => {
      let o = [];
      try {
        o = await i.source(e);
      } catch {
      }
      return o;
    }, b = (e, o) => {
      e.preventDefault(), l.value[o] === "asc" ? l.value = { [o]: "desc" } : l.value[o] === "desc" ? l.value = {} : l.value = { [o]: "asc" };
    }, {
      page: g,
      isSyncing: c,
      isSynced: P,
      prevPage: E,
      nextPage: F,
      reload: A,
      refetch: T,
      items: v
    } = j({
      initialFilters: { per_page: i.perPage, orders: l },
      loadItems: d
    });
    return y({
      refetch: T,
      reload: A,
      rows: v
    }), (e, o) => (n(), r("table", J, [
      e.columns.length ? (n(), r("thead", K, [
        u(e.$slots, "thead:before"),
        u(e.$slots, "thead", {
          columns: e.columns,
          orders: l.value
        }, () => [
          a("tr", null, [
            (n(!0), r($, null, N(e.columns, (t) => (n(), r("th", M({
              key: t.key,
              class: ["vst-th", { "vst-orderable": t.orderable }]
            }, V(t.orderable ? { click: (m) => b(m, t.key) } : {}, !0)), [
              t.orderable ? (n(), r("div", Q, [
                u(e.$slots, `thead:${t.key}`, {
                  column: t,
                  orders: l.value
                }, () => [
                  C(I(t.title), 1)
                ]),
                a("i", {
                  class: S(["vst-orderable-toggle", l.value[t.key]])
                }, null, 2)
              ])) : u(e.$slots, `thead:${t.key}`, {
                key: 1,
                column: t,
                orders: l.value
              }, () => [
                C(I(t.title), 1)
              ])
            ], 16))), 128))
          ])
        ]),
        u(e.$slots, "thead:after")
      ])) : w("", !0),
      a("tbody", null, [
        s(c) ? u(e.$slots, "row:loading", { key: 0 }, () => [
          (n(!0), r($, null, N(e.perPage, (t) => (n(), R(O, {
            key: `loadingRow${t}`,
            "columns-length": e.columns.length
          }, null, 8, ["columns-length"]))), 128))
        ]) : s(P) && s(v).value.length === 0 ? u(e.$slots, "row:empty", { key: 1 }, () => [
          a("tr", null, [
            a("td", {
              colspan: e.columns.length
            }, " No records found ", 8, U)
          ])
        ]) : s(P) && s(v).value.length ? (n(!0), r($, { key: 2 }, N(s(v).value, (t, m) => u(e.$slots, "row", {
          row: t,
          index: m,
          columns: e.columns
        }, () => [
          (n(), r("tr", {
            key: t.id || m
          }, [
            (n(!0), r($, null, N(e.columns, (k) => (n(), r("td", {
              key: k.key
            }, [
              u(e.$slots, `cell:${k.key}`, {
                row: t,
                value: t[k.key],
                column: k,
                index: m
              }, () => [
                C(I(t[k.key]), 1)
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
            u(e.$slots, "pagination", {
              page: s(g),
              rows: s(v).value
            }, () => [
              s(g) > 1 || s(v).value.length === e.perPage || s(c) ? (n(), r("ul", X, [
                a("li", {
                  class: S(["vst-page-item", { disabled: s(g) === 1 || s(c) }])
                }, [
                  a("a", {
                    class: "vst-page-link",
                    onClick: o[0] || (o[0] = L(
                      //@ts-ignore
                      (...t) => s(E) && s(E)(...t),
                      ["prevent"]
                    ))
                  }, "←")
                ], 2),
                a("li", {
                  class: S(["vst-page-item", {
                    disabled: s(v).value.length < e.perPage || s(c)
                  }])
                }, [
                  a("a", {
                    class: "vst-page-link",
                    onClick: o[1] || (o[1] = L(
                      //@ts-ignore
                      (...t) => s(F) && s(F)(...t),
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
