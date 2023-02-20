import { defineComponent as j, openBlock as i, createElementBlock as c, createElementVNode as r, normalizeClass as S, ref as L, reactive as D, computed as $, watch as G, shallowRef as M, renderSlot as h, unref as t, Fragment as N, renderList as b, mergeProps as O, toHandlers as V, createTextVNode as I, toDisplayString as w, createCommentVNode as E, createBlock as A, withModifiers as Y } from "vue";
const U = ["colspan"], q = /* @__PURE__ */ r("div", null, null, -1), x = [
  q
], z = /* @__PURE__ */ j({
  __name: "loading_row",
  props: {
    columnsLength: { type: Number, required: !0 }
  },
  setup(s) {
    const g = Math.floor(Math.random() * 10) + 1;
    return (n, a) => (i(), c("tr", null, [
      r("td", {
        colspan: s.columnsLength,
        class: S(["vst-loading-row", `vst-loading-row-${g}`])
      }, x, 10, U)
    ]));
  }
}), m = {
  INITIAL: "initial",
  SYNCING: "syncing",
  SYNCED: "synced",
  FAILED: "failed"
}, H = ({ initialFilters: s, loadItems: g }) => {
  const n = L(1), a = D({ value: [] }), l = L(m.INITIAL), f = D({ value: s }), u = $(() => ({
    page: n.value,
    ...f.value
  })), d = () => (l.value = m.SYNCING, g(u.value).then((p) => {
    a.value = p, l.value = m.SYNCED;
  }).catch(() => {
    a.value = [], l.value = m.FAILED;
  }));
  return d(), G(u, d), {
    page: n,
    items: a,
    syncState: l,
    nextPage: () => {
      n.value += 1;
    },
    prevPage: () => {
      n.value -= 1;
    },
    isSyncing: $(() => l.value === m.SYNCING),
    isSynced: $(() => l.value === m.SYNCED),
    isFailed: $(() => l.value === m.FAILED),
    reload: () => {
      d();
    },
    refetch: () => {
      n.value === 1 ? d() : n.value = 1;
    }
  };
}, T = (s, g) => (n, [a, l]) => {
  if (l == null)
    return n;
  const f = encodeURIComponent(a), u = g ? `${g}[${f}]` : f;
  return ["number", "string"].includes(typeof l) ? (n.push(`${u}=${encodeURIComponent(l)}`), n) : (n.push(Object.entries(l).reduce(T(l, u), []).join("&")), n);
}, K = (s) => Object.entries(s).reduce(T(), []).join("&"), Q = { class: "vst" }, J = { key: 0 }, W = { key: 0 }, X = ["colspan"], Z = ["colspan"], _ = {
  key: 0,
  class: "vst-pagination mt-3"
}, te = /* @__PURE__ */ j({
  __name: "slim_table",
  props: {
    columns: null,
    source: null,
    perPage: { default: 25 }
  },
  setup(s, { expose: g }) {
    const n = s, a = M({}), l = async (o) => {
      let v;
      return typeof n.source == "string" ? v = await (await fetch(`${n.source}?${K(o)}`)).json() : v = await n.source(o), v;
    }, f = (o) => {
      a.value[o] === "asc" ? a.value = { [o]: "desc" } : a.value[o] === "desc" ? a.value = {} : a.value = { [o]: "asc" };
    }, {
      page: u,
      isSyncing: d,
      isSynced: p,
      prevPage: P,
      nextPage: F,
      reload: R,
      refetch: B,
      items: y
    } = H({
      initialFilters: { per_page: n.perPage, orders: a.value },
      loadItems: l
    });
    return g({
      refetch: B,
      reload: R,
      rows: y
    }), (o, v) => (i(), c("table", Q, [
      s.columns.length ? (i(), c("thead", J, [
        h(o.$slots, "thead", {
          columns: s.columns,
          orders: t(a)
        }, () => [
          r("tr", null, [
            (i(!0), c(N, null, b(s.columns, (e) => (i(), c("th", O({
              key: e.key,
              class: ["vst-th", { "vst-orderable": e.orderable }]
            }, V(e.orderable ? { click: () => f(e.key) } : {}, !0)), [
              e.orderable ? (i(), c("div", W, [
                h(o.$slots, `head:${e.key}`, { column: e }, () => [
                  I(w(e.title), 1)
                ]),
                r("a", {
                  href: "#",
                  class: S(["vst-orderable-toggle", t(a)[e.key]])
                }, null, 2)
              ])) : h(o.$slots, `thead:${e.key}`, {
                key: 1,
                column: e
              }, () => [
                I(w(e.title), 1)
              ])
            ], 16))), 128))
          ])
        ])
      ])) : E("", !0),
      r("tbody", null, [
        t(d) ? h(o.$slots, "row:loading", { key: 0 }, () => [
          (i(!0), c(N, null, b(s.perPage, (e) => (i(), A(z, {
            key: `loadingRow${e}`,
            "columns-length": s.columns.length
          }, null, 8, ["columns-length"]))), 128))
        ]) : t(p) && t(y).value.length === 0 ? h(o.$slots, "row:empty", { key: 1 }, () => [
          r("tr", null, [
            r("td", {
              colspan: s.columns.length
            }, " No records found ", 8, X)
          ])
        ]) : t(p) && t(y).value.length ? (i(!0), c(N, { key: 2 }, b(t(y).value, (e, C) => h(o.$slots, "row", {
          row: e,
          index: C,
          columns: s.columns
        }, () => [
          (i(), c("tr", {
            key: e.id || C
          }, [
            (i(!0), c(N, null, b(s.columns, (k) => (i(), c("td", {
              key: k.key
            }, [
              h(o.$slots, `cell:${k.key}`, {
                row: e,
                value: e[k.key],
                column: k,
                index: C
              }, () => [
                I(w(e[k.key]), 1)
              ])
            ]))), 128))
          ]))
        ])), 256)) : E("", !0)
      ]),
      r("tfoot", null, [
        r("tr", null, [
          r("td", {
            colspan: s.columns.length
          }, [
            h(o.$slots, "pagination", {
              page: t(u),
              rows: t(y).value
            }, () => [
              t(u) > 1 || t(y).value.length === s.perPage || t(d) ? (i(), c("ul", _, [
                r("li", {
                  class: S(["vst-page-item", { disabled: t(u) === 1 || t(d) }])
                }, [
                  r("a", {
                    class: "vst-page-link",
                    onClick: v[0] || (v[0] = Y(
                      //@ts-ignore
                      (...e) => t(P) && t(P)(...e),
                      ["prevent"]
                    ))
                  }, "←")
                ], 2),
                r("li", {
                  class: S(["vst-page-item", {
                    disabled: t(y).value.length < s.perPage || t(d)
                  }])
                }, [
                  r("a", {
                    class: "vst-page-link",
                    onClick: v[1] || (v[1] = Y(
                      //@ts-ignore
                      (...e) => t(F) && t(F)(...e),
                      ["prevent"]
                    ))
                  }, "→")
                ], 2)
              ])) : E("", !0)
            ])
          ], 8, Z)
        ])
      ])
    ]));
  }
});
export {
  te as default
};
//# sourceMappingURL=vst.es.js.map
