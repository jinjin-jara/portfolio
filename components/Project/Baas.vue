<script setup lang="ts">
import { moveToWeb } from '../../utils/common'

const selectedItemSrc = ref('')
const isModalOpen = computed(() => !!selectedItemSrc.value)

// 모달 닫기
function closeModal() {
    selectedItemSrc.value = ''
}

const imageList = [
    { title: '메인 랜딩 페이지', src: '/portfolio/portfolio/baas-index.png' },
    { title: '플랫폼 가이드', src: '/portfolio/portfolio/baas-guide.png' },
    { title: '네트워크 대시보드', src: '/portfolio/portfolio/baas-network.png' },
    { title: 'NFT/SBT 발행 UI', src: '/portfolio/portfolio/baas-nft.png' },
    { title: '토큰 생성 페이지', src: '/portfolio/portfolio/baas-token.png' },
    { title: 'Block Explorer', src: '/portfolio/portfolio/baas-explorer.png' }
]
</script>

<template>
    <div class="flex flex-col">
        <!-- SUMMARY -->
        <ProjectModalSummary :tags="['next.js', 'docker']">
            <template #period>
                2025.01~ 2025.10</template>
            <template #team>프론트 개발 1명(본인) · 백엔드 1명</template>
            <template #part>
                UI/UX 디자인 및 프론트엔드 개발 <span class="text-gray-500 lg:text-base text-sm">(100%)</span><br />
            </template>
        </ProjectModalSummary>

        <!-- LINKS -->
        <PageSmallSection>
            <PageTitle size="sm" class="pb-0">🔗 관련 링크</PageTitle>

            <p class="flex flex-col gap-2 flex-wrap cursor-pointer border border-gray-300 p-2 rounded-lg"
                @click="moveToWeb('https://fbaas-dev.fingerservice.co.kr')">
                <span class="font-medium">F-BaaS 플랫폼 바로가기</span>
                <span class="text-blue-500 text-base">테스트 아이디: park-finger@yopmail.com / 비밀번호: 1234</span>
                <span class="text-sm text-blue-500">https://fsto-dev.fingerservice.co.kr:33000</span>
            </p>

            <p class="flex flex-col gap-2 flex-wrap cursor-pointer border border-gray-300 p-2 rounded-lg"
                @click="moveToWeb('https://fbaas-dev.fingerservice.co.kr/guide')">
                <span class="font-medium">문서(가이드) 페이지</span>
                <span class="text-sm text-blue-500">https://fsto-dev.fingerservice.co.kr:33000/guide</span>
            </p>
        </PageSmallSection>

        <!-- OUTLINE -->
        <ProjectModalOutline>
            <p class="font-semibold mb-2">
                블록체인 네트워크 생성부터 NFT/SBT 발행, 토큰 생성, 익스플로러 기능까지
                한 플랫폼에서 제공하는 <span class="text-blue-500">F-BaaS 통합 관리 플랫폼</span>입니다.
            </p>

            <li>기업이 직접 블록체인 인프라를 구축하지 않아도 서비스를 개발할 수 있도록 지원</li>
            <li>다양한 기능을 GUI 기반으로 구현하여 개발자들의 생산성을 극대화</li>

            <li class="mt-2 font-medium">핵심 기능
                <ul class="list-circle pl-5">
                    <li>네트워크 대시보드(노드 상태, 합의 알고리즘 지원)</li>
                    <li>NFT·SBT 발행 및 관리 UI</li>
                    <li>ERC-20 토큰 생성 및 관리</li>
                    <li>Block Explorer를 통한 블록·트랜잭션 탐색</li>
                    <li>가이드(MDX 기반) 문서 사이트</li>
                </ul>
            </li>
        </ProjectModalOutline>

        <ProjectModalFunction>
            <li>
                <p class="font-medium mb-1">블록체인 네트워크 및 합의 알고리즘 지원 UI 구축</p>
                <p class="leading-7 text-base">
                    <Tag text="QBFT" is-skill /> /
                    <Tag text="IBFT" is-skill /> /
                    <Tag text="Clique" is-skill />
                    등 다양한 합의 알고리즘 종류를 UI로 직관적으로 보여주는 화면을 구현했습니다.
                    <br />
                    <span class="text-gray-600 text-sm">각 알고리즘별 특징을 비개발자도 이해할 수 있도록 구조화</span>
                </p>
            </li>

            <!-- NFT & SBT -->
            <li>
                <p class="font-medium mb-1">NFT/SBT 발행 UI 아키텍처 전담</p>
                <div class="text-base leading-7">
                    <Tag text="SBT 발행" is-skill />
                    네트워크·컨트랙트 선택 → 콘텐츠 선택 → 속성 입력 → 다중 지갑 선택 → 발행까지 이어지는
                    <span class="font-semibold">복잡한 데이터 흐름</span>을 화면에서 처리하도록 전체 구조를 설계했습니다.
                    <br />
                    이 과정에서 하위 컴포넌트 상태 무분별한 공유를 막기 위해
                    <Tag text="Zustand" is-skill />로
                    <span class="font-semibold">컨트랙트·지갑·속성 데이터 상태를 모듈화</span>해 관리하였습니다.
                </div>
            </li>

            <!-- TOKEN -->
            <li>
                <p class="font-medium mb-1">ERC-20 토큰 생성 기능 개발</p>
                <div class="leading-7">
                    토큰 이름·심볼·발행량·소각 권한 등 필요한 파라미터를 입력하면
                    실제 컨트랙트 배포 및 발행까지 트랜잭션이 연결되는 UI를 구현했습니다.
                    <br />
                    또한
                    <Tag text="Explorer" is-skill />와 자동 연동돼
                    <span class="font-semibold">발행 결과와 이력을 실시간 확인 가능</span>하도록 구성했습니다.
                </div>
            </li>

            <li>
                <p class="font-medium mb-1">Block Explorer UI 개발</p>
                <div class="leading-7">
                    블록 / 트랜잭션 / 토큰 내역을 실시간으로 표시하는 익스플로러 기능을 개발했으며,<br />
                    <span class="font-semibold">페이징·정렬·필터링을 포함한 대량 데이터 렌더링 최적화</span>를 적용했습니다.
                </div>
            </li>

            <li>
                <p class="font-medium mb-1">컨트랙트 검색 컴포넌트 개발</p>
                <div class="leading-7">
                    <Tag text="ContractSelect" /> 컴포넌트는
                    네트워크 기반 컨트랙트 목록을 실시간 검색/선택할 수 있는 핵심 기능입니다.
                    <br />
                    디바운스 검색, 초기 선택값 유지, 지갑 기반 필터링 등
                    <span class="font-semibold">고난도 UX를 안정적으로 처리</span>하도록 설계했습니다.
                </div>
                <span class="text-xs text-gray-600">
                    (컴포넌트 일부 근거 코드: ContractSelect.tsx)
                    :contentReference[oaicite:0]{index=0}
                </span>
            </li>

            <li>
                <p class="font-medium mb-1">MDX 기반 가이드 문서 시스템 구축</p>
                <div class="leading-7">
                    Next.js의 Static Generation과
                    <Tag text="MDX" is-skill />를 사용해
                    개발 문서·튜토리얼을 별도 CMS 없이 운영할 수 있도록 구현했습니다.
                    <br />
                    파일 기반 라우팅·메뉴 자동 생성·커스텀 UI 컴포넌트를 지원합니다.
                </div>
                <span class="text-xs text-gray-600">
                    (문서 페이지 일부: [slug].tsx)
                    :contentReference[oaicite:1]{index=1}
                </span>
            </li>
        </ProjectModalFunction>

        <ProjectModalGallery>
            <ProjectModalGalleryImage v-for="(item, i) in imageList" :key="i" :title="item.title" :src="item.src"
                @click="() => (selectedItemSrc = item.src)" />
        </ProjectModalGallery>

        <ProjectModalGalleryDetail :is-open="isModalOpen" @closeGallery="closeModal">
            <img :src="selectedItemSrc" />
        </ProjectModalGalleryDetail>
    </div>
</template>
