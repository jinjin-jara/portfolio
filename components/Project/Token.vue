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
                <span class="font-medium whitespace-pre-wrap">블록체인 대시보드<span class="text-gray-500">(트랜잭션 추적 페이지)</span>
                    바로가기</span>
                <span class="text-sm">https://fsto-dev.fingerservice.co.kr:8082</span>
            </p>
            <p @click="moveToWeb(`https://www.finger.co.kr/homepage/html/bus/bus-05-05.html?cate=bus&sub=05&page=05`)"
                class="flex flex-col gap-2 flex-wrap cursor-pointer border border-gray-300 p-2 rounded-lg">
                <span class="font-medium">프로젝트 소개 페이지 바로가기</span>
                <span
                    class="text-sm whitespace-pre-line break-all">https://www.finger.co.kr/homepage/html/bus/bus-05-05.html?cate=bus&sub=05&page=05</span>
            </p>
        </PageSmallSection>
        <ProjectModalOutline>
            <li>사용자들이 비상장 토큰을 거래할 수 있는 거래 플랫폼과 블록체인 모니터링 웹을 전반적으로 설계 및 개발</li>

            <li><span class="font-medium">핵심 기능</span>
                <ul class="list-circle pl-5">
                    <li>매도/매수 거래 처리 및 유효성 검증</li>
                    <li>실시간 가격 반영 및 거래 내역 조회</li>
                    <li>사용자 토론 및 멘션 기능</li>
                    <li>블록·트랜잭션·토큰 데이터 조회 및 상세 페이지</li>
                </ul>
            </li>
        </ProjectModalOutline>

        <ProjectModalFunction>
            <li>
                비상장 거래 플랫폼
                <ul class="my-2">
                    <div class="bg-zinc-200 px-3 py-2 rounded-lg text-base leading-7">
                        <p class="mb-4 font-semibold">💡 거래 UI 아키텍처 및 주요 기능</p>

                        - 사용자의 보유 잔액·상품 수량을 기반으로 매수/매도 가능 여부를 실시간 검증하는
                        <span class="font-semibold">유효성 검사 로직</span> 구축<br />
                        - 버튼 연타로 인해 중복 주문이 발생하지 않도록
                        <span class="font-semibold">Double Submit 방지 로직</span> 적용<br />
                        -
                        <Tag :is-skill="true" text="chart.js" />로 실시간 가격 변동을 반영하는
                        <span class="font-semibold">실시간 차트 UI 시각화</span> 구현<br />
                        - 거래 요청 → 검증 → 결과 반영까지 이어지는 비동기 흐름을 고려해
                        <span class="font-semibold">안정적인 사용자 경험(UX) 설계</span><br />
                    </div>
                </ul>
            </li>

            <li>
                토론 페이지
                <ul class="my-2">
                    <div class="bg-zinc-200 px-3 py-2 rounded-lg text-base leading-7">
                        <p class="mb-4 font-semibold">💡 댓글·멘션 기반 실시간 인터랙션</p>

                        - 댓글 등록·수정·삭제가 즉시 반영되는
                        <span class="font-semibold">동적 인터랙션 UI</span> 구현<br />
                        - '@사용자' 형태로 특정 사용자를 호출할 수 있는
                        <span class="font-semibold">멘션 기능</span> 개발<br />
                        - 비동기 상태 변화를 즉각적으로 반영하기 위해
                        <span class="font-semibold">상태 관리 및 렌더링 최적화</span> 적용<br />
                    </div>
                </ul>
            </li>

            <li>
                블록체인 대시보드
                <ul class="my-2">
                    <div class="bg-zinc-200 px-3 py-2 rounded-lg text-base leading-7">
                        <p class="mb-4 font-semibold">💡 트랜잭션·토큰 데이터를 시각적으로 분석하는 UI</p>

                        - 블록·트랜잭션·토큰 리스트 제공 및 상세 데이터 조회 UI 설계<br />
                        - 사용자 입장에서 빠르게 이해할 수 있도록
                        <span class="font-semibold">데이터 구조화 및 화면 간 정보 흐름 설계</span><br />
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