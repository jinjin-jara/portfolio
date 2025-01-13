// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // server side rendering mode
  ssr: true,

  // typescripts
  typescript: {
    strict: true,
    typeCheck: true,
  },

  nitro: {
    logLevel: 5,
  },

  runtimeConfig: {
    public: {
      // API_BASE_URL: process.env.API_BASE_URL,
    },
    // apiSecret: process.env.API_BASE_URL,
  },

  // css
  css: ['~/assets/sass/vendor.scss', '~/assets/sass/app.scss'],

  // plugins
  plugins: [
    '~/plugins/errorlogs.ts',
  ],

  // build
  build: {
    transpile: ['@headlessui/vue'],
  },

  // modules
  modules: [
    'nuxt-windicss',
  ],
  
  // auto import components
  components: true,

  // vite plugins
  vite: {
    plugins: [],
  },

  // app config
  app: {
    // global transition
    // pageTransition: { name: 'page', mode: 'out-in' },
    // layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  // windicss
  windicss: {
    scan: true,
  },

  compatibilityDate: '2025-01-08',
})