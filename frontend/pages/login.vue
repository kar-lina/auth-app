<template>
  <div>
    <NuxtLayout name="auth">
      <div class="p-10 text-center rounded-xl bg-white">
        <h1 class="text-2xl mb-10">Добро пожаловать в AuthApp!</h1>
        <form class="flex flex-col gap-8" @submit="onSubmit">
          <label class="input input-bordered flex items-center gap-2">
            <IconsEmail class="h-4 w-4" />
            <input v-model="email" v-bind="emailAttrs" type="email" class="grow" placeholder="Email" />
            <div class="text-xs text-error text-left">{{ errors.email }}</div>
          </label>
          <label class="input input-bordered flex items-center gap-2">
            <IconsPassword />
            <input v-model="password" v-bind="passwordAttrs" type="password" class="grow" placeholder="Password" />
            <div class="text-xs text-error text-left">
              {{ errors.password }}
            </div>
          </label>
          <UiOTP v-if="showOtp" :digit-count="6" small @update:otp="twoFactorAuthenticationCode = $event" />
          <input :disabled="!twoFactorAuthenticationCode && showOtp" type="submit" value="Войти" class="btn" />
        </form>
        <p class="mt-5">
          Нет аккаунта?
          <NuxtLink to="/sign-up" class="link link-primary"> Зарегистрироваться </NuxtLink>
        </p>
      </div>
    </NuxtLayout>
  </div>
  ∏
</template>
<script setup>
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";
const router = useRouter();
const { authenticateUser } = useAuth();

const showOtp = ref(false);
const twoFactorAuthenticationCode = ref('');

const schema = toTypedSchema(
  z.object({
    email: z.string().min(1).email(),
    password: z.string().min(1),
  }),
);

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit(async (values) => {
   const {data, error} = await authenticateUser(
      showOtp ? { ...values, twoFactorAuthenticationCode: twoFactorAuthenticationCode.value } : values,
    );
    twoFactorAuthenticationCode.value = ''
    showOtp.value = error.value?.statusCode === 403
    if(!error.value && data.value) router.push("/profile");
});

const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");
</script>
