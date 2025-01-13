import { defineNuxtRouteMiddleware, useNuxtApp } from 'nuxt/app'

export default defineNuxtRouteMiddleware((to, _from) => {
  const app = useNuxtApp()
})
