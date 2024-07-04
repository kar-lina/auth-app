<template>
  <div>
    <NuxtLayout name="auth">
      <div class="p-10 text-center rounded-xl bg-white">
        <h1 class="text-2xl mb-5">Добро пожаловать в AuthApp!</h1>
        <h2 class="text-lg mb-10">Для регистрации заполните форму ниже.</h2>

        <form class="flex flex-col gap-8" @submit="onSubmit">
          <label class="input input-bordered flex items-center gap-2">
            <IconsUser />
            <input
              v-model="name"
              v-bind="nameAttrs"
              type="text"
              class="grow"
              placeholder="Name"
            />
            <div class="w-[20%]  text-xs text-error text-left">{{ errors.name }}</div>
          </label>
          <label class="input input-bordered flex items-center gap-2">
            <IconsEmail />
            <input
              v-model="email"
              v-bind="emailAttrs"
              type="email"
              class="grow"
              placeholder="Email"
            />
            <div class="w-[20%]  text-xs text-error text-left">{{ errors.email }}</div>
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
            <div class="w-[20%]  text-xs text-error text-left">
              {{ errors.password }}
            </div>
          </label>
          <label class="input input-bordered flex items-center gap-2">
            <IconsPassword />
            <input
              v-model="confirmPassword"
              v-bind="confirmPasswordAttrs"
              type="password"
              class="grow"
              placeholder="Confirm Password"
            />
            <div class="w-[20%]  text-xs text-error text-left">
              {{ errors.confirmPassword }}
            </div>
          </label>
          <input type="submit" value="Зарегистрироваться" class="btn" />
        </form>
        <p class="mt-5">
          Есть аккаунт?
          <NuxtLink to="/login" class="link link-primary"> Войти </NuxtLink>
        </p>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
const { signUpUser } = useAuth()


const router = useRouter()

const schema = toTypedSchema(
  z
    .object({
      name: z.string().min(2),
      email: z.string().nonempty().email(),
      password: z.string().min(4),
      confirmPassword: z.string().min(4),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ['confirmPassword'], // path of error
    })
)

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: schema,
})

const onSubmit = handleSubmit(async (values) => {
  try {
    signUpUser(values)
  } catch (error) {
    console.log('error', error)
  }
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')
const [confirmPassword, confirmPasswordAttrs] = defineField('confirmPassword')
const [name, nameAttrs] = defineField('name')
</script>
