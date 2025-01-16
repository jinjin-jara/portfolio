<script setup lang="ts">
import { moveToWeb } from '../../utils/common';

const selectedItemSrc = ref('')
const isModalOpen = computed(() => !!selectedItemSrc.value)

// 모달 닫기
function closeModal() {
    selectedItemSrc.value = ''
}

const imageList: { src: string, title: string }[] = [
    {
        title: '메인 화면',
        src: '/portfolio/token1.png'
    },
    {
        title: '상품 상세페이지 및 거래화면',
        src: '/portfolio/token2.png'
    },
    {
        title: '마이페이지',
        src: '/portfolio/token3.png'
    },
    {
        title: '블록체인 대시보드-트랜잭션 페이지',
        src: '/portfolio/fsto-transaction.png'
    },
    {
        title: '블록체인 대시보드-토큰 페이지',
        src: '/portfolio/fsto-token.png'
    },
]
</script>
<template>
    <div class="flex flex-col">
        <ProjectModalSummary :tags="['nuxt.js']">
            <template #period>
                2023.09 ~ 2023.12
            </template>
            <template #team>
                프론트 개발자 1명(본인), 백엔드 개발자 1명
            </template>
            <template #part>
                <p>
                    UI/UX 디자인 및 프론트엔드 개발 <span class="text-gray-500 lg:text-base text-sm">(100%)</span><br />
                </p>
            </template>
        </ProjectModalSummary>

        <PageSmallSection>
            <PageTitle size="sm" class="pb-0">
                <p>🔗 관련 링크</p>
            </PageTitle>
            <p @click="moveToWeb(`https://fsto-dev.fingerservice.co.kr:8087`)"
                class="flex flex-col gap-2 flex-wrap cursor-pointer border border-gray-300 p-2 rounded-lg">
                <span class="font-medium">비상장 토큰 증권 플랫폼 바로가기</span>
                <span class="text-sm">https://fsto-dev.fingerservice.co.kr:8087</span>
            </p>
            <p @click="moveToWeb(`https://fsto-dev.fingerservice.co.kr:8082`)"
                class="flex flex-col gap-2 flex-wrap cursor-pointer border border-gray-300 p-2 rounded-lg">
                <span class="font-medium">블록체인 대시보드<span class="text-gray-500">(트랜잭션 추적 페이지)</span> 바로가기</span>
                <span class="text-sm">https://fsto-dev.fingerservice.co.kr:8082</span>
            </p>
            <p @click="moveToWeb(`https://www.finger.co.kr/homepage/html/bus/bus-05-05.html?cate=bus&sub=05&page=05`)"
                class="flex flex-col gap-2 flex-wrap cursor-pointer border border-gray-300 p-2 rounded-lg">
                <span class="font-medium">프로젝트 소개 페이지 바로가기</span>
                <span
                    class="text-sm">https://www.finger.co.kr/homepage/html/bus/bus-05-05.html?cate=bus&sub=05&page=05</span>
            </p>
        </PageSmallSection>
        <ProjectModalOutline>
            <li>사용자들이 비상장 토큰을 거래할 수 있는 비상장 거래 플랫폼과 블록체인 모니터링 웹 개발</li>
            <li><span class="font-medium">핵심 기능</span>
                <ul class="list-circle pl-5">
                    <li>매도/매수 기능</li>
                    <li>거래 내역 조회</li>
                    <li>실시간 가격 정보 제공</li>
                    <li>사용자 토론 기능 제공</li>
                </ul>
            </li>
        </ProjectModalOutline>
        <ProjectModalFunction>
            <li>
                비상장 거래 플랫폼
                <ul class="my-2">
                    <div class="bg-zinc-200 px-3 py-2 rounded-lg">
                        <p class="mb-4 font-semibold">💡 주요 기능</p>
                        <p class="break-words">
                            - 매도/매수 상품 등록 기능 구현<br />
                            - 사용자의 보유 예치금 및 상품 수량을 확인하여 유효성 검증을 적용<br />
                            - 중복 거래 방지를 위해 더블 클릭 방지 로직 추가<br />
                            - <Tag :is-skill="true" text="chart.js" />를 활용하여 실시간 가격 차트 생성 및 시각화.
                        </p>
                    </div>
                </ul>
            </li>
            <li>
                토론 페이지
                <ul class="my-2">
                    <div class="bg-zinc-200 px-3 py-2 rounded-lg">
                        <p class="mb-4 font-semibold">💡 댓글 및 사용자 멘션 기능</p>
                        <p class="break-words">
                            - 사용자가 작성한 댓글을 등록, 수정, 삭제할 수 있는 댓글 기능 구현<br />
                            - 사용자 멘션 기능을 통해 특정 사용자를 호출할 수 있도록 개발<br />
                            - 실시간으로 댓글이 반영되는 동적 UI 제공
                        </p>
                    </div>
                </ul>
            </li>
            <li>
                블록체인 대시보드
                <ul class="my-2">
                    <div class="bg-zinc-200 px-3 py-2 rounded-lg">
                        <p class="mb-4 font-semibold">💡 블록체인 대시보드 주요 기능</p>
                        <p class="break-words">
                            - 블록, 트랜잭션, 토큰 리스트를 조회하고, 각 항목의 상세 정보를 제공하는 UI/UX 설계 및 개발<br />
                        </p>
                    </div>
                </ul>
            </li>
        </ProjectModalFunction>
        <ProjectModalGallery>
            <ProjectModalGalleryImage v-for="(item, i) in imageList" :key="i" :title="item.title" :src="item.src"
                @click="() => { selectedItemSrc = item.src }" />
        </ProjectModalGallery>
        <ProjectModalGalleryDetail :is-open="isModalOpen" @closeGallery="closeModal">
            <img :src="selectedItemSrc" />
        </ProjectModalGalleryDetail>
    </div>
</template>