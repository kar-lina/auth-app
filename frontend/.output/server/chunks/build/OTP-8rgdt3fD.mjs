import { useSSRContext, defineComponent, reactive, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OTP",
  __ssrInlineRender: true,
  props: {
    digitCount: {
      type: Number,
      required: true
    },
    small: {
      type: Boolean,
      required: false
    }
  },
  emits: ["update:otp"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const digits = reactive([]);
    for (let i = 0; i < props.digitCount; i++) {
      digits[i] = null;
    }
    const otpCont = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "otpCont",
        ref: otpCont
      }, _attrs))} data-v-52ea3bbe><!--[-->`);
      ssrRenderList(unref(digits), (el, ind) => {
        _push(`<input${ssrRenderAttr("value", unref(digits)[ind])} type="srting" class="${ssrRenderClass(["digit-box", __props.small ? "_small" : ""])}"${ssrIncludeBooleanAttr(ind === 0) ? " autofocus" : ""}${ssrRenderAttr("placeholder", String(ind + 1))} maxlength="1" data-v-52ea3bbe>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/OTP.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-52ea3bbe"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=OTP-8rgdt3fD.mjs.map
