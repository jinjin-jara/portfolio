import { ssrRenderComponent, ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrGetDirectiveProps } from 'vue/server-renderer';
import * as e$1 from 'vue';
import { useSSRContext, defineComponent, ref, computed, onMounted, onUnmounted, h as h$1, Fragment, watchEffect, watch, provide, unref, inject, getCurrentInstance, Teleport, reactive, normalizeClass, withCtx, createVNode, mergeProps, renderSlot, cloneVNode, nextTick, openBlock, createBlock, createTextVNode, toDisplayString, createCommentVNode, renderList, resolveDirective, createSlots, withDirectives, shallowRef } from 'vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { useRouter } from 'vue-router';
import { d as useHead, e as useRoute } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-dompurify-html';

const _sfc_main$l = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Wrapper.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : undefined;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "Section",
  __ssrInlineRender: true,
  props: {
    sectionId: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "section pt-4 lg:pt-10",
        id: __props.sectionId
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Section.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : undefined;
};
const _sfc_main$j = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card duration-300 w-full rounded-xl bg-white primary-shadow border border-gray-300" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/index.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : undefined;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$i = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full border-b-1 border-gray-300" }, _attrs))}></div>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Border.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : undefined;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$h = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_Border = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-8 flex flex-col" }, _attrs))}><div class="flex flex-col gap-6 pb-8">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Border, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/SmallSection.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : undefined;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "Title",
  __ssrInlineRender: true,
  props: {
    size: {
      type: String,
      default: "lg"
    }
  },
  setup(__props) {
    const props = __props;
    const textStyles = reactive({
      sm: "text-xl lg:text-2xl",
      lg: "text-2xl lg:text-3xl"
    });
    const selectedTextStyle = computed(() => textStyles[props.size]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [unref(selectedTextStyle), "text-center lg:text-left font-semibold tracking-tight pb-2"]
      }, _attrs))}>`);
      if (_ctx.$slots.icon) {
        _push(`<div class="flex flex-row items-center gap-4">`);
        ssrRenderSlot(_ctx.$slots, "icon", { size: `lg:w-7 w-4` }, null, _push, _parent);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<div>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Title.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : undefined;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "Interview",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_Card, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="leading-7 px-4 py-4"${_scopeId}><div class="text-xl mb-4 font-semibold lg:text-xl"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "question", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            ssrRenderSlot(_ctx.$slots, "answer", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "leading-7 px-4 py-4" }, [
                createVNode("div", { class: "text-xl mb-4 font-semibold lg:text-xl" }, [
                  renderSlot(_ctx.$slots, "question")
                ]),
                renderSlot(_ctx.$slots, "answer")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Interview.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : undefined;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "Tag",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      default: ""
    },
    isSkill: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["bg-gray-100 px-2 py-1 rounded-md border text-sm", [__props.isSkill ? "text-red-500 text-[0.9rem]" : ""]]
      }, _attrs))}>${ssrInterpolate(__props.text)}</span>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tag.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : undefined;
};
function t$4(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o2) => setTimeout(() => {
    throw o2;
  }));
}
function o$3() {
  let a2 = [], s3 = { addEventListener(e2, t2, r2, i2) {
    return e2.addEventListener(t2, r2, i2), s3.add(() => e2.removeEventListener(t2, r2, i2));
  }, requestAnimationFrame(...e2) {
    let t2 = requestAnimationFrame(...e2);
    s3.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e2) {
    s3.requestAnimationFrame(() => {
      s3.requestAnimationFrame(...e2);
    });
  }, setTimeout(...e2) {
    let t2 = setTimeout(...e2);
    s3.add(() => clearTimeout(t2));
  }, microTask(...e2) {
    let t2 = { current: true };
    return t$4(() => {
      t2.current && e2[0]();
    }), s3.add(() => {
      t2.current = false;
    });
  }, style(e2, t2, r2) {
    let i2 = e2.style.getPropertyValue(t2);
    return Object.assign(e2.style, { [t2]: r2 }), this.add(() => {
      Object.assign(e2.style, { [t2]: i2 });
    });
  }, group(e2) {
    let t2 = o$3();
    return e2(t2), this.add(() => t2.dispose());
  }, add(e2) {
    return a2.push(e2), () => {
      let t2 = a2.indexOf(e2);
      if (t2 >= 0) for (let r2 of a2.splice(t2, 1)) r2();
    };
  }, dispose() {
    for (let e2 of a2.splice(0)) e2();
  } };
  return s3;
}
var r;
let n$4 = Symbol("headlessui.useid"), o$2 = 0;
const i$5 = (r = e$1.useId) != null ? r : function() {
  return e$1.inject(n$4, () => `${++o$2}`)();
};
function o$1(e2) {
  var l2;
  if (e2 == null || e2.value == null) return null;
  let n2 = (l2 = e2.value.$el) != null ? l2 : e2.value;
  return n2 instanceof Node ? n2 : null;
}
function u$5(r2, n2, ...a2) {
  if (r2 in n2) {
    let e2 = n2[r2];
    return typeof e2 == "function" ? e2(...a2) : e2;
  }
  let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u$5), t2;
}
var i$4 = Object.defineProperty;
var d$4 = (t2, e2, r2) => e2 in t2 ? i$4(t2, e2, { enumerable: true, configurable: true, writable: true, value: r2 }) : t2[e2] = r2;
var n$3 = (t2, e2, r2) => (d$4(t2, typeof e2 != "symbol" ? e2 + "" : e2, r2), r2);
let s$3 = class s {
  constructor() {
    n$3(this, "current", this.detect());
    n$3(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.currentId = 0, this.current = e2);
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
    return "server";
  }
};
let c$2 = new s$3();
function i$3(r2) {
  if (c$2.isServer) return null;
  if (r2 instanceof Node) return r2.ownerDocument;
  if (r2 != null && r2.hasOwnProperty("value")) {
    let n2 = o$1(r2);
    if (n2) return n2.ownerDocument;
  }
  return undefined;
}
let c$1 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var N$4 = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2))(N$4 || {}), T$2 = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(T$2 || {}), F$1 = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(F$1 || {});
function E$2(e2 = (undefined).body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(c$1)).sort((r2, t2) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(h || {});
function w$4(e2, r2 = 0) {
  var t2;
  return e2 === ((t2 = i$3(e2)) == null ? undefined : t2.body) ? false : u$5(r2, { [0]() {
    return e2.matches(c$1);
  }, [1]() {
    let l2 = e2;
    for (; l2 !== null; ) {
      if (l2.matches(c$1)) return true;
      l2 = l2.parentElement;
    }
    return false;
  } });
}
var y$2 = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(y$2 || {});
function S$1(e2) {
  e2 == null || e2.focus({ preventScroll: true });
}
let H$2 = ["textarea", "input"].join(",");
function I(e2) {
  var r2, t2;
  return (t2 = (r2 = e2 == null ? undefined : e2.matches) == null ? undefined : r2.call(e2, H$2)) != null ? t2 : false;
}
function O(e2, r2 = (t2) => t2) {
  return e2.slice().sort((t2, l2) => {
    let o2 = r2(t2), i2 = r2(l2);
    if (o2 === null || i2 === null) return 0;
    let n2 = o2.compareDocumentPosition(i2);
    return n2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function P(e2, r2, { sorted: t2 = true, relativeTo: l2 = null, skipElements: o2 = [] } = {}) {
  var m2;
  let i2 = (m2 = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : undefined : e2 == null ? undefined : e2.ownerDocument) != null ? m2 : undefined, n2 = Array.isArray(e2) ? t2 ? O(e2) : e2 : E$2(e2);
  o2.length > 0 && n2.length > 1 && (n2 = n2.filter((s3) => !o2.includes(s3))), l2 = l2 != null ? l2 : i2.activeElement;
  let x2 = (() => {
    if (r2 & 5) return 1;
    if (r2 & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p = (() => {
    if (r2 & 1) return 0;
    if (r2 & 2) return Math.max(0, n2.indexOf(l2)) - 1;
    if (r2 & 4) return Math.max(0, n2.indexOf(l2)) + 1;
    if (r2 & 8) return n2.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), L2 = r2 & 32 ? { preventScroll: true } : {}, a2 = 0, d2 = n2.length, u2;
  do {
    if (a2 >= d2 || a2 + d2 <= 0) return 0;
    let s3 = p + a2;
    if (r2 & 16) s3 = (s3 + d2) % d2;
    else {
      if (s3 < 0) return 3;
      if (s3 >= d2) return 1;
    }
    u2 = n2[s3], u2 == null || u2.focus(L2), a2 += x2;
  } while (u2 !== i2.activeElement);
  return r2 & 6 && I(u2) && u2.select(), 2;
}
function t$3() {
  return /iPhone/gi.test((undefined).navigator.platform) || /Mac/gi.test((undefined).navigator.platform) && (undefined).navigator.maxTouchPoints > 0;
}
function i$2() {
  return /Android/gi.test((undefined).navigator.userAgent);
}
function n$2() {
  return t$3() || i$2();
}
function u$4(e2, t2, n2) {
  c$2.isServer || watchEffect((o2) => {
    (undefined).addEventListener(e2, t2, n2), o2(() => (undefined).removeEventListener(e2, t2, n2));
  });
}
function w$3(e2, n2, t2) {
  c$2.isServer || watchEffect((o2) => {
    (undefined).addEventListener(e2, n2, t2), o2(() => (undefined).removeEventListener(e2, n2, t2));
  });
}
function w$2(f2, m2, l2 = computed(() => true)) {
  function a2(e2, r2) {
    if (!l2.value || e2.defaultPrevented) return;
    let t2 = r2(e2);
    if (t2 === null || !t2.getRootNode().contains(t2)) return;
    let c2 = function o2(n2) {
      return typeof n2 == "function" ? o2(n2()) : Array.isArray(n2) || n2 instanceof Set ? n2 : [n2];
    }(f2);
    for (let o2 of c2) {
      if (o2 === null) continue;
      let n2 = o2 instanceof HTMLElement ? o2 : o$1(o2);
      if (n2 != null && n2.contains(t2) || e2.composed && e2.composedPath().includes(n2)) return;
    }
    return !w$4(t2, h.Loose) && t2.tabIndex !== -1 && e2.preventDefault(), m2(e2, t2);
  }
  let u2 = ref(null);
  u$4("pointerdown", (e2) => {
    var r2, t2;
    l2.value && (u2.value = ((t2 = (r2 = e2.composedPath) == null ? undefined : r2.call(e2)) == null ? undefined : t2[0]) || e2.target);
  }, true), u$4("mousedown", (e2) => {
    var r2, t2;
    l2.value && (u2.value = ((t2 = (r2 = e2.composedPath) == null ? undefined : r2.call(e2)) == null ? undefined : t2[0]) || e2.target);
  }, true), u$4("click", (e2) => {
    n$2() || u2.value && (a2(e2, () => u2.value), u2.value = null);
  }, true), u$4("touchend", (e2) => a2(e2, () => e2.target instanceof HTMLElement ? e2.target : null), true), w$3("blur", (e2) => a2(e2, () => (undefined).document.activeElement instanceof HTMLIFrameElement ? (undefined).document.activeElement : null), true);
}
var N$3 = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(N$3 || {}), S = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(S || {});
function A$2({ visible: r2 = true, features: t2 = 0, ourProps: e2, theirProps: o2, ...i2 }) {
  var a2;
  let n2 = j(o2, e2), l2 = Object.assign(i2, { props: n2 });
  if (r2 || t2 & 2 && n2.static) return y$1(l2);
  if (t2 & 1) {
    let d2 = (a2 = n2.unmount) == null || a2 ? 0 : 1;
    return u$5(d2, { [0]() {
      return null;
    }, [1]() {
      return y$1({ ...i2, props: { ...n2, hidden: true, style: { display: "none" } } });
    } });
  }
  return y$1(l2);
}
function y$1({ props: r2, attrs: t2, slots: e2, slot: o2, name: i2 }) {
  var m2, h2;
  let { as: n2, ...l2 } = T$1(r2, ["unmount", "static"]), a2 = (m2 = e2.default) == null ? undefined : m2.call(e2, o2), d2 = {};
  if (o2) {
    let u2 = false, c2 = [];
    for (let [p, f2] of Object.entries(o2)) typeof f2 == "boolean" && (u2 = true), f2 === true && c2.push(p);
    u2 && (d2["data-headlessui-state"] = c2.join(" "));
  }
  if (n2 === "template") {
    if (a2 = b(a2 != null ? a2 : []), Object.keys(l2).length > 0 || Object.keys(t2).length > 0) {
      let [u2, ...c2] = a2 != null ? a2 : [];
      if (!v(u2) || c2.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${i2} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l2).concat(Object.keys(t2)).map((s3) => s3.trim()).filter((s3, g2, R2) => R2.indexOf(s3) === g2).sort((s3, g2) => s3.localeCompare(g2)).map((s3) => `  - ${s3}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s3) => `  - ${s3}`).join(`
`)].join(`
`));
      let p = j((h2 = u2.props) != null ? h2 : {}, l2, d2), f2 = cloneVNode(u2, p, true);
      for (let s3 in p) s3.startsWith("on") && (f2.props || (f2.props = {}), f2.props[s3] = p[s3]);
      return f2;
    }
    return Array.isArray(a2) && a2.length === 1 ? a2[0] : a2;
  }
  return h$1(n2, Object.assign({}, l2, d2), { default: () => a2 });
}
function b(r2) {
  return r2.flatMap((t2) => t2.type === Fragment ? b(t2.children) : [t2]);
}
function j(...r2) {
  if (r2.length === 0) return {};
  if (r2.length === 1) return r2[0];
  let t2 = {}, e2 = {};
  for (let i2 of r2) for (let n2 in i2) n2.startsWith("on") && typeof i2[n2] == "function" ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(i2[n2])) : t2[n2] = i2[n2];
  if (t2.disabled || t2["aria-disabled"]) return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((i2) => [i2, undefined])));
  for (let i2 in e2) Object.assign(t2, { [i2](n2, ...l2) {
    let a2 = e2[i2];
    for (let d2 of a2) {
      if (n2 instanceof Event && n2.defaultPrevented) return;
      d2(n2, ...l2);
    }
  } });
  return t2;
}
function T$1(r2, t2 = []) {
  let e2 = Object.assign({}, r2);
  for (let o2 of t2) o2 in e2 && delete e2[o2];
  return e2;
}
function v(r2) {
  return r2 == null ? false : typeof r2.type == "string" || typeof r2.type == "object" || typeof r2.type == "function";
}
var u$3 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(u$3 || {});
let f$1 = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(t2, { slots: n2, attrs: i2 }) {
  return () => {
    var r2;
    let { features: e2, ...d2 } = t2, o2 = { "aria-hidden": (e2 & 2) === 2 ? true : (r2 = d2["aria-hidden"]) != null ? r2 : undefined, hidden: (e2 & 4) === 4 ? true : undefined, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
    return A$2({ ourProps: o2, theirProps: d2, slot: {}, attrs: i2, slots: n2, name: "Hidden" });
  };
} });
let n$1 = Symbol("Context");
var i$1 = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(i$1 || {});
function s$2() {
  return l$2() !== null;
}
function l$2() {
  return inject(n$1, null);
}
function t$2(o2) {
  provide(n$1, o2);
}
var o = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o || {});
let t$1 = [];
function E$1(n2, e2, o2, r2) {
  c$2.isServer || watchEffect((t2) => {
    n2 = n2 != null ? n2 : undefined, n2.addEventListener(e2, o2, r2), t2(() => n2.removeEventListener(e2, o2, r2));
  });
}
var d$3 = ((r2) => (r2[r2.Forwards = 0] = "Forwards", r2[r2.Backwards = 1] = "Backwards", r2))(d$3 || {});
function n() {
  let o2 = ref(0);
  return w$3("keydown", (e2) => {
    e2.key === "Tab" && (o2.value = e2.shiftKey ? 1 : 0);
  }), o2;
}
function B(t2) {
  if (!t2) return /* @__PURE__ */ new Set();
  if (typeof t2 == "function") return new Set(t2());
  let n2 = /* @__PURE__ */ new Set();
  for (let r2 of t2.value) {
    let l2 = o$1(r2);
    l2 instanceof HTMLElement && n2.add(l2);
  }
  return n2;
}
var A$1 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.InitialFocus = 2] = "InitialFocus", e2[e2.TabLock = 4] = "TabLock", e2[e2.FocusLock = 8] = "FocusLock", e2[e2.RestoreFocus = 16] = "RestoreFocus", e2[e2.All = 30] = "All", e2))(A$1 || {});
let ue = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(t2, { attrs: n$12, slots: r2, expose: l2 }) {
  let o2 = ref(null);
  l2({ el: o2, $el: o2 });
  let i2 = computed(() => i$3(o2)), e2 = ref(false);
  onMounted(() => e2.value = true), onUnmounted(() => e2.value = false), $$1({ ownerDocument: i2 }, computed(() => e2.value && Boolean(t2.features & 16)));
  let m2 = z$1({ ownerDocument: i2, container: o2, initialFocus: computed(() => t2.initialFocus) }, computed(() => e2.value && Boolean(t2.features & 2)));
  J({ ownerDocument: i2, container: o2, containers: t2.containers, previousActiveElement: m2 }, computed(() => e2.value && Boolean(t2.features & 8)));
  let f2 = n();
  function a2(u2) {
    let T2 = o$1(o2);
    if (!T2) return;
    ((w2) => w2())(() => {
      u$5(f2.value, { [d$3.Forwards]: () => {
        P(T2, N$4.First, { skipElements: [u2.relatedTarget] });
      }, [d$3.Backwards]: () => {
        P(T2, N$4.Last, { skipElements: [u2.relatedTarget] });
      } });
    });
  }
  let s3 = ref(false);
  function F2(u2) {
    u2.key === "Tab" && (s3.value = true, requestAnimationFrame(() => {
      s3.value = false;
    }));
  }
  function H2(u2) {
    if (!e2.value) return;
    let T2 = B(t2.containers);
    o$1(o2) instanceof HTMLElement && T2.add(o$1(o2));
    let d2 = u2.relatedTarget;
    d2 instanceof HTMLElement && d2.dataset.headlessuiFocusGuard !== "true" && (N$2(T2, d2) || (s3.value ? P(o$1(o2), u$5(f2.value, { [d$3.Forwards]: () => N$4.Next, [d$3.Backwards]: () => N$4.Previous }) | N$4.WrapAround, { relativeTo: u2.target }) : u2.target instanceof HTMLElement && S$1(u2.target)));
  }
  return () => {
    let u2 = {}, T2 = { ref: o2, onKeydown: F2, onFocusout: H2 }, { features: d2, initialFocus: w2, containers: Q2, ...O2 } = t2;
    return h$1(Fragment, [Boolean(d2 & 4) && h$1(f$1, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: u$3.Focusable }), A$2({ ourProps: T2, theirProps: { ...n$12, ...O2 }, slot: u2, attrs: n$12, slots: r2, name: "FocusTrap" }), Boolean(d2 & 4) && h$1(f$1, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: u$3.Focusable })]);
  };
} }), { features: A$1 });
function W$1(t2) {
  let n2 = ref(t$1.slice());
  return watch([t2], ([r2], [l2]) => {
    l2 === true && r2 === false ? t$4(() => {
      n2.value.splice(0);
    }) : l2 === false && r2 === true && (n2.value = t$1.slice());
  }, { flush: "post" }), () => {
    var r2;
    return (r2 = n2.value.find((l2) => l2 != null && l2.isConnected)) != null ? r2 : null;
  };
}
function $$1({ ownerDocument: t2 }, n2) {
  let r2 = W$1(n2);
  onMounted(() => {
    watchEffect(() => {
      var l2, o2;
      n2.value || ((l2 = t2.value) == null ? undefined : l2.activeElement) === ((o2 = t2.value) == null ? undefined : o2.body) && S$1(r2());
    }, { flush: "post" });
  }), onUnmounted(() => {
    n2.value && S$1(r2());
  });
}
function z$1({ ownerDocument: t2, container: n2, initialFocus: r2 }, l2) {
  let o2 = ref(null), i2 = ref(false);
  return onMounted(() => i2.value = true), onUnmounted(() => i2.value = false), onMounted(() => {
    watch([n2, r2, l2], (e2, m2) => {
      if (e2.every((a2, s3) => (m2 == null ? undefined : m2[s3]) === a2) || !l2.value) return;
      let f2 = o$1(n2);
      f2 && t$4(() => {
        var F2, H2;
        if (!i2.value) return;
        let a2 = o$1(r2), s3 = (F2 = t2.value) == null ? undefined : F2.activeElement;
        if (a2) {
          if (a2 === s3) {
            o2.value = s3;
            return;
          }
        } else if (f2.contains(s3)) {
          o2.value = s3;
          return;
        }
        a2 ? S$1(a2) : P(f2, N$4.First | N$4.NoScroll) === T$2.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o2.value = (H2 = t2.value) == null ? undefined : H2.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), o2;
}
function J({ ownerDocument: t2, container: n2, containers: r2, previousActiveElement: l2 }, o2) {
  var i2;
  E$1((i2 = t2.value) == null ? undefined : i2.defaultView, "focus", (e2) => {
    if (!o2.value) return;
    let m2 = B(r2);
    o$1(n2) instanceof HTMLElement && m2.add(o$1(n2));
    let f2 = l2.value;
    if (!f2) return;
    let a2 = e2.target;
    a2 && a2 instanceof HTMLElement ? N$2(m2, a2) ? (l2.value = a2, S$1(a2)) : (e2.preventDefault(), e2.stopPropagation(), S$1(f2)) : S$1(l2.value);
  }, true);
}
function N$2(t2, n2) {
  for (let r2 of t2) if (r2.contains(n2)) return true;
  return false;
}
function m$2(t2) {
  let e2 = shallowRef(t2.getSnapshot());
  return onUnmounted(t2.subscribe(() => {
    e2.value = t2.getSnapshot();
  })), e2;
}
function a$1(o2, r2) {
  let t2 = o2(), n2 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t2;
  }, subscribe(e2) {
    return n2.add(e2), () => n2.delete(e2);
  }, dispatch(e2, ...s3) {
    let i2 = r2[e2].call(t2, ...s3);
    i2 && (t2 = i2, n2.forEach((c2) => c2()));
  } };
}
function c() {
  let o2;
  return { before({ doc: e2 }) {
    var l2;
    let n2 = e2.documentElement;
    o2 = ((l2 = e2.defaultView) != null ? l2 : undefined).innerWidth - n2.clientWidth;
  }, after({ doc: e2, d: n2 }) {
    let t2 = e2.documentElement, l2 = t2.clientWidth - t2.offsetWidth, r2 = o2 - l2;
    n2.style(t2, "paddingRight", `${r2}px`);
  } };
}
function w$1() {
  return t$3() ? { before({ doc: r2, d: n2, meta: c2 }) {
    function a2(o2) {
      return c2.containers.flatMap((l2) => l2()).some((l2) => l2.contains(o2));
    }
    n2.microTask(() => {
      var s3;
      if ((undefined).getComputedStyle(r2.documentElement).scrollBehavior !== "auto") {
        let t2 = o$3();
        t2.style(r2.documentElement, "scrollBehavior", "auto"), n2.add(() => n2.microTask(() => t2.dispose()));
      }
      let o2 = (s3 = (undefined).scrollY) != null ? s3 : (undefined).pageYOffset, l2 = null;
      n2.addEventListener(r2, "click", (t2) => {
        if (t2.target instanceof HTMLElement) try {
          let e2 = t2.target.closest("a");
          if (!e2) return;
          let { hash: f2 } = new URL(e2.href), i2 = r2.querySelector(f2);
          i2 && !a2(i2) && (l2 = i2);
        } catch {
        }
      }, true), n2.addEventListener(r2, "touchstart", (t2) => {
        if (t2.target instanceof HTMLElement) if (a2(t2.target)) {
          let e2 = t2.target;
          for (; e2.parentElement && a2(e2.parentElement); ) e2 = e2.parentElement;
          n2.style(e2, "overscrollBehavior", "contain");
        } else n2.style(t2.target, "touchAction", "none");
      }), n2.addEventListener(r2, "touchmove", (t2) => {
        if (t2.target instanceof HTMLElement) {
          if (t2.target.tagName === "INPUT") return;
          if (a2(t2.target)) {
            let e2 = t2.target;
            for (; e2.parentElement && e2.dataset.headlessuiPortal !== "" && !(e2.scrollHeight > e2.clientHeight || e2.scrollWidth > e2.clientWidth); ) e2 = e2.parentElement;
            e2.dataset.headlessuiPortal === "" && t2.preventDefault();
          } else t2.preventDefault();
        }
      }, { passive: false }), n2.add(() => {
        var e2;
        let t2 = (e2 = (undefined).scrollY) != null ? e2 : (undefined).pageYOffset;
        o2 !== t2 && (undefined).scrollTo(0, o2), l2 && l2.isConnected && (l2.scrollIntoView({ block: "nearest" }), l2 = null);
      });
    });
  } } : {};
}
function l$1() {
  return { before({ doc: e2, d: o2 }) {
    o2.style(e2.documentElement, "overflow", "hidden");
  } };
}
function m$1(e2) {
  let n2 = {};
  for (let t2 of e2) Object.assign(n2, t2(n2));
  return n2;
}
let a = a$1(() => /* @__PURE__ */ new Map(), { PUSH(e2, n2) {
  var o2;
  let t2 = (o2 = this.get(e2)) != null ? o2 : { doc: e2, count: 0, d: o$3(), meta: /* @__PURE__ */ new Set() };
  return t2.count++, t2.meta.add(n2), this.set(e2, t2), this;
}, POP(e2, n2) {
  let t2 = this.get(e2);
  return t2 && (t2.count--, t2.meta.delete(n2)), this;
}, SCROLL_PREVENT({ doc: e2, d: n2, meta: t2 }) {
  let o2 = { doc: e2, d: n2, meta: m$1(t2) }, c$12 = [w$1(), c(), l$1()];
  c$12.forEach(({ before: r2 }) => r2 == null ? undefined : r2(o2)), c$12.forEach(({ after: r2 }) => r2 == null ? undefined : r2(o2));
}, SCROLL_ALLOW({ d: e2 }) {
  e2.dispose();
}, TEARDOWN({ doc: e2 }) {
  this.delete(e2);
} });
a.subscribe(() => {
  let e2 = a.getSnapshot(), n2 = /* @__PURE__ */ new Map();
  for (let [t2] of e2) n2.set(t2, t2.documentElement.style.overflow);
  for (let t2 of e2.values()) {
    let o2 = n2.get(t2.doc) === "hidden", c2 = t2.count !== 0;
    (c2 && !o2 || !c2 && o2) && a.dispatch(t2.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t2), t2.count === 0 && a.dispatch("TEARDOWN", t2);
  }
});
function d$2(t2, a$12, n2) {
  let i2 = m$2(a), l2 = computed(() => {
    let e2 = t2.value ? i2.value.get(t2.value) : undefined;
    return e2 ? e2.count > 0 : false;
  });
  return watch([t2, a$12], ([e2, m2], [r2], o2) => {
    if (!e2 || !m2) return;
    a.dispatch("PUSH", e2, n2);
    let f2 = false;
    o2(() => {
      f2 || (a.dispatch("POP", r2 != null ? r2 : e2, n2), f2 = true);
    });
  }, { immediate: true }), l2;
}
let i = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
function E(d2, f2 = ref(true)) {
  watchEffect((o2) => {
    var a2;
    if (!f2.value) return;
    let e2 = o$1(d2);
    if (!e2) return;
    o2(function() {
      var u2;
      if (!e2) return;
      let r2 = (u2 = t.get(e2)) != null ? u2 : 1;
      if (r2 === 1 ? t.delete(e2) : t.set(e2, r2 - 1), r2 !== 1) return;
      let n2 = i.get(e2);
      n2 && (n2["aria-hidden"] === null ? e2.removeAttribute("aria-hidden") : e2.setAttribute("aria-hidden", n2["aria-hidden"]), e2.inert = n2.inert, i.delete(e2));
    });
    let l2 = (a2 = t.get(e2)) != null ? a2 : 0;
    t.set(e2, l2 + 1), l2 === 0 && (i.set(e2, { "aria-hidden": e2.getAttribute("aria-hidden"), inert: e2.inert }), e2.setAttribute("aria-hidden", "true"), e2.inert = true);
  });
}
function N$1({ defaultContainers: o2 = [], portals: i2, mainTreeNodeRef: H2 } = {}) {
  let t2 = ref(null), r2 = i$3(t2);
  function u2() {
    var l2, f2, a2;
    let n2 = [];
    for (let e2 of o2) e2 !== null && (e2 instanceof HTMLElement ? n2.push(e2) : "value" in e2 && e2.value instanceof HTMLElement && n2.push(e2.value));
    if (i2 != null && i2.value) for (let e2 of i2.value) n2.push(e2);
    for (let e2 of (l2 = r2 == null ? undefined : r2.querySelectorAll("html > *, body > *")) != null ? l2 : []) e2 !== (undefined).body && e2 !== (undefined).head && e2 instanceof HTMLElement && e2.id !== "headlessui-portal-root" && (e2.contains(o$1(t2)) || e2.contains((a2 = (f2 = o$1(t2)) == null ? undefined : f2.getRootNode()) == null ? undefined : a2.host) || n2.some((M2) => e2.contains(M2)) || n2.push(e2));
    return n2;
  }
  return { resolveContainers: u2, contains(n2) {
    return u2().some((l2) => l2.contains(n2));
  }, mainTreeNodeRef: t2, MainTreeNode() {
    return H2 != null ? null : h$1(f$1, { features: u$3.Hidden, ref: t2 });
  } };
}
let e = Symbol("ForcePortalRootContext");
function s$1() {
  return inject(e, false);
}
let u$2 = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(o2, { slots: t2, attrs: r2 }) {
  return provide(e, o2.force), () => {
    let { force: f2, ...n2 } = o2;
    return A$2({ theirProps: n2, ourProps: {}, slot: {}, slots: t2, attrs: r2, name: "ForcePortalRoot" });
  };
} });
let u$1 = Symbol("StackContext");
var s2 = ((e2) => (e2[e2.Add = 0] = "Add", e2[e2.Remove = 1] = "Remove", e2))(s2 || {});
function y() {
  return inject(u$1, () => {
  });
}
function R$1({ type: o2, enabled: r2, element: e2, onUpdate: i2 }) {
  let a2 = y();
  function t2(...n2) {
    i2 == null || i2(...n2), a2(...n2);
  }
  onMounted(() => {
    watch(r2, (n2, d2) => {
      n2 ? t2(0, o2, e2) : d2 === true && t2(1, o2, e2);
    }, { immediate: true, flush: "sync" });
  }), onUnmounted(() => {
    r2.value && t2(1, o2, e2);
  }), provide(u$1, t2);
}
let u = Symbol("DescriptionContext");
function w() {
  let t2 = inject(u, null);
  if (t2 === null) throw new Error("Missing parent");
  return t2;
}
function k({ slot: t2 = ref({}), name: o2 = "Description", props: s3 = {} } = {}) {
  let e2 = ref([]);
  function r2(n2) {
    return e2.value.push(n2), () => {
      let i2 = e2.value.indexOf(n2);
      i2 !== -1 && e2.value.splice(i2, 1);
    };
  }
  return provide(u, { register: r2, slot: t2, name: o2, props: s3 }), computed(() => e2.value.length > 0 ? e2.value.join(" ") : undefined);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(t2, { attrs: o2, slots: s3 }) {
  var n2;
  let e2 = (n2 = t2.id) != null ? n2 : `headlessui-description-${i$5()}`, r2 = w();
  return onMounted(() => onUnmounted(r2.register(e2))), () => {
    let { name: i2 = "Description", slot: l2 = ref({}), props: d2 = {} } = r2, { ...c2 } = t2, f2 = { ...Object.entries(d2).reduce((a2, [g2, m2]) => Object.assign(a2, { [g2]: unref(m2) }), {}), id: e2 };
    return A$2({ ourProps: f2, theirProps: c2, slot: l2.value, attrs: o2, slots: s3, name: i2 });
  };
} });
function x(e2) {
  let t2 = i$3(e2);
  if (!t2) {
    if (e2 === null) return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e2}`);
  }
  let l2 = t2.getElementById("headlessui-portal-root");
  if (l2) return l2;
  let r2 = t2.createElement("div");
  return r2.setAttribute("id", "headlessui-portal-root"), t2.body.appendChild(r2);
}
const f = /* @__PURE__ */ new WeakMap();
function U(e2) {
  var t2;
  return (t2 = f.get(e2)) != null ? t2 : 0;
}
function M(e2, t2) {
  let l2 = t2(U(e2));
  return l2 <= 0 ? f.delete(e2) : f.set(e2, l2), l2;
}
let $ = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e2, { slots: t2, attrs: l2 }) {
  let r2 = ref(null), i2 = computed(() => i$3(r2)), o2 = s$1(), u2 = inject(H$1, null), n2 = ref(o2 === true || u2 == null ? x(r2.value) : u2.resolveTarget());
  n2.value && M(n2.value, (a2) => a2 + 1);
  let c2 = ref(false);
  onMounted(() => {
    c2.value = true;
  }), watchEffect(() => {
    o2 || u2 != null && (n2.value = u2.resolveTarget());
  });
  let v2 = inject(d$1, null), g2 = false, b2 = getCurrentInstance();
  return watch(r2, () => {
    if (g2 || !v2) return;
    let a2 = o$1(r2);
    a2 && (onUnmounted(v2.register(a2), b2), g2 = true);
  }), onUnmounted(() => {
    var P2, T2;
    let a2 = (P2 = i2.value) == null ? undefined : P2.getElementById("headlessui-portal-root");
    !a2 || n2.value !== a2 || M(n2.value, (L2) => L2 - 1) || n2.value.children.length > 0 || (T2 = n2.value.parentElement) == null || T2.removeChild(n2.value);
  }), () => {
    if (!c2.value || n2.value === null) return null;
    let a2 = { ref: r2, "data-headlessui-portal": "" };
    return h$1(Teleport, { to: n2.value }, A$2({ ourProps: a2, theirProps: e2, slot: {}, attrs: l2, slots: t2, name: "Portal" }));
  };
} }), d$1 = Symbol("PortalParentContext");
function q() {
  let e2 = inject(d$1, null), t2 = ref([]);
  function l2(o2) {
    return t2.value.push(o2), e2 && e2.register(o2), () => r2(o2);
  }
  function r2(o2) {
    let u2 = t2.value.indexOf(o2);
    u2 !== -1 && t2.value.splice(u2, 1), e2 && e2.unregister(o2);
  }
  let i2 = { register: l2, unregister: r2, portals: t2 };
  return [t2, defineComponent({ name: "PortalWrapper", setup(o2, { slots: u2 }) {
    return provide(d$1, i2), () => {
      var n2;
      return (n2 = u2.default) == null ? undefined : n2.call(u2);
    };
  } })];
}
let H$1 = Symbol("PortalGroupContext"), z = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e2, { attrs: t2, slots: l2 }) {
  let r2 = reactive({ resolveTarget() {
    return e2.target;
  } });
  return provide(H$1, r2), () => {
    let { target: i2, ...o2 } = e2;
    return A$2({ theirProps: o2, ourProps: {}, slot: {}, attrs: t2, slots: l2, name: "PortalGroup" });
  };
} });
var Te$1 = ((l2) => (l2[l2.Open = 0] = "Open", l2[l2.Closed = 1] = "Closed", l2))(Te$1 || {});
let H = Symbol("DialogContext");
function T(t2) {
  let i2 = inject(H, null);
  if (i2 === null) {
    let l2 = new Error(`<${t2} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l2, T), l2;
  }
  return i2;
}
let A = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Ye = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: A }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (t2) => true }, setup(t2, { emit: i2, attrs: l2, slots: p, expose: s$12 }) {
  var q$1, W2;
  let n2 = (q$1 = t2.id) != null ? q$1 : `headlessui-dialog-${i$5()}`, u2 = ref(false);
  onMounted(() => {
    u2.value = true;
  });
  let r2 = false, g2 = computed(() => t2.role === "dialog" || t2.role === "alertdialog" ? t2.role : (r2 || (r2 = true, console.warn(`Invalid role [${g2}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), D = ref(0), S2 = l$2(), R2 = computed(() => t2.open === A && S2 !== null ? (S2.value & i$1.Open) === i$1.Open : t2.open), m2 = ref(null), E$22 = computed(() => i$3(m2));
  if (s$12({ el: m2, $el: m2 }), !(t2.open !== A || S2 !== null)) throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof R2.value != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${R2.value === A ? undefined : t2.open}`);
  let c2 = computed(() => u2.value && R2.value ? 0 : 1), k$1 = computed(() => c2.value === 0), w2 = computed(() => D.value > 1), N2 = inject(H, null) !== null, [Q2, X] = q(), { resolveContainers: B2, mainTreeNodeRef: K, MainTreeNode: Z } = N$1({ portals: Q2, defaultContainers: [computed(() => {
    var e2;
    return (e2 = h2.panelRef.value) != null ? e2 : m2.value;
  })] }), ee = computed(() => w2.value ? "parent" : "leaf"), U2 = computed(() => S2 !== null ? (S2.value & i$1.Closing) === i$1.Closing : false), te = computed(() => N2 || U2.value ? false : k$1.value), le = computed(() => {
    var e2, a2, d2;
    return (d2 = Array.from((a2 = (e2 = E$22.value) == null ? undefined : e2.querySelectorAll("body > *")) != null ? a2 : []).find((f2) => f2.id === "headlessui-portal-root" ? false : f2.contains(o$1(K)) && f2 instanceof HTMLElement)) != null ? d2 : null;
  });
  E(le, te);
  let ae = computed(() => w2.value ? true : k$1.value), oe = computed(() => {
    var e2, a2, d2;
    return (d2 = Array.from((a2 = (e2 = E$22.value) == null ? undefined : e2.querySelectorAll("[data-headlessui-portal]")) != null ? a2 : []).find((f2) => f2.contains(o$1(K)) && f2 instanceof HTMLElement)) != null ? d2 : null;
  });
  E(oe, ae), R$1({ type: "Dialog", enabled: computed(() => c2.value === 0), element: m2, onUpdate: (e2, a2) => {
    if (a2 === "Dialog") return u$5(e2, { [s2.Add]: () => D.value += 1, [s2.Remove]: () => D.value -= 1 });
  } });
  let re = k({ name: "DialogDescription", slot: computed(() => ({ open: R2.value })) }), M2 = ref(null), h2 = { titleId: M2, panelRef: ref(null), dialogState: c2, setTitleId(e2) {
    M2.value !== e2 && (M2.value = e2);
  }, close() {
    i2("close", false);
  } };
  provide(H, h2);
  let ne = computed(() => !(!k$1.value || w2.value));
  w$2(B2, (e2, a2) => {
    e2.preventDefault(), h2.close(), nextTick(() => a2 == null ? undefined : a2.focus());
  }, ne);
  let ie = computed(() => !(w2.value || c2.value !== 0));
  E$1((W2 = E$22.value) == null ? undefined : W2.defaultView, "keydown", (e2) => {
    ie.value && (e2.defaultPrevented || e2.key === o.Escape && (e2.preventDefault(), e2.stopPropagation(), h2.close()));
  });
  let ue$1 = computed(() => !(U2.value || c2.value !== 0 || N2));
  return d$2(E$22, ue$1, (e2) => {
    var a2;
    return { containers: [...(a2 = e2.containers) != null ? a2 : [], B2] };
  }), watchEffect((e2) => {
    if (c2.value !== 0) return;
    let a2 = o$1(m2);
    if (!a2) return;
    let d2 = new ResizeObserver((f2) => {
      for (let L2 of f2) {
        let x2 = L2.target.getBoundingClientRect();
        x2.x === 0 && x2.y === 0 && x2.width === 0 && x2.height === 0 && h2.close();
      }
    });
    d2.observe(a2), e2(() => d2.disconnect());
  }), () => {
    let { open: e2, initialFocus: a2, ...d2 } = t2, f2 = { ...l2, ref: m2, id: n2, role: g2.value, "aria-modal": c2.value === 0 ? true : undefined, "aria-labelledby": M2.value, "aria-describedby": re.value }, L2 = { open: c2.value === 0 };
    return h$1(u$2, { force: true }, () => [h$1($, () => h$1(z, { target: m2.value }, () => h$1(u$2, { force: false }, () => h$1(ue, { initialFocus: a2, containers: B2, features: k$1.value ? u$5(ee.value, { parent: ue.features.RestoreFocus, leaf: ue.features.All & ~ue.features.FocusLock }) : ue.features.None }, () => h$1(X, {}, () => A$2({ ourProps: f2, theirProps: { ...d2, ...l2 }, slot: L2, attrs: l2, slots: p, visible: c2.value === 0, features: N$3.RenderStrategy | N$3.Static, name: "Dialog" })))))), h$1(Z)]);
  };
} });
defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2 }) {
  var u2;
  let p = (u2 = t2.id) != null ? u2 : `headlessui-dialog-overlay-${i$5()}`, s3 = T("DialogOverlay");
  function n2(r2) {
    r2.target === r2.currentTarget && (r2.preventDefault(), r2.stopPropagation(), s3.close());
  }
  return () => {
    let { ...r2 } = t2;
    return A$2({ ourProps: { id: p, "aria-hidden": true, onClick: n2 }, theirProps: r2, slot: { open: s3.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogOverlay" });
  };
} });
defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, inheritAttrs: false, setup(t2, { attrs: i2, slots: l2, expose: p }) {
  var r2;
  let s3 = (r2 = t2.id) != null ? r2 : `headlessui-dialog-backdrop-${i$5()}`, n2 = T("DialogBackdrop"), u2 = ref(null);
  return p({ el: u2, $el: u2 }), onMounted(() => {
    if (n2.panelRef.value === null) throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { ...g2 } = t2, D = { id: s3, ref: u2, "aria-hidden": true };
    return h$1(u$2, { force: true }, () => h$1($, () => A$2({ ourProps: D, theirProps: { ...i2, ...g2 }, slot: { open: n2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogBackdrop" })));
  };
} });
let Ge = defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2, expose: p }) {
  var r2;
  let s3 = (r2 = t2.id) != null ? r2 : `headlessui-dialog-panel-${i$5()}`, n2 = T("DialogPanel");
  p({ el: n2.panelRef, $el: n2.panelRef });
  function u2(g2) {
    g2.stopPropagation();
  }
  return () => {
    let { ...g2 } = t2, D = { id: s3, ref: n2.panelRef, onClick: u2 };
    return A$2({ ourProps: D, theirProps: g2, slot: { open: n2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogPanel" });
  };
} });
defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2 }) {
  var n2;
  let p = (n2 = t2.id) != null ? n2 : `headlessui-dialog-title-${i$5()}`, s3 = T("DialogTitle");
  return onMounted(() => {
    s3.setTitleId(p), onUnmounted(() => s3.setTitleId(null));
  }), () => {
    let { ...u2 } = t2;
    return A$2({ ourProps: { id: p }, theirProps: u2, slot: { open: s3.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogTitle" });
  };
} });
function l(r2) {
  let e2 = { called: false };
  return (...t2) => {
    if (!e2.called) return e2.called = true, r2(...t2);
  };
}
function m(e2, ...t2) {
  e2 && t2.length > 0 && e2.classList.add(...t2);
}
function d(e2, ...t2) {
  e2 && t2.length > 0 && e2.classList.remove(...t2);
}
var g$1 = ((i2) => (i2.Finished = "finished", i2.Cancelled = "cancelled", i2))(g$1 || {});
function F(e2, t2) {
  let i2 = o$3();
  if (!e2) return i2.dispose;
  let { transitionDuration: n2, transitionDelay: a2 } = getComputedStyle(e2), [l2, s3] = [n2, a2].map((o2) => {
    let [u2 = 0] = o2.split(",").filter(Boolean).map((r2) => r2.includes("ms") ? parseFloat(r2) : parseFloat(r2) * 1e3).sort((r2, c2) => c2 - r2);
    return u2;
  });
  return l2 !== 0 ? i2.setTimeout(() => t2("finished"), l2 + s3) : t2("finished"), i2.add(() => t2("cancelled")), i2.dispose;
}
function L$1(e2, t2, i2, n2, a2, l$12) {
  let s3 = o$3(), o2 = l$12 !== undefined ? l(l$12) : () => {
  };
  return d(e2, ...a2), m(e2, ...t2, ...i2), s3.nextFrame(() => {
    d(e2, ...i2), m(e2, ...n2), s3.add(F(e2, (u2) => (d(e2, ...n2, ...t2), m(e2, ...a2), o2(u2))));
  }), s3.add(() => d(e2, ...t2, ...i2, ...n2, ...a2)), s3.add(() => o2("cancelled")), s3.dispose;
}
function g(e2 = "") {
  return e2.split(/\s+/).filter((t2) => t2.length > 1);
}
let R = Symbol("TransitionContext");
var pe = ((a2) => (a2.Visible = "visible", a2.Hidden = "hidden", a2))(pe || {});
function me() {
  return inject(R, null) !== null;
}
function Te() {
  let e2 = inject(R, null);
  if (e2 === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
function ge() {
  let e2 = inject(N, null);
  if (e2 === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
let N = Symbol("NestingContext");
function L(e2) {
  return "children" in e2 ? L(e2.children) : e2.value.filter(({ state: t2 }) => t2 === "visible").length > 0;
}
function Q(e2) {
  let t2 = ref([]), a2 = ref(false);
  onMounted(() => a2.value = true), onUnmounted(() => a2.value = false);
  function s3(n2, r2 = S.Hidden) {
    let l2 = t2.value.findIndex(({ id: f2 }) => f2 === n2);
    l2 !== -1 && (u$5(r2, { [S.Unmount]() {
      t2.value.splice(l2, 1);
    }, [S.Hidden]() {
      t2.value[l2].state = "hidden";
    } }), !L(t2) && a2.value && (e2 == null || e2()));
  }
  function h2(n2) {
    let r2 = t2.value.find(({ id: l2 }) => l2 === n2);
    return r2 ? r2.state !== "visible" && (r2.state = "visible") : t2.value.push({ id: n2, state: "visible" }), () => s3(n2, S.Unmount);
  }
  return { children: t2, register: h2, unregister: s3 };
}
let W = N$3.RenderStrategy, he = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s3, expose: h2 }) {
  let n2 = ref(0);
  function r2() {
    n2.value |= i$1.Opening, t2("beforeEnter");
  }
  function l2() {
    n2.value &= ~i$1.Opening, t2("afterEnter");
  }
  function f2() {
    n2.value |= i$1.Closing, t2("beforeLeave");
  }
  function S$12() {
    n2.value &= ~i$1.Closing, t2("afterLeave");
  }
  if (!me() && s$2()) return () => h$1(Se, { ...e2, onBeforeEnter: r2, onAfterEnter: l2, onBeforeLeave: f2, onAfterLeave: S$12 }, s3);
  let d2 = ref(null), y2 = computed(() => e2.unmount ? S.Unmount : S.Hidden);
  h2({ el: d2, $el: d2 });
  let { show: v2, appear: A2 } = Te(), { register: D, unregister: H2 } = ge(), i2 = ref(v2.value ? "visible" : "hidden"), I2 = { value: true }, c2 = i$5(), b2 = { value: false }, P2 = Q(() => {
    !b2.value && i2.value !== "hidden" && (i2.value = "hidden", H2(c2), S$12());
  });
  onMounted(() => {
    let o2 = D(c2);
    onUnmounted(o2);
  }), watchEffect(() => {
    if (y2.value === S.Hidden && c2) {
      if (v2.value && i2.value !== "visible") {
        i2.value = "visible";
        return;
      }
      u$5(i2.value, { ["hidden"]: () => H2(c2), ["visible"]: () => D(c2) });
    }
  });
  let j2 = g(e2.enter), M2 = g(e2.enterFrom), X = g(e2.enterTo), _ = g(e2.entered), Y = g(e2.leave), Z = g(e2.leaveFrom), ee = g(e2.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (i2.value === "visible") {
        let o2 = o$1(d2);
        if (o2 instanceof Comment && o2.data === "") throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function te(o2) {
    let E2 = I2.value && !A2.value, p = o$1(d2);
    !p || !(p instanceof HTMLElement) || E2 || (b2.value = true, v2.value && r2(), v2.value || f2(), o2(v2.value ? L$1(p, j2, M2, X, _, (V) => {
      b2.value = false, V === g$1.Finished && l2();
    }) : L$1(p, Y, Z, ee, _, (V) => {
      b2.value = false, V === g$1.Finished && (L(P2) || (i2.value = "hidden", H2(c2), S$12()));
    })));
  }
  return onMounted(() => {
    watch([v2], (o2, E2, p) => {
      te(p), I2.value = false;
    }, { immediate: true });
  }), provide(N, P2), t$2(computed(() => u$5(i2.value, { ["visible"]: i$1.Open, ["hidden"]: i$1.Closed }) | n2.value)), () => {
    let { appear: o2, show: E2, enter: p, enterFrom: V, enterTo: Ce, entered: ye, leave: be, leaveFrom: Ee, leaveTo: Ve, ...U2 } = e2, ne = { ref: d2 }, re = { ...U2, ...A2.value && v2.value && c$2.isServer ? { class: normalizeClass([a2.class, U2.class, ...j2, ...M2]) } : {} };
    return A$2({ theirProps: re, ourProps: ne, slot: {}, slots: s3, attrs: a2, features: W, visible: i2.value === "visible", name: "TransitionChild" });
  };
} }), ce = he, Se = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s3 }) {
  let h2 = l$2(), n2 = computed(() => e2.show === null && h2 !== null ? (h2.value & i$1.Open) === i$1.Open : e2.show);
  watchEffect(() => {
    if (![true, false].includes(n2.value)) throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r2 = ref(n2.value ? "visible" : "hidden"), l2 = Q(() => {
    r2.value = "hidden";
  }), f2 = ref(true), S2 = { show: n2, appear: computed(() => e2.appear || !f2.value) };
  return onMounted(() => {
    watchEffect(() => {
      f2.value = false, n2.value ? r2.value = "visible" : L(l2) || (r2.value = "hidden");
    });
  }), provide(N, l2), provide(R, S2), () => {
    let d2 = T$1(e2, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), y2 = { unmount: e2.unmount };
    return A$2({ ourProps: { ...y2, as: "template" }, theirProps: {}, slot: {}, slots: { ...s3, default: () => [h$1(ce, { onBeforeEnter: () => t2("beforeEnter"), onAfterEnter: () => t2("afterEnter"), onBeforeLeave: () => t2("beforeLeave"), onAfterLeave: () => t2("afterLeave"), ...a2, ...y2, ...d2 }, s3.default)] }, attrs: {}, features: W, visible: r2.value === "visible", name: "Transition" });
  };
} });
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "Alert",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "success"
    },
    function: {
      type: Function,
      required: false
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update-value"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const styles = reactive({
      primary: "bg-blue-400",
      success: "bg-emerald-400",
      warning: "bg-orange-400",
      danger: "bg-rose-400"
    });
    const textStyles = reactive({
      primary: "text-white",
      success: "text-green-600",
      warning: "text-orange-500",
      danger: "text-red-500"
    });
    const selectedType = computed(() => {
      if (["primary", "success", "warning", "danger"].includes(props.type))
        return props.type;
      return "primary";
    });
    const selectedStyle = computed(() => styles[selectedType.value]);
    computed(() => textStyles[selectedType.value]);
    const emits = __emit;
    const close = () => {
      if (props.function) props.function();
      emits("update-value", false);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Se), mergeProps({
        show: __props.isShow,
        appear: "",
        class: "relative z-10"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ye), {
              as: "div",
              class: "relative z-99 cursor-pointer",
              onClick: close
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(he), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="fixed inset-0 bg-black bg-opacity-50"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-50" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="fixed inset-0 overflow-y-auto"${_scopeId2}><div class="flex min-h-full items-center justify-center p-4 text-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(he), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "duration-300 ease-in",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="${ssrRenderClass(`p-3 rounded-lg shadow-lg flex flex-col ${unref(selectedStyle)} min-w-100`)}"${_scopeId3}><div class="w-full flex justify-end"${_scopeId3}><p class="text-white font-bold cursor-pointer"${_scopeId3}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36"${_scopeId3}><path fill="currentColor" d="m19.41 18l8.29-8.29a1 1 0 0 0-1.41-1.41L18 16.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29l-8.3 8.29A1 1 0 1 0 9.7 27.7l8.3-8.29l8.29 8.29a1 1 0 0 0 1.41-1.41Z" class="clr-i-outline clr-i-outline-path-1"${_scopeId3}></path><path fill="none" d="M0 0h36v36H0z"${_scopeId3}></path></svg></p></div><div class="flex flex-col gap-1 text-white pt-2 pb-4 px-4"${_scopeId3}><div class="${ssrRenderClass(`font-bold text-2xl mb-1 text-white`)}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                          _push4(`${ssrInterpolate(__props.title)}`);
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div>`);
                        if (__props.text) {
                          _push4(`<div class="text-white text-lg"${_scopeId3}>`);
                          ssrRenderSlot(_ctx.$slots, "text", {}, () => {
                            _push4(`${ssrInterpolate(__props.text)}`);
                          }, _push4, _parent4, _scopeId3);
                          _push4(`</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", {
                            class: `p-3 rounded-lg shadow-lg flex flex-col ${unref(selectedStyle)} min-w-100`
                          }, [
                            createVNode("div", { class: "w-full flex justify-end" }, [
                              createVNode("p", {
                                class: "text-white font-bold cursor-pointer",
                                onClick: close
                              }, [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 36 36"
                                }, [
                                  createVNode("path", {
                                    fill: "currentColor",
                                    d: "m19.41 18l8.29-8.29a1 1 0 0 0-1.41-1.41L18 16.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29l-8.3 8.29A1 1 0 1 0 9.7 27.7l8.3-8.29l8.29 8.29a1 1 0 0 0 1.41-1.41Z",
                                    class: "clr-i-outline clr-i-outline-path-1"
                                  }),
                                  createVNode("path", {
                                    fill: "none",
                                    d: "M0 0h36v36H0z"
                                  })
                                ]))
                              ])
                            ]),
                            createVNode("div", { class: "flex flex-col gap-1 text-white pt-2 pb-4 px-4" }, [
                              createVNode("div", { class: `font-bold text-2xl mb-1 text-white` }, [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createTextVNode(toDisplayString(__props.title), 1)
                                ])
                              ]),
                              __props.text ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "text-white text-lg"
                              }, [
                                renderSlot(_ctx.$slots, "text", {}, () => [
                                  createTextVNode(toDisplayString(__props.text), 1)
                                ])
                              ])) : createCommentVNode("", true)
                            ])
                          ], 2)
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode(unref(he), {
                      as: "template",
                      enter: "duration-300 ease-out",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "duration-200 ease-in",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-50" })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                      createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                        createVNode(unref(he), {
                          as: "template",
                          enter: "duration-300 ease-out",
                          "enter-from": "opacity-0",
                          "enter-to": "opacity-100",
                          leave: "duration-300 ease-in",
                          "leave-from": "opacity-100",
                          "leave-to": "opacity-0"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: `p-3 rounded-lg shadow-lg flex flex-col ${unref(selectedStyle)} min-w-100`
                            }, [
                              createVNode("div", { class: "w-full flex justify-end" }, [
                                createVNode("p", {
                                  class: "text-white font-bold cursor-pointer",
                                  onClick: close
                                }, [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 36 36"
                                  }, [
                                    createVNode("path", {
                                      fill: "currentColor",
                                      d: "m19.41 18l8.29-8.29a1 1 0 0 0-1.41-1.41L18 16.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29l-8.3 8.29A1 1 0 1 0 9.7 27.7l8.3-8.29l8.29 8.29a1 1 0 0 0 1.41-1.41Z",
                                      class: "clr-i-outline clr-i-outline-path-1"
                                    }),
                                    createVNode("path", {
                                      fill: "none",
                                      d: "M0 0h36v36H0z"
                                    })
                                  ]))
                                ])
                              ]),
                              createVNode("div", { class: "flex flex-col gap-1 text-white pt-2 pb-4 px-4" }, [
                                createVNode("div", { class: `font-bold text-2xl mb-1 text-white` }, [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(__props.title), 1)
                                  ])
                                ]),
                                __props.text ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "text-white text-lg"
                                }, [
                                  renderSlot(_ctx.$slots, "text", {}, () => [
                                    createTextVNode(toDisplayString(__props.text), 1)
                                  ])
                                ])) : createCommentVNode("", true)
                              ])
                            ], 2)
                          ]),
                          _: 3
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ye), {
                as: "div",
                class: "relative z-99 cursor-pointer",
                onClick: close
              }, {
                default: withCtx(() => [
                  createVNode(unref(he), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-50" })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                    createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                      createVNode(unref(he), {
                        as: "template",
                        enter: "duration-300 ease-out",
                        "enter-from": "opacity-0",
                        "enter-to": "opacity-100",
                        leave: "duration-300 ease-in",
                        "leave-from": "opacity-100",
                        "leave-to": "opacity-0"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            class: `p-3 rounded-lg shadow-lg flex flex-col ${unref(selectedStyle)} min-w-100`
                          }, [
                            createVNode("div", { class: "w-full flex justify-end" }, [
                              createVNode("p", {
                                class: "text-white font-bold cursor-pointer",
                                onClick: close
                              }, [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 36 36"
                                }, [
                                  createVNode("path", {
                                    fill: "currentColor",
                                    d: "m19.41 18l8.29-8.29a1 1 0 0 0-1.41-1.41L18 16.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29l-8.3 8.29A1 1 0 1 0 9.7 27.7l8.3-8.29l8.29 8.29a1 1 0 0 0 1.41-1.41Z",
                                    class: "clr-i-outline clr-i-outline-path-1"
                                  }),
                                  createVNode("path", {
                                    fill: "none",
                                    d: "M0 0h36v36H0z"
                                  })
                                ]))
                              ])
                            ]),
                            createVNode("div", { class: "flex flex-col gap-1 text-white pt-2 pb-4 px-4" }, [
                              createVNode("div", { class: `font-bold text-2xl mb-1 text-white` }, [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createTextVNode(toDisplayString(__props.title), 1)
                                ])
                              ]),
                              __props.text ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "text-white text-lg"
                              }, [
                                renderSlot(_ctx.$slots, "text", {}, () => [
                                  createTextVNode(toDisplayString(__props.text), 1)
                                ])
                              ])) : createCommentVNode("", true)
                            ])
                          ], 2)
                        ]),
                        _: 3
                      })
                    ])
                  ])
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Alert.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : undefined;
};
const _imports_0$3 = publicAssetsURL("/portfolio/profile2.png");
const _imports_1$1 = publicAssetsURL("/portfolio/developer.png");
const _imports_2$1 = publicAssetsURL("/portfolio/mail.png");
const _imports_3$1 = publicAssetsURL("/portfolio/interview.png");
const _imports_4$1 = publicAssetsURL("/portfolio/finger.png");
const _imports_5$1 = publicAssetsURL("/portfolio/ssn.png");
const email = "jinjinjara0610@gmail.com";
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "AboutMe",
  __ssrInlineRender: true,
  setup(__props) {
    const animatedText1 = ref("\u{1F590}\u{1F3FB} ");
    const animatedText2 = ref("");
    const isTyping = ref(true);
    const copySuccess = ref(false);
    function copyEmail() {
      (undefined).clipboard.writeText(email).then(() => {
        copySuccess.value = true;
        setTimeout(() => {
          copySuccess.value = false;
        }, 1500);
      }).catch((err) => {
        console.error("\uC774\uBA54\uC77C \uBCF5\uC0AC \uC2E4\uD328:", err);
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageSection = _sfc_main$k;
      const _component_Card = __nuxt_component_0$1;
      const _component_Border = __nuxt_component_1$2;
      const _component_PageSmallSection = __nuxt_component_0;
      const _component_PageTitle = _sfc_main$g;
      const _component_Interview = _sfc_main$f;
      const _component_Tag = _sfc_main$e;
      const _component_Alert = _sfc_main$d;
      _push(ssrRenderComponent(_component_PageSection, mergeProps({ "section-id": "about-me" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col" data-v-750ddfc8${_scopeId}><div class="lg:pb-10 pb-4 flex flex-col lg:flex-row gap-4 items-center lg:justify-between justify-center" data-v-750ddfc8${_scopeId}><div class="w-60 lg:w-80" data-v-750ddfc8${_scopeId}><img${ssrRenderAttr("src", _imports_0$3)} data-v-750ddfc8${_scopeId}></div><div class="flex flex-col gap-4 lg:gap-10" data-v-750ddfc8${_scopeId}><p class="text-center lg:text-left text-3xl lg:text-5xl font-extrabold tracking-wider" data-v-750ddfc8${_scopeId}>\uCD5C\uC9C4\uACBD</p><div class="flex flex-col gap-4 lg:gap-6" data-v-750ddfc8${_scopeId}><div class="flex flex-row items-center gap-2 justify-center lg:justify-start" data-v-750ddfc8${_scopeId}><div class="lg:w-7 w-4" data-v-750ddfc8${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} data-v-750ddfc8${_scopeId}></div><p class="text-center lg:text-left text-2xl lg:text-3xl font-semibold text-gray-700" data-v-750ddfc8${_scopeId}>Web Frontend Developer </p></div>`);
            _push2(ssrRenderComponent(_component_Card, { class: "leading-7 px-3 py-4 text-base lg:text-lg lg:w-135 min:w-86 tracking-tighter" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-750ddfc8${_scopeId2}>${ssrInterpolate(unref(animatedText1))} `);
                  if (unref(isTyping) && !unref(animatedText2)) {
                    _push3(`<span class="cursor" data-v-750ddfc8${_scopeId2}></span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</p><p class="ml-[24px] lg:ml-[29px]" data-v-750ddfc8${_scopeId2}>${ssrInterpolate(unref(animatedText2))} `);
                  if (unref(animatedText2)) {
                    _push3(`<span class="cursor" data-v-750ddfc8${_scopeId2}></span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</p>`);
                } else {
                  return [
                    createVNode("p", null, [
                      createTextVNode(toDisplayString(unref(animatedText1)) + " ", 1),
                      unref(isTyping) && !unref(animatedText2) ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "cursor"
                      })) : createCommentVNode("", true)
                    ]),
                    createVNode("p", { class: "ml-[24px] lg:ml-[29px]" }, [
                      createTextVNode(toDisplayString(unref(animatedText2)) + " ", 1),
                      unref(animatedText2) ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "cursor"
                      })) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-row gap-2 items-center lg:justify-start cursor-pointer" data-v-750ddfc8${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} class="lg:w-7 w-4" data-v-750ddfc8${_scopeId}><span data-v-750ddfc8${_scopeId}>${ssrInterpolate(email)}</span></div></div></div></div>`);
            _push2(ssrRenderComponent(_component_Border, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PageSmallSection, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PageTitle, null, {
                    icon: withCtx(({ size }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_3$1)} class="${ssrRenderClass([size])}" data-v-750ddfc8${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: _imports_3$1,
                            class: [size]
                          }, null, 2)
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span data-v-750ddfc8${_scopeId3}>Interview</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Interview")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Interview, null, {
                    question: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Q. \uBCF8\uC778\uC758 <span class="font-bold bg-blue-100 text-gray-800" data-v-750ddfc8${_scopeId3}>\uAC15\uC810</span>\uC774 \uBB50\uB77C\uACE0 \uC0DD\uAC01\uD558\uC2DC\uB098\uC694? `);
                      } else {
                        return [
                          createTextVNode(" Q. \uBCF8\uC778\uC758 "),
                          createVNode("span", { class: "font-bold bg-blue-100 text-gray-800" }, "\uAC15\uC810"),
                          createTextVNode("\uC774 \uBB50\uB77C\uACE0 \uC0DD\uAC01\uD558\uC2DC\uB098\uC694? ")
                        ];
                      }
                    }),
                    answer: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uC800\uB294 <span class="font-semibold" data-v-750ddfc8${_scopeId3}>Nuxt.js</span>\uC640 <span class="font-semibold" data-v-750ddfc8${_scopeId3}>Vue.js</span>\uB97C \uAE30\uBC18\uC73C\uB85C \uD55C \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC744 \uC804\uBB38\uC73C\uB85C \uD558\uBA70, PWA(Progressive Web App)\uC640 iOS \uC6F9\uC571(WebView) \uB4F1 <span class="font-semibold" data-v-750ddfc8${_scopeId3}>\uC6F9\uACFC \uBAA8\uBC14\uC77C \uD658\uACBD \uBAA8\uB450\uB97C \uC544\uC6B0\uB974\uB294 \uD1B5\uD569\uC801 \uC194\uB8E8\uC158\uC744 \uAC1C\uBC1C</span>\uD574\uC654\uC2B5\uB2C8\uB2E4. \uB610\uD55C, \uD504\uB85C\uC81D\uD2B8\uC758 \uCD08\uAE30 \uC124\uACC4 \uB2E8\uACC4\uBD80\uD130 UI/UX \uB514\uC790\uC778, \uD504\uB860\uD2B8\uC5D4\uB4DC \uAD6C\uD604, \uBC31\uC5D4\uB4DC \uC5F0\uB3D9, \uADF8\uB9AC\uACE0 \uC720\uC9C0 \uBCF4\uC218\uAE4C\uC9C0 \uC804\uBC18\uC801\uC778 \uAC1C\uBC1C \uACFC\uC815\uC5D0 \uCC38\uC5EC\uD574, \uC644\uC131\uB3C4 \uB192\uC740 \uACB0\uACFC\uBB3C\uC744 \uB9CC\uB4E4\uC5B4\uC654\uC2B5\uB2C8\uB2E4. `);
                      } else {
                        return [
                          createTextVNode(" \uC800\uB294 "),
                          createVNode("span", { class: "font-semibold" }, "Nuxt.js"),
                          createTextVNode("\uC640 "),
                          createVNode("span", { class: "font-semibold" }, "Vue.js"),
                          createTextVNode("\uB97C \uAE30\uBC18\uC73C\uB85C \uD55C \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC744 \uC804\uBB38\uC73C\uB85C \uD558\uBA70, PWA(Progressive Web App)\uC640 iOS \uC6F9\uC571(WebView) \uB4F1 "),
                          createVNode("span", { class: "font-semibold" }, "\uC6F9\uACFC \uBAA8\uBC14\uC77C \uD658\uACBD \uBAA8\uB450\uB97C \uC544\uC6B0\uB974\uB294 \uD1B5\uD569\uC801 \uC194\uB8E8\uC158\uC744 \uAC1C\uBC1C"),
                          createTextVNode("\uD574\uC654\uC2B5\uB2C8\uB2E4. \uB610\uD55C, \uD504\uB85C\uC81D\uD2B8\uC758 \uCD08\uAE30 \uC124\uACC4 \uB2E8\uACC4\uBD80\uD130 UI/UX \uB514\uC790\uC778, \uD504\uB860\uD2B8\uC5D4\uB4DC \uAD6C\uD604, \uBC31\uC5D4\uB4DC \uC5F0\uB3D9, \uADF8\uB9AC\uACE0 \uC720\uC9C0 \uBCF4\uC218\uAE4C\uC9C0 \uC804\uBC18\uC801\uC778 \uAC1C\uBC1C \uACFC\uC815\uC5D0 \uCC38\uC5EC\uD574, \uC644\uC131\uB3C4 \uB192\uC740 \uACB0\uACFC\uBB3C\uC744 \uB9CC\uB4E4\uC5B4\uC654\uC2B5\uB2C8\uB2E4. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Interview, null, {
                    question: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Q. \uBCF8\uC778\uC774 \uCD94\uAD6C\uD558\uB294 <span class="font-bold bg-blue-100 text-gray-800" data-v-750ddfc8${_scopeId3}>\uAC1C\uBC1C \uAC00\uCE58</span>\uB294? `);
                      } else {
                        return [
                          createTextVNode(" Q. \uBCF8\uC778\uC774 \uCD94\uAD6C\uD558\uB294 "),
                          createVNode("span", { class: "font-bold bg-blue-100 text-gray-800" }, "\uAC1C\uBC1C \uAC00\uCE58"),
                          createTextVNode("\uB294? ")
                        ];
                      }
                    }),
                    answer: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="font-semibold mb-1" data-v-750ddfc8${_scopeId3}>\uC0AC\uC6A9\uC790 \uC911\uC2EC\uC758 \uC124\uACC4</p> \uC800\uB294 \uB2E8\uC21C\uD788 &quot;\uC791\uB3D9\uD558\uB294 \uCF54\uB4DC&quot;\uB97C \uB118\uC5B4, \uC0AC\uC6A9\uC790\uAC00 \uC6D0\uD558\uB294 \uACBD\uD5D8\uC744 \uC81C\uACF5\uD558\uB294 \uB370 \uCD08\uC810\uC744 \uB9DE\uCDA5\uB2C8\uB2E4. \uC6F9\uACFC \uBAA8\uBC14\uC77C \uC571\uC5D0\uC11C \uB3D9\uC77C\uD55C \uC778\uD130\uD398\uC774\uC2A4\uC640 \uC131\uB2A5\uC744 \uC81C\uACF5\uD558\uAE30 \uC704\uD574 \uB04A\uC784\uC5C6\uC774 \uACE0\uBBFC\uD558\uBA70, \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uCD5C\uC801\uD654\uD558\uB294 \uB370 \uC8FC\uB825\uD569\uB2C8\uB2E4. <p class="font-semibold mt-4 mb-1" data-v-750ddfc8${_scopeId3}>\uBB38\uC81C \uD574\uACB0\uC744 \uC704\uD55C \uC801\uADF9\uC801 \uC811\uADFC</p> \uC0C8\uB85C\uC6B4 \uAE30\uC220\uC744 \uBC30\uC6B0\uACE0 \uAE30\uC874 \uC2DC\uC2A4\uD15C\uC744 \uAC1C\uC120\uD558\uB294 \uB370 \uC5F4\uC815\uC801\uC785\uB2C8\uB2E4. \uD2B9\uD788, \uC6F9\uACFC \uB124\uC774\uD2F0\uBE0C \uD658\uACBD\uC758 \uC5F0\uACB0\uACFC \uAC19\uC740 \uBCF5\uC7A1\uD55C \uACFC\uC81C\uB97C \uD574\uACB0\uD558\uBA70 \uC5BB\uC740 \uACBD\uD5D8\uC740 \uC800\uB97C \uD55C\uCE35 \uC131\uC7A5\uD558\uAC8C \uD588\uC2B5\uB2C8\uB2E4. `);
                      } else {
                        return [
                          createVNode("p", { class: "font-semibold mb-1" }, "\uC0AC\uC6A9\uC790 \uC911\uC2EC\uC758 \uC124\uACC4"),
                          createTextVNode(' \uC800\uB294 \uB2E8\uC21C\uD788 "\uC791\uB3D9\uD558\uB294 \uCF54\uB4DC"\uB97C \uB118\uC5B4, \uC0AC\uC6A9\uC790\uAC00 \uC6D0\uD558\uB294 \uACBD\uD5D8\uC744 \uC81C\uACF5\uD558\uB294 \uB370 \uCD08\uC810\uC744 \uB9DE\uCDA5\uB2C8\uB2E4. \uC6F9\uACFC \uBAA8\uBC14\uC77C \uC571\uC5D0\uC11C \uB3D9\uC77C\uD55C \uC778\uD130\uD398\uC774\uC2A4\uC640 \uC131\uB2A5\uC744 \uC81C\uACF5\uD558\uAE30 \uC704\uD574 \uB04A\uC784\uC5C6\uC774 \uACE0\uBBFC\uD558\uBA70, \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uCD5C\uC801\uD654\uD558\uB294 \uB370 \uC8FC\uB825\uD569\uB2C8\uB2E4. '),
                          createVNode("p", { class: "font-semibold mt-4 mb-1" }, "\uBB38\uC81C \uD574\uACB0\uC744 \uC704\uD55C \uC801\uADF9\uC801 \uC811\uADFC"),
                          createTextVNode(" \uC0C8\uB85C\uC6B4 \uAE30\uC220\uC744 \uBC30\uC6B0\uACE0 \uAE30\uC874 \uC2DC\uC2A4\uD15C\uC744 \uAC1C\uC120\uD558\uB294 \uB370 \uC5F4\uC815\uC801\uC785\uB2C8\uB2E4. \uD2B9\uD788, \uC6F9\uACFC \uB124\uC774\uD2F0\uBE0C \uD658\uACBD\uC758 \uC5F0\uACB0\uACFC \uAC19\uC740 \uBCF5\uC7A1\uD55C \uACFC\uC81C\uB97C \uD574\uACB0\uD558\uBA70 \uC5BB\uC740 \uACBD\uD5D8\uC740 \uC800\uB97C \uD55C\uCE35 \uC131\uC7A5\uD558\uAC8C \uD588\uC2B5\uB2C8\uB2E4. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PageTitle, null, {
                      icon: withCtx(({ size }) => [
                        createVNode("img", {
                          src: _imports_3$1,
                          class: [size]
                        }, null, 2)
                      ]),
                      default: withCtx(() => [
                        createVNode("span", null, "Interview")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Interview, null, {
                      question: withCtx(() => [
                        createTextVNode(" Q. \uBCF8\uC778\uC758 "),
                        createVNode("span", { class: "font-bold bg-blue-100 text-gray-800" }, "\uAC15\uC810"),
                        createTextVNode("\uC774 \uBB50\uB77C\uACE0 \uC0DD\uAC01\uD558\uC2DC\uB098\uC694? ")
                      ]),
                      answer: withCtx(() => [
                        createTextVNode(" \uC800\uB294 "),
                        createVNode("span", { class: "font-semibold" }, "Nuxt.js"),
                        createTextVNode("\uC640 "),
                        createVNode("span", { class: "font-semibold" }, "Vue.js"),
                        createTextVNode("\uB97C \uAE30\uBC18\uC73C\uB85C \uD55C \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC744 \uC804\uBB38\uC73C\uB85C \uD558\uBA70, PWA(Progressive Web App)\uC640 iOS \uC6F9\uC571(WebView) \uB4F1 "),
                        createVNode("span", { class: "font-semibold" }, "\uC6F9\uACFC \uBAA8\uBC14\uC77C \uD658\uACBD \uBAA8\uB450\uB97C \uC544\uC6B0\uB974\uB294 \uD1B5\uD569\uC801 \uC194\uB8E8\uC158\uC744 \uAC1C\uBC1C"),
                        createTextVNode("\uD574\uC654\uC2B5\uB2C8\uB2E4. \uB610\uD55C, \uD504\uB85C\uC81D\uD2B8\uC758 \uCD08\uAE30 \uC124\uACC4 \uB2E8\uACC4\uBD80\uD130 UI/UX \uB514\uC790\uC778, \uD504\uB860\uD2B8\uC5D4\uB4DC \uAD6C\uD604, \uBC31\uC5D4\uB4DC \uC5F0\uB3D9, \uADF8\uB9AC\uACE0 \uC720\uC9C0 \uBCF4\uC218\uAE4C\uC9C0 \uC804\uBC18\uC801\uC778 \uAC1C\uBC1C \uACFC\uC815\uC5D0 \uCC38\uC5EC\uD574, \uC644\uC131\uB3C4 \uB192\uC740 \uACB0\uACFC\uBB3C\uC744 \uB9CC\uB4E4\uC5B4\uC654\uC2B5\uB2C8\uB2E4. ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Interview, null, {
                      question: withCtx(() => [
                        createTextVNode(" Q. \uBCF8\uC778\uC774 \uCD94\uAD6C\uD558\uB294 "),
                        createVNode("span", { class: "font-bold bg-blue-100 text-gray-800" }, "\uAC1C\uBC1C \uAC00\uCE58"),
                        createTextVNode("\uB294? ")
                      ]),
                      answer: withCtx(() => [
                        createVNode("p", { class: "font-semibold mb-1" }, "\uC0AC\uC6A9\uC790 \uC911\uC2EC\uC758 \uC124\uACC4"),
                        createTextVNode(' \uC800\uB294 \uB2E8\uC21C\uD788 "\uC791\uB3D9\uD558\uB294 \uCF54\uB4DC"\uB97C \uB118\uC5B4, \uC0AC\uC6A9\uC790\uAC00 \uC6D0\uD558\uB294 \uACBD\uD5D8\uC744 \uC81C\uACF5\uD558\uB294 \uB370 \uCD08\uC810\uC744 \uB9DE\uCDA5\uB2C8\uB2E4. \uC6F9\uACFC \uBAA8\uBC14\uC77C \uC571\uC5D0\uC11C \uB3D9\uC77C\uD55C \uC778\uD130\uD398\uC774\uC2A4\uC640 \uC131\uB2A5\uC744 \uC81C\uACF5\uD558\uAE30 \uC704\uD574 \uB04A\uC784\uC5C6\uC774 \uACE0\uBBFC\uD558\uBA70, \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uCD5C\uC801\uD654\uD558\uB294 \uB370 \uC8FC\uB825\uD569\uB2C8\uB2E4. '),
                        createVNode("p", { class: "font-semibold mt-4 mb-1" }, "\uBB38\uC81C \uD574\uACB0\uC744 \uC704\uD55C \uC801\uADF9\uC801 \uC811\uADFC"),
                        createTextVNode(" \uC0C8\uB85C\uC6B4 \uAE30\uC220\uC744 \uBC30\uC6B0\uACE0 \uAE30\uC874 \uC2DC\uC2A4\uD15C\uC744 \uAC1C\uC120\uD558\uB294 \uB370 \uC5F4\uC815\uC801\uC785\uB2C8\uB2E4. \uD2B9\uD788, \uC6F9\uACFC \uB124\uC774\uD2F0\uBE0C \uD658\uACBD\uC758 \uC5F0\uACB0\uACFC \uAC19\uC740 \uBCF5\uC7A1\uD55C \uACFC\uC81C\uB97C \uD574\uACB0\uD558\uBA70 \uC5BB\uC740 \uACBD\uD5D8\uC740 \uC800\uB97C \uD55C\uCE35 \uC131\uC7A5\uD558\uAC8C \uD588\uC2B5\uB2C8\uB2E4. ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PageSmallSection, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PageTitle, null, {
                    icon: withCtx(({ size }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_1$1)} class="${ssrRenderClass([size])}" data-v-750ddfc8${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: _imports_1$1,
                            class: [size]
                          }, null, 2)
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span data-v-750ddfc8${_scopeId3}>Career</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Career")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="w-full flex lg:flex-row lg:justify-between flex-col gap-2 lg:items-center" data-v-750ddfc8${_scopeId2}><div class="flex flex-row gap-2 items-center" data-v-750ddfc8${_scopeId2}><img${ssrRenderAttr("src", _imports_4$1)} class="w-15 mb-1" data-v-750ddfc8${_scopeId2}><p data-v-750ddfc8${_scopeId2}>(\uC8FC)\uD551\uAC70</p><span class="text-gray-500" data-v-750ddfc8${_scopeId2}>\uAE30\uC220\uC5F0\uAD6C\uC18C</span></div><p class="text-right lg:text-left" data-v-750ddfc8${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Tag, {
                    text: "\uC6F9 \uAC1C\uBC1C\uC790\uB85C \uADFC\uBB34\uC911",
                    class: "mr-2"
                  }, null, _parent3, _scopeId2));
                  _push3(` 2022.03 ~ \uD604\uC7AC </p></div><div class="w-full flex lg:flex-row lg:justify-between flex-col gap-2 lg:items-center" data-v-750ddfc8${_scopeId2}><div class="flex flex-row gap-2 items-center" data-v-750ddfc8${_scopeId2}><img${ssrRenderAttr("src", _imports_5$1)} class="w-10 mb-1" data-v-750ddfc8${_scopeId2}><p data-v-750ddfc8${_scopeId2}>\uC11C\uC6B8\uD2B9\uBCC4\uC2DC\uC0AC\uD68C\uBCF5\uC9C0\uD611\uC758\uD68C</p></div><p class="text-right lg:text-left" data-v-750ddfc8${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Tag, {
                    text: "\uC9C1\uBB34\uBCC0\uACBD \uC804 \uC704\uC0DD\uC0AC\uB85C \uADFC\uBB34",
                    class: "mr-2"
                  }, null, _parent3, _scopeId2));
                  _push3(` 2018.04 ~ 2021.07 </p></div>`);
                } else {
                  return [
                    createVNode(_component_PageTitle, null, {
                      icon: withCtx(({ size }) => [
                        createVNode("img", {
                          src: _imports_1$1,
                          class: [size]
                        }, null, 2)
                      ]),
                      default: withCtx(() => [
                        createVNode("span", null, "Career")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "w-full flex lg:flex-row lg:justify-between flex-col gap-2 lg:items-center" }, [
                      createVNode("div", { class: "flex flex-row gap-2 items-center" }, [
                        createVNode("img", {
                          src: _imports_4$1,
                          class: "w-15 mb-1"
                        }),
                        createVNode("p", null, "(\uC8FC)\uD551\uAC70"),
                        createVNode("span", { class: "text-gray-500" }, "\uAE30\uC220\uC5F0\uAD6C\uC18C")
                      ]),
                      createVNode("p", { class: "text-right lg:text-left" }, [
                        createVNode(_component_Tag, {
                          text: "\uC6F9 \uAC1C\uBC1C\uC790\uB85C \uADFC\uBB34\uC911",
                          class: "mr-2"
                        }),
                        createTextVNode(" 2022.03 ~ \uD604\uC7AC ")
                      ])
                    ]),
                    createVNode("div", { class: "w-full flex lg:flex-row lg:justify-between flex-col gap-2 lg:items-center" }, [
                      createVNode("div", { class: "flex flex-row gap-2 items-center" }, [
                        createVNode("img", {
                          src: _imports_5$1,
                          class: "w-10 mb-1"
                        }),
                        createVNode("p", null, "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC\uC0AC\uD68C\uBCF5\uC9C0\uD611\uC758\uD68C")
                      ]),
                      createVNode("p", { class: "text-right lg:text-left" }, [
                        createVNode(_component_Tag, {
                          text: "\uC9C1\uBB34\uBCC0\uACBD \uC804 \uC704\uC0DD\uC0AC\uB85C \uADFC\uBB34",
                          class: "mr-2"
                        }),
                        createTextVNode(" 2018.04 ~ 2021.07 ")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_Alert, {
              title: "\uC774\uBA54\uC77C \uC8FC\uC18C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!",
              isShow: unref(copySuccess),
              onUpdateValue: (value) => {
                copySuccess.value = value;
              }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex flex-col" }, [
                createVNode("div", { class: "lg:pb-10 pb-4 flex flex-col lg:flex-row gap-4 items-center lg:justify-between justify-center" }, [
                  createVNode("div", { class: "w-60 lg:w-80" }, [
                    createVNode("img", { src: _imports_0$3 })
                  ]),
                  createVNode("div", { class: "flex flex-col gap-4 lg:gap-10" }, [
                    createVNode("p", { class: "text-center lg:text-left text-3xl lg:text-5xl font-extrabold tracking-wider" }, "\uCD5C\uC9C4\uACBD"),
                    createVNode("div", { class: "flex flex-col gap-4 lg:gap-6" }, [
                      createVNode("div", { class: "flex flex-row items-center gap-2 justify-center lg:justify-start" }, [
                        createVNode("div", { class: "lg:w-7 w-4" }, [
                          createVNode("img", { src: _imports_1$1 })
                        ]),
                        createVNode("p", { class: "text-center lg:text-left text-2xl lg:text-3xl font-semibold text-gray-700" }, "Web Frontend Developer ")
                      ]),
                      createVNode(_component_Card, { class: "leading-7 px-3 py-4 text-base lg:text-lg lg:w-135 min:w-86 tracking-tighter" }, {
                        default: withCtx(() => [
                          createVNode("p", null, [
                            createTextVNode(toDisplayString(unref(animatedText1)) + " ", 1),
                            unref(isTyping) && !unref(animatedText2) ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "cursor"
                            })) : createCommentVNode("", true)
                          ]),
                          createVNode("p", { class: "ml-[24px] lg:ml-[29px]" }, [
                            createTextVNode(toDisplayString(unref(animatedText2)) + " ", 1),
                            unref(animatedText2) ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "cursor"
                            })) : createCommentVNode("", true)
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode("div", {
                        class: "flex flex-row gap-2 items-center lg:justify-start cursor-pointer",
                        onClick: ($event) => copyEmail()
                      }, [
                        createVNode("img", {
                          src: _imports_2$1,
                          class: "lg:w-7 w-4"
                        }),
                        createVNode("span", null, toDisplayString(email))
                      ], 8, ["onClick"])
                    ])
                  ])
                ]),
                createVNode(_component_Border),
                createVNode(_component_PageSmallSection, null, {
                  default: withCtx(() => [
                    createVNode(_component_PageTitle, null, {
                      icon: withCtx(({ size }) => [
                        createVNode("img", {
                          src: _imports_3$1,
                          class: [size]
                        }, null, 2)
                      ]),
                      default: withCtx(() => [
                        createVNode("span", null, "Interview")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Interview, null, {
                      question: withCtx(() => [
                        createTextVNode(" Q. \uBCF8\uC778\uC758 "),
                        createVNode("span", { class: "font-bold bg-blue-100 text-gray-800" }, "\uAC15\uC810"),
                        createTextVNode("\uC774 \uBB50\uB77C\uACE0 \uC0DD\uAC01\uD558\uC2DC\uB098\uC694? ")
                      ]),
                      answer: withCtx(() => [
                        createTextVNode(" \uC800\uB294 "),
                        createVNode("span", { class: "font-semibold" }, "Nuxt.js"),
                        createTextVNode("\uC640 "),
                        createVNode("span", { class: "font-semibold" }, "Vue.js"),
                        createTextVNode("\uB97C \uAE30\uBC18\uC73C\uB85C \uD55C \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC744 \uC804\uBB38\uC73C\uB85C \uD558\uBA70, PWA(Progressive Web App)\uC640 iOS \uC6F9\uC571(WebView) \uB4F1 "),
                        createVNode("span", { class: "font-semibold" }, "\uC6F9\uACFC \uBAA8\uBC14\uC77C \uD658\uACBD \uBAA8\uB450\uB97C \uC544\uC6B0\uB974\uB294 \uD1B5\uD569\uC801 \uC194\uB8E8\uC158\uC744 \uAC1C\uBC1C"),
                        createTextVNode("\uD574\uC654\uC2B5\uB2C8\uB2E4. \uB610\uD55C, \uD504\uB85C\uC81D\uD2B8\uC758 \uCD08\uAE30 \uC124\uACC4 \uB2E8\uACC4\uBD80\uD130 UI/UX \uB514\uC790\uC778, \uD504\uB860\uD2B8\uC5D4\uB4DC \uAD6C\uD604, \uBC31\uC5D4\uB4DC \uC5F0\uB3D9, \uADF8\uB9AC\uACE0 \uC720\uC9C0 \uBCF4\uC218\uAE4C\uC9C0 \uC804\uBC18\uC801\uC778 \uAC1C\uBC1C \uACFC\uC815\uC5D0 \uCC38\uC5EC\uD574, \uC644\uC131\uB3C4 \uB192\uC740 \uACB0\uACFC\uBB3C\uC744 \uB9CC\uB4E4\uC5B4\uC654\uC2B5\uB2C8\uB2E4. ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Interview, null, {
                      question: withCtx(() => [
                        createTextVNode(" Q. \uBCF8\uC778\uC774 \uCD94\uAD6C\uD558\uB294 "),
                        createVNode("span", { class: "font-bold bg-blue-100 text-gray-800" }, "\uAC1C\uBC1C \uAC00\uCE58"),
                        createTextVNode("\uB294? ")
                      ]),
                      answer: withCtx(() => [
                        createVNode("p", { class: "font-semibold mb-1" }, "\uC0AC\uC6A9\uC790 \uC911\uC2EC\uC758 \uC124\uACC4"),
                        createTextVNode(' \uC800\uB294 \uB2E8\uC21C\uD788 "\uC791\uB3D9\uD558\uB294 \uCF54\uB4DC"\uB97C \uB118\uC5B4, \uC0AC\uC6A9\uC790\uAC00 \uC6D0\uD558\uB294 \uACBD\uD5D8\uC744 \uC81C\uACF5\uD558\uB294 \uB370 \uCD08\uC810\uC744 \uB9DE\uCDA5\uB2C8\uB2E4. \uC6F9\uACFC \uBAA8\uBC14\uC77C \uC571\uC5D0\uC11C \uB3D9\uC77C\uD55C \uC778\uD130\uD398\uC774\uC2A4\uC640 \uC131\uB2A5\uC744 \uC81C\uACF5\uD558\uAE30 \uC704\uD574 \uB04A\uC784\uC5C6\uC774 \uACE0\uBBFC\uD558\uBA70, \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uCD5C\uC801\uD654\uD558\uB294 \uB370 \uC8FC\uB825\uD569\uB2C8\uB2E4. '),
                        createVNode("p", { class: "font-semibold mt-4 mb-1" }, "\uBB38\uC81C \uD574\uACB0\uC744 \uC704\uD55C \uC801\uADF9\uC801 \uC811\uADFC"),
                        createTextVNode(" \uC0C8\uB85C\uC6B4 \uAE30\uC220\uC744 \uBC30\uC6B0\uACE0 \uAE30\uC874 \uC2DC\uC2A4\uD15C\uC744 \uAC1C\uC120\uD558\uB294 \uB370 \uC5F4\uC815\uC801\uC785\uB2C8\uB2E4. \uD2B9\uD788, \uC6F9\uACFC \uB124\uC774\uD2F0\uBE0C \uD658\uACBD\uC758 \uC5F0\uACB0\uACFC \uAC19\uC740 \uBCF5\uC7A1\uD55C \uACFC\uC81C\uB97C \uD574\uACB0\uD558\uBA70 \uC5BB\uC740 \uACBD\uD5D8\uC740 \uC800\uB97C \uD55C\uCE35 \uC131\uC7A5\uD558\uAC8C \uD588\uC2B5\uB2C8\uB2E4. ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_PageSmallSection, null, {
                  default: withCtx(() => [
                    createVNode(_component_PageTitle, null, {
                      icon: withCtx(({ size }) => [
                        createVNode("img", {
                          src: _imports_1$1,
                          class: [size]
                        }, null, 2)
                      ]),
                      default: withCtx(() => [
                        createVNode("span", null, "Career")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "w-full flex lg:flex-row lg:justify-between flex-col gap-2 lg:items-center" }, [
                      createVNode("div", { class: "flex flex-row gap-2 items-center" }, [
                        createVNode("img", {
                          src: _imports_4$1,
                          class: "w-15 mb-1"
                        }),
                        createVNode("p", null, "(\uC8FC)\uD551\uAC70"),
                        createVNode("span", { class: "text-gray-500" }, "\uAE30\uC220\uC5F0\uAD6C\uC18C")
                      ]),
                      createVNode("p", { class: "text-right lg:text-left" }, [
                        createVNode(_component_Tag, {
                          text: "\uC6F9 \uAC1C\uBC1C\uC790\uB85C \uADFC\uBB34\uC911",
                          class: "mr-2"
                        }),
                        createTextVNode(" 2022.03 ~ \uD604\uC7AC ")
                      ])
                    ]),
                    createVNode("div", { class: "w-full flex lg:flex-row lg:justify-between flex-col gap-2 lg:items-center" }, [
                      createVNode("div", { class: "flex flex-row gap-2 items-center" }, [
                        createVNode("img", {
                          src: _imports_5$1,
                          class: "w-10 mb-1"
                        }),
                        createVNode("p", null, "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC\uC0AC\uD68C\uBCF5\uC9C0\uD611\uC758\uD68C")
                      ]),
                      createVNode("p", { class: "text-right lg:text-left" }, [
                        createVNode(_component_Tag, {
                          text: "\uC9C1\uBB34\uBCC0\uACBD \uC804 \uC704\uC0DD\uC0AC\uB85C \uADFC\uBB34",
                          class: "mr-2"
                        }),
                        createTextVNode(" 2018.04 ~ 2021.07 ")
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_Alert, {
                title: "\uC774\uBA54\uC77C \uC8FC\uC18C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!",
                isShow: unref(copySuccess),
                onUpdateValue: (value) => {
                  copySuccess.value = value;
                }
              }, null, 8, ["isShow", "onUpdateValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutMe.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : undefined;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-750ddfc8"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Component",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-2" }, _attrs))}><p class="text-base text-gray-400">${ssrInterpolate(__props.title)}</p><div class="grid lg:grid-cols-2 lg:grid-cols-4 gap-2 items-center">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Skills/Component.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : undefined;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    },
    level: {
      type: String,
      default: "\uACE0\uAE09"
    },
    noneLevel: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const levelNumber = computed(() => {
      if (props.level === "\uACE0\uAE09") {
        return 3;
      } else if (props.level === "\uC911\uAE09") {
        return 2;
      } else {
        return 1;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_Card, mergeProps({ class: "flex flex-row px-3 py-2 items-center justify-between" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-row items-center gap-2"${_scopeId}><div class="w-5"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "image", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div><p class="text-gray-500"${_scopeId}>${ssrInterpolate(__props.title)}</p></div>`);
            if (!__props.noneLevel) {
              _push2(`<div class="flex flex-row gap-1"${_scopeId}><!--[-->`);
              ssrRenderList(unref(levelNumber), (i2) => {
                _push2(`<div class="w-5 h-5 bg-blue-200 rounded-md"${_scopeId}></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "flex flex-row items-center gap-2" }, [
                createVNode("div", { class: "w-5" }, [
                  renderSlot(_ctx.$slots, "image")
                ]),
                createVNode("p", { class: "text-gray-500" }, toDisplayString(__props.title), 1)
              ]),
              !__props.noneLevel ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex flex-row gap-1"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(levelNumber), (i2) => {
                  return openBlock(), createBlock("div", {
                    key: i2,
                    class: "w-5 h-5 bg-blue-200 rounded-md"
                  });
                }), 128))
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Skills/Card.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : undefined;
};
const _imports_0$2 = publicAssetsURL("/portfolio/skills.png");
const _imports_1 = publicAssetsURL("/portfolio/javascript.png");
const _imports_2 = publicAssetsURL("/portfolio/typescript.png");
const _imports_3 = publicAssetsURL("/portfolio/java.png");
const _imports_4 = publicAssetsURL("/portfolio/swift.png");
const _imports_5 = publicAssetsURL("/portfolio/vue.png");
const _imports_6 = publicAssetsURL("/portfolio/nuxt.png");
const _imports_7 = publicAssetsURL("/portfolio/react.png");
const _imports_8 = publicAssetsURL("/portfolio/springboot.png");
const _imports_9 = publicAssetsURL("/portfolio/postgresql.png");
const _imports_10 = publicAssetsURL("/portfolio/figma.png");
const _imports_11 = publicAssetsURL("/portfolio/docker.png");
const _imports_12 = publicAssetsURL("/portfolio/jira.png");
const _imports_13 = publicAssetsURL("/portfolio/gitlab.png");
const _imports_14 = publicAssetsURL("/portfolio/github.png");
const _imports_15 = publicAssetsURL("/portfolio/notion.png");
const _sfc_main$9 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_PageSection = _sfc_main$k;
  const _component_PageTitle = _sfc_main$g;
  const _component_SkillsComponent = _sfc_main$b;
  const _component_SkillsCard = _sfc_main$a;
  const _component_Border = __nuxt_component_1$2;
  _push(ssrRenderComponent(_component_PageSection, mergeProps({ "section-id": "skills" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-col gap-6 pb-8"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_PageTitle, null, {
          icon: withCtx(({ size }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_0$2)} class="${ssrRenderClass([size])}"${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_0$2,
                  class: [size]
                }, null, 2)
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}>Skills <span class="text-xl lg:text-2xl"${_scopeId2}>&amp;</span> Tools</p>`);
            } else {
              return [
                createVNode("p", null, [
                  createTextVNode("Skills "),
                  createVNode("span", { class: "text-xl lg:text-2xl" }, "&"),
                  createTextVNode(" Tools")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SkillsComponent, { title: "Langauge" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_SkillsCard, { title: "javascript" }, {
                image: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_1)}${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", { src: _imports_1 })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_SkillsCard, { title: "typescript" }, {
                image: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_2)}${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", { src: _imports_2 })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_SkillsCard, {
                title: "Java",
                level: "\uC911\uAE09"
              }, {
                image: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_3)}${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", { src: _imports_3 })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_SkillsCard, {
                title: "Swift",
                level: "\uCD08\uAE09"
              }, {
                image: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_4)}${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", { src: _imports_4 })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_SkillsCard, { title: "javascript" }, {
                  image: withCtx(() => [
                    createVNode("img", { src: _imports_1 })
                  ]),
                  _: 1
                }),
                createVNode(_component_SkillsCard, { title: "typescript" }, {
                  image: withCtx(() => [
                    createVNode("img", { src: _imports_2 })
                  ]),
                  _: 1
                }),
                createVNode(_component_SkillsCard, {
                  title: "Java",
                  level: "\uC911\uAE09"
                }, {
                  image: withCtx(() => [
                    createVNode("img", { src: _imports_3 })
                  ]),
                  _: 1
                }),
                createVNode(_component_SkillsCard, {
                  title: "Swift",
                  level: "\uCD08\uAE09"
                }, {
                  image: withCtx(() => [
                    createVNode("img", { src: _imports_4 })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SkillsComponent, { title: "Framework / Library" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_SkillsCard, { title: "Vue" }, {
                image: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_5)}${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", { src: _imports_5 })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_SkillsCard, { title: "Nuxt" }, {
                image: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_6)}${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", { src: _imports_6 })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_SkillsCard, {
                title: "React",
                level: "\uCD08\uAE09"
              }, {
                image: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_7)}${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", { src: _imports_7 })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_SkillsCard, {
                title: "Spring Boot",
                level: "\uC911\uAE09"
              }, {
                image: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_8)}${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", { src: _imports_8 })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_SkillsCard, { title: "Vue" }, {
                  image: withCtx(() => [
                    createVNode("img", { src: _imports_5 })
                  ]),
                  _: 1
                }),
                createVNode(_component_SkillsCard, { title: "Nuxt" }, {
                  image: withCtx(() => [
                    createVNode("img", { src: _imports_6 })
                  ]),
                  _: 1
                }),
                createVNode(_component_SkillsCard, {
                  title: "React",
                  level: "\uCD08\uAE09"
                }, {
                  image: withCtx(() => [
                    createVNode("img", { src: _imports_7 })
                  ]),
                  _: 1
                }),
                createVNode(_component_SkillsCard, {
                  title: "Spring Boot",
                  level: "\uC911\uAE09"
                }, {
                  image: withCtx(() => [
                    createVNode("img", { src: _imports_8 })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SkillsComponent, { title: "Database" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_SkillsCard, {
                title: "postgresql",
                level: "\uC911\uAE09"
              }, {
                image: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_9)}${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", { src: _imports_9 })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_SkillsCard, {
                  title: "postgresql",
                  level: "\uC911\uAE09"
                }, {
                  image: withCtx(() => [
                    createVNode("img", { src: _imports_9 })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SkillsComponent, { title: "Tools" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_SkillsCard, {
                title: "Figma",
                level: "\uC911\uAE09"
              }, {
                image: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_10)}${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", { src: _imports_10 })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_SkillsCard, {
                title: "Docker",
                level: "\uC911\uAE09"
              }, {
                image: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_11)}${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", { src: _imports_11 })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div class="col-span-2 flex flex-row items-center gap-2"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_SkillsCard, {
                title: "jira",
                "none-level": true
              }, {
                image: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_12)}${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", { src: _imports_12 })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_SkillsCard, {
                title: "gitlab",
                "none-level": true
              }, {
                image: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_13)}${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", { src: _imports_13 })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_SkillsCard, {
                title: "github",
                "none-level": true
              }, {
                image: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_14)}${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", { src: _imports_14 })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_SkillsCard, {
                title: "notion",
                "none-level": true
              }, {
                image: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_15)}${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", { src: _imports_15 })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode(_component_SkillsCard, {
                  title: "Figma",
                  level: "\uC911\uAE09"
                }, {
                  image: withCtx(() => [
                    createVNode("img", { src: _imports_10 })
                  ]),
                  _: 1
                }),
                createVNode(_component_SkillsCard, {
                  title: "Docker",
                  level: "\uC911\uAE09"
                }, {
                  image: withCtx(() => [
                    createVNode("img", { src: _imports_11 })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "col-span-2 flex flex-row items-center gap-2" }, [
                  createVNode(_component_SkillsCard, {
                    title: "jira",
                    "none-level": true
                  }, {
                    image: withCtx(() => [
                      createVNode("img", { src: _imports_12 })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_SkillsCard, {
                    title: "gitlab",
                    "none-level": true
                  }, {
                    image: withCtx(() => [
                      createVNode("img", { src: _imports_13 })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_SkillsCard, {
                    title: "github",
                    "none-level": true
                  }, {
                    image: withCtx(() => [
                      createVNode("img", { src: _imports_14 })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_SkillsCard, {
                    title: "notion",
                    "none-level": true
                  }, {
                    image: withCtx(() => [
                      createVNode("img", { src: _imports_15 })
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
        _push2(ssrRenderComponent(_component_Border, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", { class: "flex flex-col gap-6 pb-8" }, [
            createVNode(_component_PageTitle, null, {
              icon: withCtx(({ size }) => [
                createVNode("img", {
                  src: _imports_0$2,
                  class: [size]
                }, null, 2)
              ]),
              default: withCtx(() => [
                createVNode("p", null, [
                  createTextVNode("Skills "),
                  createVNode("span", { class: "text-xl lg:text-2xl" }, "&"),
                  createTextVNode(" Tools")
                ])
              ]),
              _: 1
            }),
            createVNode(_component_SkillsComponent, { title: "Langauge" }, {
              default: withCtx(() => [
                createVNode(_component_SkillsCard, { title: "javascript" }, {
                  image: withCtx(() => [
                    createVNode("img", { src: _imports_1 })
                  ]),
                  _: 1
                }),
                createVNode(_component_SkillsCard, { title: "typescript" }, {
                  image: withCtx(() => [
                    createVNode("img", { src: _imports_2 })
                  ]),
                  _: 1
                }),
                createVNode(_component_SkillsCard, {
                  title: "Java",
                  level: "\uC911\uAE09"
                }, {
                  image: withCtx(() => [
                    createVNode("img", { src: _imports_3 })
                  ]),
                  _: 1
                }),
                createVNode(_component_SkillsCard, {
                  title: "Swift",
                  level: "\uCD08\uAE09"
                }, {
                  image: withCtx(() => [
                    createVNode("img", { src: _imports_4 })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_SkillsComponent, { title: "Framework / Library" }, {
              default: withCtx(() => [
                createVNode(_component_SkillsCard, { title: "Vue" }, {
                  image: withCtx(() => [
                    createVNode("img", { src: _imports_5 })
                  ]),
                  _: 1
                }),
                createVNode(_component_SkillsCard, { title: "Nuxt" }, {
                  image: withCtx(() => [
                    createVNode("img", { src: _imports_6 })
                  ]),
                  _: 1
                }),
                createVNode(_component_SkillsCard, {
                  title: "React",
                  level: "\uCD08\uAE09"
                }, {
                  image: withCtx(() => [
                    createVNode("img", { src: _imports_7 })
                  ]),
                  _: 1
                }),
                createVNode(_component_SkillsCard, {
                  title: "Spring Boot",
                  level: "\uC911\uAE09"
                }, {
                  image: withCtx(() => [
                    createVNode("img", { src: _imports_8 })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_SkillsComponent, { title: "Database" }, {
              default: withCtx(() => [
                createVNode(_component_SkillsCard, {
                  title: "postgresql",
                  level: "\uC911\uAE09"
                }, {
                  image: withCtx(() => [
                    createVNode("img", { src: _imports_9 })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_SkillsComponent, { title: "Tools" }, {
              default: withCtx(() => [
                createVNode(_component_SkillsCard, {
                  title: "Figma",
                  level: "\uC911\uAE09"
                }, {
                  image: withCtx(() => [
                    createVNode("img", { src: _imports_10 })
                  ]),
                  _: 1
                }),
                createVNode(_component_SkillsCard, {
                  title: "Docker",
                  level: "\uC911\uAE09"
                }, {
                  image: withCtx(() => [
                    createVNode("img", { src: _imports_11 })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "col-span-2 flex flex-row items-center gap-2" }, [
                  createVNode(_component_SkillsCard, {
                    title: "jira",
                    "none-level": true
                  }, {
                    image: withCtx(() => [
                      createVNode("img", { src: _imports_12 })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_SkillsCard, {
                    title: "gitlab",
                    "none-level": true
                  }, {
                    image: withCtx(() => [
                      createVNode("img", { src: _imports_13 })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_SkillsCard, {
                    title: "github",
                    "none-level": true
                  }, {
                    image: withCtx(() => [
                      createVNode("img", { src: _imports_14 })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_SkillsCard, {
                    title: "notion",
                    "none-level": true
                  }, {
                    image: withCtx(() => [
                      createVNode("img", { src: _imports_15 })
                    ]),
                    _: 1
                  })
                ])
              ]),
              _: 1
            })
          ]),
          createVNode(_component_Border)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Skills/index.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : undefined;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$4]]);
const _imports_0$1 = publicAssetsURL("/portfolio/archive.png");
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    tags: {
      type: Array,
      default: []
    },
    noImage: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = __nuxt_component_0$1;
      const _component_Tag = _sfc_main$e;
      _push(ssrRenderComponent(_component_Card, mergeProps({ class: "h-100 overflow-hidden cursor-pointer hover:bg-zinc-200 duration-300 transition-colors" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col"${_scopeId}><div class="h-50 overflow-hidden border-b-1 border-gray-300 bg-white flex items-center justify-center"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "image", {}, null, _push2, _parent2, _scopeId);
            if (__props.noImage) {
              _push2(`<img${ssrRenderAttr("src", _imports_0$1)} class="w-40"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="h-50 flex flex-col justify-between p-4"${_scopeId}><div class="h-full flex flex-col gap-2"${_scopeId}><p class="text-xl font-semibold"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
            _push2(`</p><p class="leading-6 text-[0.9rem]"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "desc", {}, null, _push2, _parent2, _scopeId);
            _push2(`</p></div>`);
            if (__props.tags.length > 0) {
              _push2(`<div class="flex flex-row gap-2"${_scopeId}><!--[-->`);
              ssrRenderList(__props.tags, (item, i2) => {
                _push2(ssrRenderComponent(_component_Tag, {
                  key: i2,
                  text: `# ${item}`
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col" }, [
                createVNode("div", { class: "h-50 overflow-hidden border-b-1 border-gray-300 bg-white flex items-center justify-center" }, [
                  renderSlot(_ctx.$slots, "image"),
                  __props.noImage ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: _imports_0$1,
                    class: "w-40"
                  })) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "h-50 flex flex-col justify-between p-4" }, [
                  createVNode("div", { class: "h-full flex flex-col gap-2" }, [
                    createVNode("p", { class: "text-xl font-semibold" }, [
                      renderSlot(_ctx.$slots, "title")
                    ]),
                    createVNode("p", { class: "leading-6 text-[0.9rem]" }, [
                      renderSlot(_ctx.$slots, "desc")
                    ])
                  ]),
                  __props.tags.length > 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex flex-row gap-2"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.tags, (item, i2) => {
                      return openBlock(), createBlock(_component_Tag, {
                        key: i2,
                        text: `# ${item}`
                      }, null, 8, ["text"]);
                    }), 128))
                  ])) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Project/Card.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : undefined;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Se), mergeProps({
        appear: "",
        show: __props.isOpen,
        as: "template"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ye), {
              as: "div",
              class: "relative z-70",
              onClose: ($event) => _ctx.$emit(`close`)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(he), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="fixed inset-0 bg-black bg-opacity-80"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-80" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="fixed inset-0 overflow-y-auto"${_scopeId2}><div class="flex min-h-full items-end justify-center align-middle"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(he), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0 scale-95",
                    "enter-to": "opacity-100 scale-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100 scale-100",
                    "leave-to": "opacity-0 scale-95"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Ge), { class: "w-full max-w-[900px] transform align-middle shadow-xl transition-all relative" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="absolute top-0 left-0 flex flex-col z-80 bg-transparent fixed transform -translate-y-10"${_scopeId4}><div class="fordertitle bg-[#ffd689] h-10 px-4 flex items-center justify-center rounded-t-xl cursor-pointer"${_scopeId4}><p class="text-base pt-2"${_scopeId4}>`);
                              ssrRenderSlot(_ctx.$slots, "title", {}, null, _push5, _parent5, _scopeId4);
                              _push5(`</p></div></div><div class="h-4 rounded-tr-xl bg-[#ffd689] shadow-inner-custom"${_scopeId4}></div><div class="w-full h-[88dvh] bg-white flex flex-col gap-5 overflow-y-auto"${_scopeId4}><div class="px-7 mt-16"${_scopeId4}><p class="text-4xl font-semibold"${_scopeId4}>`);
                              ssrRenderSlot(_ctx.$slots, "title", {}, null, _push5, _parent5, _scopeId4);
                              _push5(`</p>`);
                              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                              _push5(`</div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "absolute top-0 left-0 flex flex-col z-80 bg-transparent fixed transform -translate-y-10" }, [
                                  createVNode("div", {
                                    class: "fordertitle bg-[#ffd689] h-10 px-4 flex items-center justify-center rounded-t-xl cursor-pointer",
                                    onClick: ($event) => _ctx.$emit("close")
                                  }, [
                                    createVNode("p", { class: "text-base pt-2" }, [
                                      renderSlot(_ctx.$slots, "title")
                                    ])
                                  ], 8, ["onClick"])
                                ]),
                                createVNode("div", { class: "h-4 rounded-tr-xl bg-[#ffd689] shadow-inner-custom" }),
                                createVNode("div", { class: "w-full h-[88dvh] bg-white flex flex-col gap-5 overflow-y-auto" }, [
                                  createVNode("div", { class: "px-7 mt-16" }, [
                                    createVNode("p", { class: "text-4xl font-semibold" }, [
                                      renderSlot(_ctx.$slots, "title")
                                    ]),
                                    renderSlot(_ctx.$slots, "default")
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 3
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Ge), { class: "w-full max-w-[900px] transform align-middle shadow-xl transition-all relative" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "absolute top-0 left-0 flex flex-col z-80 bg-transparent fixed transform -translate-y-10" }, [
                                createVNode("div", {
                                  class: "fordertitle bg-[#ffd689] h-10 px-4 flex items-center justify-center rounded-t-xl cursor-pointer",
                                  onClick: ($event) => _ctx.$emit("close")
                                }, [
                                  createVNode("p", { class: "text-base pt-2" }, [
                                    renderSlot(_ctx.$slots, "title")
                                  ])
                                ], 8, ["onClick"])
                              ]),
                              createVNode("div", { class: "h-4 rounded-tr-xl bg-[#ffd689] shadow-inner-custom" }),
                              createVNode("div", { class: "w-full h-[88dvh] bg-white flex flex-col gap-5 overflow-y-auto" }, [
                                createVNode("div", { class: "px-7 mt-16" }, [
                                  createVNode("p", { class: "text-4xl font-semibold" }, [
                                    renderSlot(_ctx.$slots, "title")
                                  ]),
                                  renderSlot(_ctx.$slots, "default")
                                ])
                              ])
                            ]),
                            _: 3
                          })
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode(unref(he), {
                      as: "template",
                      enter: "duration-300 ease-out",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "duration-200 ease-in",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-80" })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                      createVNode("div", { class: "flex min-h-full items-end justify-center align-middle" }, [
                        createVNode(unref(he), {
                          as: "template",
                          enter: "duration-300 ease-out",
                          "enter-from": "opacity-0 scale-95",
                          "enter-to": "opacity-100 scale-100",
                          leave: "duration-200 ease-in",
                          "leave-from": "opacity-100 scale-100",
                          "leave-to": "opacity-0 scale-95"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Ge), { class: "w-full max-w-[900px] transform align-middle shadow-xl transition-all relative" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "absolute top-0 left-0 flex flex-col z-80 bg-transparent fixed transform -translate-y-10" }, [
                                  createVNode("div", {
                                    class: "fordertitle bg-[#ffd689] h-10 px-4 flex items-center justify-center rounded-t-xl cursor-pointer",
                                    onClick: ($event) => _ctx.$emit("close")
                                  }, [
                                    createVNode("p", { class: "text-base pt-2" }, [
                                      renderSlot(_ctx.$slots, "title")
                                    ])
                                  ], 8, ["onClick"])
                                ]),
                                createVNode("div", { class: "h-4 rounded-tr-xl bg-[#ffd689] shadow-inner-custom" }),
                                createVNode("div", { class: "w-full h-[88dvh] bg-white flex flex-col gap-5 overflow-y-auto" }, [
                                  createVNode("div", { class: "px-7 mt-16" }, [
                                    createVNode("p", { class: "text-4xl font-semibold" }, [
                                      renderSlot(_ctx.$slots, "title")
                                    ]),
                                    renderSlot(_ctx.$slots, "default")
                                  ])
                                ])
                              ]),
                              _: 3
                            })
                          ]),
                          _: 3
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ye), {
                as: "div",
                class: "relative z-70",
                onClose: ($event) => _ctx.$emit(`close`)
              }, {
                default: withCtx(() => [
                  createVNode(unref(he), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-80" })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                    createVNode("div", { class: "flex min-h-full items-end justify-center align-middle" }, [
                      createVNode(unref(he), {
                        as: "template",
                        enter: "duration-300 ease-out",
                        "enter-from": "opacity-0 scale-95",
                        "enter-to": "opacity-100 scale-100",
                        leave: "duration-200 ease-in",
                        "leave-from": "opacity-100 scale-100",
                        "leave-to": "opacity-0 scale-95"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Ge), { class: "w-full max-w-[900px] transform align-middle shadow-xl transition-all relative" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "absolute top-0 left-0 flex flex-col z-80 bg-transparent fixed transform -translate-y-10" }, [
                                createVNode("div", {
                                  class: "fordertitle bg-[#ffd689] h-10 px-4 flex items-center justify-center rounded-t-xl cursor-pointer",
                                  onClick: ($event) => _ctx.$emit("close")
                                }, [
                                  createVNode("p", { class: "text-base pt-2" }, [
                                    renderSlot(_ctx.$slots, "title")
                                  ])
                                ], 8, ["onClick"])
                              ]),
                              createVNode("div", { class: "h-4 rounded-tr-xl bg-[#ffd689] shadow-inner-custom" }),
                              createVNode("div", { class: "w-full h-[88dvh] bg-white flex flex-col gap-5 overflow-y-auto" }, [
                                createVNode("div", { class: "px-7 mt-16" }, [
                                  createVNode("p", { class: "text-4xl font-semibold" }, [
                                    renderSlot(_ctx.$slots, "title")
                                  ]),
                                  renderSlot(_ctx.$slots, "default")
                                ])
                              ])
                            ]),
                            _: 3
                          })
                        ]),
                        _: 3
                      })
                    ])
                  ])
                ]),
                _: 3
              }, 8, ["onClose"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Project/Modal/index.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : undefined;
};
const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}> incheon-tp </div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Project/Incheon.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : undefined;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Summary",
  __ssrInlineRender: true,
  props: {
    tags: {
      type: Array,
      default: []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Tag = _sfc_main$e;
      const _component_Border = __nuxt_component_1$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4 mt-6" }, _attrs))}><div class="flex flex-row"><p class="text-gray-600 min-w-40 w-1/4">Skills and Tools</p>`);
      if (__props.tags.length > 0) {
        _push(`<div class="flex flex-row gap-2"><!--[-->`);
        ssrRenderList(__props.tags, (item, i2) => {
          _push(ssrRenderComponent(_component_Tag, {
            key: i2,
            text: `${item}`
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-row"><p class="text-gray-600 min-w-40 w-1/4">\uC791\uC5C5 \uAE30\uAC04</p>`);
      ssrRenderSlot(_ctx.$slots, "period", {}, null, _push, _parent);
      _push(`</div><div class="flex flex-row"><p class="text-gray-600 min-w-40 w-1/4">\uD300 \uAD6C\uC131</p>`);
      ssrRenderSlot(_ctx.$slots, "team", {}, null, _push, _parent);
      _push(`</div><div class="flex flex-row"><p class="text-gray-600 min-w-40 w-1/4">\uB2F4\uB2F9 \uD30C\uD2B8</p>`);
      ssrRenderSlot(_ctx.$slots, "part", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Border, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Project/Modal/Summary.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : undefined;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_PageSmallSection = __nuxt_component_0;
  const _component_PageTitle = _sfc_main$g;
  _push(ssrRenderComponent(_component_PageSmallSection, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_PageTitle, {
          size: "sm",
          class: "pb-0"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}>\u{1F680} \uD504\uB85C\uC81D\uD2B8 \uAC1C\uC694</p>`);
            } else {
              return [
                createVNode("p", null, "\u{1F680} \uD504\uB85C\uC81D\uD2B8 \uAC1C\uC694")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="pl-5"${_scopeId}><ul class="list-disc leading-7 space-y-3"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        _push2(`</ul></div>`);
      } else {
        return [
          createVNode(_component_PageTitle, {
            size: "sm",
            class: "pb-0"
          }, {
            default: withCtx(() => [
              createVNode("p", null, "\u{1F680} \uD504\uB85C\uC81D\uD2B8 \uAC1C\uC694")
            ]),
            _: 1
          }),
          createVNode("div", { class: "pl-5" }, [
            createVNode("ul", { class: "list-disc leading-7 space-y-3" }, [
              renderSlot(_ctx.$slots, "default")
            ])
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Project/Modal/Outline.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_PageSmallSection = __nuxt_component_0;
  const _component_PageTitle = _sfc_main$g;
  _push(ssrRenderComponent(_component_PageSmallSection, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_PageTitle, {
          size: "sm",
          class: "pb-0"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}>\u{1F4CC} \uAD6C\uD604 \uAE30\uB2A5</p>`);
            } else {
              return [
                createVNode("p", null, "\u{1F4CC} \uAD6C\uD604 \uAE30\uB2A5")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="pl-5"${_scopeId}><ul class="list-disc leading-7 space-y-3"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        _push2(`</ul></div>`);
      } else {
        return [
          createVNode(_component_PageTitle, {
            size: "sm",
            class: "pb-0"
          }, {
            default: withCtx(() => [
              createVNode("p", null, "\u{1F4CC} \uAD6C\uD604 \uAE30\uB2A5")
            ]),
            _: 1
          }),
          createVNode("div", { class: "pl-5" }, [
            createVNode("ul", { class: "list-disc leading-7 space-y-3" }, [
              renderSlot(_ctx.$slots, "default")
            ])
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Project/Modal/Function.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ProjectModalSummary = _sfc_main$5;
  const _component_ProjectModalOutline = __nuxt_component_1;
  const _component_Tag = _sfc_main$e;
  const _component_ProjectModalFunction = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ProjectModalSummary, { tags: ["nuxt.js", "pwa", "swift UI", "golang", "docker"] }, {
    period: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` 2024.02 ~ 2024.09 `);
      } else {
        return [
          createTextVNode(" 2024.02 ~ 2024.09 ")
        ];
      }
    }),
    team: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \uD504\uB860\uD2B8 \uAC1C\uBC1C\uC790 1\uBA85(\uBCF8\uC778), \uBC31\uC5D4\uB4DC \uAC1C\uBC1C\uC790 2\uBA85 `);
      } else {
        return [
          createTextVNode(" \uD504\uB860\uD2B8 \uAC1C\uBC1C\uC790 1\uBA85(\uBCF8\uC778), \uBC31\uC5D4\uB4DC \uAC1C\uBC1C\uC790 2\uBA85 ")
        ];
      }
    }),
    part: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \uC6F9 \uAC1C\uBC1C, \uC6F9\uC571(ios) \uAC1C\uBC1C, did library \uAC1C\uBC1C \uBC31\uC5C5 \uC5C5\uBB34 `);
      } else {
        return [
          createTextVNode(" \uC6F9 \uAC1C\uBC1C, \uC6F9\uC571(ios) \uAC1C\uBC1C, did library \uAC1C\uBC1C \uBC31\uC5C5 \uC5C5\uBB34 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_ProjectModalOutline, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li${_scopeId}>PWA \uAE30\uBC18\uC758 \uC6F9\uC0AC\uC774\uD2B8\uB85C \uC2DC\uC791\uD558\uC5EC, \uC774\uD6C4 \uC0AC\uC6A9\uC790 \uC694\uAD6C\uC5D0 \uB530\uB77C iOS \uC6F9\uC571 \uBC84\uC804\uC73C\uB85C \uD655\uC7A5 \uAC1C\uBC1C</li><li${_scopeId}>\uC0AC\uC6A9\uC790\uAC00 DID<span class="text-gray-500"${_scopeId}>(Decentralized Identity, \uBD84\uC0B0\uC2E0\uC6D0\uD655\uC778)</span> \uBC0F VC<span class="text-gray-500"${_scopeId}>(\uAC80\uC99D \uAC00\uB2A5\uD55C \uC790\uACA9 \uC99D\uBA85)</span>\uB97C \uBC1C\uAE09, \uC800\uC7A5, \uC870\uD68C\uD560 \uC218 \uC788\uB294 \uAE30\uB2A5\uC744 \uC81C\uACF5 <ul class="list-circle pl-5"${_scopeId}><li${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Tag, {
          "is-skill": true,
          text: "cypto.js"
        }, null, _parent2, _scopeId));
        _push2(` \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uD65C\uC6A9\uD55C \uB370\uC774\uD130 \uC554\uD638\uD654 \uC9C0\uC6D0</li><li${_scopeId}>Index DB\uB97C \uC0AC\uC6A9\uD558\uC5EC \uBCF5\uC7A1\uD55C \uAD6C\uC870\uC758 DID, VC \uB370\uC774\uD130 \uC800\uC7A5</li></ul></li><li${_scopeId}>\uBCF4\uC720\uD558\uACE0 \uC788\uB294 VC\uB85C VP<span class="text-gray-500"${_scopeId}>(\uAC80\uC99D \uAC00\uB2A5\uD55C \uD504\uB808\uC820\uD14C\uC774\uC158)</span>\uC744 \uC0DD\uC131\uD558\uC5EC \uC778\uC99D\uAE30\uAD00\uC5D0 \uAC80\uC99D \uC694\uCCAD\uD558\uB294 \uAE30\uB2A5\uC744 \uC81C\uACF5 <ul class="list-circle pl-5"${_scopeId}><li${_scopeId}>ex) \uC0AC\uC6D0\uC99D \uBC0F \uCD9C\uC785\uC99D</li><li${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Tag, {
          "is-skill": true,
          text: "vue-qrcode"
        }, null, _parent2, _scopeId));
        _push2(` \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC0AC\uC6A9\uD558\uC5EC VP \uB370\uC774\uD130\uB97C QR code\uB85C \uC0DD\uC131 \uBC0F \uB9AC\uB529\uD558\uB294 \uAE30\uB2A5 \uAD6C\uD604</li></ul></li>`);
      } else {
        return [
          createVNode("li", null, "PWA \uAE30\uBC18\uC758 \uC6F9\uC0AC\uC774\uD2B8\uB85C \uC2DC\uC791\uD558\uC5EC, \uC774\uD6C4 \uC0AC\uC6A9\uC790 \uC694\uAD6C\uC5D0 \uB530\uB77C iOS \uC6F9\uC571 \uBC84\uC804\uC73C\uB85C \uD655\uC7A5 \uAC1C\uBC1C"),
          createVNode("li", null, [
            createTextVNode("\uC0AC\uC6A9\uC790\uAC00 DID"),
            createVNode("span", { class: "text-gray-500" }, "(Decentralized Identity, \uBD84\uC0B0\uC2E0\uC6D0\uD655\uC778)"),
            createTextVNode(" \uBC0F VC"),
            createVNode("span", { class: "text-gray-500" }, "(\uAC80\uC99D \uAC00\uB2A5\uD55C \uC790\uACA9 \uC99D\uBA85)"),
            createTextVNode("\uB97C \uBC1C\uAE09, \uC800\uC7A5, \uC870\uD68C\uD560 \uC218 \uC788\uB294 \uAE30\uB2A5\uC744 \uC81C\uACF5 "),
            createVNode("ul", { class: "list-circle pl-5" }, [
              createVNode("li", null, [
                createVNode(_component_Tag, {
                  "is-skill": true,
                  text: "cypto.js"
                }),
                createTextVNode(" \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uD65C\uC6A9\uD55C \uB370\uC774\uD130 \uC554\uD638\uD654 \uC9C0\uC6D0")
              ]),
              createVNode("li", null, "Index DB\uB97C \uC0AC\uC6A9\uD558\uC5EC \uBCF5\uC7A1\uD55C \uAD6C\uC870\uC758 DID, VC \uB370\uC774\uD130 \uC800\uC7A5")
            ])
          ]),
          createVNode("li", null, [
            createTextVNode("\uBCF4\uC720\uD558\uACE0 \uC788\uB294 VC\uB85C VP"),
            createVNode("span", { class: "text-gray-500" }, "(\uAC80\uC99D \uAC00\uB2A5\uD55C \uD504\uB808\uC820\uD14C\uC774\uC158)"),
            createTextVNode("\uC744 \uC0DD\uC131\uD558\uC5EC \uC778\uC99D\uAE30\uAD00\uC5D0 \uAC80\uC99D \uC694\uCCAD\uD558\uB294 \uAE30\uB2A5\uC744 \uC81C\uACF5 "),
            createVNode("ul", { class: "list-circle pl-5" }, [
              createVNode("li", null, "ex) \uC0AC\uC6D0\uC99D \uBC0F \uCD9C\uC785\uC99D"),
              createVNode("li", null, [
                createVNode(_component_Tag, {
                  "is-skill": true,
                  text: "vue-qrcode"
                }),
                createTextVNode(" \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC0AC\uC6A9\uD558\uC5EC VP \uB370\uC774\uD130\uB97C QR code\uB85C \uC0DD\uC131 \uBC0F \uB9AC\uB529\uD558\uB294 \uAE30\uB2A5 \uAD6C\uD604")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_ProjectModalFunction, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li${_scopeId}>index DB, `);
        _push2(ssrRenderComponent(_component_Tag, {
          "is-skill": true,
          text: "dexie.js"
        }, null, _parent2, _scopeId));
        _push2(`\uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uD65C\uC6A9\uD558\uC5EC DID\uC640 VC\uC640 \uAC19\uC774 \uBCF5\uC7A1\uD55C JSON \uD615\uD0DC\uC758 \uB370\uC774\uD130\uB97C \uC800\uC7A5 \uBC0F \uD578\uB4E4\uB9C1\uC774 \uAC00\uB2A5\uD558\uB3C4\uB85D \uAD6C\uD604 <ul class="my-2"${_scopeId}><div class="bg-zinc-200 px-3 py-2 rounded-lg"${_scopeId}><p class="mb-4 font-semibold"${_scopeId}>\u{1F4A1} \uB85C\uCEEC\uC2A4\uD1A0\uB9AC\uC9C0\uB098 \uC138\uC158\uC2A4\uD1A0\uB9AC\uC9C0\uAC00 \uC544\uB2CC index DB\uB97C \uC0AC\uC6A9\uD55C \uC774\uC720</p><p class="break-words"${_scopeId}>DID\uC640 VC\uC640 \uAC19\uC774 \uBCF5\uC7A1\uD55C JSON \uD615\uD0DC\uC758 \uB370\uC774\uD130\uB97C \uC800\uC7A5\uD558\uACE0 \uAD00\uB9AC\uD558\uAE30 \uC704\uD574 IndexDB\uB97C \uC120\uD0DD\uD588\uC2B5\uB2C8\uB2E4.<br${_scopeId}> Index DB\uB294 \uB85C\uCEEC\uC2A4\uD1A0\uB9AC\uC9C0\uB098 \uC138\uC158\uC2A4\uD1A0\uB9AC\uC9C0\uBCF4\uB2E4 \uAD6C\uC870\uD654\uB41C \uB370\uC774\uD130 \uAD00\uB9AC\uC640 \uB300\uB7C9 \uB370\uC774\uD130 \uCC98\uB9AC\uC5D0 \uC720\uB9AC\uD569\uB2C8\uB2E4.</p><p class="mt-2 text-blue-500 cursor-pointer"${_scopeId}>\uAD00\uB828 \uBE14\uB85C\uADF8 \uD3EC\uC2A4\uD305 \uBCF4\uAE30</p></div></ul></li><li${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Tag, {
          "is-skill": true,
          text: "cypto.js"
        }, null, _parent2, _scopeId));
        _push2(` \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC0AC\uC6A9\uC790\uAC00 \uC785\uB825\uD55C \uD540\uBC88\uD638\uB85C DID \uBC0F VC \uB370\uC774\uD130\uB97C \uC554\uD638\uD654 <ul class="list-circle pl-5"${_scopeId}><li${_scopeId}> \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB41C DID \uBC0F VC\uB97C \uC870\uD68C\uD558\uACE0\uC790 \uD560 \uB54C \uD540\uBC88\uD638 \uC785\uB825 \uC694\uAD6C, \uD540\uBC88\uD638 \uBD88\uC77C\uCE58 \uC2DC \uC870\uD68C \uBD88\uAC00 </li></ul></li><li${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Tag, {
          "is-skill": true,
          text: "vue-qrcode"
        }, null, _parent2, _scopeId));
        _push2(` \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC0AC\uC6A9\uD558\uC5EC VP JSON \uB370\uC774\uD130\uB97C QR code\uB85C \uC0DD\uC131,<br${_scopeId}>QR reader\uB97C \uD1B5\uD574 \uB4E4\uC5B4\uC628 VP \uB370\uC774\uD130 \uD30C\uC2F1 \uD6C4 \uAC80\uC99D \uAE30\uB2A5 \uAD6C\uD604</li>`);
      } else {
        return [
          createVNode("li", null, [
            createTextVNode("index DB, "),
            createVNode(_component_Tag, {
              "is-skill": true,
              text: "dexie.js"
            }),
            createTextVNode("\uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uD65C\uC6A9\uD558\uC5EC DID\uC640 VC\uC640 \uAC19\uC774 \uBCF5\uC7A1\uD55C JSON \uD615\uD0DC\uC758 \uB370\uC774\uD130\uB97C \uC800\uC7A5 \uBC0F \uD578\uB4E4\uB9C1\uC774 \uAC00\uB2A5\uD558\uB3C4\uB85D \uAD6C\uD604 "),
            createVNode("ul", { class: "my-2" }, [
              createVNode("div", { class: "bg-zinc-200 px-3 py-2 rounded-lg" }, [
                createVNode("p", { class: "mb-4 font-semibold" }, "\u{1F4A1} \uB85C\uCEEC\uC2A4\uD1A0\uB9AC\uC9C0\uB098 \uC138\uC158\uC2A4\uD1A0\uB9AC\uC9C0\uAC00 \uC544\uB2CC index DB\uB97C \uC0AC\uC6A9\uD55C \uC774\uC720"),
                createVNode("p", { class: "break-words" }, [
                  createTextVNode("DID\uC640 VC\uC640 \uAC19\uC774 \uBCF5\uC7A1\uD55C JSON \uD615\uD0DC\uC758 \uB370\uC774\uD130\uB97C \uC800\uC7A5\uD558\uACE0 \uAD00\uB9AC\uD558\uAE30 \uC704\uD574 IndexDB\uB97C \uC120\uD0DD\uD588\uC2B5\uB2C8\uB2E4."),
                  createVNode("br"),
                  createTextVNode(" Index DB\uB294 \uB85C\uCEEC\uC2A4\uD1A0\uB9AC\uC9C0\uB098 \uC138\uC158\uC2A4\uD1A0\uB9AC\uC9C0\uBCF4\uB2E4 \uAD6C\uC870\uD654\uB41C \uB370\uC774\uD130 \uAD00\uB9AC\uC640 \uB300\uB7C9 \uB370\uC774\uD130 \uCC98\uB9AC\uC5D0 \uC720\uB9AC\uD569\uB2C8\uB2E4.")
                ]),
                createVNode("p", { class: "mt-2 text-blue-500 cursor-pointer" }, "\uAD00\uB828 \uBE14\uB85C\uADF8 \uD3EC\uC2A4\uD305 \uBCF4\uAE30")
              ])
            ])
          ]),
          createVNode("li", null, [
            createVNode(_component_Tag, {
              "is-skill": true,
              text: "cypto.js"
            }),
            createTextVNode(" \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC0AC\uC6A9\uC790\uAC00 \uC785\uB825\uD55C \uD540\uBC88\uD638\uB85C DID \uBC0F VC \uB370\uC774\uD130\uB97C \uC554\uD638\uD654 "),
            createVNode("ul", { class: "list-circle pl-5" }, [
              createVNode("li", null, " \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB41C DID \uBC0F VC\uB97C \uC870\uD68C\uD558\uACE0\uC790 \uD560 \uB54C \uD540\uBC88\uD638 \uC785\uB825 \uC694\uAD6C, \uD540\uBC88\uD638 \uBD88\uC77C\uCE58 \uC2DC \uC870\uD68C \uBD88\uAC00 ")
            ])
          ]),
          createVNode("li", null, [
            createVNode(_component_Tag, {
              "is-skill": true,
              text: "vue-qrcode"
            }),
            createTextVNode(" \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC0AC\uC6A9\uD558\uC5EC VP JSON \uB370\uC774\uD130\uB97C QR code\uB85C \uC0DD\uC131,"),
            createVNode("br"),
            createTextVNode("QR reader\uB97C \uD1B5\uD574 \uB4E4\uC5B4\uC628 VP \uB370\uC774\uD130 \uD30C\uC2F1 \uD6C4 \uAC80\uC99D \uAE30\uB2A5 \uAD6C\uD604")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Project/Fdid.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = publicAssetsURL("/portfolio/project.png");
const projects = [
  {
    id: "incheontp",
    tags: ["nuxt.js", "minio", "spring boot"],
    title: "\uC778\uCC9C\uD2B9\uAD6C\uD50C\uB7AB\uD3FC \uBE14\uB85D\uCCB4\uC778 \uD50C\uB7AB\uD3FC \uAC1C\uBC1C",
    desc: `\uAC1C\uBC1C\uC790\uAC00 API\uB97C \uC27D\uAC8C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 API Developer \uC6F9\uACFC, \uD2B8\uB79C\uC7AD\uC158 \uCD94\uC801\uC744 \uC704\uD55C \uBAA8\uB2C8\uD130\uB9C1 \uC6F9\uC744 \uAC1C\uBC1C\uD558\uC600\uC2B5\uB2C8\uB2E4.<br />
         \uD504\uB85C\uC81D\uD2B8\uC758 \uC804\uCCB4 \uAD6C\uCD95 \uBC0F \uC6B4\uC601\uC5D0 \uD22C\uC785\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`,
    image: "/portfolio/incheontp.png"
  },
  {
    id: "did",
    tags: ["nuxt.js", "pwa", "swift UI", "golang"],
    title: "DID \uD504\uB85C\uC81D\uD2B8",
    desc: `PWA \uAE30\uBC18\uC758 DID(Decentralized Identity, \uBD84\uC0B0\uC2E0\uC6D0\uD655\uC778) \uC6F9 \uD398\uC774\uC9C0 \uAC1C\uBC1C \uD6C4, \uC6F9 \uC571(IOS)\uB85C \uB9AC\uD329\uD1A0\uB9C1\uD558\uC600\uC2B5\uB2C8\uB2E4.`,
    image: "/portfolio/fdid.png"
  },
  {
    id: "token",
    tags: ["nuxt.js", "spring boot"],
    title: "\uBE44\uC0C1\uC7A5 \uD1A0\uD070 \uC99D\uAD8C \uD50C\uB7AB\uD3FC \uAC1C\uBC1C",
    desc: `\uBE44\uC0C1\uC7A5 \uD1A0\uD070\uC744 \uAC70\uB798\uD560 \uC218 \uC788\uB294 \uAC70\uB798 \uD50C\uB7AB\uD3FC \uC6F9\uACFC \uD2B8\uB79C\uC7AD\uC158\uC744 \uCD94\uC801\uD560 \uC218 \uC788\uB294 \uBAA8\uB2C8\uD130\uB9C1 \uC6F9\uC744 \uAC1C\uBC1C\uD558\uC600\uC2B5\uB2C8\uB2E4.`,
    image: "/portfolio/trade.png"
  },
  {
    id: "baas",
    tags: ["nuxt.js"],
    title: "Baas(Blockchain as a Service) \uC6F9 \uD50C\uB7AB\uD3FC \uAC1C\uBC1C",
    desc: `\uBE44\uC0C1\uC7A5 \uD1A0\uD070\uC744 \uAC70\uB798\uD560 \uC218 \uC788\uB294 \uAC70\uB798 \uD50C\uB7AB\uD3FC \uC6F9\uACFC \uD2B8\uB79C\uC7AD\uC158\uC744 \uCD94\uC801\uD560 \uC218 \uC788\uB294 \uBAA8\uB2C8\uD130\uB9C1 \uC6F9\uC744 \uAC1C\uBC1C\uD558\uC600\uC2B5\uB2C8\uB2E4.`,
    image: "/portfolio/fplatform.png"
  },
  {
    id: "wallet-refactor",
    tags: ["vue.js"],
    title: "\uC804\uC790\uC9C0\uAC11 \uC6F9 \uB9AC\uD329\uD1A0\uB9C1 (jQuery \u2192 Vue.js)",
    desc: `jQuery\uB85C \uAD6C\uD604\uB41C \uC804\uC790\uC9C0\uAC11 \uC6F9\uC744 vue.js\uB85C \uB9AC\uD329\uD1A0\uB9C1\uD558\uC600\uC2B5\uB2C8\uB2E4.`,
    noImage: true
  },
  {
    id: "patent",
    tags: ["jQuery", "spring boot"],
    title: "\uD2B9\uD5C8\uAD8C \uC870\uAC01\uD22C\uC790 \uD50C\uB7AB\uD3FC \uAC1C\uBC1C",
    desc: `\uBE14\uB85D\uCCB4\uC778 \uAE30\uC220\uC744 \uD65C\uC6A9\uD558\uC5EC \uD2B9\uD5C8\uAD8C\uB9AC\uB97C \uAC70\uB798\uD560\uC218 \uC788\uB294 \uD2B9\uD5C8\uAD8C \uC870\uAC01\uD22C\uC790 \uD50C\uB7AB\uD3FC \uC6F9\uC744 \uAC1C\uBC1C\uD558\uC600\uC2B5\uB2C8\uB2E4.`,
    image: "/portfolio/ipnft.png"
  },
  {
    id: "nft-marketplace",
    tags: ["jQuery", "spring boot"],
    title: "\uC774\uB354\uB9AC\uC6C0 \uC804\uC790\uC9C0\uAC11 + NFT \uB9C8\uCF13\uD50C\uB808\uC774\uC2A4 \uC6F9 \uAC1C\uBC1C",
    desc: `\uC0AC\uC6A9\uC790\uB4E4\uC774 NFT\uB97C \uBC1C\uD589, \uC870\uD68C, \uC804\uC1A1\uD560 \uC218 \uC788\uB294 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD558\uBA70, jQuery\uC640 Spring Boot \uAE30\uBC18\uC758 \uC6F9\uC744 \uAC1C\uBC1C\uD558\uC600\uC2B5\uB2C8\uB2E4.`,
    image: "/portfolio/wallet.png"
  }
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const route = useRoute();
    const queryValue = computed(() => route.query.project);
    const selectedTag = ref("");
    const isModalOpen = computed(() => !!queryValue.value);
    const modalTitle = ref("");
    function openModal(project, title) {
      router.push({ query: { project } });
      modalTitle.value = title;
    }
    function closeModal() {
      router.push({ query: {} });
    }
    const tagOrder = ["nuxt.js", "vue.js", "swift UI", "jQuery", "minio", "spring boot", "pwa", "golang"];
    const filteredProjects = computed(
      () => selectedTag.value ? projects.filter((project) => project.tags.includes(selectedTag.value)) : projects
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageSection = _sfc_main$k;
      const _component_PageTitle = _sfc_main$g;
      const _component_ProjectCard = _sfc_main$8;
      const _component_ProjectModal = _sfc_main$7;
      const _component_ProjectIncheon = __nuxt_component_4;
      const _component_ProjectFdid = __nuxt_component_5;
      const _directive_dompurify_html = resolveDirective("dompurify-html");
      let _temp0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageSection, { "section-id": "project" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PageTitle, { class: "pb-0" }, {
              icon: withCtx(({ size }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_0)} class="${ssrRenderClass([size])}"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_0,
                      class: [size]
                    }, null, 2)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Project</span>`);
                } else {
                  return [
                    createVNode("span", null, "Project")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-col gap-4"${_scopeId}><p class="bg-zinc-100 p-2 rounded-md flex flex-row gap-1 text-base font-normal tracking-normal"${_scopeId}> \u{1F481}\u{1F3FB} <span${_scopeId}> \uB2F4\uB2F9\uD55C \uD504\uB85C\uC81D\uD2B8\uB97C \uCD5C\uC2E0 \uC21C\uC73C\uB85C \uAD6C\uC131\uD588\uC2B5\uB2C8\uB2E4.<br${_scopeId}>\uD574\uB2F9 \uD504\uB85C\uC81D\uD2B8\uB97C \uD074\uB9AD\uD558\uBA74 \uC8FC\uC694 \uB0B4\uC6A9, \uC5ED\uD560 \uBC0F \uAE30\uC5EC\uB3C4, \uC218\uD589 \uAE30\uAC04 \uB4F1\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. </span></p><div class="flex flex-row flex-wrap gap-2 text-base font-normal"${_scopeId}><button class="${ssrRenderClass([[unref(selectedTag) == "" ? "bg-gray-600 text-white" : "bg-zinc-100 text-gray-800"], "px-4 py-1 rounded-md"])}"${_scopeId}> All </button><!--[-->`);
            ssrRenderList(tagOrder, (tag) => {
              _push2(`<button class="${ssrRenderClass([
                "px-3 py-1 rounded-md",
                unref(selectedTag) === tag ? "bg-blue-500 text-white" : "bg-zinc-100 text-gray-800"
              ])}"${_scopeId}>${ssrInterpolate(tag)}</button>`);
            });
            _push2(`<!--]--></div></div><div class="grid lg:grid-cols-2 gap-4"${_scopeId}><!--[-->`);
            ssrRenderList(unref(filteredProjects), (project) => {
              _push2(ssrRenderComponent(_component_ProjectCard, {
                key: project.id,
                tags: project.tags,
                onClick: ($event) => openModal(project.id, project.title),
                "no-image": project.noImage || false
              }, createSlots({
                title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(project.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(project.title), 1)
                    ];
                  }
                }),
                desc: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a;
                  if (_push3) {
                    _push3(`<span${ssrRenderAttrs(_temp0 = mergeProps({ class: "text-[0.9rem]" }, ssrGetDirectiveProps(_ctx, _directive_dompurify_html, project.desc)))}${_scopeId2}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : (_a = _temp0.innerHTML) != null ? _a : ""}</span>`);
                  } else {
                    return [
                      withDirectives(createVNode("span", { class: "text-[0.9rem]" }, null, 512), [
                        [_directive_dompurify_html, project.desc]
                      ])
                    ];
                  }
                }),
                _: 2
              }, [
                !project.noImage ? {
                  name: "image",
                  fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img${ssrRenderAttr("src", project.image)}${_scopeId2}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: project.image
                        }, null, 8, ["src"])
                      ];
                    }
                  }),
                  key: "0"
                } : undefined
              ]), _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-6" }, [
                createVNode(_component_PageTitle, { class: "pb-0" }, {
                  icon: withCtx(({ size }) => [
                    createVNode("img", {
                      src: _imports_0,
                      class: [size]
                    }, null, 2)
                  ]),
                  default: withCtx(() => [
                    createVNode("span", null, "Project")
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "flex flex-col gap-4" }, [
                  createVNode("p", { class: "bg-zinc-100 p-2 rounded-md flex flex-row gap-1 text-base font-normal tracking-normal" }, [
                    createTextVNode(" \u{1F481}\u{1F3FB} "),
                    createVNode("span", null, [
                      createTextVNode(" \uB2F4\uB2F9\uD55C \uD504\uB85C\uC81D\uD2B8\uB97C \uCD5C\uC2E0 \uC21C\uC73C\uB85C \uAD6C\uC131\uD588\uC2B5\uB2C8\uB2E4."),
                      createVNode("br"),
                      createTextVNode("\uD574\uB2F9 \uD504\uB85C\uC81D\uD2B8\uB97C \uD074\uB9AD\uD558\uBA74 \uC8FC\uC694 \uB0B4\uC6A9, \uC5ED\uD560 \uBC0F \uAE30\uC5EC\uB3C4, \uC218\uD589 \uAE30\uAC04 \uB4F1\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. ")
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-row flex-wrap gap-2 text-base font-normal" }, [
                    createVNode("button", {
                      onClick: ($event) => selectedTag.value = "",
                      class: [[unref(selectedTag) == "" ? "bg-gray-600 text-white" : "bg-zinc-100 text-gray-800"], "px-4 py-1 rounded-md"]
                    }, " All ", 10, ["onClick"]),
                    (openBlock(), createBlock(Fragment, null, renderList(tagOrder, (tag) => {
                      return createVNode("button", {
                        key: tag,
                        onClick: ($event) => selectedTag.value = tag,
                        class: [
                          "px-3 py-1 rounded-md",
                          unref(selectedTag) === tag ? "bg-blue-500 text-white" : "bg-zinc-100 text-gray-800"
                        ]
                      }, toDisplayString(tag), 11, ["onClick"]);
                    }), 64))
                  ])
                ]),
                createVNode("div", { class: "grid lg:grid-cols-2 gap-4" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredProjects), (project) => {
                    return openBlock(), createBlock(_component_ProjectCard, {
                      key: project.id,
                      tags: project.tags,
                      onClick: ($event) => openModal(project.id, project.title),
                      "no-image": project.noImage || false
                    }, createSlots({
                      title: withCtx(() => [
                        createTextVNode(toDisplayString(project.title), 1)
                      ]),
                      desc: withCtx(() => [
                        withDirectives(createVNode("span", { class: "text-[0.9rem]" }, null, 512), [
                          [_directive_dompurify_html, project.desc]
                        ])
                      ]),
                      _: 2
                    }, [
                      !project.noImage ? {
                        name: "image",
                        fn: withCtx(() => [
                          createVNode("img", {
                            src: project.image
                          }, null, 8, ["src"])
                        ]),
                        key: "0"
                      } : undefined
                    ]), 1032, ["tags", "onClick", "no-image"]);
                  }), 128))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ProjectModal, {
        "is-open": unref(isModalOpen),
        onClose: closeModal
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(modalTitle))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(modalTitle)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(queryValue) === "incheontp") {
              _push2(ssrRenderComponent(_component_ProjectIncheon, null, null, _parent2, _scopeId));
            } else if (unref(queryValue) === "did") {
              _push2(ssrRenderComponent(_component_ProjectFdid, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(queryValue) === "incheontp" ? (openBlock(), createBlock(_component_ProjectIncheon, { key: 0 })) : unref(queryValue) === "did" ? (openBlock(), createBlock(_component_ProjectFdid, { key: 1 })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Project/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead(() => ({
      title: "Choi Jin Kyung portfolio"
    }));
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageWrapper = __nuxt_component_0$2;
      const _component_AboutMe = __nuxt_component_1$1;
      const _component_Skills = __nuxt_component_2;
      const _component_Project = _sfc_main$1;
      _push(ssrRenderComponent(_component_PageWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AboutMe, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Skills, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Project, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AboutMe),
              createVNode(_component_Skills),
              createVNode(_component_Project)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-AJlt1ro7.mjs.map
