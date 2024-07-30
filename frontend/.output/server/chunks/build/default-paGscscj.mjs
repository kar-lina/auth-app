import { _ as __nuxt_component_0$1 } from './nuxt-link-CqmTSUAg.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, unref, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { u as useAuth } from './useAuth-BAyGP-af.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue3-toastify';

const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "36",
    height: "36",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    class: "fill-current"
  }, _attrs))}><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Logo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const { logUserOut, authenticated } = useAuth();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_IconsLogo = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "navbar fixed shadow-sm bg-base-200 w-full" }, _attrs))}><div class="navbar-start"><div class="dropdown"><div tabindex="0" role="button" class="btn btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></div><ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` About App `);
          } else {
            return [
              createTextVNode(" About App ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
      if (!unref(authenticated)) {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_nuxt_link, { to: "/login" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Login `);
            } else {
              return [
                createTextVNode(" Login ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!--[--><li><button>Logout</button></li><li>`);
        _push(ssrRenderComponent(_component_nuxt_link, { to: "/settings" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Settings `);
            } else {
              return [
                createTextVNode(" Settings ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><!--]-->`);
      }
      _push(`</ul></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "btn btn-ghost text-xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` AuthApp `);
          } else {
            return [
              createTextVNode(" AuthApp ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal px-1"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` About App `);
          } else {
            return [
              createTextVNode(" About App ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
      if (!unref(authenticated)) {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_nuxt_link, { to: "/login" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Login `);
            } else {
              return [
                createTextVNode(" Login ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!--[--><li><button>Logout</button></li><li>`);
        _push(ssrRenderComponent(_component_nuxt_link, { to: "/settings" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Settings `);
            } else {
              return [
                createTextVNode(" Settings ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><!--]-->`);
      }
      _push(`</ul></div><div class="navbar-end">`);
      if (unref(authenticated)) {
        _push(`<div class="avatar">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/profile",
          class: "w-10 overflow-hidden rounded-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"${_scopeId}>`);
            } else {
              return [
                createVNode("img", { src: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(ssrRenderComponent(_component_IconsLogo, { class: "w-7 h-7 md:w-auto md:h-auto" }, null, _parent));
      }
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_IconsLogo = __nuxt_component_0;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer bg-gradient-to-r from-purple-200 to-violet-300 text-neutral items-center p-4 text-[14px] md:text-base" }, _attrs))}><aside class="grid-flow-col items-center">`);
  _push(ssrRenderComponent(_component_IconsLogo, null, null, _parent));
  _push(`<p>Copyright \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} - All right reserved</p></aside></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = _sfc_main$2;
  const _component_Footer = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-between h-[100vh] w-full" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<div class="xl:container xl:mx-auto p-4 h-full flex-1 pt-[68px]">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-paGscscj.mjs.map
