<script lang="ts" setup>
// meta
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: 'Choi Jin Kyung portfolio',
}))
const prdNm = ref('')
</script>
<template>
  <PageWrapper>
    <AboutMe />
    <Skills />
    <Project />
  </PageWrapper>
</template>
<style lang="scss">
@import '../assets/sass/variables';
</style>
