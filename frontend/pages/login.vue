<template>
  <div>
    <NuxtLayout name="auth">
      <div class="p-10 text-center rounded-xl bg-white">
        <h1 class="text-2xl mb-10">Добро пожаловать в AuthApp!</h1>
        <form @submit="onSubmit" class="flex flex-col gap-8">
          <label class="input input-bordered flex items-center gap-2">
            <IconsEmail class="h-4 w-4" />
            <input
              v-model="email"
              v-bind="emailAttrs"
              type="email"
              class="grow"
              placeholder="Email"
            />
            <div class="text-xs text-error text-left">{{ errors.email }}</div>
          </label>
          <label class="input input-bordered flex items-center gap-2">
            <IconsPassword />
            <input
              v-model="password"
              v-bind="passwordAttrs"
              type="password"
              class="grow"
              placeholder="Password"
            />
            <div class="text-xs text-error text-left">
              {{ errors.password }}
            </div>
          </label>
          <input
            :disabled="!twoFactorAuthenticationCode && showOtp"
            type="submit"
            value="Войти"
            class="btn"
          />
          <UiOTP
            v-if="showOtp"
            :digitCount="6"
            small
            @update:otp="twoFactorAuthenticationCode = $event"
          />
        </form>
        <p class="mt-5">
          Нет аккаунта?
          <NuxtLink to="/sign-up" class="link link-primary">
            Зарегистрироваться
          </NuxtLink>
        </p>
      </div>
    </NuxtLayout>
  </div>
  ∏
</template>
<script setup>
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
const router = useRouter();
const { authenticateUser } = useAuth();

const showOtp = ref(false);
const twoFactorAuthenticationCode = ref('');
// Creates a typed schema for vee-validate
const schema = toTypedSchema(
  z.object({
    email: z.string().min(1).email(),
    password: z.string().min(1),
    // twoFactorAuthenticationCode: z.number(),
  }),
);

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: schema,
});
// Creates a submission handler
// It validate all fields and doesn't call your function unless all fields are valid
const onSubmit = handleSubmit(async (values) => {
  try {
    showOtp.value = await authenticateUser(showOtp? {...values, twoFactorAuthenticationCode: twoFactorAuthenticationCode.value} : values);
    router.push('/profile');
  } catch (error) {
    console.log('error', error);
  }
});

const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
</script>
