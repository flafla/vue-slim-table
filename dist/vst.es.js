import { defineComponent as Y, openBlock as n, createElementBlock as o, createElementVNode as s, normalizeClass as S, ref as F, reactive as L, computed as f, watch as B, shallowRef as G, renderSlot as d, Fragment as N, renderList as $, mergeProps as M, toHandlers as V, createTextVNode as I, toDisplayString as _, createCommentVNode as P, unref as l, createBlock as R, withModifiers as D } from "vue";
const q = ["colspan"], z = /* @__PURE__ */ s("div", null, null, -1), H = [
  z
], O = /* @__PURE__ */ Y({
  __name: "loading_row",
  props: {
    columnsLength: { type: Number, required: !0 }
  },
  setup(h) {
    const y = Math.floor(Math.random() * 10) + 1;
    return (r, a) => (n(), o("tr", null, [
      s("td", {
        colspan: h.columnsLength,
        class: S(["vst-loading-row", `vst-loading-row-${y}`])
      }, H, 10, q)
    ]));
  }
}), g = {
  INITIAL: "initial",
  SYNCING: "syncing",
  SYNCED: "synced",
  FAILED: "failed"
}, j = ({ initialFilters: h, loadItems: y }) => {
  const r = F(1), a = L({ value: [] }), u = F(g.INITIAL), b = L({ value: h }), p = f(() => ({
    page: r.value,
    ...b.value
  })), i = () => (u.value = g.SYNCING, y(p.value).then((k) => {
    a.value = k, u.value = g.SYNCED;
  }).catch(() => {
    a.value = [], u.value = g.FAILED;
  }));
  return i(), B(p, i), {
    page: r,
    items: a,
    syncState: u,
    nextPage: () => {
      r.value += 1;
    },
    prevPage: () => {
      r.value -= 1;
    },
    isSyncing: f(() => u.value === g.SYNCING),
    isSynced: f(() => u.value === g.SYNCED),
    isFailed: f(() => u.value === g.FAILED),
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
    source: {},
    perPage: { default: 25 }
  },
  setup(h, { expose: y }) {
    const r = h, a = G({}), u = async (e) => {
      let v = [];
      try {
        v = await r.source(e);
      } catch {
      }
      return v;
    }, b = (e) => {
      a.value[e] === "asc" ? a.value = { [e]: "desc" } : a.value[e] === "desc" ? a.value = {} : a.value = { [e]: "asc" };
    }, {
      page: p,
      isSyncing: i,
      isSynced: k,
      prevPage: w,
      nextPage: E,
      reload: A,
      refetch: T,
      items: c
    } = j({
      initialFilters: { per_page: r.perPage, orders: a.value },
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
          orders: a.value
        }, () => [
          s("tr", null, [
            (n(!0), o(N, null, $(e.columns, (t) => (n(), o("th", M({
              key: t.key,
              class: ["vst-th", { "vst-orderable": t.orderable }]
            }, V(t.orderable ? { click: () => b(t.key) } : {}, !0)), [
              t.orderable ? (n(), o("div", Q, [
                d(e.$slots, `thead:${t.key}`, { column: t }, () => [
                  I(_(t.title), 1)
                ]),
                s("a", {
                  href: "#",
                  class: S(["vst-orderable-toggle", a.value[t.key]])
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
      s("tbody", null, [
        l(i) ? d(e.$slots, "row:loading", { key: 0 }, () => [
          (n(!0), o(N, null, $(e.perPage, (t) => (n(), R(O, {
            key: `loadingRow${t}`,
            "columns-length": e.columns.length
          }, null, 8, ["columns-length"]))), 128))
        ]) : l(k) && l(c).value.length === 0 ? d(e.$slots, "row:empty", { key: 1 }, () => [
          s("tr", null, [
            s("td", {
              colspan: e.columns.length
            }, " No records found ", 8, U)
          ])
        ]) : l(k) && l(c).value.length ? (n(!0), o(N, { key: 2 }, $(l(c).value, (t, C) => d(e.$slots, "row", {
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
      s("tfoot", null, [
        s("tr", null, [
          s("td", {
            colspan: e.columns.length
          }, [
            d(e.$slots, "pagination", {
              page: l(p),
              rows: l(c).value
            }, () => [
              l(p) > 1 || l(c).value.length === e.perPage || l(i) ? (n(), o("ul", X, [
                s("li", {
                  class: S(["vst-page-item", { disabled: l(p) === 1 || l(i) }])
                }, [
                  s("a", {
                    class: "vst-page-link",
                    onClick: v[0] || (v[0] = D(
                      //@ts-ignore
                      (...t) => l(w) && l(w)(...t),
                      ["prevent"]
                    ))
                  }, "←")
                ], 2),
                s("li", {
                  class: S(["vst-page-item", {
                    disabled: l(c).value.length < e.perPage || l(i)
                  }])
                }, [
                  s("a", {
                    class: "vst-page-link",
                    onClick: v[1] || (v[1] = D(
                      //@ts-ignore
                      (...t) => l(E) && l(E)(...t),
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
