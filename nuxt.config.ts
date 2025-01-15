// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // server side rendering mode
  ssr: false,

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
    baseURL: '/portfolio/', // repository 이름으로 설정
    head: {
      title: 'choi jin kyung portfolio',
      meta: [
        { name: 'description', content: 'This is choi jin kyung portfolio.' },
        { property: 'og:title', content: 'choi jin kyung portfolio' },
        { property: 'og:description', content: 'This is choi jin kyung portfolio.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/favicon.png' }, // 정적 이미지 경로
        { property: 'og:url', content: 'https://github.com/jinjin-jara/portfolio' }, // 배포 URL
      ],
    },
  },

  // windicss
  windicss: {
    scan: true,
  },

  compatibilityDate: '2025-01-08',
})