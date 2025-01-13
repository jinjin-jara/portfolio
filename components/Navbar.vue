<script setup lang="ts">
import { moveToWeb } from '../utils/common';
const activeTab = ref('')
function scrollToSection(id: string) {
    const section = document.getElementById(id)
    if (section) {
        const paddingOffset = 50
        const yPosition = section.getBoundingClientRect().top + window.pageYOffset - paddingOffset;
        window.scrollTo({
            top: yPosition,
            behavior: 'smooth',
        })
    }
}
const detectActiveTab = () => {
    const sections = document.querySelectorAll('.section')
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            activeTab.value = section.id
        }
    })
}


onMounted(() => {
    detectActiveTab() // 초기 활성 탭 감지
    window.addEventListener('scroll', detectActiveTab)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', detectActiveTab)
})
</script>
<template>
    <div
        class="sticky top-0 z-10 h-15 bg-white/[0.5] border-b-1 flex items-center justify-center backdrop-filter backdrop-blur-md text-gray-600">
        <div class="max-w-8xl px-2 lg:text-lg text-sm sm:text-sm grid grid-cols-5 gap-4 lg:gap-10 h-full items-center justify-center">
            <button :class="{ 'font-bold text-gray-800': activeTab === 'about-me' }" class="text-center"
                @click="scrollToSection('about-me')">About me</button>
            <button :class="{ 'font-bold text-gray-800': activeTab === 'skills' }" class="text-center"
                @click="scrollToSection('skills')">Skills</button>
            <button :class="{ 'font-bold text-gray-800': activeTab === 'project' }" class="text-center" @click="scrollToSection('project')">Project</button>
            <button class="text-center" @click="() => { moveToWeb(`https://github.com/jinjin-jara`) }">Github</button>
            <button class="text-center" @click="() => { moveToWeb(`https://jinnnkcoding.tistory.com`) }">Tech Vlog</button>
        </div>
    </div>
</template>