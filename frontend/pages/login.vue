<template>
  <div>
    <NuxtLayout name="auth">
      <div class="p-5 md:p-10 text-center rounded-xl bg-white">
        <h1 class="text-xl md:text-2xl  mb-5 md:mb-10">Добро пожаловать в AuthApp!</h1>
        <form class="flex flex-col  gap-4 md:gap-8" @submit="onSubmit">
          <div>
            <label class="input input-bordered flex items-center gap-2 mb-1">
              <IconsEmail class="h-4 w-4" />
              <input tabindex="1" v-model="email" v-bind="emailAttrs" type="email" class="grow" placeholder="Email" autofocus="off"/>
            </label>
            <div class="text-xs text-error text-left pl-4">{{ errors.email }}</div>
          </div>
          <div>
            <label class="input input-bordered flex items-center gap-2 mb-1">
              <IconsPassword />
              <input  tabindex="2" v-model="password" v-bind="passwordAttrs" type="password" class="grow" placeholder="Password" />
            </label>
            <div class="text-xs text-error text-left pl-4">
              {{ errors.password }}
            </div>
          </div>
          <label v-if="showOtp">
            <p class="mb-2">Введите код из приложения для аутентификации:</p>
            <UiOTP :digit-count="6" small @update:otp="twoFactorAuthenticationCode = $event" />
          </label>
          <input  :disabled="!twoFactorAuthenticationCode && showOtp" type="submit" value="Войти" class="btn" />
        </form>
        <p class="mt-5 md:text-base">
          Нет аккаунта?
          <NuxtLink to="/sign-up" class="link link-primary"> Зарегистрироваться </NuxtLink>
        </p>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";
const router = useRouter();
const { authenticateUser } = useAuth();

const showOtp = ref(false);
const twoFactorAuthenticationCode = ref("");

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
  const { data, error } = await authenticateUser(
    showOtp ? { ...values, twoFactorAuthenticationCode: twoFactorAuthenticationCode.value } : values,
  );
  showOtp.value = error.value?.statusCode === 403;
  if (error.value?.statusCode === 401) twoFactorAuthenticationCode.value = "";
  if (!error.value && data.value) router.push("/profile");
});

const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");

watch([email, password], () => {
  twoFactorAuthenticationCode.value = "";
  showOtp.value = false;
});
</script>
