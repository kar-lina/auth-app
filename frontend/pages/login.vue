<template>
  <div>
    <NuxtLayout name="auth">
      <div class="p-10 text-center rounded-xl bg-white">
        <h1 class="text-2xl mb-10">Добро пожаловать в AuthApp!</h1>
        <form @submit="onSubmit" class="flex flex-col gap-8">
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
          <input type="submit" value="Войти" class="btn" />
        </form>
        <p class="mt-5">
          Нет аккаунта?
          <NuxtLink to="/signup" class="link link-primary">
            Зарегистрироваться
          </NuxtLink>
        </p>
      </div>
    </NuxtLayout>
  </div>
  ∏
</template>
<script setup>
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

// Creates a typed schema for vee-validate
const schema = toTypedSchema(
  z.object({
    email: z.string().nonempty().email(),
    password: z.string().nonempty(),
  })
)

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: schema,
})
// Creates a submission handler
// It validate all fields and doesn't call your function unless all fields are valid
const onSubmit = handleSubmit((values) => {
  console.log('values', values)
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')
</script>
