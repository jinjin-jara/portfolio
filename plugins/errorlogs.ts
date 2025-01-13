import vueDompurifyHTML from 'vue-dompurify-html'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vueDompurifyHTML)
  
  nuxtApp.vueApp.config.errorHandler = (error, context) => {
    console.log('🚀 ~ file: error.ts:6 ~ defineNuxtPlugin ~ context:', context)
    console.log('🚀 ~ file: error.ts:6 ~ defineNuxtPlugin ~ error:', error)
  }
})
