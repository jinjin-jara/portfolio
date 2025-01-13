<script setup lang="ts">
import { useRouter } from 'vue-router'
import { projects, getQueryValue, getTitleById } from '../../utils/common'
const router = useRouter()
const route = useRoute()

const queryValue = computed(() => route.query.project)
// 선택된 태그
const selectedTag = ref('')
// 모달 상태 관리
const isModalOpen = computed(() => !!queryValue.value)
const modalTitle = ref('')
// 모달 열기
function openModal(project: string, title: string) {
    router.push({ query: { project } }) // 쿼리 값 추가
    modalTitle.value = title
}

// 모달 닫기
function closeModal() {
    router.push({ query: {} }) // 쿼리 값 제거
}

const tagOrder = ['nuxt.js', 'vue.js', 'swift UI', 'jQuery', 'minio', 'spring boot', 'pwa', 'golang']

// 선택된 태그에 맞게 필터링된 프로젝트
const filteredProjects = computed(() =>
    selectedTag.value
        ? projects.filter((project) => project.tags.includes(selectedTag.value))
        : projects
)

onMounted(() => {
    const queryResult = getQueryValue('project')
    if ( queryResult !== '') {
        modalTitle.value = getTitleById(queryResult)
    }
})
</script>
<template>
    <div>

        <PageSection section-id="project">
            <div class="flex flex-col gap-6">
                <PageTitle class="pb-0">
                    <template #icon="{ size }">
                        <img src="/portfolio/project.png" :class="[size]" />
                    </template>
                    <span>Project</span>
                </PageTitle>
                <div class="flex flex-col gap-4">
                    <p class="bg-zinc-100 p-2 rounded-md flex flex-row gap-1 text-base font-normal tracking-normal">
                        💁🏻
                        <span>
                            담당한 프로젝트를 최신 순으로 구성했습니다.<br />해당 프로젝트를 클릭하면 주요 내용, 역할 및 기여도, 수행 기간 등을 확인할 수 있습니다.
                        </span>
                    </p>
                    <div class="flex flex-row flex-wrap gap-2 text-base font-normal">
                        <button @click="selectedTag = ''"
                            :class="[selectedTag == '' ? 'bg-gray-600 text-white' : 'bg-zinc-100 text-gray-800']"
                            class="px-4 py-1 rounded-md">
                            All
                        </button>
                        <button v-for="tag in tagOrder" :key="tag" @click="selectedTag = tag" :class="[
                            'px-3 py-1 rounded-md',
                            selectedTag === tag ? 'bg-blue-500 text-white' : 'bg-zinc-100 text-gray-800',
                        ]">
                            {{ tag }}
                        </button>
                    </div>
                </div>
                <div class="grid lg:grid-cols-2 gap-4">
                    <ProjectCard v-for="project in filteredProjects" :key="project.id" :tags="project.tags"
                        @click="openModal(project.id, project.title)">
                        <template #title>
                            {{ project.title }}
                        </template>
                        <template #desc>
                            <span class="text-[0.9rem]" v-dompurify-html="project.desc" />
                        </template>
                        <template #image>
                            <img :src="project.image" />
                        </template>
                    </ProjectCard>
                </div>
            </div>
        </PageSection>
        <ProjectModal :is-open="isModalOpen" @close="closeModal">
            <template #title>
                {{ modalTitle }}
            </template>
            <ProjectIncheon v-if="queryValue === 'incheontp'" />
            <ProjectFdid v-else-if="queryValue === 'did'" />
            <ProjectBaas v-else-if="queryValue === 'baas'" />
            <ProjectToken v-else-if="queryValue === 'token'" />
        </ProjectModal>
    </div>
</template>