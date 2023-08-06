import { defineComponent as Y, openBlock as n, createElementBlock as o, createElementVNode as a, normalizeClass as S, ref as F, reactive as L, computed as f, watch as B, shallowRef as G, renderSlot as d, Fragment as N, renderList as $, mergeProps as M, toHandlers as V, createTextVNode as I, toDisplayString as _, createCommentVNode as P, unref as s, createBlock as R, withModifiers as D } from "vue";
const q = ["colspan"], z = /* @__PURE__ */ a("div", null, null, -1), H = [
  z
], O = /* @__PURE__ */ Y({
  __name: "loading_row",
  props: {
    columnsLength: { type: Number, required: !0 }
  },
  setup(h) {
    const y = Math.floor(Math.random() * 10) + 1;
    return (r, l) => (n(), o("tr", null, [
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
  const r = F(1), l = L({ value: [] }), u = F(p.INITIAL), b = L({ value: h }), g = f(() => ({
    page: r.value,
    ...b.value
  })), i = () => (u.value = p.SYNCING, y(g.value).then((k) => {
    l.value = k, u.value = p.SYNCED;
  }).catch(() => {
    l.value = [], u.value = p.FAILED;
  }));
  return i(), B(g, i), {
    page: r,
    items: l,
    syncState: u,
    nextPage: () => {
      r.value += 1;
    },
    prevPage: () => {
      r.value -= 1;
    },
    isSyncing: f(() => u.value === p.SYNCING),
    isSynced: f(() => u.value === p.SYNCED),
    isFailed: f(() => u.value === p.FAILED),
    reload: () => {
      i();
    },
    refetch: () => {
      r.value === 1 ? i() : r.value = 1;
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
    const r = h, l = G({}), u = async (e) => {
      let v = [];
      try {
        v = await r.source(e);
      } catch {
      }
      return v;
    }, b = (e) => {
      l.value[e] === "asc" ? l.value = { [e]: "desc" } : l.value[e] === "desc" ? l.value = {} : l.value = { [e]: "asc" };
    }, {
      page: g,
      isSyncing: i,
      isSynced: k,
      prevPage: w,
      nextPage: E,
      reload: A,
      refetch: T,
      items: c
    } = j({
      initialFilters: { per_page: r.perPage, orders: l },
      loadItems: u
    });
    return y({
      refetch: T,
      reload: A,
      rows: c
    }), (e, v) => (n(), o("table", J, [
      e.columns.length ? (n(), o("thead", K, [
        d(e.$slots, "thead", {
          columns: e.columns,
          orders: l.value
        }, () => [
          a("tr", null, [
            (n(!0), o(N, null, $(e.columns, (t) => (n(), o("th", M({
              key: t.key,
              class: ["vst-th", { "vst-orderable": t.orderable }]
            }, V(t.orderable ? { click: () => b(t.key) } : {}, !0)), [
              t.orderable ? (n(), o("div", Q, [
                d(e.$slots, `thead:${t.key}`, {
                  column: t,
                  orders: l.value
                }, () => [
                  I(_(t.title), 1)
                ]),
                a("a", {
                  href: "#",
                  class: S(["vst-orderable-toggle", l.value[t.key]])
                }, null, 2)
              ])) : d(e.$slots, `thead:${t.key}`, {
                key: 1,
                column: t
              }, () => [
                I(_(t.title), 1)
              ])
            ], 16))), 128))
          ])
        ])
      ])) : P("", !0),
      a("tbody", null, [
        s(i) ? d(e.$slots, "row:loading", { key: 0 }, () => [
          (n(!0), o(N, null, $(e.perPage, (t) => (n(), R(O, {
            key: `loadingRow${t}`,
            "columns-length": e.columns.length
          }, null, 8, ["columns-length"]))), 128))
        ]) : s(k) && s(c).value.length === 0 ? d(e.$slots, "row:empty", { key: 1 }, () => [
          a("tr", null, [
            a("td", {
              colspan: e.columns.length
            }, " No records found ", 8, U)
          ])
        ]) : s(k) && s(c).value.length ? (n(!0), o(N, { key: 2 }, $(s(c).value, (t, C) => d(e.$slots, "row", {
          row: t,
          index: C,
          columns: e.columns
        }, () => [
          (n(), o("tr", {
            key: t.id || C
          }, [
            (n(!0), o(N, null, $(e.columns, (m) => (n(), o("td", {
              key: m.key
            }, [
              d(e.$slots, `cell:${m.key}`, {
                row: t,
                value: t[m.key],
                column: m,
                index: C
              }, () => [
                I(_(t[m.key]), 1)
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
            d(e.$slots, "pagination", {
              page: s(g),
              rows: s(c).value
            }, () => [
              s(g) > 1 || s(c).value.length === e.perPage || s(i) ? (n(), o("ul", X, [
                a("li", {
                  class: S(["vst-page-item", { disabled: s(g) === 1 || s(i) }])
                }, [
                  a("a", {
                    class: "vst-page-link",
                    onClick: v[0] || (v[0] = D(
                      //@ts-ignore
                      (...t) => s(w) && s(w)(...t),
                      ["prevent"]
                    ))
                  }, "←")
                ], 2),
                a("li", {
                  class: S(["vst-page-item", {
                    disabled: s(c).value.length < e.perPage || s(i)
                  }])
                }, [
                  a("a", {
                    class: "vst-page-link",
                    onClick: v[1] || (v[1] = D(
                      //@ts-ignore
                      (...t) => s(E) && s(E)(...t),
                      ["prevent"]
                    ))
                  }, "→")
                ], 2)
              ])) : P("", !0)
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
