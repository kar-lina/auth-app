<template>
  <div>
    <NuxtLayout name="auth">
      <div class="p-10 text-center rounded-xl bg-white">
        <h1 class="text-2xl mb-5">Добро пожаловать в AuthApp!</h1>
        <h2 class="text-lg mb-10">Для регистрации заполните форму ниже.</h2>

        <form @submit="onSubmit" class="flex flex-col gap-8">
          <label class="input input-bordered flex items-center gap-2">
            <IconsUser />
            <input
              v-model="name"
              v-bund="nameAttrs"
              type="text"
              class="grow"
              placeholder="Name"
            />
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
          <input type="submit" value="Зарегистрироваться" class="btn" />
        </form>
        <p class="mt-5">
          Есть аккаунт?
          <NuxtLink to="/login" class="link link-primary">Войти</NuxtLink>
        </p>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { useAuthStore } from '~/stores/auth'
const store = useAuthStore()

const router = useRouter()

const schema = toTypedSchema(
  z.object({
    email: z.string().nonempty().email(),
    password: z.string().nonempty(),
    name: z.string().nonempty(),
  })
)

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: schema,
})

const onSubmit = handleSubmit(async (values) => {
  console.log('values', values)
  try {
    await store.signUpUser(values)
    router.push('/profile')
  } catch (error) {
    console.log('error', error)
  }
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')
const [name, nameAttrs] = defineField('name')
</script>
