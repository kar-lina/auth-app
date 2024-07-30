import { _ as __nuxt_component_0 } from './nuxt-layout-jMGp9Z4m.mjs';
import { u as useAuth } from './useAuth-BAyGP-af.mjs';
import { defineComponent, withCtx, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    const { currentUser } = useAuth();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="mt-40 mx-auto p-10 rounded-2xl flex flex-col items-center gap-10 justify-center text-center max-w-[600px] backdrop-blur-sm bg-white/30"${_scopeId}><h1 class="title text-4xl font-bold leading-10"${_scopeId}> \u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 AuthApp, ${ssrInterpolate((_a = unref(currentUser)) == null ? void 0 : _a.name)}</h1><div${_scopeId}> \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435. \u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u043F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u0435! </div></div>`);
          } else {
            return [
              createVNode("div", { class: "mt-40 mx-auto p-10 rounded-2xl flex flex-col items-center gap-10 justify-center text-center max-w-[600px] backdrop-blur-sm bg-white/30" }, [
                createVNode("h1", { class: "title text-4xl font-bold leading-10" }, " \u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 AuthApp, " + toDisplayString((_b = unref(currentUser)) == null ? void 0 : _b.name), 1),
                createVNode("div", null, " \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435. \u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u043F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u0435! ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profile-C6R91wsd.mjs.map
