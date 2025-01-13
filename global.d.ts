import { ModuleOptions as NuxtWindiCssModuleOptions } from 'nuxt-windicss'

declare module '@nuxt/schema' {
  interface AppConfigInput {
    name: string
    author: {
      name: string
      link: string
    }
  }
}

declare module 'nuxt/config' {
  interface NuxtConfig {
    windicss?: NuxtWindiCssModuleOptions
  }
}

export {}
