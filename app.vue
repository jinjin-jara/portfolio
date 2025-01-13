<script lang="ts" setup>
import type { AppConfigInput } from '@nuxt/schema'
import { AppSetup } from './utils/app'

AppSetup()
const app = useAppConfig() as unknown as AppConfigInput

// useHead 함수를 사용하여 HTML 헤더 내부의 정보를 설정하고 있음.
useHead({
  title: app.name,
  titleTemplate: '%s - choi jin kyung portfolio',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: 'choi jin kyung portfolio',
    },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
})

useSeoMeta({
  title: 'choi jin kyung portfolio',
  ogTitle: 'choi jin kyung portfolio',
  description: 'This is choi jin kyung portfolio.',
  ogDescription: 'This is choi jin kyung portfolio.',
})
</script>

<template>
  <Html>
    <Body class="antialiased text-gray-800 bg-white font-normal text-base lg:text-lg">
      <NuxtLayout>
        <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
        <!--NuxtPage는 기본적으로 pages 폴더 내부의 index.vue 파일을 참조.-->
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
