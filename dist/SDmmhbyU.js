import { _ as te } from "./DlAUqK2U.js";
import {
  v as x,
  x as k,
  D as j,
  d as E,
  E as De,
  i as _,
  F as V,
  G as y,
  H as M,
  B as p,
  y as l,
  A as f,
  z as H,
  I as zt,
  J as h,
  K as W,
  r as P,
  L as Gt,
  h as D,
  M as z,
  N as q,
  o as N,
  O as J,
  P as ye,
  Q as qt,
  T as Xt,
  R as Qt,
  S as Kt,
  C as r,
  U as ie,
  V as A,
  W as ee,
  X as Yt,
  Y as Zt,
  Z as Jt,
  _ as el,
  $ as tl,
  t as ll,
} from "./CBMe6_VQ.js";
import { m as re, g as nl, a as sl, p as vt } from "./BDxCgM32.js";
const ol = {},
  rl = {
    class:
      "card duration-300 w-full rounded-xl bg-white primary-shadow border border-gray-300",
  };
function il(t, n) {
  return x(), k("div", rl, [j(t.$slots, "default")]);
}
const ke = te(ol, [["render", il]]),
  al = {},
  ul = { class: "w-full border-b-1 border-gray-300" };
function dl(t, n) {
  return x(), k("div", ul);
}
const Re = te(al, [["render", dl]]),
  fl = { key: 0, class: "flex flex-row items-center gap-4" },
  pl = { key: 1 },
  Q = E({
    __name: "Title",
    props: { size: { type: String, default: "lg" } },
    setup(t) {
      const n = t,
        s = De({ sm: "text-xl lg:text-2xl", lg: "text-2xl lg:text-3xl" }),
        o = _(() => s[n.size]);
      return (i, a) => (
        x(),
        k(
          "div",
          {
            class: V([
              y(o),
              "text-center lg:text-left font-semibold tracking-tight pb-2",
            ]),
          },
          [
            i.$slots.icon
              ? (x(),
                k("div", fl, [
                  j(i.$slots, "icon", { size: "lg:w-7 w-4" }),
                  j(i.$slots, "default"),
                ]))
              : (x(), k("div", pl, [j(i.$slots, "default")])),
          ],
          2
        )
      );
    },
  }),
  cl = { class: "leading-7 px-4 py-4" },
  ml = { class: "text-xl mb-4 font-semibold lg:text-xl" },
  gl = E({
    __name: "Interview",
    props: { title: { type: String, default: "" } },
    setup(t) {
      return (n, s) => {
        const o = ke;
        return (
          x(),
          M(o, null, {
            default: p(() => [
              l("div", cl, [
                l("div", ml, [j(n.$slots, "question")]),
                j(n.$slots, "answer"),
              ]),
            ]),
            _: 3,
          })
        );
      };
    },
  }),
  vl = {},
  bl = { class: "pt-8 flex flex-col" },
  xl = { class: "flex flex-col gap-6 pb-8" };
function yl(t, n) {
  const s = Re;
  return x(), k("div", bl, [l("div", xl, [j(t.$slots, "default")]), f(s)]);
}
const ae = te(vl, [["render", yl]]),
  me = E({
    __name: "Tag",
    props: {
      text: { type: String, default: "" },
      isSkill: { type: Boolean, default: !1 },
    },
    setup(t) {
      return (n, s) => (
        x(),
        k(
          "span",
          {
            class: V([
              "bg-gray-100 px-2 py-1 rounded-md border text-sm",
              [t.isSkill ? "text-red-500 text-[0.9rem]" : ""],
            ]),
          },
          H(t.text),
          3
        )
      );
    },
  });
function rt(t) {
  typeof queueMicrotask == "function"
    ? queueMicrotask(t)
    : Promise.resolve()
        .then(t)
        .catch((n) =>
          setTimeout(() => {
            throw n;
          })
        );
}
function Ee() {
  let t = [],
    n = {
      addEventListener(s, o, i, a) {
        return (
          s.addEventListener(o, i, a),
          n.add(() => s.removeEventListener(o, i, a))
        );
      },
      requestAnimationFrame(...s) {
        let o = requestAnimationFrame(...s);
        n.add(() => cancelAnimationFrame(o));
      },
      nextFrame(...s) {
        n.requestAnimationFrame(() => {
          n.requestAnimationFrame(...s);
        });
      },
      setTimeout(...s) {
        let o = setTimeout(...s);
        n.add(() => clearTimeout(o));
      },
      microTask(...s) {
        let o = { current: !0 };
        return (
          rt(() => {
            o.current && s[0]();
          }),
          n.add(() => {
            o.current = !1;
          })
        );
      },
      style(s, o, i) {
        let a = s.style.getPropertyValue(o);
        return (
          Object.assign(s.style, { [o]: i }),
          this.add(() => {
            Object.assign(s.style, { [o]: a });
          })
        );
      },
      group(s) {
        let o = Ee();
        return s(o), this.add(() => o.dispose());
      },
      add(s) {
        return (
          t.push(s),
          () => {
            let o = t.indexOf(s);
            if (o >= 0) for (let i of t.splice(o, 1)) i();
          }
        );
      },
      dispose() {
        for (let s of t.splice(0)) s();
      },
    };
  return n;
}
var bt;
let wl = Symbol("headlessui.useid"),
  $l = 0;
const it =
  (bt = zt) != null
    ? bt
    : function () {
        return h(wl, () => `${++$l}`)();
      };
function F(t) {
  var n;
  if (t == null || t.value == null) return null;
  let s = (n = t.value.$el) != null ? n : t.value;
  return s instanceof Node ? s : null;
}
function X(t, n, ...s) {
  if (t in n) {
    let i = n[t];
    return typeof i == "function" ? i(...s) : i;
  }
  let o = new Error(
    `Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      n
    )
      .map((i) => `"${i}"`)
      .join(", ")}.`
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(o, X), o);
}
var Sl = Object.defineProperty,
  _l = (t, n, s) =>
    n in t
      ? Sl(t, n, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[n] = s),
  xt = (t, n, s) => (_l(t, typeof n != "symbol" ? n + "" : n, s), s);
let Pl = class {
    constructor() {
      xt(this, "current", this.detect()), xt(this, "currentId", 0);
    }
    set(n) {
      this.current !== n && ((this.currentId = 0), (this.current = n));
    }
    reset() {
      this.set(this.detect());
    }
    nextId() {
      return ++this.currentId;
    }
    get isServer() {
      return this.current === "server";
    }
    get isClient() {
      return this.current === "client";
    }
    detect() {
      return typeof window > "u" || typeof document > "u" ? "server" : "client";
    }
  },
  Te = new Pl();
function we(t) {
  if (Te.isServer) return null;
  if (t instanceof Node) return t.ownerDocument;
  if (t != null && t.hasOwnProperty("value")) {
    let n = F(t);
    if (n) return n.ownerDocument;
  }
  return document;
}
let Je = [
  "[contentEditable=true]",
  "[tabindex]",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "iframe",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
]
  .map((t) => `${t}:not([tabindex='-1'])`)
  .join(",");
var se = ((t) => (
    (t[(t.First = 1)] = "First"),
    (t[(t.Previous = 2)] = "Previous"),
    (t[(t.Next = 4)] = "Next"),
    (t[(t.Last = 8)] = "Last"),
    (t[(t.WrapAround = 16)] = "WrapAround"),
    (t[(t.NoScroll = 32)] = "NoScroll"),
    t
  ))(se || {}),
  kt = ((t) => (
    (t[(t.Error = 0)] = "Error"),
    (t[(t.Overflow = 1)] = "Overflow"),
    (t[(t.Success = 2)] = "Success"),
    (t[(t.Underflow = 3)] = "Underflow"),
    t
  ))(kt || {}),
  kl = ((t) => (
    (t[(t.Previous = -1)] = "Previous"), (t[(t.Next = 1)] = "Next"), t
  ))(kl || {});
function El(t = document.body) {
  return t == null
    ? []
    : Array.from(t.querySelectorAll(Je)).sort((n, s) =>
        Math.sign(
          (n.tabIndex || Number.MAX_SAFE_INTEGER) -
            (s.tabIndex || Number.MAX_SAFE_INTEGER)
        )
      );
}
var Et = ((t) => (
  (t[(t.Strict = 0)] = "Strict"), (t[(t.Loose = 1)] = "Loose"), t
))(Et || {});
function Tl(t, n = 0) {
  var s;
  return t === ((s = we(t)) == null ? void 0 : s.body)
    ? !1
    : X(n, {
        0() {
          return t.matches(Je);
        },
        1() {
          let o = t;
          for (; o !== null; ) {
            if (o.matches(Je)) return !0;
            o = o.parentElement;
          }
          return !1;
        },
      });
}
var jl = ((t) => (
  (t[(t.Keyboard = 0)] = "Keyboard"), (t[(t.Mouse = 1)] = "Mouse"), t
))(jl || {});
typeof window < "u" &&
  typeof document < "u" &&
  (document.addEventListener(
    "keydown",
    (t) => {
      t.metaKey ||
        t.altKey ||
        t.ctrlKey ||
        (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ),
  document.addEventListener(
    "click",
    (t) => {
      t.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : t.detail === 0 &&
          (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ));
function pe(t) {
  t == null || t.focus({ preventScroll: !0 });
}
let Al = ["textarea", "input"].join(",");
function Cl(t) {
  var n, s;
  return (s =
    (n = t == null ? void 0 : t.matches) == null ? void 0 : n.call(t, Al)) !=
    null
    ? s
    : !1;
}
function Il(t, n = (s) => s) {
  return t.slice().sort((s, o) => {
    let i = n(s),
      a = n(o);
    if (i === null || a === null) return 0;
    let e = i.compareDocumentPosition(a);
    return e & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : e & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0;
  });
}
function Oe(
  t,
  n,
  { sorted: s = !0, relativeTo: o = null, skipElements: i = [] } = {}
) {
  var a;
  let e =
      (a = Array.isArray(t)
        ? t.length > 0
          ? t[0].ownerDocument
          : document
        : t == null
        ? void 0
        : t.ownerDocument) != null
        ? a
        : document,
    u = Array.isArray(t) ? (s ? Il(t) : t) : El(t);
  i.length > 0 && u.length > 1 && (u = u.filter((b) => !i.includes(b))),
    (o = o ?? e.activeElement);
  let d = (() => {
      if (n & 5) return 1;
      if (n & 10) return -1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    c = (() => {
      if (n & 1) return 0;
      if (n & 2) return Math.max(0, u.indexOf(o)) - 1;
      if (n & 4) return Math.max(0, u.indexOf(o)) + 1;
      if (n & 8) return u.length - 1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    m = n & 32 ? { preventScroll: !0 } : {},
    g = 0,
    v = u.length,
    w;
  do {
    if (g >= v || g + v <= 0) return 0;
    let b = c + g;
    if (n & 16) b = (b + v) % v;
    else {
      if (b < 0) return 3;
      if (b >= v) return 1;
    }
    (w = u[b]), w == null || w.focus(m), (g += d);
  } while (w !== e.activeElement);
  return n & 6 && Cl(w) && w.select(), 2;
}
function Tt() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function Ll() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Ml() {
  return Tt() || Ll();
}
function Le(t, n, s) {
  Te.isServer ||
    W((o) => {
      document.addEventListener(t, n, s),
        o(() => document.removeEventListener(t, n, s));
    });
}
function jt(t, n, s) {
  Te.isServer ||
    W((o) => {
      window.addEventListener(t, n, s),
        o(() => window.removeEventListener(t, n, s));
    });
}
function Fl(t, n, s = _(() => !0)) {
  function o(a, e) {
    if (!s.value || a.defaultPrevented) return;
    let u = e(a);
    if (u === null || !u.getRootNode().contains(u)) return;
    let d = (function c(m) {
      return typeof m == "function"
        ? c(m())
        : Array.isArray(m) || m instanceof Set
        ? m
        : [m];
    })(t);
    for (let c of d) {
      if (c === null) continue;
      let m = c instanceof HTMLElement ? c : F(c);
      if (
        (m != null && m.contains(u)) ||
        (a.composed && a.composedPath().includes(m))
      )
        return;
    }
    return !Tl(u, Et.Loose) && u.tabIndex !== -1 && a.preventDefault(), n(a, u);
  }
  let i = P(null);
  Le(
    "pointerdown",
    (a) => {
      var e, u;
      s.value &&
        (i.value =
          ((u = (e = a.composedPath) == null ? void 0 : e.call(a)) == null
            ? void 0
            : u[0]) || a.target);
    },
    !0
  ),
    Le(
      "mousedown",
      (a) => {
        var e, u;
        s.value &&
          (i.value =
            ((u = (e = a.composedPath) == null ? void 0 : e.call(a)) == null
              ? void 0
              : u[0]) || a.target);
      },
      !0
    ),
    Le(
      "click",
      (a) => {
        Ml() || (i.value && (o(a, () => i.value), (i.value = null)));
      },
      !0
    ),
    Le(
      "touchend",
      (a) => o(a, () => (a.target instanceof HTMLElement ? a.target : null)),
      !0
    ),
    jt(
      "blur",
      (a) =>
        o(a, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null
        ),
      !0
    );
}
var Ne = ((t) => (
    (t[(t.None = 0)] = "None"),
    (t[(t.RenderStrategy = 1)] = "RenderStrategy"),
    (t[(t.Static = 2)] = "Static"),
    t
  ))(Ne || {}),
  oe = ((t) => (
    (t[(t.Unmount = 0)] = "Unmount"), (t[(t.Hidden = 1)] = "Hidden"), t
  ))(oe || {});
function le({
  visible: t = !0,
  features: n = 0,
  ourProps: s,
  theirProps: o,
  ...i
}) {
  var a;
  let e = Ct(o, s),
    u = Object.assign(i, { props: e });
  if (t || (n & 2 && e.static)) return Ke(u);
  if (n & 1) {
    let d = (a = e.unmount) == null || a ? 0 : 1;
    return X(d, {
      0() {
        return null;
      },
      1() {
        return Ke({
          ...i,
          props: { ...e, hidden: !0, style: { display: "none" } },
        });
      },
    });
  }
  return Ke(u);
}
function Ke({ props: t, attrs: n, slots: s, slot: o, name: i }) {
  var a, e;
  let { as: u, ...d } = It(t, ["unmount", "static"]),
    c = (a = s.default) == null ? void 0 : a.call(s, o),
    m = {};
  if (o) {
    let g = !1,
      v = [];
    for (let [w, b] of Object.entries(o))
      typeof b == "boolean" && (g = !0), b === !0 && v.push(w);
    g && (m["data-headlessui-state"] = v.join(" "));
  }
  if (u === "template") {
    if (
      ((c = At(c ?? [])),
      Object.keys(d).length > 0 || Object.keys(n).length > 0)
    ) {
      let [g, ...v] = c ?? [];
      if (!Ol(g) || v.length > 0)
        throw new Error(
          [
            'Passing props on "template"!',
            "",
            `The current component <${i} /> is rendering a "template".`,
            "However we need to passthrough the following props:",
            Object.keys(d)
              .concat(Object.keys(n))
              .map((S) => S.trim())
              .filter((S, $, C) => C.indexOf(S) === $)
              .sort((S, $) => S.localeCompare($))
              .map((S) => `  - ${S}`).join(`
`),
            "",
            "You can apply a few solutions:",
            [
              'Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',
              "Render a single element as the child so that we can forward the props onto that element.",
            ].map((S) => `  - ${S}`).join(`
`),
          ].join(`
`)
        );
      let w = Ct((e = g.props) != null ? e : {}, d, m),
        b = Gt(g, w, !0);
      for (let S in w)
        S.startsWith("on") && (b.props || (b.props = {}), (b.props[S] = w[S]));
      return b;
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return D(u, Object.assign({}, d, m), { default: () => c });
}
function At(t) {
  return t.flatMap((n) => (n.type === z ? At(n.children) : [n]));
}
function Ct(...t) {
  if (t.length === 0) return {};
  if (t.length === 1) return t[0];
  let n = {},
    s = {};
  for (let o of t)
    for (let i in o)
      i.startsWith("on") && typeof o[i] == "function"
        ? (s[i] != null || (s[i] = []), s[i].push(o[i]))
        : (n[i] = o[i]);
  if (n.disabled || n["aria-disabled"])
    return Object.assign(
      n,
      Object.fromEntries(Object.keys(s).map((o) => [o, void 0]))
    );
  for (let o in s)
    Object.assign(n, {
      [o](i, ...a) {
        let e = s[o];
        for (let u of e) {
          if (i instanceof Event && i.defaultPrevented) return;
          u(i, ...a);
        }
      },
    });
  return n;
}
function It(t, n = []) {
  let s = Object.assign({}, t);
  for (let o of n) o in s && delete s[o];
  return s;
}
function Ol(t) {
  return t == null
    ? !1
    : typeof t.type == "string" ||
        typeof t.type == "object" ||
        typeof t.type == "function";
}
var Be = ((t) => (
  (t[(t.None = 1)] = "None"),
  (t[(t.Focusable = 2)] = "Focusable"),
  (t[(t.Hidden = 4)] = "Hidden"),
  t
))(Be || {});
let et = E({
    name: "Hidden",
    props: {
      as: { type: [Object, String], default: "div" },
      features: { type: Number, default: 1 },
    },
    setup(t, { slots: n, attrs: s }) {
      return () => {
        var o;
        let { features: i, ...a } = t,
          e = {
            "aria-hidden":
              (i & 2) === 2 ? !0 : (o = a["aria-hidden"]) != null ? o : void 0,
            hidden: (i & 4) === 4 ? !0 : void 0,
            style: {
              position: "fixed",
              top: 1,
              left: 1,
              width: 1,
              height: 0,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: "0",
              ...((i & 4) === 4 && (i & 2) !== 2 && { display: "none" }),
            },
          };
        return le({
          ourProps: e,
          theirProps: a,
          slot: {},
          attrs: s,
          slots: n,
          name: "Hidden",
        });
      };
    },
  }),
  Lt = Symbol("Context");
var B = ((t) => (
  (t[(t.Open = 1)] = "Open"),
  (t[(t.Closed = 2)] = "Closed"),
  (t[(t.Closing = 4)] = "Closing"),
  (t[(t.Opening = 8)] = "Opening"),
  t
))(B || {});
function Dl() {
  return at() !== null;
}
function at() {
  return h(Lt, null);
}
function Nl(t) {
  q(Lt, t);
}
var Mt = ((t) => (
  (t.Space = " "),
  (t.Enter = "Enter"),
  (t.Escape = "Escape"),
  (t.Backspace = "Backspace"),
  (t.Delete = "Delete"),
  (t.ArrowLeft = "ArrowLeft"),
  (t.ArrowUp = "ArrowUp"),
  (t.ArrowRight = "ArrowRight"),
  (t.ArrowDown = "ArrowDown"),
  (t.Home = "Home"),
  (t.End = "End"),
  (t.PageUp = "PageUp"),
  (t.PageDown = "PageDown"),
  (t.Tab = "Tab"),
  t
))(Mt || {});
function Bl(t) {
  function n() {
    document.readyState !== "loading" &&
      (t(), document.removeEventListener("DOMContentLoaded", n));
  }
  typeof window < "u" &&
    typeof document < "u" &&
    (document.addEventListener("DOMContentLoaded", n), n());
}
let de = [];
Bl(() => {
  function t(n) {
    n.target instanceof HTMLElement &&
      n.target !== document.body &&
      de[0] !== n.target &&
      (de.unshift(n.target),
      (de = de.filter((s) => s != null && s.isConnected)),
      de.splice(10));
  }
  window.addEventListener("click", t, { capture: !0 }),
    window.addEventListener("mousedown", t, { capture: !0 }),
    window.addEventListener("focus", t, { capture: !0 }),
    document.body.addEventListener("click", t, { capture: !0 }),
    document.body.addEventListener("mousedown", t, { capture: !0 }),
    document.body.addEventListener("focus", t, { capture: !0 });
});
function Ft(t, n, s, o) {
  Te.isServer ||
    W((i) => {
      (t = t ?? window),
        t.addEventListener(n, s, o),
        i(() => t.removeEventListener(n, s, o));
    });
}
var Pe = ((t) => (
  (t[(t.Forwards = 0)] = "Forwards"), (t[(t.Backwards = 1)] = "Backwards"), t
))(Pe || {});
function Rl() {
  let t = P(0);
  return (
    jt("keydown", (n) => {
      n.key === "Tab" && (t.value = n.shiftKey ? 1 : 0);
    }),
    t
  );
}
function Ot(t) {
  if (!t) return new Set();
  if (typeof t == "function") return new Set(t());
  let n = new Set();
  for (let s of t.value) {
    let o = F(s);
    o instanceof HTMLElement && n.add(o);
  }
  return n;
}
var Dt = ((t) => (
  (t[(t.None = 1)] = "None"),
  (t[(t.InitialFocus = 2)] = "InitialFocus"),
  (t[(t.TabLock = 4)] = "TabLock"),
  (t[(t.FocusLock = 8)] = "FocusLock"),
  (t[(t.RestoreFocus = 16)] = "RestoreFocus"),
  (t[(t.All = 30)] = "All"),
  t
))(Dt || {});
let Se = Object.assign(
  E({
    name: "FocusTrap",
    props: {
      as: { type: [Object, String], default: "div" },
      initialFocus: { type: Object, default: null },
      features: { type: Number, default: 30 },
      containers: { type: [Object, Function], default: P(new Set()) },
    },
    inheritAttrs: !1,
    setup(t, { attrs: n, slots: s, expose: o }) {
      let i = P(null);
      o({ el: i, $el: i });
      let a = _(() => we(i)),
        e = P(!1);
      N(() => (e.value = !0)),
        J(() => (e.value = !1)),
        Hl(
          { ownerDocument: a },
          _(() => e.value && !!(t.features & 16))
        );
      let u = hl(
        {
          ownerDocument: a,
          container: i,
          initialFocus: _(() => t.initialFocus),
        },
        _(() => e.value && !!(t.features & 2))
      );
      Vl(
        {
          ownerDocument: a,
          container: i,
          containers: t.containers,
          previousActiveElement: u,
        },
        _(() => e.value && !!(t.features & 8))
      );
      let d = Rl();
      function c(w) {
        let b = F(i);
        b &&
          ((S) => S())(() => {
            X(d.value, {
              [Pe.Forwards]: () => {
                Oe(b, se.First, { skipElements: [w.relatedTarget] });
              },
              [Pe.Backwards]: () => {
                Oe(b, se.Last, { skipElements: [w.relatedTarget] });
              },
            });
          });
      }
      let m = P(!1);
      function g(w) {
        w.key === "Tab" &&
          ((m.value = !0),
          requestAnimationFrame(() => {
            m.value = !1;
          }));
      }
      function v(w) {
        if (!e.value) return;
        let b = Ot(t.containers);
        F(i) instanceof HTMLElement && b.add(F(i));
        let S = w.relatedTarget;
        S instanceof HTMLElement &&
          S.dataset.headlessuiFocusGuard !== "true" &&
          (Nt(b, S) ||
            (m.value
              ? Oe(
                  F(i),
                  X(d.value, {
                    [Pe.Forwards]: () => se.Next,
                    [Pe.Backwards]: () => se.Previous,
                  }) | se.WrapAround,
                  { relativeTo: w.target }
                )
              : w.target instanceof HTMLElement && pe(w.target)));
      }
      return () => {
        let w = {},
          b = { ref: i, onKeydown: g, onFocusout: v },
          { features: S, initialFocus: $, containers: C, ...O } = t;
        return D(z, [
          !!(S & 4) &&
            D(et, {
              as: "button",
              type: "button",
              "data-headlessui-focus-guard": !0,
              onFocus: c,
              features: Be.Focusable,
            }),
          le({
            ourProps: b,
            theirProps: { ...n, ...O },
            slot: w,
            attrs: n,
            slots: s,
            name: "FocusTrap",
          }),
          !!(S & 4) &&
            D(et, {
              as: "button",
              type: "button",
              "data-headlessui-focus-guard": !0,
              onFocus: c,
              features: Be.Focusable,
            }),
        ]);
      };
    },
  }),
  { features: Dt }
);
function Ul(t) {
  let n = P(de.slice());
  return (
    ye(
      [t],
      ([s], [o]) => {
        o === !0 && s === !1
          ? rt(() => {
              n.value.splice(0);
            })
          : o === !1 && s === !0 && (n.value = de.slice());
      },
      { flush: "post" }
    ),
    () => {
      var s;
      return (s = n.value.find((o) => o != null && o.isConnected)) != null
        ? s
        : null;
    }
  );
}
function Hl({ ownerDocument: t }, n) {
  let s = Ul(n);
  N(() => {
    W(
      () => {
        var o, i;
        n.value ||
          (((o = t.value) == null ? void 0 : o.activeElement) ===
            ((i = t.value) == null ? void 0 : i.body) &&
            pe(s()));
      },
      { flush: "post" }
    );
  }),
    J(() => {
      n.value && pe(s());
    });
}
function hl({ ownerDocument: t, container: n, initialFocus: s }, o) {
  let i = P(null),
    a = P(!1);
  return (
    N(() => (a.value = !0)),
    J(() => (a.value = !1)),
    N(() => {
      ye(
        [n, s, o],
        (e, u) => {
          if (e.every((c, m) => (u == null ? void 0 : u[m]) === c) || !o.value)
            return;
          let d = F(n);
          d &&
            rt(() => {
              var c, m;
              if (!a.value) return;
              let g = F(s),
                v = (c = t.value) == null ? void 0 : c.activeElement;
              if (g) {
                if (g === v) {
                  i.value = v;
                  return;
                }
              } else if (d.contains(v)) {
                i.value = v;
                return;
              }
              g
                ? pe(g)
                : Oe(d, se.First | se.NoScroll) === kt.Error &&
                  console.warn(
                    "There are no focusable elements inside the <FocusTrap />"
                  ),
                (i.value = (m = t.value) == null ? void 0 : m.activeElement);
            });
        },
        { immediate: !0, flush: "post" }
      );
    }),
    i
  );
}
function Vl(
  { ownerDocument: t, container: n, containers: s, previousActiveElement: o },
  i
) {
  var a;
  Ft(
    (a = t.value) == null ? void 0 : a.defaultView,
    "focus",
    (e) => {
      if (!i.value) return;
      let u = Ot(s);
      F(n) instanceof HTMLElement && u.add(F(n));
      let d = o.value;
      if (!d) return;
      let c = e.target;
      c && c instanceof HTMLElement
        ? Nt(u, c)
          ? ((o.value = c), pe(c))
          : (e.preventDefault(), e.stopPropagation(), pe(d))
        : pe(o.value);
    },
    !0
  );
}
function Nt(t, n) {
  for (let s of t) if (s.contains(n)) return !0;
  return !1;
}
function Wl(t) {
  let n = qt(t.getSnapshot());
  return (
    J(
      t.subscribe(() => {
        n.value = t.getSnapshot();
      })
    ),
    n
  );
}
function zl(t, n) {
  let s = t(),
    o = new Set();
  return {
    getSnapshot() {
      return s;
    },
    subscribe(i) {
      return o.add(i), () => o.delete(i);
    },
    dispatch(i, ...a) {
      let e = n[i].call(s, ...a);
      e && ((s = e), o.forEach((u) => u()));
    },
  };
}
function Gl() {
  let t;
  return {
    before({ doc: n }) {
      var s;
      let o = n.documentElement;
      t = ((s = n.defaultView) != null ? s : window).innerWidth - o.clientWidth;
    },
    after({ doc: n, d: s }) {
      let o = n.documentElement,
        i = o.clientWidth - o.offsetWidth,
        a = t - i;
      s.style(o, "paddingRight", `${a}px`);
    },
  };
}
function ql() {
  return Tt()
    ? {
        before({ doc: t, d: n, meta: s }) {
          function o(i) {
            return s.containers.flatMap((a) => a()).some((a) => a.contains(i));
          }
          n.microTask(() => {
            var i;
            if (
              window.getComputedStyle(t.documentElement).scrollBehavior !==
              "auto"
            ) {
              let u = Ee();
              u.style(t.documentElement, "scrollBehavior", "auto"),
                n.add(() => n.microTask(() => u.dispose()));
            }
            let a = (i = window.scrollY) != null ? i : window.pageYOffset,
              e = null;
            n.addEventListener(
              t,
              "click",
              (u) => {
                if (u.target instanceof HTMLElement)
                  try {
                    let d = u.target.closest("a");
                    if (!d) return;
                    let { hash: c } = new URL(d.href),
                      m = t.querySelector(c);
                    m && !o(m) && (e = m);
                  } catch {}
              },
              !0
            ),
              n.addEventListener(t, "touchstart", (u) => {
                if (u.target instanceof HTMLElement)
                  if (o(u.target)) {
                    let d = u.target;
                    for (; d.parentElement && o(d.parentElement); )
                      d = d.parentElement;
                    n.style(d, "overscrollBehavior", "contain");
                  } else n.style(u.target, "touchAction", "none");
              }),
              n.addEventListener(
                t,
                "touchmove",
                (u) => {
                  if (u.target instanceof HTMLElement) {
                    if (u.target.tagName === "INPUT") return;
                    if (o(u.target)) {
                      let d = u.target;
                      for (
                        ;
                        d.parentElement &&
                        d.dataset.headlessuiPortal !== "" &&
                        !(
                          d.scrollHeight > d.clientHeight ||
                          d.scrollWidth > d.clientWidth
                        );

                      )
                        d = d.parentElement;
                      d.dataset.headlessuiPortal === "" && u.preventDefault();
                    } else u.preventDefault();
                  }
                },
                { passive: !1 }
              ),
              n.add(() => {
                var u;
                let d = (u = window.scrollY) != null ? u : window.pageYOffset;
                a !== d && window.scrollTo(0, a),
                  e &&
                    e.isConnected &&
                    (e.scrollIntoView({ block: "nearest" }), (e = null));
              });
          });
        },
      }
    : {};
}
function Xl() {
  return {
    before({ doc: t, d: n }) {
      n.style(t.documentElement, "overflow", "hidden");
    },
  };
}
function Ql(t) {
  let n = {};
  for (let s of t) Object.assign(n, s(n));
  return n;
}
let fe = zl(() => new Map(), {
  PUSH(t, n) {
    var s;
    let o =
      (s = this.get(t)) != null
        ? s
        : { doc: t, count: 0, d: Ee(), meta: new Set() };
    return o.count++, o.meta.add(n), this.set(t, o), this;
  },
  POP(t, n) {
    let s = this.get(t);
    return s && (s.count--, s.meta.delete(n)), this;
  },
  SCROLL_PREVENT({ doc: t, d: n, meta: s }) {
    let o = { doc: t, d: n, meta: Ql(s) },
      i = [ql(), Gl(), Xl()];
    i.forEach(({ before: a }) => (a == null ? void 0 : a(o))),
      i.forEach(({ after: a }) => (a == null ? void 0 : a(o)));
  },
  SCROLL_ALLOW({ d: t }) {
    t.dispose();
  },
  TEARDOWN({ doc: t }) {
    this.delete(t);
  },
});
fe.subscribe(() => {
  let t = fe.getSnapshot(),
    n = new Map();
  for (let [s] of t) n.set(s, s.documentElement.style.overflow);
  for (let s of t.values()) {
    let o = n.get(s.doc) === "hidden",
      i = s.count !== 0;
    ((i && !o) || (!i && o)) &&
      fe.dispatch(s.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", s),
      s.count === 0 && fe.dispatch("TEARDOWN", s);
  }
});
function Kl(t, n, s) {
  let o = Wl(fe),
    i = _(() => {
      let a = t.value ? o.value.get(t.value) : void 0;
      return a ? a.count > 0 : !1;
    });
  return (
    ye(
      [t, n],
      ([a, e], [u], d) => {
        if (!a || !e) return;
        fe.dispatch("PUSH", a, s);
        let c = !1;
        d(() => {
          c || (fe.dispatch("POP", u ?? a, s), (c = !0));
        });
      },
      { immediate: !0 }
    ),
    i
  );
}
let Ye = new Map(),
  _e = new Map();
function yt(t, n = P(!0)) {
  W((s) => {
    var o;
    if (!n.value) return;
    let i = F(t);
    if (!i) return;
    s(function () {
      var e;
      if (!i) return;
      let u = (e = _e.get(i)) != null ? e : 1;
      if ((u === 1 ? _e.delete(i) : _e.set(i, u - 1), u !== 1)) return;
      let d = Ye.get(i);
      d &&
        (d["aria-hidden"] === null
          ? i.removeAttribute("aria-hidden")
          : i.setAttribute("aria-hidden", d["aria-hidden"]),
        (i.inert = d.inert),
        Ye.delete(i));
    });
    let a = (o = _e.get(i)) != null ? o : 0;
    _e.set(i, a + 1),
      a === 0 &&
        (Ye.set(i, {
          "aria-hidden": i.getAttribute("aria-hidden"),
          inert: i.inert,
        }),
        i.setAttribute("aria-hidden", "true"),
        (i.inert = !0));
  });
}
function Yl({
  defaultContainers: t = [],
  portals: n,
  mainTreeNodeRef: s,
} = {}) {
  let o = P(null),
    i = we(o);
  function a() {
    var e, u, d;
    let c = [];
    for (let m of t)
      m !== null &&
        (m instanceof HTMLElement
          ? c.push(m)
          : "value" in m && m.value instanceof HTMLElement && c.push(m.value));
    if (n != null && n.value) for (let m of n.value) c.push(m);
    for (let m of (e =
      i == null ? void 0 : i.querySelectorAll("html > *, body > *")) != null
      ? e
      : [])
      m !== document.body &&
        m !== document.head &&
        m instanceof HTMLElement &&
        m.id !== "headlessui-portal-root" &&
        (m.contains(F(o)) ||
          m.contains(
            (d = (u = F(o)) == null ? void 0 : u.getRootNode()) == null
              ? void 0
              : d.host
          ) ||
          c.some((g) => m.contains(g)) ||
          c.push(m));
    return c;
  }
  return {
    resolveContainers: a,
    contains(e) {
      return a().some((u) => u.contains(e));
    },
    mainTreeNodeRef: o,
    MainTreeNode() {
      return s != null ? null : D(et, { features: Be.Hidden, ref: o });
    },
  };
}
let Bt = Symbol("ForcePortalRootContext");
function Zl() {
  return h(Bt, !1);
}
let wt = E({
    name: "ForcePortalRoot",
    props: {
      as: { type: [Object, String], default: "template" },
      force: { type: Boolean, default: !1 },
    },
    setup(t, { slots: n, attrs: s }) {
      return (
        q(Bt, t.force),
        () => {
          let { force: o, ...i } = t;
          return le({
            theirProps: i,
            ourProps: {},
            slot: {},
            slots: n,
            attrs: s,
            name: "ForcePortalRoot",
          });
        }
      );
    },
  }),
  Rt = Symbol("StackContext");
var tt = ((t) => ((t[(t.Add = 0)] = "Add"), (t[(t.Remove = 1)] = "Remove"), t))(
  tt || {}
);
function Jl() {
  return h(Rt, () => {});
}
function en({ type: t, enabled: n, element: s, onUpdate: o }) {
  let i = Jl();
  function a(...e) {
    o == null || o(...e), i(...e);
  }
  N(() => {
    ye(
      n,
      (e, u) => {
        e ? a(0, t, s) : u === !0 && a(1, t, s);
      },
      { immediate: !0, flush: "sync" }
    );
  }),
    J(() => {
      n.value && a(1, t, s);
    }),
    q(Rt, a);
}
let tn = Symbol("DescriptionContext");
function ln({ slot: t = P({}), name: n = "Description", props: s = {} } = {}) {
  let o = P([]);
  function i(a) {
    return (
      o.value.push(a),
      () => {
        let e = o.value.indexOf(a);
        e !== -1 && o.value.splice(e, 1);
      }
    );
  }
  return (
    q(tn, { register: i, slot: t, name: n, props: s }),
    _(() => (o.value.length > 0 ? o.value.join(" ") : void 0))
  );
}
function nn(t) {
  let n = we(t);
  if (!n) {
    if (t === null) return null;
    throw new Error(
      `[Headless UI]: Cannot find ownerDocument for contextElement: ${t}`
    );
  }
  let s = n.getElementById("headlessui-portal-root");
  if (s) return s;
  let o = n.createElement("div");
  return o.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(o);
}
const lt = new WeakMap();
function sn(t) {
  var n;
  return (n = lt.get(t)) != null ? n : 0;
}
function $t(t, n) {
  let s = n(sn(t));
  return s <= 0 ? lt.delete(t) : lt.set(t, s), s;
}
let on = E({
    name: "Portal",
    props: { as: { type: [Object, String], default: "div" } },
    setup(t, { slots: n, attrs: s }) {
      let o = P(null),
        i = _(() => we(o)),
        a = Zl(),
        e = h(Ut, null),
        u = P(a === !0 || e == null ? nn(o.value) : e.resolveTarget());
      u.value && $t(u.value, (v) => v + 1);
      let d = P(!1);
      N(() => {
        d.value = !0;
      }),
        W(() => {
          a || (e != null && (u.value = e.resolveTarget()));
        });
      let c = h(nt, null),
        m = !1,
        g = Qt();
      return (
        ye(o, () => {
          if (m || !c) return;
          let v = F(o);
          v && (J(c.register(v), g), (m = !0));
        }),
        J(() => {
          var v, w;
          let b =
            (v = i.value) == null
              ? void 0
              : v.getElementById("headlessui-portal-root");
          !b ||
            u.value !== b ||
            $t(u.value, (S) => S - 1) ||
            u.value.children.length > 0 ||
            (w = u.value.parentElement) == null ||
            w.removeChild(u.value);
        }),
        () => {
          if (!d.value || u.value === null) return null;
          let v = { ref: o, "data-headlessui-portal": "" };
          return D(
            Xt,
            { to: u.value },
            le({
              ourProps: v,
              theirProps: t,
              slot: {},
              attrs: s,
              slots: n,
              name: "Portal",
            })
          );
        }
      );
    },
  }),
  nt = Symbol("PortalParentContext");
function rn() {
  let t = h(nt, null),
    n = P([]);
  function s(a) {
    return n.value.push(a), t && t.register(a), () => o(a);
  }
  function o(a) {
    let e = n.value.indexOf(a);
    e !== -1 && n.value.splice(e, 1), t && t.unregister(a);
  }
  let i = { register: s, unregister: o, portals: n };
  return [
    n,
    E({
      name: "PortalWrapper",
      setup(a, { slots: e }) {
        return (
          q(nt, i),
          () => {
            var u;
            return (u = e.default) == null ? void 0 : u.call(e);
          }
        );
      },
    }),
  ];
}
let Ut = Symbol("PortalGroupContext"),
  an = E({
    name: "PortalGroup",
    props: {
      as: { type: [Object, String], default: "template" },
      target: { type: Object, default: null },
    },
    setup(t, { attrs: n, slots: s }) {
      let o = De({
        resolveTarget() {
          return t.target;
        },
      });
      return (
        q(Ut, o),
        () => {
          let { target: i, ...a } = t;
          return le({
            theirProps: a,
            ourProps: {},
            slot: {},
            attrs: n,
            slots: s,
            name: "PortalGroup",
          });
        }
      );
    },
  });
var un = ((t) => (
  (t[(t.Open = 0)] = "Open"), (t[(t.Closed = 1)] = "Closed"), t
))(un || {});
let st = Symbol("DialogContext");
function Ht(t) {
  let n = h(st, null);
  if (n === null) {
    let s = new Error(`<${t} /> is missing a parent <Dialog /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(s, Ht), s);
  }
  return n;
}
let Me = "DC8F892D-2EBD-447C-A4C8-A03058436FF4",
  ut = E({
    name: "Dialog",
    inheritAttrs: !1,
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
      open: { type: [Boolean, String], default: Me },
      initialFocus: { type: Object, default: null },
      id: { type: String, default: null },
      role: { type: String, default: "dialog" },
    },
    emits: { close: (t) => !0 },
    setup(t, { emit: n, attrs: s, slots: o, expose: i }) {
      var a, e;
      let u = (a = t.id) != null ? a : `headlessui-dialog-${it()}`,
        d = P(!1);
      N(() => {
        d.value = !0;
      });
      let c = !1,
        m = _(() =>
          t.role === "dialog" || t.role === "alertdialog"
            ? t.role
            : (c ||
                ((c = !0),
                console.warn(
                  `Invalid role [${m}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`
                )),
              "dialog")
        ),
        g = P(0),
        v = at(),
        w = _(() =>
          t.open === Me && v !== null ? (v.value & B.Open) === B.Open : t.open
        ),
        b = P(null),
        S = _(() => we(b));
      if ((i({ el: b, $el: b }), !(t.open !== Me || v !== null)))
        throw new Error(
          "You forgot to provide an `open` prop to the `Dialog`."
        );
      if (typeof w.value != "boolean")
        throw new Error(
          `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${
            w.value === Me ? void 0 : t.open
          }`
        );
      let $ = _(() => (d.value && w.value ? 0 : 1)),
        C = _(() => $.value === 0),
        O = _(() => g.value > 1),
        K = h(st, null) !== null,
        [ge, ve] = rn(),
        {
          resolveContainers: ne,
          mainTreeNodeRef: I,
          MainTreeNode: be,
        } = Yl({
          portals: ge,
          defaultContainers: [
            _(() => {
              var T;
              return (T = xe.panelRef.value) != null ? T : b.value;
            }),
          ],
        }),
        Ge = _(() => (O.value ? "parent" : "leaf")),
        Ce = _(() => (v !== null ? (v.value & B.Closing) === B.Closing : !1)),
        qe = _(() => (K || Ce.value ? !1 : C.value)),
        Xe = _(() => {
          var T, L, R;
          return (R = Array.from(
            (L =
              (T = S.value) == null
                ? void 0
                : T.querySelectorAll("body > *")) != null
              ? L
              : []
          ).find((U) =>
            U.id === "headlessui-portal-root"
              ? !1
              : U.contains(F(I)) && U instanceof HTMLElement
          )) != null
            ? R
            : null;
        });
      yt(Xe, qe);
      let G = _(() => (O.value ? !0 : C.value)),
        $e = _(() => {
          var T, L, R;
          return (R = Array.from(
            (L =
              (T = S.value) == null
                ? void 0
                : T.querySelectorAll("[data-headlessui-portal]")) != null
              ? L
              : []
          ).find((U) => U.contains(F(I)) && U instanceof HTMLElement)) != null
            ? R
            : null;
        });
      yt($e, G),
        en({
          type: "Dialog",
          enabled: _(() => $.value === 0),
          element: b,
          onUpdate: (T, L) => {
            if (L === "Dialog")
              return X(T, {
                [tt.Add]: () => (g.value += 1),
                [tt.Remove]: () => (g.value -= 1),
              });
          },
        });
      let Y = ln({
          name: "DialogDescription",
          slot: _(() => ({ open: w.value })),
        }),
        Z = P(null),
        xe = {
          titleId: Z,
          panelRef: P(null),
          dialogState: $,
          setTitleId(T) {
            Z.value !== T && (Z.value = T);
          },
          close() {
            n("close", !1);
          },
        };
      q(st, xe);
      let ct = _(() => !(!C.value || O.value));
      Fl(
        ne,
        (T, L) => {
          T.preventDefault(),
            xe.close(),
            Kt(() => (L == null ? void 0 : L.focus()));
        },
        ct
      );
      let mt = _(() => !(O.value || $.value !== 0));
      Ft((e = S.value) == null ? void 0 : e.defaultView, "keydown", (T) => {
        mt.value &&
          (T.defaultPrevented ||
            (T.key === Mt.Escape &&
              (T.preventDefault(), T.stopPropagation(), xe.close())));
      });
      let gt = _(() => !(Ce.value || $.value !== 0 || K));
      return (
        Kl(S, gt, (T) => {
          var L;
          return { containers: [...((L = T.containers) != null ? L : []), ne] };
        }),
        W((T) => {
          if ($.value !== 0) return;
          let L = F(b);
          if (!L) return;
          let R = new ResizeObserver((U) => {
            for (let Qe of U) {
              let Ie = Qe.target.getBoundingClientRect();
              Ie.x === 0 &&
                Ie.y === 0 &&
                Ie.width === 0 &&
                Ie.height === 0 &&
                xe.close();
            }
          });
          R.observe(L), T(() => R.disconnect());
        }),
        () => {
          let { open: T, initialFocus: L, ...R } = t,
            U = {
              ...s,
              ref: b,
              id: u,
              role: m.value,
              "aria-modal": $.value === 0 ? !0 : void 0,
              "aria-labelledby": Z.value,
              "aria-describedby": Y.value,
            },
            Qe = { open: $.value === 0 };
          return D(wt, { force: !0 }, () => [
            D(on, () =>
              D(an, { target: b.value }, () =>
                D(wt, { force: !1 }, () =>
                  D(
                    Se,
                    {
                      initialFocus: L,
                      containers: ne,
                      features: C.value
                        ? X(Ge.value, {
                            parent: Se.features.RestoreFocus,
                            leaf: Se.features.All & ~Se.features.FocusLock,
                          })
                        : Se.features.None,
                    },
                    () =>
                      D(ve, {}, () =>
                        le({
                          ourProps: U,
                          theirProps: { ...R, ...s },
                          slot: Qe,
                          attrs: s,
                          slots: o,
                          visible: $.value === 0,
                          features: Ne.RenderStrategy | Ne.Static,
                          name: "Dialog",
                        })
                      )
                  )
                )
              )
            ),
            D(be),
          ]);
        }
      );
    },
  }),
  ht = E({
    name: "DialogPanel",
    props: {
      as: { type: [Object, String], default: "div" },
      id: { type: String, default: null },
    },
    setup(t, { attrs: n, slots: s, expose: o }) {
      var i;
      let a = (i = t.id) != null ? i : `headlessui-dialog-panel-${it()}`,
        e = Ht("DialogPanel");
      o({ el: e.panelRef, $el: e.panelRef });
      function u(d) {
        d.stopPropagation();
      }
      return () => {
        let { ...d } = t,
          c = { id: a, ref: e.panelRef, onClick: u };
        return le({
          ourProps: c,
          theirProps: d,
          slot: { open: e.dialogState.value === 0 },
          attrs: n,
          slots: s,
          name: "DialogPanel",
        });
      };
    },
  });
function dn(t) {
  let n = { called: !1 };
  return (...s) => {
    if (!n.called) return (n.called = !0), t(...s);
  };
}
function Ze(t, ...n) {
  t && n.length > 0 && t.classList.add(...n);
}
function Fe(t, ...n) {
  t && n.length > 0 && t.classList.remove(...n);
}
var ot = ((t) => ((t.Finished = "finished"), (t.Cancelled = "cancelled"), t))(
  ot || {}
);
function fn(t, n) {
  let s = Ee();
  if (!t) return s.dispose;
  let { transitionDuration: o, transitionDelay: i } = getComputedStyle(t),
    [a, e] = [o, i].map((u) => {
      let [d = 0] = u
        .split(",")
        .filter(Boolean)
        .map((c) => (c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3))
        .sort((c, m) => m - c);
      return d;
    });
  return (
    a !== 0 ? s.setTimeout(() => n("finished"), a + e) : n("finished"),
    s.add(() => n("cancelled")),
    s.dispose
  );
}
function St(t, n, s, o, i, a) {
  let e = Ee(),
    u = a !== void 0 ? dn(a) : () => {};
  return (
    Fe(t, ...i),
    Ze(t, ...n, ...s),
    e.nextFrame(() => {
      Fe(t, ...s),
        Ze(t, ...o),
        e.add(fn(t, (d) => (Fe(t, ...o, ...n), Ze(t, ...i), u(d))));
    }),
    e.add(() => Fe(t, ...n, ...s, ...o, ...i)),
    e.add(() => u("cancelled")),
    e.dispose
  );
}
function ue(t = "") {
  return t.split(/\s+/).filter((n) => n.length > 1);
}
let dt = Symbol("TransitionContext");
var pn = ((t) => ((t.Visible = "visible"), (t.Hidden = "hidden"), t))(pn || {});
function cn() {
  return h(dt, null) !== null;
}
function mn() {
  let t = h(dt, null);
  if (t === null)
    throw new Error(
      "A <TransitionChild /> is used but it is missing a parent <TransitionRoot />."
    );
  return t;
}
function gn() {
  let t = h(ft, null);
  if (t === null)
    throw new Error(
      "A <TransitionChild /> is used but it is missing a parent <TransitionRoot />."
    );
  return t;
}
let ft = Symbol("NestingContext");
function Ue(t) {
  return "children" in t
    ? Ue(t.children)
    : t.value.filter(({ state: n }) => n === "visible").length > 0;
}
function Vt(t) {
  let n = P([]),
    s = P(!1);
  N(() => (s.value = !0)), J(() => (s.value = !1));
  function o(a, e = oe.Hidden) {
    let u = n.value.findIndex(({ id: d }) => d === a);
    u !== -1 &&
      (X(e, {
        [oe.Unmount]() {
          n.value.splice(u, 1);
        },
        [oe.Hidden]() {
          n.value[u].state = "hidden";
        },
      }),
      !Ue(n) && s.value && (t == null || t()));
  }
  function i(a) {
    let e = n.value.find(({ id: u }) => u === a);
    return (
      e
        ? e.state !== "visible" && (e.state = "visible")
        : n.value.push({ id: a, state: "visible" }),
      () => o(a, oe.Unmount)
    );
  }
  return { children: n, register: i, unregister: o };
}
let Wt = Ne.RenderStrategy,
  ce = E({
    props: {
      as: { type: [Object, String], default: "div" },
      show: { type: [Boolean], default: null },
      unmount: { type: [Boolean], default: !0 },
      appear: { type: [Boolean], default: !1 },
      enter: { type: [String], default: "" },
      enterFrom: { type: [String], default: "" },
      enterTo: { type: [String], default: "" },
      entered: { type: [String], default: "" },
      leave: { type: [String], default: "" },
      leaveFrom: { type: [String], default: "" },
      leaveTo: { type: [String], default: "" },
    },
    emits: {
      beforeEnter: () => !0,
      afterEnter: () => !0,
      beforeLeave: () => !0,
      afterLeave: () => !0,
    },
    setup(t, { emit: n, attrs: s, slots: o, expose: i }) {
      let a = P(0);
      function e() {
        (a.value |= B.Opening), n("beforeEnter");
      }
      function u() {
        (a.value &= ~B.Opening), n("afterEnter");
      }
      function d() {
        (a.value |= B.Closing), n("beforeLeave");
      }
      function c() {
        (a.value &= ~B.Closing), n("afterLeave");
      }
      if (!cn() && Dl())
        return () =>
          D(
            He,
            {
              ...t,
              onBeforeEnter: e,
              onAfterEnter: u,
              onBeforeLeave: d,
              onAfterLeave: c,
            },
            o
          );
      let m = P(null),
        g = _(() => (t.unmount ? oe.Unmount : oe.Hidden));
      i({ el: m, $el: m });
      let { show: v, appear: w } = mn(),
        { register: b, unregister: S } = gn(),
        $ = P(v.value ? "visible" : "hidden"),
        C = { value: !0 },
        O = it(),
        K = { value: !1 },
        ge = Vt(() => {
          !K.value && $.value !== "hidden" && (($.value = "hidden"), S(O), c());
        });
      N(() => {
        let G = b(O);
        J(G);
      }),
        W(() => {
          if (g.value === oe.Hidden && O) {
            if (v.value && $.value !== "visible") {
              $.value = "visible";
              return;
            }
            X($.value, { hidden: () => S(O), visible: () => b(O) });
          }
        });
      let ve = ue(t.enter),
        ne = ue(t.enterFrom),
        I = ue(t.enterTo),
        be = ue(t.entered),
        Ge = ue(t.leave),
        Ce = ue(t.leaveFrom),
        qe = ue(t.leaveTo);
      N(() => {
        W(() => {
          if ($.value === "visible") {
            let G = F(m);
            if (G instanceof Comment && G.data === "")
              throw new Error(
                "Did you forget to passthrough the `ref` to the actual DOM node?"
              );
          }
        });
      });
      function Xe(G) {
        let $e = C.value && !w.value,
          Y = F(m);
        !Y ||
          !(Y instanceof HTMLElement) ||
          $e ||
          ((K.value = !0),
          v.value && e(),
          v.value || d(),
          G(
            v.value
              ? St(Y, ve, ne, I, be, (Z) => {
                  (K.value = !1), Z === ot.Finished && u();
                })
              : St(Y, Ge, Ce, qe, be, (Z) => {
                  (K.value = !1),
                    Z === ot.Finished &&
                      (Ue(ge) || (($.value = "hidden"), S(O), c()));
                })
          ));
      }
      return (
        N(() => {
          ye(
            [v],
            (G, $e, Y) => {
              Xe(Y), (C.value = !1);
            },
            { immediate: !0 }
          );
        }),
        q(ft, ge),
        Nl(
          _(() => X($.value, { visible: B.Open, hidden: B.Closed }) | a.value)
        ),
        () => {
          let {
              appear: G,
              show: $e,
              enter: Y,
              enterFrom: Z,
              enterTo: xe,
              entered: ct,
              leave: mt,
              leaveFrom: gt,
              leaveTo: T,
              ...L
            } = t,
            R = { ref: m },
            U = {
              ...L,
              ...(w.value && v.value && Te.isServer
                ? { class: V([s.class, L.class, ...ve, ...ne]) }
                : {}),
            };
          return le({
            theirProps: U,
            ourProps: R,
            slot: {},
            slots: o,
            attrs: s,
            features: Wt,
            visible: $.value === "visible",
            name: "TransitionChild",
          });
        }
      );
    },
  }),
  vn = ce,
  He = E({
    inheritAttrs: !1,
    props: {
      as: { type: [Object, String], default: "div" },
      show: { type: [Boolean], default: null },
      unmount: { type: [Boolean], default: !0 },
      appear: { type: [Boolean], default: !1 },
      enter: { type: [String], default: "" },
      enterFrom: { type: [String], default: "" },
      enterTo: { type: [String], default: "" },
      entered: { type: [String], default: "" },
      leave: { type: [String], default: "" },
      leaveFrom: { type: [String], default: "" },
      leaveTo: { type: [String], default: "" },
    },
    emits: {
      beforeEnter: () => !0,
      afterEnter: () => !0,
      beforeLeave: () => !0,
      afterLeave: () => !0,
    },
    setup(t, { emit: n, attrs: s, slots: o }) {
      let i = at(),
        a = _(() =>
          t.show === null && i !== null ? (i.value & B.Open) === B.Open : t.show
        );
      W(() => {
        if (![!0, !1].includes(a.value))
          throw new Error(
            'A <Transition /> is used but it is missing a `:show="true | false"` prop.'
          );
      });
      let e = P(a.value ? "visible" : "hidden"),
        u = Vt(() => {
          e.value = "hidden";
        }),
        d = P(!0),
        c = { show: a, appear: _(() => t.appear || !d.value) };
      return (
        N(() => {
          W(() => {
            (d.value = !1),
              a.value ? (e.value = "visible") : Ue(u) || (e.value = "hidden");
          });
        }),
        q(ft, u),
        q(dt, c),
        () => {
          let m = It(t, [
              "show",
              "appear",
              "unmount",
              "onBeforeEnter",
              "onBeforeLeave",
              "onAfterEnter",
              "onAfterLeave",
            ]),
            g = { unmount: t.unmount };
          return le({
            ourProps: { ...g, as: "template" },
            theirProps: {},
            slot: {},
            slots: {
              ...o,
              default: () => [
                D(
                  vn,
                  {
                    onBeforeEnter: () => n("beforeEnter"),
                    onAfterEnter: () => n("afterEnter"),
                    onBeforeLeave: () => n("beforeLeave"),
                    onAfterLeave: () => n("afterLeave"),
                    ...s,
                    ...g,
                    ...m,
                  },
                  o.default
                ),
              ],
            },
            attrs: {},
            features: Wt,
            visible: e.value === "visible",
            name: "Transition",
          });
        }
      );
    },
  });
const bn = { class: "fixed inset-0 overflow-y-auto" },
  xn = { class: "flex min-h-full items-center justify-center p-4 text-center" },
  yn = { class: "flex flex-col gap-1 text-white pt-2 pb-4 px-4" },
  wn = { class: V("font-bold text-2xl mb-1 text-white") },
  $n = { key: 0, class: "text-white text-lg" },
  Sn = E({
    __name: "Alert",
    props: {
      title: { type: String, default: "" },
      text: { type: String, default: "" },
      type: { type: String, default: "success" },
      function: { type: Function, required: !1 },
      isShow: { type: Boolean, default: !1 },
    },
    emits: ["update-value"],
    setup(t, { emit: n }) {
      const s = t,
        o = De({
          primary: "bg-blue-400",
          success: "bg-emerald-400",
          warning: "bg-orange-400",
          danger: "bg-rose-400",
        }),
        i = De({
          primary: "text-white",
          success: "text-green-600",
          warning: "text-orange-500",
          danger: "text-red-500",
        }),
        a = _(() =>
          ["primary", "success", "warning", "danger"].includes(s.type)
            ? s.type
            : "primary"
        ),
        e = _(() => o[a.value]);
      _(() => i[a.value]);
      const u = n,
        d = () => {
          s.function && s.function(), u("update-value", !1);
        };
      return (c, m) => (
        x(),
        M(
          y(He),
          { show: t.isShow, appear: "", class: "relative z-10" },
          {
            default: p(() => [
              f(
                y(ut),
                {
                  as: "div",
                  class: "relative z-99 cursor-pointer",
                  onClick: d,
                },
                {
                  default: p(() => [
                    f(
                      y(ce),
                      {
                        as: "template",
                        enter: "duration-300 ease-out",
                        "enter-from": "opacity-0",
                        "enter-to": "opacity-100",
                        leave: "duration-200 ease-in",
                        "leave-from": "opacity-100",
                        "leave-to": "opacity-0",
                      },
                      {
                        default: p(
                          () =>
                            m[0] ||
                            (m[0] = [
                              l(
                                "div",
                                {
                                  class: "fixed inset-0 bg-black bg-opacity-50",
                                },
                                null,
                                -1
                              ),
                            ])
                        ),
                        _: 1,
                      }
                    ),
                    l("div", bn, [
                      l("div", xn, [
                        f(
                          y(ce),
                          {
                            as: "template",
                            enter: "duration-300 ease-out",
                            "enter-from": "opacity-0",
                            "enter-to": "opacity-100",
                            leave: "duration-300 ease-in",
                            "leave-from": "opacity-100",
                            "leave-to": "opacity-0",
                          },
                          {
                            default: p(() => [
                              l(
                                "div",
                                {
                                  class: V(
                                    `p-3 rounded-lg shadow-lg flex flex-col ${y(
                                      e
                                    )} min-w-100`
                                  ),
                                },
                                [
                                  l(
                                    "div",
                                    { class: "w-full flex justify-end" },
                                    [
                                      l(
                                        "p",
                                        {
                                          class:
                                            "text-white font-bold cursor-pointer",
                                          onClick: d,
                                        },
                                        m[1] ||
                                          (m[1] = [
                                            l(
                                              "svg",
                                              {
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 36 36",
                                              },
                                              [
                                                l("path", {
                                                  fill: "currentColor",
                                                  d: "m19.41 18l8.29-8.29a1 1 0 0 0-1.41-1.41L18 16.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29l-8.3 8.29A1 1 0 1 0 9.7 27.7l8.3-8.29l8.29 8.29a1 1 0 0 0 1.41-1.41Z",
                                                  class:
                                                    "clr-i-outline clr-i-outline-path-1",
                                                }),
                                                l("path", {
                                                  fill: "none",
                                                  d: "M0 0h36v36H0z",
                                                }),
                                              ],
                                              -1
                                            ),
                                          ])
                                      ),
                                    ]
                                  ),
                                  l("div", yn, [
                                    l("div", wn, [
                                      j(c.$slots, "title", {}, () => [
                                        r(H(t.title), 1),
                                      ]),
                                    ]),
                                    t.text
                                      ? (x(),
                                        k("div", $n, [
                                          j(c.$slots, "text", {}, () => [
                                            r(H(t.text), 1),
                                          ]),
                                        ]))
                                      : ie("", !0),
                                  ]),
                                ],
                                2
                              ),
                            ]),
                            _: 3,
                          }
                        ),
                      ]),
                    ]),
                  ]),
                  _: 3,
                }
              ),
            ]),
            _: 3,
          },
          8,
          ["show"]
        )
      );
    },
  }),
  _n = ["id"],
  pt = E({
    __name: "Section",
    props: { sectionId: { type: String, default: "" } },
    setup(t) {
      return (n, s) => (
        x(),
        k(
          "div",
          { class: "section pt-4 lg:pt-10", id: t.sectionId },
          [j(n.$slots, "default")],
          8,
          _n
        )
      );
    },
  }),
  Pn = A("/profile2.png"),
  _t = A("/developer.png"),
  kn = A("/mail.png"),
  En = A("/interview.png"),
  Tn = A("/finger.png"),
  jn = A("/ssn.png"),
  An = window.setInterval,
  Cn = { class: "flex flex-col" },
  In = {
    class:
      "lg:pb-10 pb-4 flex flex-col lg:flex-row gap-4 items-center lg:justify-between justify-center",
  },
  Ln = { class: "flex flex-col gap-4 lg:gap-10" },
  Mn = { class: "flex flex-col gap-4 lg:gap-6" },
  Fn = { key: 0, class: "cursor" },
  On = { class: "pl-6" },
  Dn = { key: 0, class: "cursor" },
  Nn = {
    class:
      "w-full flex lg:flex-row lg:justify-between flex-col gap-2 lg:items-center",
  },
  Bn = { class: "text-right lg:text-left" },
  Rn = {
    class:
      "w-full flex lg:flex-row lg:justify-between flex-col gap-2 lg:items-center",
  },
  Un = { class: "text-right lg:text-left" },
  Hn = "기획부터 UI/UX·아키텍처·구현까지-",
  hn = "서비스 전체 흐름을 책임지는 프론트엔드 개발자 최진경입니다.",
  Pt = "jinjinjara0610@gmail.com",
  Vn = E({
    __name: "AboutMe",
    setup(t) {
      const n = P(""),
        s = P(""),
        o = P(!0),
        i = P(!1);
      function a(u, d, c) {
        return new Promise((m) => {
          let g = 0;
          const v = An(() => {
            g < u.length ? ((d.value += u[g]), g++) : (clearInterval(v), m());
          }, c);
        });
      }
      function e() {
        navigator.clipboard
          .writeText(Pt)
          .then(() => {
            (i.value = !0),
              setTimeout(() => {
                i.value = !1;
              }, 1500);
          })
          .catch((u) => {
            console.error("이메일 복사 실패:", u);
          });
      }
      return (
        N(async () => {
          await a(Hn, n, 70), await a(hn, s, 70), (o.value = !1);
        }),
        (u, d) => {
          const c = ke,
            m = Re,
            g = Q,
            v = gl,
            w = ae,
            b = me,
            S = Sn,
            $ = pt;
          return (
            x(),
            M(
              $,
              { "section-id": "about-me" },
              {
                default: p(() => [
                  l("div", Cn, [
                    l("div", In, [
                      d[6] ||
                        (d[6] = l(
                          "div",
                          { class: "w-60 lg:w-80" },
                          [l("img", { src: Pn })],
                          -1
                        )),
                      l("div", Ln, [
                        d[5] ||
                          (d[5] = l(
                            "p",
                            {
                              class:
                                "text-center lg:text-left text-3xl lg:text-5xl font-extrabold tracking-wider",
                            },
                            "최진경",
                            -1
                          )),
                        l("div", Mn, [
                          d[4] ||
                            (d[4] = l(
                              "div",
                              {
                                class:
                                  "flex flex-row items-center gap-2 justify-center lg:justify-start",
                              },
                              [
                                l("div", { class: "lg:w-7 w-4" }, [
                                  l("img", { src: _t }),
                                ]),
                                l(
                                  "p",
                                  {
                                    class:
                                      "text-center lg:text-left text-2xl lg:text-3xl font-semibold text-gray-700",
                                  },
                                  "Web Frontend Developer "
                                ),
                              ],
                              -1
                            )),
                          f(
                            c,
                            {
                              class:
                                "leading-7 px-3 py-4 text-base lg:text-lg lg:w-135 min:w-86 tracking-tighter",
                            },
                            {
                              default: p(() => [
                                l("p", null, [
                                  d[2] ||
                                    (d[2] = l(
                                      "span",
                                      { class: "w-4 pr-2" },
                                      "🖐🏻",
                                      -1
                                    )),
                                  r("안녕하세요, " + H(y(n)) + " ", 1),
                                  y(o) && !y(s)
                                    ? (x(), k("span", Fn))
                                    : ie("", !0),
                                ]),
                                l("p", On, [
                                  r(H(y(s)) + " ", 1),
                                  y(s) ? (x(), k("span", Dn)) : ie("", !0),
                                ]),
                              ]),
                              _: 1,
                            }
                          ),
                          l(
                            "div",
                            {
                              class:
                                "flex flex-row gap-2 items-center lg:justify-start cursor-pointer",
                              onClick: d[0] || (d[0] = (C) => e()),
                            },
                            [
                              d[3] ||
                                (d[3] = l(
                                  "img",
                                  { src: kn, class: "lg:w-7 w-4" },
                                  null,
                                  -1
                                )),
                              l("span", null, H(Pt)),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                    f(m),
                    f(w, null, {
                      default: p(() => [
                        f(g, null, {
                          icon: p(({ size: C }) => [
                            l("img", { src: En, class: V([C]) }, null, 2),
                          ]),
                          default: p(() => [
                            d[7] || (d[7] = l("span", null, "Interview", -1)),
                          ]),
                          _: 1,
                        }),
                        f(v, null, {
                          question: p(
                            () =>
                              d[8] ||
                              (d[8] = [
                                r(" Q. 본인의 "),
                                l(
                                  "span",
                                  {
                                    class:
                                      "font-bold bg-blue-100 text-gray-800",
                                  },
                                  "강점",
                                  -1
                                ),
                                r("이 뭐라고 생각하시나요? "),
                              ])
                          ),
                          answer: p(
                            () =>
                              d[9] ||
                              (d[9] = [
                                l(
                                  "div",
                                  { class: "bg-blue-100 rounded-lg p-2 mb-2" },
                                  [
                                    l(
                                      "ul",
                                      {
                                        class:
                                          "list-disc pl-5 flex flex-col gap-2",
                                      },
                                      [
                                        l(
                                          "li",
                                          null,
                                          "복잡한 도메인(Web3 기반 서비스)을 빠르게 분석하고 UI/UX로 풀어내는 능력"
                                        ),
                                        l(
                                          "li",
                                          null,
                                          "SSR 기반 인증 구조, API 프록싱, 상태 관리 등 FE 아키텍처 설계 역량"
                                        ),
                                        l(
                                          "li",
                                          null,
                                          "코드 스플리팅, 컴포넌트 렌더링 최적화(memoization) 등 성능 최적화 경험"
                                        ),
                                        l(
                                          "li",
                                          null,
                                          "기획·디자인부터 개발·QA·배포·운영까지 전 과정을 책임질 수 있는 End-to-End 개발 경험"
                                        ),
                                        l("li", null, [
                                          r(
                                            "API Playground와 같은 복잡한 인터랙션과 데이터 흐름을 가진 기능형 UI를"
                                          ),
                                          l("br"),
                                          r(
                                            " 화면 구조 설계부터 아키텍처까지 직접 설계하고 구현한 경험"
                                          ),
                                        ]),
                                        l(
                                          "li",
                                          null,
                                          "구조화된 데이터를 UI 레이어에서 안전하고 일관되게 처리한 경험"
                                        ),
                                      ]
                                    ),
                                  ],
                                  -1
                                ),
                                r(
                                  " 저의 강점은 복잡한 요구사항을 빠르게 분석하고, 기획부터 UI/UX 설계·아키텍처 구성·구현·운영까지 프론트엔드 전반을 스스로 이끌어갈 수 있는 "
                                ),
                                l(
                                  "span",
                                  { class: "font-semibold" },
                                  "end-to-end 개발 역량",
                                  -1
                                ),
                                r("입니다. "),
                                l("br", null, null, -1),
                                l("br", null, null, -1),
                                r(
                                  " Vue.js·Nuxt.js·Next.js 기반의 다양한 프로젝트를 통해 "
                                ),
                                l(
                                  "span",
                                  { class: "font-semibold" },
                                  "SSR 구조, 상태 관리, API 연동 아키텍처, 성능 최적화",
                                  -1
                                ),
                                r(
                                  " 등 프론트엔드의 핵심 요소들을 폭넓게 경험해왔습니다. "
                                ),
                                l("br", null, null, -1),
                                l("br", null, null, -1),
                                r(
                                  " 특히 블록체인 기반 API와의 연동 경험을 통해, 트랜잭션 생성 → 서명 → 전송 → 이벤트 조회로 이어지는 전체 흐름을 이해하고 이를 사용자 경험 중심의 UI로 구현해본 실전 경험을 가지고 있습니다. "
                                ),
                                l("br", null, null, -1),
                                l("br", null, null, -1),
                                r(
                                  " 또한 UX 플로우 설계 → UI 디자인 → FE 구조 설계 → 개발 → QA → 배포까지 "
                                ),
                                l(
                                  "span",
                                  { class: "font-semibold" },
                                  "서비스 전체 생명주기를 직접 리드하며, 화면 개발을 넘어 ‘완성도 있는 서비스’를 만드는 것을 목표",
                                  -1
                                ),
                                r("로 일해왔습니다. "),
                                l("br", null, null, -1),
                                l("br", null, null, -1),
                                r(" 정리하면, "),
                                l(
                                  "span",
                                  { class: "font-semibold" },
                                  " “사용자 경험과 기술 구조를 함께 고민하고, 실제 서비스 수준으로 구현할 수 있는 프론트엔드 개발자” ",
                                  -1
                                ),
                                r(" 라는 점이 저의 가장 큰 경쟁력입니다. "),
                              ])
                          ),
                          _: 1,
                        }),
                        f(v, null, {
                          question: p(
                            () =>
                              d[10] ||
                              (d[10] = [
                                r(" Q. 본인이 추구하는 "),
                                l(
                                  "span",
                                  {
                                    class:
                                      "font-bold bg-blue-100 text-gray-800",
                                  },
                                  "개발 가치",
                                  -1
                                ),
                                r("는? "),
                              ])
                          ),
                          answer: p(
                            () =>
                              d[11] ||
                              (d[11] = [
                                l(
                                  "p",
                                  { class: "font-semibold mb-1" },
                                  [
                                    l(
                                      "span",
                                      { class: "bg-yellow-100" },
                                      "사용자가 ‘의도한 경험’을 그대로 전달하는 개발"
                                    ),
                                  ],
                                  -1
                                ),
                                r(" 저는 기능 구현 자체보다 "),
                                l(
                                  "span",
                                  { class: "font-semibold" },
                                  "사용자가 어떤 흐름으로 서비스를 경험하는지",
                                  -1
                                ),
                                r("를 우선순위로 둡니다. "),
                                l("br", null, null, -1),
                                r(
                                  "BaaS와 같은 서비스 플랫폼을 개발해오면서 다양한 유형의 사용자 요구를 관찰해왔고, 그 과정에서 개발자가 편한 구조보다 "
                                ),
                                l(
                                  "span",
                                  { class: "font-semibold" },
                                  "사용자가 자연스럽게 이해하고 사용할 수 있는 UI/UX",
                                  -1
                                ),
                                r(
                                  "가 결국 좋은 서비스라는 확신을 가지게 되었습니다. "
                                ),
                                l(
                                  "p",
                                  { class: "font-semibold mt-5 mb-1" },
                                  [
                                    l(
                                      "span",
                                      { class: "bg-yellow-100" },
                                      "제품 전체를 바라보는 엔드투엔드 관점"
                                    ),
                                  ],
                                  -1
                                ),
                                r(
                                  " 기획–설계–개발–배포–유지보수까지 전체 흐름을 이해하고 직접 참여해온 경험 덕분에, 저는 단순히 화면을 만드는 개발자가 아니라 "
                                ),
                                l(
                                  "span",
                                  { class: "font-semibold" },
                                  "제품의 완성도를 함께 책임지는 사람",
                                  -1
                                ),
                                r("을 지향합니다. "),
                                l("br", null, null, -1),
                                r(
                                  "특히 서비스 플랫폼 특성상 구조적 확장성과 유지보수성이 매우 중요한데, 이를 고려한 아키텍처 설계와 컴포넌트 구조화에 강점을 가지고 있고, "
                                ),
                                l(
                                  "span",
                                  { class: "font-semibold" },
                                  "사용자 가치와 비즈니스 목표를 동시에 만족시키는 선택",
                                  -1
                                ),
                                r("을 늘 고민합니다. "),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    f(w, null, {
                      default: p(() => [
                        f(g, null, {
                          icon: p(({ size: C }) => [
                            l("img", { src: _t, class: V([C]) }, null, 2),
                          ]),
                          default: p(() => [
                            d[12] || (d[12] = l("span", null, "Career", -1)),
                          ]),
                          _: 1,
                        }),
                        l("div", Nn, [
                          d[14] ||
                            (d[14] = l(
                              "div",
                              { class: "flex flex-row gap-2 items-center" },
                              [
                                l("img", { src: Tn, class: "w-15 mb-1" }),
                                l("p", null, "(주)핑거"),
                                l(
                                  "span",
                                  { class: "text-gray-500" },
                                  "기술연구소"
                                ),
                              ],
                              -1
                            )),
                          l("p", Bn, [
                            f(b, { text: "웹 개발자로 근무중", class: "mr-2" }),
                            d[13] || (d[13] = r(" 2022.03 ~ 현재 ")),
                          ]),
                        ]),
                        l("div", Rn, [
                          d[16] ||
                            (d[16] = l(
                              "div",
                              { class: "flex flex-row gap-2 items-center" },
                              [
                                l("img", { src: jn, class: "w-10 mb-1" }),
                                l("p", null, "서울특별시사회복지협의회"),
                              ],
                              -1
                            )),
                          l("p", Un, [
                            f(b, {
                              text: "직무변경 전 위생사로 근무",
                              class: "mr-2",
                            }),
                            d[15] || (d[15] = r(" 2018.04 ~ 2021.07 ")),
                          ]),
                        ]),
                      ]),
                      _: 1,
                    }),
                  ]),
                  f(
                    S,
                    {
                      title: "이메일 주소가 복사되었습니다!",
                      isShow: y(i),
                      onUpdateValue:
                        d[1] ||
                        (d[1] = (C) => {
                          i.value = C;
                        }),
                    },
                    null,
                    8,
                    ["isShow"]
                  ),
                ]),
                _: 1,
              }
            )
          );
        }
      );
    },
  }),
  Wn = te(Vn, [["__scopeId", "data-v-3eafe7ed"]]),
  zn = { class: "flex flex-row items-center gap-2" },
  Gn = { class: "w-5" },
  qn = { class: "text-gray-500" },
  Xn = { key: 0, class: "flex flex-row gap-1" },
  Qn = E({
    __name: "Card",
    props: {
      title: { type: String, default: "" },
      level: { type: String, default: "고급" },
      noneLevel: { type: Boolean, default: !1 },
    },
    setup(t) {
      const n = t,
        s = _(() => (n.level === "고급" ? 3 : n.level === "중급" ? 2 : 1));
      return (o, i) => {
        const a = ke;
        return (
          x(),
          M(
            a,
            { class: "flex flex-row px-3 py-2 items-center justify-between" },
            {
              default: p(() => [
                l("div", zn, [
                  l("div", Gn, [j(o.$slots, "image")]),
                  l("p", qn, H(t.title), 1),
                ]),
                t.noneLevel
                  ? ie("", !0)
                  : (x(),
                    k("div", Xn, [
                      (x(!0),
                      k(
                        z,
                        null,
                        ee(
                          y(s),
                          (e) => (
                            x(),
                            k("div", {
                              key: e,
                              class: "w-5 h-5 bg-blue-200 rounded-md",
                            })
                          )
                        ),
                        128
                      )),
                    ])),
              ]),
              _: 3,
            }
          )
        );
      };
    },
  }),
  Kn = { class: "flex flex-col gap-2" },
  Yn = { class: "text-base text-gray-400" },
  Zn = {
    class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 items-center",
  },
  Jn = E({
    __name: "Component",
    props: { title: { type: String, default: "" } },
    setup(t) {
      return (n, s) => (
        x(),
        k("div", Kn, [
          l("p", Yn, H(t.title), 1),
          l("div", Zn, [j(n.$slots, "default")]),
        ])
      );
    },
  }),
  es = A("/skills.png"),
  ts = A("/javascript.png"),
  ls = A("/typescript.png"),
  ns = A("/next.png"),
  ss = A("/nuxt.png"),
  os = A("/vue.png"),
  rs = A("/postgresql.png"),
  is = A("/figma.png"),
  as = A("/docker.png"),
  us = A("/jira.png"),
  ds = A("/gitlab.png"),
  fs = A("/github.png"),
  ps = A("/notion.png"),
  cs = {},
  ms = { class: "flex flex-col gap-6 pb-8" },
  gs = {
    class:
      "lg:col-span-2 flex flex-row flex-wrap lg:flex-nowrap items-center gap-2",
  };
function vs(t, n) {
  const s = Q,
    o = Qn,
    i = Jn,
    a = Re,
    e = pt;
  return (
    x(),
    M(
      e,
      { "section-id": "skills" },
      {
        default: p(() => [
          l("div", ms, [
            f(s, null, {
              icon: p(({ size: u }) => [
                l("img", { src: es, class: V([u]) }, null, 2),
              ]),
              default: p(() => [
                n[0] ||
                  (n[0] = l(
                    "p",
                    null,
                    [
                      r("Skills "),
                      l("span", { class: "text-xl lg:text-2xl" }, "&"),
                      r(" Tools"),
                    ],
                    -1
                  )),
              ]),
              _: 1,
            }),
            f(
              i,
              { title: "Langauge" },
              {
                default: p(() => [
                  f(
                    o,
                    { title: "javascript" },
                    {
                      image: p(
                        () => n[1] || (n[1] = [l("img", { src: ts }, null, -1)])
                      ),
                      _: 1,
                    }
                  ),
                  f(
                    o,
                    { title: "typescript" },
                    {
                      image: p(
                        () => n[2] || (n[2] = [l("img", { src: ls }, null, -1)])
                      ),
                      _: 1,
                    }
                  ),
                ]),
                _: 1,
              }
            ),
            f(
              i,
              { title: "Framework / Library" },
              {
                default: p(() => [
                  f(
                    o,
                    { title: "Next" },
                    {
                      image: p(
                        () => n[3] || (n[3] = [l("img", { src: ns }, null, -1)])
                      ),
                      _: 1,
                    }
                  ),
                  f(
                    o,
                    { title: "Nuxt" },
                    {
                      image: p(
                        () => n[4] || (n[4] = [l("img", { src: ss }, null, -1)])
                      ),
                      _: 1,
                    }
                  ),
                  f(
                    o,
                    { title: "Vue" },
                    {
                      image: p(
                        () => n[5] || (n[5] = [l("img", { src: os }, null, -1)])
                      ),
                      _: 1,
                    }
                  ),
                ]),
                _: 1,
              }
            ),
            f(
              i,
              { title: "Database" },
              {
                default: p(() => [
                  f(
                    o,
                    { title: "postgresql", level: "중급" },
                    {
                      image: p(
                        () => n[6] || (n[6] = [l("img", { src: rs }, null, -1)])
                      ),
                      _: 1,
                    }
                  ),
                ]),
                _: 1,
              }
            ),
            f(
              i,
              { title: "Tools" },
              {
                default: p(() => [
                  f(
                    o,
                    { title: "Figma", level: "중급" },
                    {
                      image: p(
                        () => n[7] || (n[7] = [l("img", { src: is }, null, -1)])
                      ),
                      _: 1,
                    }
                  ),
                  f(
                    o,
                    { title: "Docker", level: "중급" },
                    {
                      image: p(
                        () => n[8] || (n[8] = [l("img", { src: as }, null, -1)])
                      ),
                      _: 1,
                    }
                  ),
                  l("div", gs, [
                    f(
                      o,
                      { title: "jira", "none-level": !0 },
                      {
                        image: p(
                          () =>
                            n[9] || (n[9] = [l("img", { src: us }, null, -1)])
                        ),
                        _: 1,
                      }
                    ),
                    f(
                      o,
                      { title: "gitlab", "none-level": !0 },
                      {
                        image: p(
                          () =>
                            n[10] || (n[10] = [l("img", { src: ds }, null, -1)])
                        ),
                        _: 1,
                      }
                    ),
                    f(
                      o,
                      { title: "github", "none-level": !0 },
                      {
                        image: p(
                          () =>
                            n[11] || (n[11] = [l("img", { src: fs }, null, -1)])
                        ),
                        _: 1,
                      }
                    ),
                    f(
                      o,
                      { title: "notion", "none-level": !0 },
                      {
                        image: p(
                          () =>
                            n[12] || (n[12] = [l("img", { src: ps }, null, -1)])
                        ),
                        _: 1,
                      }
                    ),
                  ]),
                ]),
                _: 1,
              }
            ),
          ]),
          f(a),
        ]),
        _: 1,
      }
    )
  );
}
const bs = te(cs, [["render", vs]]),
  xs = A("/archive.png"),
  ys = { class: "flex flex-col" },
  ws = {
    class:
      "h-50 overflow-hidden border-b-1 border-gray-300 bg-white flex items-center justify-center",
  },
  $s = { key: 0, src: xs, class: "w-40" },
  Ss = { class: "h-50 flex flex-col justify-between p-4" },
  _s = { class: "h-full flex flex-col gap-2" },
  Ps = { class: "text-xl font-semibold" },
  ks = { class: "leading-6 text-[0.9rem]" },
  Es = { key: 0, class: "flex flex-row gap-2" },
  Ts = E({
    __name: "Card",
    props: {
      tags: { type: Array, default: [] },
      noImage: { type: Boolean, default: !1 },
    },
    setup(t) {
      return (n, s) => {
        const o = me,
          i = ke;
        return (
          x(),
          M(
            i,
            {
              class:
                "h-100 overflow-hidden cursor-pointer hover:bg-zinc-200 duration-300 transition-colors",
            },
            {
              default: p(() => [
                l("div", ys, [
                  l("div", ws, [
                    j(n.$slots, "image"),
                    t.noImage ? (x(), k("img", $s)) : ie("", !0),
                  ]),
                  l("div", Ss, [
                    l("div", _s, [
                      l("p", Ps, [j(n.$slots, "title")]),
                      l("p", ks, [j(n.$slots, "desc")]),
                    ]),
                    t.tags.length > 0
                      ? (x(),
                        k("div", Es, [
                          (x(!0),
                          k(
                            z,
                            null,
                            ee(
                              t.tags,
                              (a, e) => (
                                x(),
                                M(o, { key: e, text: `# ${a}` }, null, 8, [
                                  "text",
                                ])
                              )
                            ),
                            128
                          )),
                        ]))
                      : ie("", !0),
                  ]),
                ]),
              ]),
              _: 3,
            }
          )
        );
      };
    },
  }),
  js = { class: "flex flex-col gap-4 mt-6" },
  As = { class: "flex flex-row" },
  Cs = { key: 0, class: "flex flex-row gap-2" },
  Is = { class: "flex flex-row" },
  Ls = { class: "flex flex-row" },
  Ms = { class: "flex flex-row items-center" },
  je = E({
    __name: "Summary",
    props: { tags: { type: Array, default: [] } },
    setup(t) {
      return (n, s) => {
        const o = me,
          i = Re;
        return (
          x(),
          k("div", js, [
            l("div", As, [
              s[0] ||
                (s[0] = l(
                  "p",
                  { class: "text-gray-600 min-w-40 w-1/4" },
                  "Skills and Tools",
                  -1
                )),
              t.tags.length > 0
                ? (x(),
                  k("div", Cs, [
                    (x(!0),
                    k(
                      z,
                      null,
                      ee(
                        t.tags,
                        (a, e) => (
                          x(), M(o, { key: e, text: `${a}` }, null, 8, ["text"])
                        )
                      ),
                      128
                    )),
                  ]))
                : ie("", !0),
            ]),
            l("div", Is, [
              s[1] ||
                (s[1] = l(
                  "p",
                  { class: "text-gray-600 min-w-40 w-1/4" },
                  "작업 기간",
                  -1
                )),
              j(n.$slots, "period"),
            ]),
            l("div", Ls, [
              s[2] ||
                (s[2] = l(
                  "p",
                  { class: "text-gray-600 min-w-40 w-1/4" },
                  "팀 구성",
                  -1
                )),
              j(n.$slots, "team"),
            ]),
            l("div", Ms, [
              s[3] ||
                (s[3] = l(
                  "p",
                  { class: "text-gray-600 min-w-40 w-1/4" },
                  "담당 파트",
                  -1
                )),
              j(n.$slots, "part"),
            ]),
            f(i),
          ])
        );
      };
    },
  }),
  Fs = {},
  Os = { class: "pl-5" },
  Ds = { class: "list-disc leading-7 space-y-3" };
function Ns(t, n) {
  const s = Q,
    o = ae;
  return (
    x(),
    M(o, null, {
      default: p(() => [
        f(
          s,
          { size: "sm", class: "pb-0" },
          {
            default: p(
              () => n[0] || (n[0] = [l("p", null, "📘 프로젝트 개요", -1)])
            ),
            _: 1,
          }
        ),
        l("div", Os, [l("ul", Ds, [j(t.$slots, "default")])]),
      ]),
      _: 3,
    })
  );
}
const Ae = te(Fs, [["render", Ns]]),
  Bs = {},
  Rs = { class: "pl-5" },
  Us = { class: "list-disc leading-7 space-y-3" };
function Hs(t, n) {
  const s = Q,
    o = ae;
  return (
    x(),
    M(o, null, {
      default: p(() => [
        f(
          s,
          { size: "sm", class: "pb-0" },
          {
            default: p(
              () => n[0] || (n[0] = [l("p", null, "📌 구현 기능", -1)])
            ),
            _: 1,
          }
        ),
        l("div", Rs, [l("ul", Us, [j(t.$slots, "default")])]),
      ]),
      _: 3,
    })
  );
}
const he = te(Bs, [["render", Hs]]),
  hs = { class: "w-full flex flex-col gap-2 items-center cursor-pointer" },
  Vs = ["src", "alt"],
  Ws = { class: "text-sm text-gray-600" },
  Ve = E({
    __name: "Image",
    props: {
      title: { type: String, default: "" },
      src: { type: String, default: "" },
    },
    setup(t) {
      return (n, s) => {
        const o = ke;
        return (
          x(),
          k("div", hs, [
            f(
              o,
              { class: "overflow-hidden" },
              {
                default: p(() => [
                  l(
                    "img",
                    {
                      src: t.src,
                      alt: t.title,
                      class: "h-[150px] object-cover w-[270px]",
                    },
                    null,
                    8,
                    Vs
                  ),
                ]),
                _: 1,
              }
            ),
            l("span", Ws, H(t.title), 1),
          ])
        );
      };
    },
  }),
  zs = {},
  Gs = { class: "grid md:grdi-cols-2 lg:grid-cols-3 gap-2" };
function qs(t, n) {
  const s = Q,
    o = ae;
  return (
    x(),
    M(o, null, {
      default: p(() => [
        f(
          s,
          { size: "sm", class: "pb-0" },
          {
            default: p(
              () =>
                n[0] ||
                (n[0] = [
                  l("p", null, "🖼️ 이미지", -1),
                  l(
                    "span",
                    { class: "text-base text-gray-600 font-normal" },
                    "클릭하면 큰 이미지로 열람할 수 있습니다.",
                    -1
                  ),
                ])
            ),
            _: 1,
          }
        ),
        l("div", Gs, [j(t.$slots, "default")]),
      ]),
      _: 3,
    })
  );
}
const We = te(zs, [["render", qs]]),
  Xs = { class: "fixed inset-0 overflow-y-auto" },
  Qs = {
    class: "flex min-h-full items-center justify-center p-4 align-middle",
  },
  Ks = { class: "absolute top-2 right-2" },
  Ys = { class: "flex-1 overflow-y-auto" },
  ze = E({
    __name: "Detail",
    props: {
      isOpen: { type: Boolean, default: !1 },
      closeBtnDisplay: { type: Boolean, default: !0 },
    },
    setup(t) {
      return (n, s) => (
        x(),
        M(
          y(He),
          { appear: "", show: t.isOpen, as: "template" },
          {
            default: p(() => [
              f(
                y(ut),
                {
                  as: "div",
                  class: "relative z-80",
                  onClose: s[1] || (s[1] = (o) => n.$emit("closeGallery")),
                },
                {
                  default: p(() => [
                    f(
                      y(ce),
                      {
                        as: "template",
                        enter: "duration-300 ease-out",
                        "enter-from": "opacity-0",
                        "enter-to": "opacity-100",
                        leave: "duration-200 ease-in",
                        "leave-from": "opacity-100",
                        "leave-to": "opacity-0",
                      },
                      {
                        default: p(
                          () =>
                            s[2] ||
                            (s[2] = [
                              l(
                                "div",
                                {
                                  class: "fixed inset-0 bg-black bg-opacity-40",
                                },
                                null,
                                -1
                              ),
                            ])
                        ),
                        _: 1,
                      }
                    ),
                    l("div", Xs, [
                      l("div", Qs, [
                        f(
                          y(ce),
                          {
                            as: "template",
                            enter: "duration-300 ease-out",
                            "enter-from": "opacity-0 scale-95",
                            "enter-to": "opacity-100 scale-100",
                            leave: "duration-200 ease-in",
                            "leave-from": "opacity-100 scale-100",
                            "leave-to": "opacity-0 scale-95",
                          },
                          {
                            default: p(() => [
                              f(
                                y(ht),
                                {
                                  class:
                                    "relative w-full max-w-3xl max-h-screen rounded-xl bg-white align-middle shadow-xl transition-all flex flex-col overflow-y-auto",
                                },
                                {
                                  default: p(() => [
                                    l("div", Ks, [
                                      l(
                                        "div",
                                        {
                                          class: "text-gray-600 cursor-pointer",
                                          onClick:
                                            s[0] ||
                                            (s[0] = (o) =>
                                              n.$emit("closeGallery")),
                                        },
                                        s[3] ||
                                          (s[3] = [
                                            l(
                                              "svg",
                                              {
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                width: "36",
                                                height: "36",
                                                viewBox: "0 0 36 36",
                                              },
                                              [
                                                l("path", {
                                                  fill: "currentColor",
                                                  d: "M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m8 22.1a1.4 1.4 0 0 1-2 2l-6-6l-6 6.02a1.4 1.4 0 1 1-2-2l6-6.04l-6.17-6.22a1.4 1.4 0 1 1 2-2L18 16.1l6.17-6.17a1.4 1.4 0 1 1 2 2L20 18.08Z",
                                                  class:
                                                    "clr-i-solid clr-i-solid-path-1",
                                                }),
                                                l("path", {
                                                  fill: "none",
                                                  d: "M0 0h36v36H0z",
                                                }),
                                              ],
                                              -1
                                            ),
                                          ])
                                      ),
                                    ]),
                                    l("div", Ys, [j(n.$slots, "default")]),
                                  ]),
                                  _: 3,
                                }
                              ),
                            ]),
                            _: 3,
                          }
                        ),
                      ]),
                    ]),
                  ]),
                  _: 3,
                }
              ),
            ]),
            _: 3,
          },
          8,
          ["show"]
        )
      );
    },
  }),
  Zs = A("/f-baas-figma.png"),
  Js = { class: "flex flex-col" },
  eo = { class: "text-base leading-7" },
  to = { class: "text-base leading-7" },
  lo = { class: "leading-7 text-base" },
  no = { class: "text-base leading-7" },
  so = ["src"],
  oo = E({
    __name: "Baas",
    setup(t) {
      const n = P(""),
        s = _(() => !!n.value);
      function o() {
        n.value = "";
      }
      const i = [
        { title: "메인 랜딩 페이지", src: "/portfolio/baas-index.png" },
        { title: "플랫폼 가이드", src: "/portfolio/baas-guide.png" },
        { title: "네트워크 대시보드", src: "/portfolio/baas-network.png" },
        { title: "NFT 발행 페이지", src: "/portfolio/baas-nft.png" },
        { title: "토큰 생성 페이지", src: "/portfolio/baas-token.png" },
        { title: "Block Explorer", src: "/portfolio/baas-explorer.png" },
      ];
      return (a, e) => {
        const u = je,
          d = Q,
          c = ae,
          m = Ae,
          g = me,
          v = he,
          w = Ve,
          b = We,
          S = ze;
        return (
          x(),
          k("div", Js, [
            f(
              u,
              { tags: ["next.js", "docker"] },
              {
                period: p(() => e[2] || (e[2] = [r(" 2025.01~ 2025.10")])),
                team: p(
                  () =>
                    e[3] || (e[3] = [r("프론트 개발 1명(본인) · 백엔드 1명")])
                ),
                part: p(
                  () =>
                    e[4] ||
                    (e[4] = [
                      l(
                        "div",
                        { class: "flex flex-col gap-2" },
                        [
                          l("p", { class: "flex flex-row gap-1" }, [
                            r(" UI/UX 디자인 및 프론트엔드 개발 "),
                            l(
                              "span",
                              { class: "text-gray-500 lg:text-base text-sm" },
                              "(100%)"
                            ),
                          ]),
                          l("p", { class: "flex flex-row gap-1" }, [
                            r(
                              "솔리디티 컴파일러, Slither/Mythril 기반 컨트랙트 정적 분석 도구 서버 개발 "
                            ),
                            l(
                              "span",
                              { class: "text-gray-500 lg:text-base text-sm" },
                              "(100%)"
                            ),
                          ]),
                        ],
                        -1
                      ),
                    ])
                ),
                _: 1,
              }
            ),
            f(c, null, {
              default: p(() => [
                f(
                  d,
                  { size: "sm", class: "pb-0" },
                  {
                    default: p(() => e[5] || (e[5] = [r("🔗 관련 링크")])),
                    _: 1,
                  }
                ),
                l(
                  "p",
                  {
                    class:
                      "flex flex-col gap-2 flex-wrap cursor-pointer border border-gray-300 p-2 rounded-lg",
                    onClick:
                      e[0] ||
                      (e[0] = ($) =>
                        y(re)("https://fbaas-dev.fingerservice.co.kr")),
                  },
                  e[6] ||
                    (e[6] = [
                      l(
                        "span",
                        { class: "font-medium" },
                        "F-BaaS 플랫폼 바로가기",
                        -1
                      ),
                      l(
                        "span",
                        { class: "text-blue-500 text-base" },
                        "테스트 아이디: park-finger@yopmail.com / 비밀번호: 1234",
                        -1
                      ),
                      l(
                        "span",
                        { class: "text-sm text-blue-500" },
                        "https://fsto-dev.fingerservice.co.kr:33000",
                        -1
                      ),
                    ])
                ),
                l(
                  "p",
                  {
                    class:
                      "flex flex-col gap-2 flex-wrap cursor-pointer border border-gray-300 p-2 rounded-lg",
                    onClick:
                      e[1] ||
                      (e[1] = ($) =>
                        y(re)("https://fbaas-dev.fingerservice.co.kr/guide")),
                  },
                  e[7] ||
                    (e[7] = [
                      l(
                        "span",
                        { class: "font-medium" },
                        "문서(가이드) 페이지",
                        -1
                      ),
                      l(
                        "span",
                        { class: "text-sm text-blue-500" },
                        "https://fsto-dev.fingerservice.co.kr:33000/guide",
                        -1
                      ),
                    ])
                ),
              ]),
              _: 1,
            }),
            f(m, null, {
              default: p(
                () =>
                  e[8] ||
                  (e[8] = [
                    l(
                      "p",
                      { class: "font-semibold mb-2" },
                      [
                        r(" 본 프로젝트는 "),
                        l(
                          "span",
                          { class: "font-semibold" },
                          "블록체인 네트워크 생성 → 컨트랙트 등록 및 배포 → 토큰(ERC20)/NFT/SBT 컨트랙트 배포 및 발행 → NFT/SBT 아이템 생성 → 블록 탐색(Explorer)"
                        ),
                        r(
                          " 까지 Web3 기반 서비스 운영에 필요한 전체 기능을 하나의 "
                        ),
                        l(
                          "span",
                          { class: "font-semibold" },
                          "SaaS 플랫폼으로 제공하는 F-BaaS 통합 관리 플랫폼입니다."
                        ),
                        r(
                          " Web3 서비스는 일반 사용자가 이해하기 어려운 복잡한 절차가 많기 때문에, 이를 "
                        ),
                        l(
                          "span",
                          { class: "font-semibold" },
                          "GUI 기반의 직관적인 흐름으로 재구성"
                        ),
                        r(
                          "하여 개발자뿐 아니라 기획자·운영자도 쉽게 사용할 수 있도록 설계했습니다. 또한 Next.js 기반으로 구축하여 "
                        ),
                        l(
                          "span",
                          { class: "font-semibold" },
                          "유지보수성·생태계 확장성·성능"
                        ),
                        r("을 고려한 최신 구조를 도입했습니다. "),
                      ],
                      -1
                    ),
                  ])
              ),
              _: 1,
            }),
            f(v, null, {
              default: p(() => [
                e[50] ||
                  (e[50] = l(
                    "li",
                    null,
                    [
                      l(
                        "p",
                        { class: "font-medium mb-1" },
                        "기획 및 UX 설계 전담"
                      ),
                      l("p", { class: "leading-7 text-base" }, [
                        r(
                          " 전체 업무 흐름을 사용자 관점에서 재해석하여 네트워크 생성 → 외부 컨트랙트 등록 → 컨트랙트 배포 → NFT/SBT 발행까지 단계들이 자연스럽게 이어지도록 Figma로 "
                        ),
                        l(
                          "span",
                          { class: "font-semibold" },
                          "기획·디자인을 직접 설계했습니다."
                        ),
                      ]),
                      l("img", { src: Zs, alt: "baas_figma" }),
                    ],
                    -1
                  )),
                e[51] ||
                  (e[51] = l(
                    "li",
                    null,
                    [
                      l(
                        "p",
                        { class: "mb-1 font-medium" },
                        " Next 서버를 API Reverse Proxy로 활용하여 백엔드 API 완전 비공개 처리 "
                      ),
                      l("div", { class: "text-base" }, [
                        r(
                          " 모든 API 요청은 클라이언트 → Next 서버(WAS) → Backend(API 서버) 구조로 구성하여 백엔드 API 주소와 내부 네트워크 구조를 외부에 노출하지 않도록 설계했습니다. "
                        ),
                        l("br"),
                        r(
                          "이를 통해 외부 접근 차단, API 서버 보호, 로깅/모니터링 체계 강화 등 "
                        ),
                        l(
                          "span",
                          { class: "font-semibold" },
                          "보안성과 유지보수성을 극대화"
                        ),
                        r("하였습니다. "),
                      ]),
                    ],
                    -1
                  )),
                e[52] ||
                  (e[52] = l(
                    "li",
                    null,
                    [
                      l(
                        "p",
                        { class: "mb-1 font-medium" },
                        " HttpOnly 쿠키 기반 인증을 위한 SSR 인증 프록시 구조 구현 "
                      ),
                      l("div", { class: "text-base leading-7" }, [
                        r(" 클라이언트에서 토큰을 직접 다루지 않고, "),
                        l(
                          "span",
                          { class: "font-semibold" },
                          "서버 단(SSR)에서 HttpOnly 쿠키를 읽어"
                        ),
                        r(
                          " accessToken/refreshToken을 자동 관리하는 구조를 설계했습니다. "
                        ),
                        l("br"),
                        r(
                          "이를 통해 XSS 공격을 원천 차단하고, API 서버와의 통신을 "
                        ),
                        l(
                          "span",
                          { class: "font-semibold" },
                          "보안적으로 통제된 환경"
                        ),
                        r("에서 수행하도록 개선했습니다. "),
                        l("br"),
                        r(
                          "또한 accessToken 만료 시 SSR에서 refreshToken으로 재발급까지 자동 처리하여 사용자에게 "
                        ),
                        l(
                          "span",
                          { class: "font-semibold" },
                          "끊김 없는 인증 경험"
                        ),
                        r("을 제공했습니다. "),
                      ]),
                    ],
                    -1
                  )),
                l("li", null, [
                  e[15] ||
                    (e[15] = l(
                      "p",
                      { class: "mb-1 font-medium" },
                      " 대용량 파일 업로드 안정화를 위한 스트리밍 기반 Proxy 처리 ",
                      -1
                    )),
                  l("div", eo, [
                    e[9] ||
                      (e[9] = r(
                        " 파일 업로드 API는 Node.js 18+ 환경의 fetch 스트리밍 옵션인 "
                      )),
                    f(g, { text: "duplex: 'half'", "is-skill": "" }),
                    e[10] || (e[10] = r(" 를 활용해 ")),
                    e[11] ||
                      (e[11] = l(
                        "span",
                        { class: "font-semibold" },
                        "대용량 파일도 안정적으로 업로드",
                        -1
                      )),
                    e[12] || (e[12] = r("할 수 있도록 구현했습니다. ")),
                    e[13] || (e[13] = l("br", null, null, -1)),
                    e[14] ||
                      (e[14] = r(
                        " Proxy 서버가 파일을 직접 메모리에 적재하지 않고 스트림 형태로 백엔드에 전달하여 메모리 점유율을 줄이고 중단 없는 업로드 경험을 제공했습니다. "
                      )),
                  ]),
                ]),
                l("li", null, [
                  e[25] ||
                    (e[25] = l(
                      "p",
                      { class: "mb-1 font-medium" },
                      " useMemo 기반 연산 메모이징으로 필터 UI 렌더링 성능 최적화 ",
                      -1
                    )),
                  e[26] || (e[26] = l("img", { src: "" }, null, -1)),
                  l("div", to, [
                    e[16] ||
                      (e[16] = r(
                        " 검색 조건이 많아질 때 필터 태그 UI가 매번 전체 재계산되는 문제를 해결하기 위해 React의 "
                      )),
                    f(g, { text: "useMemo", "is-skill": "" }),
                    e[17] ||
                      (e[17] = r(
                        " 훅을 활용하여 필터 라벨·값 매핑 로직을 메모이징하고, 의존 값이 변할 때만 재계산하도록 구조를 설계했습니다. 그 결과, "
                      )),
                    e[18] ||
                      (e[18] = l(
                        "span",
                        { class: "font-semibold" },
                        "불필요한 렌더 반복을 최소화",
                        -1
                      )),
                    e[19] || (e[19] = r("했습니다. ")),
                    e[20] || (e[20] = l("br", null, null, -1)),
                    e[21] || (e[21] = r(" 또한 ")),
                    f(g, { text: "useCallback" }),
                    e[22] ||
                      (e[22] = r(
                        "과 조합하여 동일 데이터에 대해 컴포넌트가 재렌더링되지 않도록 구조를 개선함으로써 "
                      )),
                    e[23] ||
                      (e[23] = l(
                        "span",
                        { class: "font-semibold" },
                        "검색 옵션이 많아져도 UI가 부드럽고 안정적으로 동작하는 환경",
                        -1
                      )),
                    e[24] || (e[24] = r("을 구현했습니다. ")),
                  ]),
                ]),
                l("li", null, [
                  e[38] ||
                    (e[38] = l(
                      "p",
                      { class: "font-medium mb-1" },
                      "Zustand 기반 전역 상태 관리로 화면 간 일관성 향상",
                      -1
                    )),
                  l("div", lo, [
                    e[27] ||
                      (e[27] = r(
                        " 화면 이동이 많고 여러 기능이 유기적으로 연결되는 BaaS 플랫폼 특성상, 네트워크 목록, 사용자 정보, UI 열림/닫힘 상태와 같이 여러 페이지에서 반복적으로 사용되는 공통 상태가 존재했습니다. "
                      )),
                    e[28] || (e[28] = l("br", null, null, -1)),
                    e[29] || (e[29] = l("br", null, null, -1)),
                    e[30] ||
                      (e[30] = r(" 이러한 상태를 효율적으로 관리하기 위해 ")),
                    f(g, { text: "Zustand", "is-skill": "" }),
                    e[31] || (e[31] = r("를 도입하여 ")),
                    e[32] ||
                      (e[32] = l(
                        "span",
                        { class: "font-semibold" },
                        "networkStore / userInfoStore / uiStore",
                        -1
                      )),
                    e[33] ||
                      (e[33] = r("로 기능 단위의 전역 상태를 분리했습니다. ")),
                    e[34] ||
                      (e[34] = l(
                        "ul",
                        { class: "list-disc pl-5 mt-1 text-gray-700" },
                        [
                          l("li", null, [
                            l("span", { class: "font-medium" }, "networkStore"),
                            r(
                              ": 네트워크 목록 persist, 타입 카운트, 선택된 네트워크, endpoint 등 관리"
                            ),
                          ]),
                          l("li", null, [
                            l(
                              "span",
                              { class: "font-medium" },
                              "userInfoStore"
                            ),
                            r(
                              ": 로그인 사용자 정보를 persist로 저장하고 전역에서 일관되게 공유"
                            ),
                          ]),
                          l("li", null, [
                            l("span", { class: "font-medium" }, "uiStore"),
                            r(
                              ": 사이드바 열림/닫힘 등 UI 상태를 단일 소스로 관리"
                            ),
                          ]),
                        ],
                        -1
                      )),
                    e[35] ||
                      (e[35] = r(
                        " 이 구조를 통해 페이지 전환 시에도 상태가 초기화되지 않고 유지되며, 여러 화면에서 동일한 상태를 참조할 때 발생할 수 있는 불일치를 방지했습니다. 또한 불필요한 "
                      )),
                    e[36] ||
                      (e[36] = l(
                        "span",
                        { class: "font-semibold" },
                        "prop drilling",
                        -1
                      )),
                    e[37] ||
                      (e[37] = r(
                        " 없이 컴포넌트가 필요한 값만 직접 조회할 수 있어 개발 편의성과 유지보수성이 크게 향상되었습니다. "
                      )),
                  ]),
                ]),
                l("li", null, [
                  e[49] ||
                    (e[49] = l(
                      "p",
                      { class: "mb-1 font-medium" },
                      " MDX 기반 문서 플랫폼 구축 및 정적 페이지 자동 생성 시스템 개발 ",
                      -1
                    )),
                  l("div", no, [
                    e[39] || (e[39] = r(" Next.js의 SSG 기능( ")),
                    f(g, { text: "getStaticProps" }),
                    e[40] || (e[40] = r(", ")),
                    f(g, { text: "getStaticPaths" }),
                    e[41] || (e[41] = r(")과 ")),
                    f(g, { text: "MDX", "is-skill": "" }),
                    e[42] ||
                      (e[42] = r(
                        "를 조합하여 외부 CMS 없이도 문서를 자동 생성·배포할 수 있는 "
                      )),
                    e[43] ||
                      (e[43] = l(
                        "span",
                        { class: "font-semibold" },
                        "독립적인 문서 플랫폼",
                        -1
                      )),
                    e[44] || (e[44] = r("을 구축했습니다. ")),
                    e[45] || (e[45] = l("br", null, null, -1)),
                    e[46] ||
                      (e[46] = r(
                        " Markdown 파일을 파일시스템에서 읽어 frontMatter를 파싱하고, 메뉴·라우팅·본문 렌더링을 자동화하여 문서 추가만으로 즉시 페이지가 생성되는 "
                      )),
                    e[47] ||
                      (e[47] = l(
                        "span",
                        { class: "font-semibold" },
                        "확장성과 유지보수성이 높은 구조",
                        -1
                      )),
                    e[48] || (e[48] = r("를 완성했습니다. ")),
                  ]),
                ]),
              ]),
              _: 1,
            }),
            f(b, null, {
              default: p(() => [
                (x(),
                k(
                  z,
                  null,
                  ee(i, ($, C) =>
                    f(
                      w,
                      {
                        key: C,
                        title: $.title,
                        src: $.src,
                        onClick: () => (n.value = $.src),
                      },
                      null,
                      8,
                      ["title", "src", "onClick"]
                    )
                  ),
                  64
                )),
              ]),
              _: 1,
            }),
            f(
              S,
              { "is-open": y(s), onCloseGallery: o },
              {
                default: p(() => [l("img", { src: y(n) }, null, 8, so)]),
                _: 1,
              },
              8,
              ["is-open"]
            ),
          ])
        );
      };
    },
  }),
  ro = A("/sequence.png"),
  io = { class: "flex flex-col" },
  ao = { class: "list-circle pl-5" },
  uo = { class: "list-circle pl-5" },
  fo = { class: "bg-zinc-200 px-3 py-2 rounded-lg text-base leading-7" },
  po = { class: "pl-5 mt-1" },
  co = { class: "font-semibold" },
  mo = { class: "font-semibold" },
  go = { class: "list-circle pl-5 text-base" },
  vo = { class: "mt-2" },
  bo = ["src"],
  xo = E({
    __name: "Fdid",
    setup(t) {
      const n = P(""),
        s = _(() => !!n.value);
      function o() {
        n.value = "";
      }
      const i = [
        { title: "회원가입 화면", src: "/portfolio/fdid2.png" },
        { title: "VC 발급 화면", src: "/portfolio/fdid3.png" },
        { title: "VP 생성 화면", src: "/portfolio/fdid4.png" },
        {
          title: "관리자 페이지-VC 관리 화면",
          src: "/portfolio/fdid-admin-vc.png",
        },
        {
          title: "관리자 페이지-VC 등록 화면",
          src: "/portfolio/fdid-admin-vc_register.png",
        },
        {
          title: "블록체인 대시보드-VP 관리 화면",
          src: "/portfolio/fdid-admin-vp.png",
        },
      ];
      return (a, e) => {
        const u = je,
          d = me,
          c = Ae,
          m = he,
          g = Ve,
          v = We,
          w = ze;
        return (
          x(),
          k("div", io, [
            f(
              u,
              { tags: ["nuxt.js", "pwa", "docker"] },
              {
                period: p(() => e[1] || (e[1] = [r(" 2024.02 ~ 2024.09 ")])),
                team: p(
                  () =>
                    e[2] ||
                    (e[2] = [r(" 프론트 개발자 1명(본인), 백엔드 개발자 2명 ")])
                ),
                part: p(
                  () =>
                    e[3] ||
                    (e[3] = [
                      r(" UI/UX 디자인 및 프론트엔드 개발"),
                      l(
                        "span",
                        { class: "text-gray-500 lg:text-base text-sm" },
                        "(100%)",
                        -1
                      ),
                      r(", did library 개발 백업 업무 "),
                    ])
                ),
                _: 1,
              }
            ),
            f(c, null, {
              default: p(() => [
                e[15] ||
                  (e[15] = l(
                    "p",
                    { class: "font-semibold leading-7 mb-3" },
                    [
                      r(
                        " 본 프로젝트는 PWA 기반으로 개발되어 모바일 환경에서도 빠르고 안정적으로 동작할 수 있도록 화면 설계 · UX 플로우 · 캐싱 전략까지 "
                      ),
                      l(
                        "span",
                        { class: "font-semibold text-blue-600" },
                        "모바일 중심으로 최적화한 서비스"
                      ),
                      r(
                        "입니다. 기획 → UX 설계 → UI 디자인 → 프론트엔드 개발까지 엔드투엔드로 직접 참여한 프로젝트입니다. "
                      ),
                    ],
                    -1
                  )),
                l("li", null, [
                  e[6] || (e[6] = r(" DID")),
                  e[7] ||
                    (e[7] = l(
                      "span",
                      { class: "text-gray-500" },
                      "(분산신원확인)",
                      -1
                    )),
                  e[8] || (e[8] = r(" 및 VC")),
                  e[9] ||
                    (e[9] = l(
                      "span",
                      { class: "text-gray-500" },
                      "(검증 가능한 자격 증명)",
                      -1
                    )),
                  e[10] || (e[10] = r("의 발급 · 저장 · 조회 기능 제공 ")),
                  l("ul", ao, [
                    l("li", null, [
                      f(d, { "is-skill": !0, text: "crypto.js" }),
                      e[4] ||
                        (e[4] = r(
                          " 기반 AES 암호화를 적용한 안전한 데이터 저장 "
                        )),
                    ]),
                    e[5] ||
                      (e[5] = l(
                        "li",
                        null,
                        "IndexDB + Dexie.js를 활용한 복잡한 JSON 데이터 구조 저장",
                        -1
                      )),
                  ]),
                ]),
                l("li", null, [
                  e[12] || (e[12] = r(" 보유 VC로 VP")),
                  e[13] ||
                    (e[13] = l(
                      "span",
                      { class: "text-gray-500" },
                      "(검증 가능한 프레젠테이션)",
                      -1
                    )),
                  e[14] || (e[14] = r(" 생성 및 인증 기관 검증 요청 ")),
                  l("ul", uo, [
                    l("li", null, [
                      f(d, { "is-skill": !0, text: "vue-qrcode" }),
                      e[11] ||
                        (e[11] = r(
                          " 활용 VP 데이터를 QR Code로 생성 및 리딩하여 안전한 데이터 전달 지원 "
                        )),
                    ]),
                  ]),
                ]),
              ]),
              _: 1,
            }),
            f(m, null, {
              default: p(() => [
                l("li", null, [
                  e[26] ||
                    (e[26] = l(
                      "p",
                      { class: "font-semibold" },
                      "IndexDB 및 Dexie.js 기반의 로컬 데이터베이스 설계",
                      -1
                    )),
                  l("div", fo, [
                    e[22] ||
                      (e[22] = l(
                        "p",
                        { class: "mb-4 font-semibold" },
                        "💡 왜 로컬스토리지/세션스토리지 대신 IndexDB를 사용했는가?",
                        -1
                      )),
                    e[23] ||
                      (e[23] = l(
                        "p",
                        { class: "font-semibold ml-2" },
                        "1. 복잡한 구조의 DID·VC 데이터 보관을 위한 스키마 기반 저장소 필요",
                        -1
                      )),
                    l("div", po, [
                      e[16] ||
                        (e[16] = r(
                          " DID와 VC는 여러 단계로 중첩된 JSON 형태로, 이 데이터를 문자열 기반의 localStorage/sessionStorage로 저장하는 것은 구조적·보안적 한계가 있다고 판단했습니다. "
                        )),
                      e[17] || (e[17] = l("br", null, null, -1)),
                      e[18] ||
                        (e[18] = r(" IndexDB는 객체 저장소를 기반으로 하는 ")),
                      e[19] ||
                        (e[19] = l(
                          "span",
                          { class: "font-semibold" },
                          "브라우저 내장 NoSQL DB",
                          -1
                        )),
                      e[20] ||
                        (e[20] = r(
                          "로, 구조화된 데이터를 안정적으로 저장하고 조회할 수 있는 장점이 있습니다. 다만 IndexDB의 복잡한 트랜잭션 API 대신 "
                        )),
                      f(d, { "is-skill": !0, text: "Dexie.js" }),
                      e[21] ||
                        (e[21] = r(
                          "를 사용해 데이터 저장·조회 흐름을 더 직관적인 구조로 재구성했습니다. "
                        )),
                    ]),
                    e[24] ||
                      (e[24] = l(
                        "p",
                        { class: "font-semibold mt-4 ml-2" },
                        "2. 대량 데이터 처리 가능 (GB 단위)",
                        -1
                      )),
                    e[25] ||
                      (e[25] = l(
                        "div",
                        { class: "pl-5 mt-1" },
                        " 실제 테스트 과정에서 VC 발급 시 복잡한 메타데이터가 누적되면서 로컬스토리지의 용량 한계를 금방 초과하게 되었습니다. IndexDB를 활용함으로써 용량 제약 없이 데이터를 관리할 수 있었고, 검색·조회 속도 또한 안정적으로 유지할 수 있었습니다. ",
                        -1
                      )),
                    l(
                      "p",
                      {
                        class:
                          "mt-2 ml-4 text-blue-500 cursor-pointer hover:text-blue-600 duration-300",
                        onClick:
                          e[0] ||
                          (e[0] = (b) =>
                            y(re)("https://jinnnkcoding.tistory.com/239")),
                      },
                      " 관련 블로그 포스팅 보기 "
                    ),
                  ]),
                ]),
                l("li", null, [
                  l("p", co, [
                    f(d, { "is-skill": !0, text: "cypto.js" }),
                    e[27] ||
                      (e[27] = r(
                        " 라이브러리를 사용하여 사용자가 입력한 핀번호로 DID 및 VC 데이터를 암호화 "
                      )),
                  ]),
                  e[28] ||
                    (e[28] = l(
                      "div",
                      { class: "pl-5 mt-2 text-base" },
                      [
                        r(
                          " 사용자가 입력한 핀번호로 DID 및 VC 데이터를 AES(대칭키 암호화) 방식으로 암호화했습니다."
                        ),
                        l("br"),
                        r(
                          " 브라우저에 저장된 데이터를 조회할 때 핀번호 입력을 요구하며, 핀번호가 일치하지 않으면 데이터 조회가 불가능하도록 설계했습니다. 아래는 사용자가 DID 정보를 저장하고 요청하는 시퀀스입니다. "
                        ),
                      ],
                      -1
                    )),
                ]),
                e[35] || (e[35] = l("img", { src: ro }, null, -1)),
                l("li", null, [
                  l("p", mo, [
                    f(d, { "is-skill": !0, text: "vue-qrcode" }),
                    e[29] ||
                      (e[29] = r(" 라이브러리를 활용한 VP 데이터 처리 ")),
                  ]),
                  l("ul", go, [
                    l("li", vo, [
                      e[33] ||
                        (e[33] = l(
                          "p",
                          { class: "font-semibold mb-1" },
                          "VP 데이터의 QR Code 생성 및 검증",
                          -1
                        )),
                      l("span", null, [
                        f(d, { "is-skill": !0, text: "vue-qrcode" }),
                        e[30] ||
                          (e[30] = r(
                            " 라이브러리를 활용하여 VP의 JSON 데이터를 QR Code로 생성했습니다."
                          )),
                        e[31] || (e[31] = l("br", null, null, -1)),
                        e[32] ||
                          (e[32] = r(
                            " 사용자는 생성된 QR Code를 통해 VP 데이터를 다른 시스템으로 전달할 수 있습니다. "
                          )),
                      ]),
                    ]),
                    e[34] ||
                      (e[34] = l(
                        "li",
                        { class: "mt-2" },
                        [
                          l(
                            "p",
                            { class: "font-semibold mb-1" },
                            "QR Reader와 데이터 검증"
                          ),
                          l(
                            "span",
                            { class: "text-base" },
                            "QR Reader를 통해 전달받은 VP 데이터를 디코딩한 후, 인증서버에 전송하여 데이터 무결성을 검증하는 기능을 구현했습니다. 이를 통해 VP 데이터가 손상되거나 위변조되지 않았음을 확인할 수 있도록 했습니다."
                          ),
                        ],
                        -1
                      )),
                  ]),
                ]),
                e[36] ||
                  (e[36] = l(
                    "li",
                    null,
                    [
                      l(
                        "p",
                        { class: "font-semibold" },
                        "PWA 기반으로 모바일 환경에서도 안정적으로 동작하도록 설계"
                      ),
                      l("div", { class: "pl-1 text-base leading-7" }, [
                        r(
                          " 모바일 신원증명 서비스 특성상 오프라인 환경에서도 정보를 조회해야 했기 때문에, "
                        ),
                        l(
                          "span",
                          { class: "font-semibold" },
                          "Service Worker 기반 캐싱"
                        ),
                        r(
                          "을 적용하여 네트워크가 없는 상태에서도 VC(검증 가능한 자격 증명)를 확인할 수 있도록 구현했습니다. "
                        ),
                        l("br"),
                        r(
                          " 또한 화면 구성과 상호작용 요소를 모바일 중심으로 설계해, 앱처럼 자연스럽게 사용할 수 있는 "
                        ),
                        l(
                          "span",
                          { class: "font-semibold" },
                          "모바일 최적화 UX"
                        ),
                        r("를 제공하였습니다. "),
                      ]),
                    ],
                    -1
                  )),
              ]),
              _: 1,
            }),
            f(v, null, {
              default: p(() => [
                (x(),
                k(
                  z,
                  null,
                  ee(i, (b, S) =>
                    f(
                      g,
                      {
                        key: S,
                        title: b.title,
                        src: b.src,
                        onClick: () => {
                          n.value = b.src;
                        },
                      },
                      null,
                      8,
                      ["title", "src", "onClick"]
                    )
                  ),
                  64
                )),
              ]),
              _: 1,
            }),
            f(
              w,
              { "is-open": y(s), onCloseGallery: o },
              {
                default: p(() => [l("img", { src: y(n) }, null, 8, bo)]),
                _: 1,
              },
              8,
              ["is-open"]
            ),
          ])
        );
      };
    },
  }),
  yo = A("/syntax highlighting.png"),
  wo = A("/syntax highlighting2.png"),
  $o = A("/nuxt-content.png"),
  So = { class: "flex flex-col" },
  _o = { class: "mb-1 font-medium" },
  Po = { class: "bg-zinc-200 px-3 py-2 rounded-lg text-base" },
  ko = { class: "text-base leading-7" },
  Eo = { class: "mb-1 font-medium" },
  To = { class: "text-base leading-7" },
  jo = { class: "mb-1 font-medium" },
  Ao = ["src"],
  Co = E({
    __name: "Asset",
    setup(t) {
      const n = P(""),
        s = _(() => !!n.value);
      function o() {
        n.value = "";
      }
      const i = [
        { title: "메인화면", src: "/portfolio/asset0.png" },
        { title: "API Playground", src: "/portfolio/asset1.png" },
        { title: "API Playground_검색기능", src: "/portfolio/asset3.png" },
      ];
      return (a, e) => {
        const u = je,
          d = Q,
          c = ae,
          m = Ae,
          g = me,
          v = he,
          w = Ve,
          b = We,
          S = ze;
        return (
          x(),
          k("div", So, [
            f(
              u,
              { tags: ["nuxt.js", "spring boot"] },
              {
                period: p(() => e[2] || (e[2] = [r(" 2023.09 ~ 2023.12 ")])),
                team: p(
                  () =>
                    e[3] ||
                    (e[3] = [r(" 프론트 개발자 1명(본인), 백엔드 개발자 1명 ")])
                ),
                part: p(
                  () =>
                    e[4] ||
                    (e[4] = [
                      l(
                        "p",
                        null,
                        [
                          r(" UI/UX 디자인 및 프론트엔드 개발 "),
                          l(
                            "span",
                            { class: "text-gray-500 lg:text-base text-sm" },
                            "(100%)"
                          ),
                          l("br"),
                        ],
                        -1
                      ),
                    ])
                ),
                _: 1,
              }
            ),
            f(c, null, {
              default: p(() => [
                f(
                  d,
                  { size: "sm", class: "pb-0" },
                  {
                    default: p(
                      () => e[5] || (e[5] = [l("p", null, "🔗 관련 링크", -1)])
                    ),
                    _: 1,
                  }
                ),
                l(
                  "p",
                  {
                    onClick:
                      e[0] ||
                      (e[0] = ($) =>
                        y(re)("https://fassetchain-dev.fingerservice.co.kr")),
                    class:
                      "flex flex-col gap-2 flex-wrap cursor-pointer border border-gray-300 p-2 rounded-lg",
                  },
                  e[6] ||
                    (e[6] = [
                      l(
                        "span",
                        { class: "font-medium" },
                        "F-Asset 홈페이지 바로가기",
                        -1
                      ),
                      l(
                        "span",
                        { class: "text-blue-500 text-base" },
                        "테스트 아이디: finger@yopmail.com / 비밀번호: 1",
                        -1
                      ),
                      l(
                        "span",
                        { class: "text-sm" },
                        "https://fassetchain-dev.fingerservice.co.kr",
                        -1
                      ),
                    ])
                ),
              ]),
              _: 1,
            }),
            f(m, null, {
              default: p(
                () =>
                  e[7] ||
                  (e[7] = [
                    l(
                      "li",
                      null,
                      "이용자 각종 자산을 충전하고 특정 자산으로 결제/송금 처리가 가능한 플랫폼",
                      -1
                    ),
                    l(
                      "li",
                      null,
                      [
                        l("span", { class: "font-medium" }, "핵심 기능"),
                        l("ul", { class: "list-circle pl-5" }, [
                          l(
                            "li",
                            null,
                            "사용자 지갑의 거래·잔액 정보를 조회하고 관리할 수 있는 대시보드 제공"
                          ),
                          l(
                            "li",
                            null,
                            "API Docs 화면을 통해 블록체인 API에 대한 문서 제공"
                          ),
                          l(
                            "li",
                            null,
                            "콘솔 화면에서 API 요청 및 응답 실시간 테스트 기능"
                          ),
                        ]),
                      ],
                      -1
                    ),
                  ])
              ),
              _: 1,
            }),
            f(v, null, {
              default: p(() => [
                e[50] ||
                  (e[50] = l(
                    "li",
                    null,
                    [
                      l(
                        "p",
                        { class: "mb-1 font-medium" },
                        " HttpOnly 쿠키 기반 인증을 위한 SSR 인증 프록시 구조 구현 "
                      ),
                      l("div", { class: "text-base leading-7" }, [
                        r(" 클라이언트에서 토큰을 직접 다루지 않고, "),
                        l(
                          "span",
                          { class: "font-semibold" },
                          "서버 단(SSR)에서 HttpOnly 쿠키를 읽어"
                        ),
                        r(
                          " accessToken/refreshToken을 자동 관리하는 구조를 설계했습니다. "
                        ),
                        l("br"),
                        r(
                          "이를 통해 XSS 공격을 원천 차단하고, API 서버와의 통신을 "
                        ),
                        l(
                          "span",
                          { class: "font-semibold" },
                          "보안적으로 통제된 환경"
                        ),
                        r("에서 수행하도록 개선했습니다. "),
                        l("br"),
                        r(
                          "또한 accessToken 만료 시 SSR에서 refreshToken으로 재발급까지 자동 처리하여 사용자에게 "
                        ),
                        l(
                          "span",
                          { class: "font-semibold" },
                          "끊김 없는 인증 경험"
                        ),
                        r("을 제공했습니다. "),
                      ]),
                    ],
                    -1
                  )),
                e[51] ||
                  (e[51] = l(
                    "li",
                    null,
                    [
                      l(
                        "p",
                        { class: "mb-1 font-medium" },
                        " Nuxt 서버를 API Reverse Proxy로 활용하여 백엔드 API 완전 비공개 처리 "
                      ),
                      l("div", { class: "text-base" }, [
                        r(
                          " 모든 API 요청은 클라이언트 → Nuxt 서버(WAS) → Backend 구조로 구성하여 백엔드 API 주소와 내부 네트워크 구조를 외부에 노출하지 않도록 설계했습니다. "
                        ),
                        l("br"),
                        r(
                          "이를 통해 외부 접근 차단, API 서버 보호, 로깅/모니터링 체계 강화 등 "
                        ),
                        l(
                          "span",
                          { class: "font-semibold" },
                          "보안성과 유지보수성을 극대화"
                        ),
                        r("하였습니다. "),
                      ]),
                    ],
                    -1
                  )),
                l("li", null, [
                  l("p", _o, [
                    f(g, { "is-skill": !0, text: "nuxt plugin" }),
                    e[8] || (e[8] = r("과 ")),
                    f(g, { "is-skill": !0, text: "definePageMeta" }),
                    e[9] ||
                      (e[9] = r("를 활용한 웹 내 페이지 검색 기능 구현 ")),
                  ]),
                  l("div", Po, [
                    e[10] ||
                      (e[10] = r(
                        " nuxt plugin은 Nuxt 애플리케이션이 구동될 때 특정 코드나 외부 라이브러리를 초기화하고자 할 때 사용되는 개념입니다. 이 개념과 Nuxt에서 제공하는 "
                      )),
                    f(g, { "is-skill": !0, text: "definePageMeta" }),
                    e[11] ||
                      (e[11] = r(
                        " 메서드를 사용하여 메타 정보에 페이지 타이틀을 선언하여 페이지 검색 기능을 구현하였습니다. "
                      )),
                    l(
                      "p",
                      {
                        class:
                          "mt-2 text-blue-500 cursor-pointer hover:text-blue-600 duration-300",
                        onClick:
                          e[1] ||
                          (e[1] = ($) =>
                            y(re)("https://jinnnkcoding.tistory.com/237")),
                      },
                      "관련 블로그 포스팅 보기"
                    ),
                  ]),
                ]),
                l("li", null, [
                  e[34] ||
                    (e[34] = l(
                      "p",
                      { class: "mb-1 font-medium" },
                      [
                        r(
                          " 블록체인 기반 자산 관리 API를 실시간으로 테스트할 수 있는 "
                        ),
                        l(
                          "span",
                          { class: "font-semibold" },
                          "대화형 API Playground"
                        ),
                        r(" 구축 "),
                      ],
                      -1
                    )),
                  l("div", ko, [
                    e[12] ||
                      (e[12] = r(
                        " 블록체인 API를 단순 문서 형태로 제공하는 것을 넘어, 사용자가 지갑 주소·자산·트랜잭션 파라미터를 입력하면 실제 API 요청을 전송하고 결과를 즉시 확인할 수 있는 "
                      )),
                    e[13] ||
                      (e[13] = l(
                        "span",
                        { class: "font-semibold" },
                        "실시간 테스트 콘솔 UI",
                        -1
                      )),
                    e[14] || (e[14] = r("를 구현했습니다. ")),
                    e[15] || (e[15] = l("br", null, null, -1)),
                    e[16] || (e[16] = l("br", null, null, -1)),
                    f(g, { "is-skill": !0, text: "pinia" }),
                    e[17] ||
                      (e[17] = r(
                        "를 도입하여 사용자의 선택 정보(개발 언어, SDK, 파라미터 등)를 전역 상태로 관리하고 페이지 이동·새로고침 후에도 상태를 유지함으로써, 안정적인 API 테스트 경험을 제공했습니다. "
                      )),
                    e[18] || (e[18] = l("br", null, null, -1)),
                    e[19] || (e[19] = l("br", null, null, -1)),
                    e[20] || (e[20] = r(" 또한 ")),
                    f(g, { "is-skill": !0, text: "highlight.js" }),
                    e[21] ||
                      (e[21] = r(
                        "를 활용해 실제 IDE와 유사한 구문 강조(syntax highlighting) 기능을 적용하여 API 사용 예제 코드를 가독성 높게 시각화하였습니다. "
                      )),
                    e[22] || (e[22] = l("br", null, null, -1)),
                    e[23] ||
                      (e[23] = r(
                        " 다만 초기 렌더링 시 한 번만 하이라이팅이 적용되는 라이브러리 특성 때문에, 사용자가 파라미터를 변경하면 하이라이팅이 사라지는 문제가 발생했습니다. "
                      )),
                    e[24] || (e[24] = l("br", null, null, -1)),
                    e[25] || (e[25] = r(" 이 문제는 Nuxt의 ")),
                    f(g, { "is-skill": !0, text: "watch" }),
                    e[26] ||
                      (e[26] = r(
                        " 기능을 활용해 입력 값 변경을 감지할 때마다 즉시 재하이라이팅을 수행하도록 처리하여 "
                      )),
                    e[27] ||
                      (e[27] = l(
                        "span",
                        { class: "font-semibold" },
                        "동적으로 변하는 코드 블록에서도 안정적인 하이라이팅",
                        -1
                      )),
                    e[28] || (e[28] = r("을 구현했습니다. ")),
                    e[29] || (e[29] = l("br", null, null, -1)),
                    e[30] || (e[30] = l("br", null, null, -1)),
                    e[31] ||
                      (e[31] = r(
                        " 이를 통해 블록체인 API를 처음 접하는 사용자와 개발자 모두가 "
                      )),
                    e[32] ||
                      (e[32] = l(
                        "span",
                        { class: "font-semibold" },
                        "직관적이고 신뢰도 높은 API 테스트 환경",
                        -1
                      )),
                    e[33] ||
                      (e[33] = r("을 경험할 수 있도록 개선하였습니다. ")),
                  ]),
                ]),
                e[52] ||
                  (e[52] = l(
                    "div",
                    { class: "flex flex-col gap-1 items-center" },
                    [
                      l("img", {
                        src: yo,
                        alt: "highlight 활용 예시",
                        class: "w-100",
                      }),
                      l(
                        "span",
                        { class: "text-gray-600 text-sm mb-4" },
                        "highlight.js를 활용하여 구문 강조를 한 컴포넌트"
                      ),
                    ],
                    -1
                  )),
                e[53] ||
                  (e[53] = l(
                    "div",
                    { class: "flex flex-col gap-1 items-center" },
                    [
                      l("img", { src: wo, alt: "highlight 코드" }),
                      l(
                        "span",
                        { class: "text-gray-600 text-sm mb-4" },
                        "실제 코드 구현부"
                      ),
                    ],
                    -1
                  )),
                e[54] ||
                  (e[54] = l(
                    "li",
                    null,
                    [
                      l(
                        "p",
                        { class: "mb-1 font-medium" },
                        " Docker 기반의 온프레미스 배포 환경 구성 및 Nginx 인증서 설정 경험 "
                      ),
                      l("div", { class: "text-base" }, [
                        r(
                          " 서비스 운영을 위해 Docker로 Nuxt.js WAS를 컨테이너화하고, 로드밸런싱 및 SSL 처리를 위해 Nginx Reverse Proxy 환경을 구성했습니다. "
                        ),
                        l("br"),
                        r(
                          "실제 서버 환경에서 인증서 갱신 및 Nginx 설정 변경까지 직접 수행하며 "
                        ),
                        l(
                          "span",
                          { class: "font-semibold" },
                          "프론트엔드 개발자를 넘어선 서비스 운영 역량"
                        ),
                        r("을 확보했습니다. "),
                      ]),
                    ],
                    -1
                  )),
                l("li", null, [
                  l("p", Eo, [
                    f(g, { "is-skill": !0, text: "nuxt content" }),
                    e[35] ||
                      (e[35] = r(
                        " 모듈을 활용하여 Markdown 기반 API 문서를 구조화된 콘텐츠 API 형태로 자동 변환 및 렌더링 "
                      )),
                  ]),
                  l("div", To, [
                    e[36] || (e[36] = r(" Markdown 문서를 ")),
                    e[37] ||
                      (e[37] = l(
                        "span",
                        { class: "font-semibold" },
                        "Nuxt Content",
                        -1
                      )),
                    e[38] ||
                      (e[38] = r(
                        "로 파싱하여, 문서 내용을 제목·본문·코드블록 등으로 구조화하고 이를 Vue 컴포넌트에서 그대로 사용할 수 있는 형태로 구성했습니다. "
                      )),
                    e[39] || (e[39] = l("br", null, null, -1)),
                    e[40] ||
                      (e[40] = r(
                        " 이를 통해 문서를 코드가 아니라 콘텐츠 파일로 관리할 수 있어 "
                      )),
                    e[41] ||
                      (e[41] = l(
                        "span",
                        { class: "font-semibold" },
                        "API 문서를 유연하게 추가하고 유지보수할 수 있는 CMS 기반 구조를 구축",
                        -1
                      )),
                    e[42] || (e[42] = r("했습니다. ")),
                    e[43] || (e[43] = l("br", null, null, -1)),
                    e[44] || (e[44] = r(" 또한 ")),
                    f(g, { "is-skill": !0, text: "ContentQuery" }),
                    e[45] ||
                      (e[45] = r(
                        " 기능을 활용하여 제목, 태그, 경로 등 콘텐츠 메타데이터를 기준으로 "
                      )),
                    e[46] ||
                      (e[46] = l(
                        "span",
                        { class: "font-semibold" },
                        "문서 검색·필터링 기능",
                        -1
                      )),
                    e[47] ||
                      (e[47] = r(
                        "을 구현하였습니다. 이 덕분에 API 문서가 많아졌을 때도 사용자가 원하는 페이지를 빠르게 탐색할 수 있도록 하였습니다. "
                      )),
                  ]),
                ]),
                e[55] ||
                  (e[55] = l(
                    "div",
                    { class: "flex flex-col gap-1 items-center" },
                    [
                      l("img", { src: $o, alt: "nuxt content 활용예시" }),
                      l(
                        "span",
                        { class: "text-gray-600 text-sm mb-4" },
                        "nuxt content를 활용하여 마크다운 형식으로 페이지 생성"
                      ),
                    ],
                    -1
                  )),
                l("li", null, [
                  l("p", jo, [
                    f(g, { "is-skill": !0, text: "Tailwind CSS" }),
                    e[48] ||
                      (e[48] = r(
                        "를 사용하여 효율적이고 일관된 스타일링 구현 "
                      )),
                  ]),
                  e[49] ||
                    (e[49] = l(
                      "div",
                      { class: "text-base" },
                      [
                        r(" 프로젝트 전반에 걸쳐 "),
                        l(
                          "span",
                          { class: "font-semibold" },
                          "CSS 작성 시간을 약 70% 절감"
                        ),
                        r(
                          "하고, 일관된 디자인 시스템을 유지할 수 있었습니다. "
                        ),
                        l(
                          "div",
                          { class: "ml-2 mt-2 bg-zinc-200 p-2 rounded-md" },
                          [
                            l("p", null, [
                              r(
                                "- 별도의 CSS 파일 없이 HTML에서 유틸리티 클래스를 사용해 "
                              ),
                              l(
                                "span",
                                { class: "font-semibold" },
                                "즉각적인 스타일링"
                              ),
                              r("이 가능하여 작업 속도 향상"),
                            ]),
                            l("p", null, [
                              r("- 디자인 시스템(색상, 여백, 폰트 등)을 "),
                              l(
                                "span",
                                { class: "font-semibold" },
                                "Tailwind의 테마 설정(tailwind.config.js)"
                              ),
                              r("으로 정의하여 "),
                              l(
                                "span",
                                { class: "font-semibold" },
                                "재사용성과 유지보수성"
                              ),
                              r(" 확보"),
                            ]),
                            l("p", null, [
                              r("- 반응형 클래스(sm, md, lg)를 활용해 "),
                              l(
                                "span",
                                { class: "font-semibold" },
                                "다양한 디바이스 크기에 최적화된 레이아웃 설계"
                              ),
                            ]),
                          ]
                        ),
                      ],
                      -1
                    )),
                ]),
              ]),
              _: 1,
            }),
            f(b, null, {
              default: p(() => [
                (x(),
                k(
                  z,
                  null,
                  ee(i, ($, C) =>
                    f(
                      w,
                      {
                        key: C,
                        title: $.title,
                        src: $.src,
                        onClick: () => {
                          n.value = $.src;
                        },
                      },
                      null,
                      8,
                      ["title", "src", "onClick"]
                    )
                  ),
                  64
                )),
              ]),
              _: 1,
            }),
            f(
              S,
              { "is-open": y(s), onCloseGallery: o },
              {
                default: p(() => [l("img", { src: y(n) }, null, 8, Ao)]),
                _: 1,
              },
              8,
              ["is-open"]
            ),
          ])
        );
      };
    },
  }),
  Io = { class: "flex flex-col" },
  Lo = { class: "my-2" },
  Mo = { class: "bg-zinc-200 px-3 py-2 rounded-lg text-base leading-7" },
  Fo = ["src"],
  Oo = E({
    __name: "Token",
    setup(t) {
      const n = P(""),
        s = _(() => !!n.value);
      function o() {
        n.value = "";
      }
      const i = [
        { title: "메인 화면", src: "/portfolio/token1.png" },
        { title: "상품 상세페이지 및 거래화면", src: "/portfolio/token2.png" },
        { title: "마이페이지", src: "/portfolio/token3.png" },
        {
          title: "블록체인 대시보드-트랜잭션 페이지",
          src: "/portfolio/fsto-transaction.png",
        },
        {
          title: "블록체인 대시보드-토큰 페이지",
          src: "/portfolio/fsto-token.png",
        },
      ];
      return (a, e) => {
        const u = je,
          d = Q,
          c = ae,
          m = Ae,
          g = me,
          v = he,
          w = Ve,
          b = We,
          S = ze;
        return (
          x(),
          k("div", Io, [
            f(
              u,
              { tags: ["nuxt.js"] },
              {
                period: p(() => e[3] || (e[3] = [r(" 2023.09 ~ 2023.12 ")])),
                team: p(
                  () =>
                    e[4] ||
                    (e[4] = [r(" 프론트 개발자 1명(본인), 백엔드 개발자 1명 ")])
                ),
                part: p(
                  () =>
                    e[5] ||
                    (e[5] = [
                      l(
                        "p",
                        null,
                        [
                          r(" UI/UX 디자인 및 프론트엔드 개발 "),
                          l(
                            "span",
                            { class: "text-gray-500 lg:text-base text-sm" },
                            "(100%)"
                          ),
                          l("br"),
                        ],
                        -1
                      ),
                    ])
                ),
                _: 1,
              }
            ),
            f(c, null, {
              default: p(() => [
                f(
                  d,
                  { size: "sm", class: "pb-0" },
                  {
                    default: p(
                      () => e[6] || (e[6] = [l("p", null, "🔗 관련 링크", -1)])
                    ),
                    _: 1,
                  }
                ),
                l(
                  "p",
                  {
                    onClick:
                      e[0] ||
                      (e[0] = ($) =>
                        y(re)("https://fsto-dev.fingerservice.co.kr:8087")),
                    class:
                      "flex flex-col gap-2 flex-wrap cursor-pointer border border-gray-300 p-2 rounded-lg",
                  },
                  e[7] ||
                    (e[7] = [
                      l(
                        "span",
                        { class: "font-medium" },
                        "비상장 토큰 증권 플랫폼 바로가기",
                        -1
                      ),
                      l(
                        "span",
                        { class: "text-sm" },
                        "https://fsto-dev.fingerservice.co.kr:8087",
                        -1
                      ),
                    ])
                ),
                l(
                  "p",
                  {
                    onClick:
                      e[1] ||
                      (e[1] = ($) =>
                        y(re)("https://fsto-dev.fingerservice.co.kr:8082")),
                    class:
                      "flex flex-col gap-2 flex-wrap cursor-pointer border border-gray-300 p-2 rounded-lg",
                  },
                  e[8] ||
                    (e[8] = [
                      l(
                        "span",
                        { class: "font-medium whitespace-pre-wrap" },
                        [
                          r("블록체인 대시보드"),
                          l(
                            "span",
                            { class: "text-gray-500" },
                            "(트랜잭션 추적 페이지)"
                          ),
                          r(" 바로가기"),
                        ],
                        -1
                      ),
                      l(
                        "span",
                        { class: "text-sm" },
                        "https://fsto-dev.fingerservice.co.kr:8082",
                        -1
                      ),
                    ])
                ),
                l(
                  "p",
                  {
                    onClick:
                      e[2] ||
                      (e[2] = ($) =>
                        y(re)(
                          "https://www.finger.co.kr/homepage/html/bus/bus-05-05.html?cate=bus&sub=05&page=05"
                        )),
                    class:
                      "flex flex-col gap-2 flex-wrap cursor-pointer border border-gray-300 p-2 rounded-lg",
                  },
                  e[9] ||
                    (e[9] = [
                      l(
                        "span",
                        { class: "font-medium" },
                        "프로젝트 소개 페이지 바로가기",
                        -1
                      ),
                      l(
                        "span",
                        { class: "text-sm whitespace-pre-line break-all" },
                        "https://www.finger.co.kr/homepage/html/bus/bus-05-05.html?cate=bus&sub=05&page=05",
                        -1
                      ),
                    ])
                ),
              ]),
              _: 1,
            }),
            f(m, null, {
              default: p(
                () =>
                  e[10] ||
                  (e[10] = [
                    l(
                      "li",
                      null,
                      "사용자들이 비상장 토큰을 거래할 수 있는 거래 플랫폼과 블록체인 모니터링 웹을 전반적으로 설계 및 개발",
                      -1
                    ),
                    l(
                      "li",
                      null,
                      [
                        l("span", { class: "font-medium" }, "핵심 기능"),
                        l("ul", { class: "list-circle pl-5" }, [
                          l("li", null, "매도/매수 거래 처리 및 유효성 검증"),
                          l("li", null, "실시간 가격 반영 및 거래 내역 조회"),
                          l("li", null, "사용자 토론 및 멘션 기능"),
                          l(
                            "li",
                            null,
                            "블록·트랜잭션·토큰 데이터 조회 및 상세 페이지"
                          ),
                        ]),
                      ],
                      -1
                    ),
                  ])
              ),
              _: 1,
            }),
            f(v, null, {
              default: p(() => [
                l("li", null, [
                  e[28] || (e[28] = r(" 비상장 거래 플랫폼 ")),
                  l("ul", Lo, [
                    l("div", Mo, [
                      e[11] ||
                        (e[11] = l(
                          "p",
                          { class: "mb-4 font-semibold" },
                          "💡 거래 UI 아키텍처 및 주요 기능",
                          -1
                        )),
                      e[12] ||
                        (e[12] = r(
                          " - 사용자의 보유 잔액·상품 수량을 기반으로 매수/매도 가능 여부를 실시간 검증하는 "
                        )),
                      e[13] ||
                        (e[13] = l(
                          "span",
                          { class: "font-semibold" },
                          "유효성 검사 로직",
                          -1
                        )),
                      e[14] || (e[14] = r(" 구축")),
                      e[15] || (e[15] = l("br", null, null, -1)),
                      e[16] ||
                        (e[16] = r(
                          " - 버튼 연타로 인해 중복 주문이 발생하지 않도록 "
                        )),
                      e[17] ||
                        (e[17] = l(
                          "span",
                          { class: "font-semibold" },
                          "Double Submit 방지 로직",
                          -1
                        )),
                      e[18] || (e[18] = r(" 적용")),
                      e[19] || (e[19] = l("br", null, null, -1)),
                      e[20] || (e[20] = r(" - ")),
                      f(g, { "is-skill": !0, text: "chart.js" }),
                      e[21] || (e[21] = r("로 실시간 가격 변동을 반영하는 ")),
                      e[22] ||
                        (e[22] = l(
                          "span",
                          { class: "font-semibold" },
                          "실시간 차트 UI 시각화",
                          -1
                        )),
                      e[23] || (e[23] = r(" 구현")),
                      e[24] || (e[24] = l("br", null, null, -1)),
                      e[25] ||
                        (e[25] = r(
                          " - 거래 요청 → 검증 → 결과 반영까지 이어지는 비동기 흐름을 고려해 "
                        )),
                      e[26] ||
                        (e[26] = l(
                          "span",
                          { class: "font-semibold" },
                          "안정적인 사용자 경험(UX) 설계",
                          -1
                        )),
                      e[27] || (e[27] = l("br", null, null, -1)),
                    ]),
                  ]),
                ]),
                e[29] ||
                  (e[29] = l(
                    "li",
                    null,
                    [
                      r(" 토론 페이지 "),
                      l("ul", { class: "my-2" }, [
                        l(
                          "div",
                          {
                            class:
                              "bg-zinc-200 px-3 py-2 rounded-lg text-base leading-7",
                          },
                          [
                            l(
                              "p",
                              { class: "mb-4 font-semibold" },
                              "💡 댓글·멘션 기반 실시간 인터랙션"
                            ),
                            r(" - 댓글 등록·수정·삭제가 즉시 반영되는 "),
                            l(
                              "span",
                              { class: "font-semibold" },
                              "동적 인터랙션 UI"
                            ),
                            r(" 구현"),
                            l("br"),
                            r(
                              " - '@사용자' 형태로 특정 사용자를 호출할 수 있는 "
                            ),
                            l("span", { class: "font-semibold" }, "멘션 기능"),
                            r(" 개발"),
                            l("br"),
                            r(
                              " - 비동기 상태 변화를 즉각적으로 반영하기 위해 "
                            ),
                            l(
                              "span",
                              { class: "font-semibold" },
                              "상태 관리 및 렌더링 최적화"
                            ),
                            r(" 적용"),
                            l("br"),
                          ]
                        ),
                      ]),
                    ],
                    -1
                  )),
                e[30] ||
                  (e[30] = l(
                    "li",
                    null,
                    [
                      r(" 블록체인 대시보드 "),
                      l("ul", { class: "my-2" }, [
                        l(
                          "div",
                          {
                            class:
                              "bg-zinc-200 px-3 py-2 rounded-lg text-base leading-7",
                          },
                          [
                            l(
                              "p",
                              { class: "mb-4 font-semibold" },
                              "💡 트랜잭션·토큰 데이터를 시각적으로 분석하는 UI"
                            ),
                            r(
                              " - 블록·트랜잭션·토큰 리스트 제공 및 상세 데이터 조회 UI 설계"
                            ),
                            l("br"),
                            r(" - 사용자 입장에서 빠르게 이해할 수 있도록 "),
                            l(
                              "span",
                              { class: "font-semibold" },
                              "데이터 구조화 및 화면 간 정보 흐름 설계"
                            ),
                            l("br"),
                          ]
                        ),
                      ]),
                    ],
                    -1
                  )),
              ]),
              _: 1,
            }),
            f(b, null, {
              default: p(() => [
                (x(),
                k(
                  z,
                  null,
                  ee(i, ($, C) =>
                    f(
                      w,
                      {
                        key: C,
                        title: $.title,
                        src: $.src,
                        onClick: () => {
                          n.value = $.src;
                        },
                      },
                      null,
                      8,
                      ["title", "src", "onClick"]
                    )
                  ),
                  64
                )),
              ]),
              _: 1,
            }),
            f(
              S,
              { "is-open": y(s), onCloseGallery: o },
              {
                default: p(() => [l("img", { src: y(n) }, null, 8, Fo)]),
                _: 1,
              },
              8,
              ["is-open"]
            ),
          ])
        );
      };
    },
  }),
  Do = { class: "flex flex-col" },
  No = E({
    __name: "Refactoring",
    setup(t) {
      return (n, s) => {
        const o = je,
          i = Ae,
          a = Q,
          e = ae;
        return (
          x(),
          k("div", Do, [
            f(
              o,
              { tags: ["vue.js"] },
              {
                period: p(() => s[0] || (s[0] = [r(" 2023.01 ~ 2023.2 ")])),
                team: p(
                  () => s[1] || (s[1] = [r(" 프론트 개발자 1명(본인) ")])
                ),
                part: p(
                  () =>
                    s[2] ||
                    (s[2] = [
                      l(
                        "p",
                        null,
                        [
                          r(" 코드 리팩토링 작업 "),
                          l(
                            "span",
                            { class: "text-gray-500 lg:text-base text-sm" },
                            "(100%)"
                          ),
                          l("br"),
                        ],
                        -1
                      ),
                    ])
                ),
                _: 1,
              }
            ),
            f(i, null, {
              default: p(
                () =>
                  s[3] ||
                  (s[3] = [
                    l(
                      "li",
                      null,
                      "기존 jQuery 기반의 전자지갑 웹을 vue.js로 리팩토링",
                      -1
                    ),
                  ])
              ),
              _: 1,
            }),
            f(e, null, {
              default: p(() => [
                f(
                  a,
                  { size: "sm", class: "pb-0" },
                  {
                    default: p(
                      () => s[4] || (s[4] = [l("p", null, "🤔 느낀점", -1)])
                    ),
                    _: 1,
                  }
                ),
                s[5] ||
                  (s[5] = l(
                    "ul",
                    { class: "list-disc leading-7 space-y-3 pl-5" },
                    [
                      l("li", null, [
                        l("b", null, "코드 관리의 용이성"),
                        l("br"),
                        r(
                          "jQuery 기반의 코드에서는 관리와 유지보수가 어려웠던 부분들이 Vue.js의 컴포넌트 기반 아키텍처 덕분에 크게 개선되었습니다. 코드가 더 구조화되고 모듈화되어, 변경 사항을 처리하거나 기능을 추가하는 과정이 훨씬 효율적이었습니다."
                        ),
                      ]),
                      l("li", null, [
                        l("b", null, "성능 개선"),
                        l("br"),
                        r(
                          "Vue.js를 도입하면서 데이터 바인딩과 화면 렌더링 성능이 크게 향상되었습니다. 특히, Vue.js의 반응형 데이터 시스템 덕분에 불필요한 DOM 조작이 줄어들고, 사용자 경험이 한층 매끄러워졌습니다."
                        ),
                      ]),
                      l("li", null, [
                        l("b", null, "유연성"),
                        l("br"),
                        r(
                          "기존 jQuery 코드를 완전히 제거하지 않고 Vue.js와 함께 사용하면서, 레거시 시스템과의 호환성을 유지할 수 있었습니다. 이는 시스템 전환 과정에서 발생할 수 있는 리스크를 줄이는 데 큰 도움이 되었습니다."
                        ),
                      ]),
                    ],
                    -1
                  )),
              ]),
              _: 1,
            }),
          ])
        );
      };
    },
  }),
  Bo = { class: "fixed inset-0 overflow-y-auto" },
  Ro = { class: "flex min-h-full items-end justify-center align-middle" },
  Uo = {
    class:
      "absolute top-0 left-0 flex flex-col z-80 bg-transparent fixed transform -translate-y-10",
  },
  Ho = { class: "text-base pt-2" },
  ho = {
    class: "w-full h-[88dvh] bg-white flex flex-col gap-5 overflow-y-auto",
  },
  Vo = { class: "px-7 mt-16" },
  Wo = { class: "text-4xl font-semibold" },
  zo = E({
    __name: "index",
    props: { isOpen: { type: Boolean, default: !1 } },
    setup(t) {
      return (n, s) => (
        x(),
        M(
          y(He),
          { appear: "", show: t.isOpen, as: "template" },
          {
            default: p(() => [
              f(
                y(ut),
                {
                  as: "div",
                  class: "relative z-70",
                  onClose: s[1] || (s[1] = (o) => n.$emit("close")),
                },
                {
                  default: p(() => [
                    f(
                      y(ce),
                      {
                        as: "template",
                        enter: "duration-300 ease-out",
                        "enter-from": "opacity-0",
                        "enter-to": "opacity-100",
                        leave: "duration-200 ease-in",
                        "leave-from": "opacity-100",
                        "leave-to": "opacity-0",
                      },
                      {
                        default: p(
                          () =>
                            s[2] ||
                            (s[2] = [
                              l(
                                "div",
                                {
                                  class: "fixed inset-0 bg-black bg-opacity-80",
                                },
                                null,
                                -1
                              ),
                            ])
                        ),
                        _: 1,
                      }
                    ),
                    l("div", Bo, [
                      l("div", Ro, [
                        f(
                          y(ce),
                          {
                            as: "template",
                            enter: "duration-300 ease-out",
                            "enter-from": "opacity-0 scale-95",
                            "enter-to": "opacity-100 scale-100",
                            leave: "duration-200 ease-in",
                            "leave-from": "opacity-100 scale-100",
                            "leave-to": "opacity-0 scale-95",
                          },
                          {
                            default: p(() => [
                              f(
                                y(ht),
                                {
                                  class:
                                    "w-full max-w-[900px] transform align-middle shadow-xl transition-all relative",
                                },
                                {
                                  default: p(() => [
                                    l("div", Uo, [
                                      l(
                                        "div",
                                        {
                                          class:
                                            "fordertitle bg-[#ffd689] h-10 px-4 flex items-center justify-center rounded-t-xl cursor-pointer",
                                          onClick:
                                            s[0] ||
                                            (s[0] = (o) => n.$emit("close")),
                                        },
                                        [l("p", Ho, [j(n.$slots, "title")])]
                                      ),
                                    ]),
                                    s[3] ||
                                      (s[3] = l(
                                        "div",
                                        {
                                          class:
                                            "h-4 rounded-tr-xl bg-[#ffd689] shadow-inner-custom",
                                        },
                                        null,
                                        -1
                                      )),
                                    l("div", ho, [
                                      l("div", Vo, [
                                        l("p", Wo, [j(n.$slots, "title")]),
                                        j(n.$slots, "default"),
                                      ]),
                                    ]),
                                  ]),
                                  _: 3,
                                }
                              ),
                            ]),
                            _: 3,
                          }
                        ),
                      ]),
                    ]),
                  ]),
                  _: 3,
                }
              ),
            ]),
            _: 3,
          },
          8,
          ["show"]
        )
      );
    },
  }),
  Go = A("/project.png"),
  qo = { class: "flex flex-col gap-6" },
  Xo = { class: "flex flex-col gap-4" },
  Qo = { class: "flex flex-row flex-wrap gap-2 text-base font-normal" },
  Ko = ["onClick"],
  Yo = { class: "grid lg:grid-cols-2 gap-4" },
  Zo = { class: "text-[0.9rem]" },
  Jo = ["src"],
  er = E({
    __name: "index",
    setup(t) {
      const n = Yt(),
        s = Zt(),
        o = _(() => s.query.project),
        i = P(""),
        a = _(() => !!o.value),
        e = P("");
      function u(g, v) {
        n.push({ query: { project: g } }), (e.value = v);
      }
      function d() {
        n.push({ query: {} });
      }
      const c = ["next.js", "nuxt.js", "vue.js", "pwa"],
        m = _(() =>
          i.value ? vt.filter((g) => g.tags.includes(i.value)) : vt
        );
      return (
        N(() => {
          const g = nl("project");
          g !== "" && (e.value = sl(g));
        }),
        (g, v) => {
          const w = Q,
            b = Ts,
            S = pt,
            $ = oo,
            C = xo,
            O = Co,
            K = Oo,
            ge = No,
            ve = zo,
            ne = Jt("dompurify-html");
          return (
            x(),
            k("div", null, [
              f(
                S,
                { "section-id": "project" },
                {
                  default: p(() => [
                    l("div", qo, [
                      f(
                        w,
                        { class: "pb-0" },
                        {
                          icon: p(({ size: I }) => [
                            l("img", { src: Go, class: V([I]) }, null, 2),
                          ]),
                          default: p(() => [
                            v[1] || (v[1] = l("span", null, "Project", -1)),
                          ]),
                          _: 1,
                        }
                      ),
                      l("div", Xo, [
                        v[2] ||
                          (v[2] = l(
                            "p",
                            {
                              class:
                                "bg-zinc-100 p-2 rounded-md flex flex-row gap-1 text-base font-normal tracking-normal",
                            },
                            [
                              r(" 💁🏻 "),
                              l("span", null, [
                                r(
                                  " 담당한 프로젝트를 최신 순으로 구성했습니다."
                                ),
                                l("br"),
                                r(
                                  "해당 프로젝트를 클릭하면 주요 내용, 역할 및 기여도, 수행 기간 등을 확인할 수 있습니다. "
                                ),
                              ]),
                            ],
                            -1
                          )),
                        l("div", Qo, [
                          l(
                            "button",
                            {
                              onClick: v[0] || (v[0] = (I) => (i.value = "")),
                              class: V([
                                [
                                  y(i) == ""
                                    ? "bg-gray-600 text-white"
                                    : "bg-zinc-100 text-gray-800",
                                ],
                                "px-4 py-1 rounded-md",
                              ]),
                            },
                            " All ",
                            2
                          ),
                          (x(),
                          k(
                            z,
                            null,
                            ee(c, (I) =>
                              l(
                                "button",
                                {
                                  key: I,
                                  onClick: (be) => (i.value = I),
                                  class: V([
                                    "px-3 py-1 rounded-md",
                                    y(i) === I
                                      ? "bg-blue-500 text-white"
                                      : "bg-zinc-100 text-gray-800",
                                  ]),
                                },
                                H(I),
                                11,
                                Ko
                              )
                            ),
                            64
                          )),
                        ]),
                      ]),
                      l("div", Yo, [
                        (x(!0),
                        k(
                          z,
                          null,
                          ee(
                            y(m),
                            (I) => (
                              x(),
                              M(
                                b,
                                {
                                  key: I.id,
                                  tags: I.tags,
                                  "no-image": I.noImage,
                                  onClick: (be) => u(I.id, I.title),
                                },
                                el(
                                  {
                                    title: p(() => [r(H(I.title), 1)]),
                                    desc: p(() => [
                                      tl(l("span", Zo, null, 512), [
                                        [ne, I.desc],
                                      ]),
                                    ]),
                                    _: 2,
                                  },
                                  [
                                    I.noImage
                                      ? void 0
                                      : {
                                          name: "image",
                                          fn: p(() => [
                                            l(
                                              "img",
                                              { src: I.image },
                                              null,
                                              8,
                                              Jo
                                            ),
                                          ]),
                                          key: "0",
                                        },
                                  ]
                                ),
                                1032,
                                ["tags", "no-image", "onClick"]
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                    ]),
                  ]),
                  _: 1,
                }
              ),
              f(
                ve,
                { "is-open": y(a), onClose: d },
                {
                  title: p(() => [r(H(y(e)), 1)]),
                  default: p(() => [
                    y(o) === "baas"
                      ? (x(), M($, { key: 0 }))
                      : y(o) === "did"
                      ? (x(), M(C, { key: 1 }))
                      : y(o) === "asset"
                      ? (x(), M(O, { key: 2 }))
                      : y(o) === "token"
                      ? (x(), M(K, { key: 3 }))
                      : y(o) === "wallet-refactor"
                      ? (x(), M(ge, { key: 4 }))
                      : ie("", !0),
                  ]),
                  _: 1,
                },
                8,
                ["is-open"]
              ),
            ])
          );
        }
      );
    },
  }),
  tr = {};
function lr(t, n) {
  return x(), k("div", null, [j(t.$slots, "default")]);
}
const nr = te(tr, [["render", lr]]),
  ar = E({
    __name: "index",
    setup(t) {
      return (
        ll(() => ({ title: "Choi Jin Kyung portfolio" })),
        P(""),
        (n, s) => {
          const o = Wn,
            i = bs,
            a = er,
            e = nr;
          return (
            x(), M(e, null, { default: p(() => [f(o), f(i), f(a)]), _: 1 })
          );
        }
      );
    },
  });
export { ar as default };
