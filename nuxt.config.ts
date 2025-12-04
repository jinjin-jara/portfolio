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
    output: {
      dir: 'dist', // dist 폴더에 빌드 산출물 생성
      publicDir: 'dist',
    },
  },

  runtimeConfig: {
    public: {},
  },

  css: ['~/assets/sass/vendor.scss', '~/assets/sass/app.scss'],

  plugins: ['~/plugins/errorlogs.ts'],

  build: {
    transpile: ['@headlessui/vue'],
  },

  modules: ['nuxt-windicss'],

  components: true,

  vite: {
    plugins: [],
  },

  // GitHub Pages 도메인에 맞춘 baseURL 적용
  app: {
    baseURL: '/portfolio/', // GitHub Pages에서 필수

    head: {
      title: 'choi jin kyung portfolio',
      meta: [
        { name: 'description', content: 'This is choi jin kyung portfolio.' },
        { property: 'og:title', content: 'choi jin kyung portfolio' },
        {
          property: 'og:description',
          content: 'This is choi jin kyung portfolio.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/portfolio/favicon.png' },
        {
          property: 'og:url',
          content: 'https://jinjin-jara.github.io/portfolio/',
        },
      ],
    },
  },

  windicss: {
    scan: true,
  },

  compatibilityDate: '2025-01-08',
})
