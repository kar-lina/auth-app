import { _ as __nuxt_component_0 } from './nuxt-layout-jMGp9Z4m.mjs';
import { withCtx, mergeProps, unref, createTextVNode, createVNode, withDirectives, isRef, vModelText, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDynamicModelProps, ssrInterpolate } from 'vue/server-renderer';
import { u as useRouter, _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_2, a as __nuxt_component_3 } from './Password-D7WskZc-.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-CqmTSUAg.mjs';
import { u as useAuth } from './useAuth-BAyGP-af.mjs';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
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

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    class: "h-4 w-4 opacity-70"
  }, _attrs))}><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/User.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "sign-up",
  __ssrInlineRender: true,
  setup(__props) {
    const { signUpUser } = useAuth();
    const router = useRouter();
    const schema = toTypedSchema(
      z.object({
        name: z.string().min(2),
        email: z.string().nonempty().email(),
        password: z.string().min(4),
        confirmPassword: z.string().min(4)
      }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"]
        // path of error
      })
    );
    const { errors, handleSubmit, defineField } = useForm({
      validationSchema: schema
    });
    const onSubmit = handleSubmit(async (values) => {
      try {
        signUpUser(values);
        router.push("/login");
      } catch (error) {
        console.log("error", error);
      }
    });
    const [email, emailAttrs] = defineField("email");
    const [password, passwordAttrs] = defineField("password");
    const [confirmPassword, confirmPasswordAttrs] = defineField("confirmPassword");
    const [name, nameAttrs] = defineField("name");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_IconsUser = __nuxt_component_1;
      const _component_IconsEmail = __nuxt_component_2;
      const _component_IconsPassword = __nuxt_component_3;
      const _component_NuxtLink = __nuxt_component_0$1;
      let _temp0, _temp1, _temp2, _temp3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "auth" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-10 text-center rounded-xl bg-white"${_scopeId}><h1 class="text-2xl mb-5"${_scopeId}>\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 AuthApp!</h1><h2 class="text-lg mb-10"${_scopeId}>\u0414\u043B\u044F \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0443 \u043D\u0438\u0436\u0435.</h2><form class="flex flex-col gap-8"${_scopeId}><label class="input input-bordered flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconsUser, null, null, _parent2, _scopeId));
            _push2(`<input${ssrRenderAttrs((_temp0 = mergeProps({ value: unref(name) }, unref(nameAttrs), {
              type: "text",
              class: "grow",
              placeholder: "Name"
            }), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(name)))))}${_scopeId}><div class="w-[20%] text-xs text-error text-left"${_scopeId}>${ssrInterpolate(unref(errors).name)}</div></label><label class="input input-bordered flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconsEmail, { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(`<input${ssrRenderAttrs((_temp1 = mergeProps({ value: unref(email) }, unref(emailAttrs), {
              type: "email",
              class: "grow",
              placeholder: "Email"
            }), mergeProps(_temp1, ssrGetDynamicModelProps(_temp1, unref(email)))))}${_scopeId}><div class="w-[20%] text-xs text-error text-left"${_scopeId}>${ssrInterpolate(unref(errors).email)}</div></label><label class="input input-bordered flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconsPassword, null, null, _parent2, _scopeId));
            _push2(`<input${ssrRenderAttrs((_temp2 = mergeProps({ value: unref(password) }, unref(passwordAttrs), {
              type: "password",
              class: "grow",
              placeholder: "Password"
            }), mergeProps(_temp2, ssrGetDynamicModelProps(_temp2, unref(password)))))}${_scopeId}><div class="w-[20%] text-xs text-error text-left"${_scopeId}>${ssrInterpolate(unref(errors).password)}</div></label><label class="input input-bordered flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconsPassword, null, null, _parent2, _scopeId));
            _push2(`<input${ssrRenderAttrs((_temp3 = mergeProps({ value: unref(confirmPassword) }, unref(confirmPasswordAttrs), {
              type: "password",
              class: "grow",
              placeholder: "Confirm Password"
            }), mergeProps(_temp3, ssrGetDynamicModelProps(_temp3, unref(confirmPassword)))))}${_scopeId}><div class="w-[20%] text-xs text-error text-left"${_scopeId}>${ssrInterpolate(unref(errors).confirmPassword)}</div></label><input type="submit" value="\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F" class="btn"${_scopeId}></form><p class="mt-5"${_scopeId}> \u0415\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442? `);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/login",
              class: "link link-primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0412\u043E\u0439\u0442\u0438 `);
                } else {
                  return [
                    createTextVNode(" \u0412\u043E\u0439\u0442\u0438 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p></div>`);
          } else {
            return [
              createVNode("div", { class: "p-10 text-center rounded-xl bg-white" }, [
                createVNode("h1", { class: "text-2xl mb-5" }, "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 AuthApp!"),
                createVNode("h2", { class: "text-lg mb-10" }, "\u0414\u043B\u044F \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0443 \u043D\u0438\u0436\u0435."),
                createVNode("form", {
                  class: "flex flex-col gap-8",
                  onSubmit: unref(onSubmit)
                }, [
                  createVNode("label", { class: "input input-bordered flex items-center gap-2" }, [
                    createVNode(_component_IconsUser),
                    withDirectives(createVNode("input", mergeProps({
                      "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null
                    }, unref(nameAttrs), {
                      type: "text",
                      class: "grow",
                      placeholder: "Name"
                    }), null, 16, ["onUpdate:modelValue"]), [
                      [vModelText, unref(name)]
                    ]),
                    createVNode("div", { class: "w-[20%] text-xs text-error text-left" }, toDisplayString(unref(errors).name), 1)
                  ]),
                  createVNode("label", { class: "input input-bordered flex items-center gap-2" }, [
                    createVNode(_component_IconsEmail, { class: "h-4 w-4" }),
                    withDirectives(createVNode("input", mergeProps({
                      "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null
                    }, unref(emailAttrs), {
                      type: "email",
                      class: "grow",
                      placeholder: "Email"
                    }), null, 16, ["onUpdate:modelValue"]), [
                      [vModelText, unref(email)]
                    ]),
                    createVNode("div", { class: "w-[20%] text-xs text-error text-left" }, toDisplayString(unref(errors).email), 1)
                  ]),
                  createVNode("label", { class: "input input-bordered flex items-center gap-2" }, [
                    createVNode(_component_IconsPassword),
                    withDirectives(createVNode("input", mergeProps({
                      "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null
                    }, unref(passwordAttrs), {
                      type: "password",
                      class: "grow",
                      placeholder: "Password"
                    }), null, 16, ["onUpdate:modelValue"]), [
                      [vModelText, unref(password)]
                    ]),
                    createVNode("div", { class: "w-[20%] text-xs text-error text-left" }, toDisplayString(unref(errors).password), 1)
                  ]),
                  createVNode("label", { class: "input input-bordered flex items-center gap-2" }, [
                    createVNode(_component_IconsPassword),
                    withDirectives(createVNode("input", mergeProps({
                      "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null
                    }, unref(confirmPasswordAttrs), {
                      type: "password",
                      class: "grow",
                      placeholder: "Confirm Password"
                    }), null, 16, ["onUpdate:modelValue"]), [
                      [vModelText, unref(confirmPassword)]
                    ]),
                    createVNode("div", { class: "w-[20%] text-xs text-error text-left" }, toDisplayString(unref(errors).confirmPassword), 1)
                  ]),
                  createVNode("input", {
                    type: "submit",
                    value: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F",
                    class: "btn"
                  })
                ], 40, ["onSubmit"]),
                createVNode("p", { class: "mt-5" }, [
                  createTextVNode(" \u0415\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442? "),
                  createVNode(_component_NuxtLink, {
                    to: "/login",
                    class: "link link-primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0412\u043E\u0439\u0442\u0438 ")
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sign-up.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sign-up-DYxqng_R.mjs.map
