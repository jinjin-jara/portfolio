import { useSSRContext, defineComponent, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const activeTab = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-10 h-15 bg-white/[0.5] border-b-1 flex items-center justify-center backdrop-filter backdrop-blur-md text-gray-600" }, _attrs))}><div class="max-w-8xl px-2 lg:text-lg text-sm sm:text-sm grid grid-cols-5 gap-4 lg:gap-10 h-full items-center justify-center"><button class="${ssrRenderClass([{ "font-bold text-gray-800": unref(activeTab) === "about-me" }, "text-center"])}">About me</button><button class="${ssrRenderClass([{ "font-bold text-gray-800": unref(activeTab) === "skills" }, "text-center"])}">Skills</button><button class="${ssrRenderClass([{ "font-bold text-gray-800": unref(activeTab) === "project" }, "text-center"])}">Project</button><button class="text-center">Github</button><button class="text-center">Tech Vlog</button></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Navbar = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "app-before", {}, null, _push, _parent);
  _push(`<div id="app-before"></div><div class="flex-1 w-full flex flex-col">`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(`<div class="relative py-10 flex-1 flex flex-col mx-auto max-w-[900px] w-full h-full lg:px-0 px-5">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
  ssrRenderSlot(_ctx.$slots, "app-after", {}, null, _push, _parent);
  _push(`<div id="app-after"></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const page = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { page as default };
//# sourceMappingURL=page-D8bwmJhd.mjs.map
