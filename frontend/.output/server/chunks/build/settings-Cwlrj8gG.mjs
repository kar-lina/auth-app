import { _ as __nuxt_component_0 } from './nuxt-layout-jMGp9Z4m.mjs';
import { useSSRContext, defineComponent, ref, resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode } from 'vue';
import { ssrRenderSlot, ssrIncludeBooleanAttr, ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_1 } from './OTP-8rgdt3fD.mjs';
import { u as useAuth } from './useAuth-BAyGP-af.mjs';
import { _ as _export_sfc, a as useToastStore, b as useNuxtApp } from './server.mjs';
import dayjs from 'dayjs';
import 'vue-router';
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
import 'vue3-toastify';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    visible: { type: Boolean },
    id: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderSlot(_ctx.$slots, "action", {}, null, _push, _parent);
      _push(`<dialog id=""${ssrIncludeBooleanAttr(_ctx.visible) ? " open" : ""} class="modal"><div class="modal-box"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">\u2715</button></form>`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div><form method="dialog" class="modal-backdrop"><button>close</button></form></dialog><!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Modal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const useDate = (date, format = "DD.MM.YYYY") => dayjs(date).format(format);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TwoFA",
  __ssrInlineRender: true,
  setup(__props) {
    const { currentUser, getAuth } = useAuth();
    const { alert } = useToastStore();
    const qrCodeImg = ref("");
    const twoFASecrete = ref("");
    const disable2FAModalOpen = ref(false);
    const twoFactorAuthenticationCode = ref("");
    const disble2fa = async () => {
      if (!twoFactorAuthenticationCode)
        return;
      try {
        const res = await useNuxtApp().$api("/2fa/turn-off", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: {
            twoFactorAuthenticationCode: twoFactorAuthenticationCode.value
          }
        });
        getAuth();
        alert("\u0414\u0432\u0443\u0445\u0444\u0430\u043A\u0442\u043E\u0440\u043D\u0430\u044F \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u0430", "info");
        disable2FAModalOpen.value = false;
      } catch (error) {
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_tempalte = resolveComponent("tempalte");
      const _component_UiModal = _sfc_main$2;
      const _component_UiOTP = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card max-w-[360px] bg-base-100 shadow-xl" }, _attrs))}><figure><img src="https://www.axiad.com/wp-content/uploads/2022/07/2-Factor-Authentication.jpg" alt="2-Factor-Authentication"></figure><div class="card-body"><h2 class="card-title">\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u043F\u043D\u0430\u044F \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F!</h2>`);
      if (!((_a = unref(currentUser)) == null ? void 0 : _a.isTwoFactorAuthenticationEnabled)) {
        _push(`<!--[--><p>\u0414\u043B\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0437\u0430\u0449\u0438\u0442\u044B \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430, \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0434\u0432\u0443\u0445\u0444\u0430\u043A\u0442\u043E\u0440\u043D\u0443\u044E \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E</p><div class="card-actions justify-end"><button class="btn btn-info">\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C</button></div><!--]-->`);
      } else {
        _push(`<!--[--><p> \u0414\u0432\u0443\u0445\u0444\u0430\u0442\u043E\u0440\u043D\u0430\u044F \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u044F \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0430 `);
        if (unref(currentUser).twoFactorAuthenticationSecretEnabledAt) {
          _push(ssrRenderComponent(_component_tempalte, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(("useDate" in _ctx ? _ctx.useDate : unref(useDate))(unref(currentUser).twoFactorAuthenticationSecretEnabledAt))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(("useDate" in _ctx ? _ctx.useDate : unref(useDate))(unref(currentUser).twoFactorAuthenticationSecretEnabledAt)), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</p><div class="card-actions justify-between mt-2"><button class="btn">\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C</button><button class="btn btn-info">\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C QR-code</button></div><!--]-->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UiModal, {
        id: "2fa-modal",
        visible: !!unref(qrCodeImg)
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col items-center gap-4"${_scopeId}><h1 class="text-xl"${_scopeId}>\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438.</h1><ul class="list list-disc mb-5"${_scopeId}><li${_scopeId}>\u0412 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438 Google Authenticator \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0437\u043D\u0430\u0447\u043E\u043A &quot;+&quot;.</li><li${_scopeId}>\u041E\u0442\u0441\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435 QR-\u043A\u043E\u0434</li></ul><img${ssrRenderAttr("src", unref(qrCodeImg))}${_scopeId}><div tabindex="0" class="collapse collapse-arrow border-base-300 bg-base-200 border"${_scopeId}><div class="collapse-title text-base"${_scopeId}>\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0441\u044F \u043E\u0442\u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C QR-\u043A\u043E\u0434?</div><div class="collapse-content text-sm"${_scopeId}><ol class="list-decimal flex flex-col gap-2 p-4"${_scopeId}><li${_scopeId}> \u0412 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438 Google Authenticator \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0437\u043D\u0430\u0447\u043E\u043A <strong${_scopeId}>+</strong>, \u0430 \u0437\u0430\u0442\u0435\u043C \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 <strong${_scopeId}>\u0412\u0432\u0435\u0441\u0442\u0438 \u043A\u043B\u044E\u0447 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438</strong>. </li><li${_scopeId}> \u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B \u0438 \u044D\u0442\u043E\u0442 \u043A\u043B\u044E\u0447 (\u043F\u0440\u043E\u0431\u0435\u043B\u044B \u043D\u0435 \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u044E\u0442\u0441\u044F): <div${_scopeId}><strong${_scopeId}>${ssrInterpolate(unref(twoFASecrete))}</strong></div></li><li${_scopeId}>\u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044C, \u0447\u0442\u043E \u0432\u044B\u0431\u0440\u0430\u043D \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 <strong${_scopeId}>\u041F\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438</strong>.</li><li${_scopeId}>\u0427\u0442\u043E\u0431\u044B \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0443, \u043D\u0430\u0436\u043C\u0438\u0442\u0435 <strong${_scopeId}>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</strong>.</li></ol></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center gap-4" }, [
                createVNode("h1", { class: "text-xl" }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438."),
                createVNode("ul", { class: "list list-disc mb-5" }, [
                  createVNode("li", null, '\u0412 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438 Google Authenticator \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0437\u043D\u0430\u0447\u043E\u043A "+".'),
                  createVNode("li", null, "\u041E\u0442\u0441\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435 QR-\u043A\u043E\u0434")
                ]),
                createVNode("img", { src: unref(qrCodeImg) }, null, 8, ["src"]),
                createVNode("div", {
                  tabindex: "0",
                  class: "collapse collapse-arrow border-base-300 bg-base-200 border"
                }, [
                  createVNode("div", { class: "collapse-title text-base" }, "\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0441\u044F \u043E\u0442\u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C QR-\u043A\u043E\u0434?"),
                  createVNode("div", { class: "collapse-content text-sm" }, [
                    createVNode("ol", { class: "list-decimal flex flex-col gap-2 p-4" }, [
                      createVNode("li", null, [
                        createTextVNode(" \u0412 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438 Google Authenticator \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0437\u043D\u0430\u0447\u043E\u043A "),
                        createVNode("strong", null, "+"),
                        createTextVNode(", \u0430 \u0437\u0430\u0442\u0435\u043C \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 "),
                        createVNode("strong", null, "\u0412\u0432\u0435\u0441\u0442\u0438 \u043A\u043B\u044E\u0447 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"),
                        createTextVNode(". ")
                      ]),
                      createVNode("li", null, [
                        createTextVNode(" \u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B \u0438 \u044D\u0442\u043E\u0442 \u043A\u043B\u044E\u0447 (\u043F\u0440\u043E\u0431\u0435\u043B\u044B \u043D\u0435 \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u044E\u0442\u0441\u044F): "),
                        createVNode("div", null, [
                          createVNode("strong", null, toDisplayString(unref(twoFASecrete)), 1)
                        ])
                      ]),
                      createVNode("li", null, [
                        createTextVNode("\u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044C, \u0447\u0442\u043E \u0432\u044B\u0431\u0440\u0430\u043D \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 "),
                        createVNode("strong", null, "\u041F\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438"),
                        createTextVNode(".")
                      ]),
                      createVNode("li", null, [
                        createTextVNode("\u0427\u0442\u043E\u0431\u044B \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0443, \u043D\u0430\u0436\u043C\u0438\u0442\u0435 "),
                        createVNode("strong", null, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"),
                        createTextVNode(".")
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiModal, {
        id: "2fa-enable",
        visible: unref(disable2FAModalOpen)
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-6 items-center text-center"${_scopeId}><p${_scopeId}>\u0414\u043B\u044F \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0434\u0432\u0443\u0445\u0444\u0430\u0442\u043E\u0440\u043D\u043E\u0439 \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434 \u0438\u0437 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F</p>`);
            _push2(ssrRenderComponent(_component_UiOTP, {
              "digit-count": 6,
              "onUpdate:otp": ($event) => twoFactorAuthenticationCode.value = $event
            }, null, _parent2, _scopeId));
            _push2(`<button${ssrIncludeBooleanAttr(!unref(twoFactorAuthenticationCode)) ? " disabled" : ""} class="btn btn-info"${_scopeId}>\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C</button></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-6 items-center text-center" }, [
                createVNode("p", null, "\u0414\u043B\u044F \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0434\u0432\u0443\u0445\u0444\u0430\u0442\u043E\u0440\u043D\u043E\u0439 \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434 \u0438\u0437 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F"),
                createVNode(_component_UiOTP, {
                  "digit-count": 6,
                  "onUpdate:otp": ($event) => twoFactorAuthenticationCode.value = $event
                }, null, 8, ["onUpdate:otp"]),
                createVNode("button", {
                  disabled: !unref(twoFactorAuthenticationCode),
                  class: "btn btn-info",
                  onClick: disble2fa
                }, "\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C", 8, ["disabled"])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Profile/Settings/TwoFA.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_ProfileSettingsTwoFA = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_NuxtLayout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-col items-center gap-3 md:gap-5 pt-5 md:pt-20"${_scopeId}><h1 class="title text-4xl leading-10"${_scopeId}>\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430</h1><div class="max-w-[60%] text-center"${_scopeId}> \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u0442\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438, \u0447\u0442\u043E\u0431\u044B \u0432\u0430\u043C \u0431\u044B\u043B\u043E \u0435\u0449\u0451 \u0443\u0434\u043E\u0431\u043D\u0435\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u043C\u0438 AuthApp. </div><div class="flex flex-wrap"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_ProfileSettingsTwoFA, null, null, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex flex-col items-center gap-3 md:gap-5 pt-5 md:pt-20" }, [
            createVNode("h1", { class: "title text-4xl leading-10" }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430"),
            createVNode("div", { class: "max-w-[60%] text-center" }, " \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u0442\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438, \u0447\u0442\u043E\u0431\u044B \u0432\u0430\u043C \u0431\u044B\u043B\u043E \u0435\u0449\u0451 \u0443\u0434\u043E\u0431\u043D\u0435\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u043C\u0438 AuthApp. "),
            createVNode("div", { class: "flex flex-wrap" }, [
              createVNode(_component_ProfileSettingsTwoFA)
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const settings = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { settings as default };
//# sourceMappingURL=settings-Cwlrj8gG.mjs.map
