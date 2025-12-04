<script setup lang="ts">
import { moveToWeb } from '../../utils/common'

const selectedItemSrc = ref('')
const isModalOpen = computed(() => !!selectedItemSrc.value)

// 모달 닫기
function closeModal() {
    selectedItemSrc.value = ''
}

const imageList = [
    { title: '메인 랜딩 페이지', src: '/portfolio/baas-index.png' },
    { title: '플랫폼 가이드', src: '/portfolio/baas-guide.png' },
    { title: '네트워크 대시보드', src: '/portfolio/baas-network.png' },
    { title: 'NFT 발행 페이지', src: '/portfolio/baas-nft.png' },
    { title: '토큰 생성 페이지', src: '/portfolio/baas-token.png' },
    { title: 'Block Explorer', src: '/portfolio/baas-explorer.png' },
]
</script>

<template>
    <div class="flex flex-col">
        <!-- SUMMARY -->
        <ProjectModalSummary :tags="['next.js', 'docker']">
            <template #period> 2025.01~ 2025.10</template>
            <template #team>프론트 개발 1명(본인) · 백엔드 1명</template>
            <template #part>
                <div class="flex flex-col gap-2">
                    <p class="flex flex-row gap-1"> UI/UX 디자인 및 프론트엔드 개발
                        <span class="text-gray-500 lg:text-base text-sm">(100%)</span>
                    </p>
                    <p class="flex flex-row gap-1">솔리디티 컴파일러, Slither/Mythril 기반 컨트랙트 정적 분석 도구 서버 개발
                        <span class="text-gray-500 lg:text-base text-sm">(100%)</span>
                    </p>
                </div>
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
                본 프로젝트는
                <span class="font-semibold">블록체인 네트워크 생성 → 컨트랙트 등록 및 배포 → 토큰(ERC20)/NFT/SBT
                    컨트랙트 배포 및 발행 → NFT/SBT 아이템 생성 → 블록
                    탐색(Explorer)</span>
                까지 Web3 기반 서비스 운영에 필요한 전체 기능을 하나의
                <span class="font-semibold">SaaS 플랫폼으로 제공하는 F-BaaS 통합 관리 플랫폼입니다.</span>

                Web3 서비스는 일반 사용자가 이해하기 어려운 복잡한 절차가 많기 때문에, 이를
                <span class="font-semibold">GUI 기반의 직관적인 흐름으로 재구성</span>하여 개발자뿐 아니라 기획자·운영자도 쉽게 사용할 수 있도록
                설계했습니다. 또한 Next.js 기반으로 구축하여
                <span class="font-semibold">유지보수성·생태계 확장성·성능</span>을
                고려한 최신 구조를 도입했습니다.
            </p>
        </ProjectModalOutline>

        <ProjectModalFunction>
            <li>
                <p class="font-medium mb-1">기획 및 UX 설계 전담</p>
                <p class="leading-7 text-base">
                    전체 업무 흐름을 사용자 관점에서 재해석하여
                    네트워크 생성 → 외부 컨트랙트 등록 → 컨트랙트 배포 → NFT/SBT 발행까지
                    단계들이 자연스럽게 이어지도록 Figma로 <span class="font-semibold">기획·디자인을 직접 설계했습니다.</span>
                </p>
                <img src="/portfolio/f-baas-figma.png" alt="baas_figma" />
            </li>
            <li>
                <p class="mb-1 font-medium">
                    Next 서버를 API Reverse Proxy로 활용하여 백엔드 API 완전 비공개 처리
                </p>
                <div class="text-base">
                    모든 API 요청은 클라이언트 → Next 서버(WAS) → Backend(API 서버) 구조로 구성하여
                    백엔드 API 주소와 내부 네트워크 구조를 외부에 노출하지 않도록 설계했습니다.
                    <br />이를 통해 외부 접근 차단, API 서버 보호, 로깅/모니터링 체계 강화 등
                    <span class="font-semibold">보안성과 유지보수성을 극대화</span>하였습니다.
                </div>
            </li>
            <li>
                <p class="mb-1 font-medium">
                    HttpOnly 쿠키 기반 인증을 위한 SSR 인증 프록시 구조 구현
                </p>
                <div class="text-base leading-7">
                    클라이언트에서 토큰을 직접 다루지 않고,
                    <span class="font-semibold">서버 단(SSR)에서 HttpOnly 쿠키를 읽어</span>
                    accessToken/refreshToken을 자동 관리하는 구조를 설계했습니다.
                    <br />이를 통해 XSS 공격을 원천 차단하고,
                    API 서버와의 통신을 <span class="font-semibold">보안적으로 통제된 환경</span>에서 수행하도록 개선했습니다.
                    <br />또한 accessToken 만료 시 SSR에서 refreshToken으로 재발급까지 자동 처리하여 사용자에게
                    <span class="font-semibold">끊김 없는 인증 경험</span>을 제공했습니다.
                </div>
            </li>
            <li>
                <p class="mb-1 font-medium">
                    대용량 파일 업로드 안정화를 위한 스트리밍 기반 Proxy 처리
                </p>
                <div class="text-base leading-7">
                    파일 업로드 API는 Node.js 18+ 환경의 fetch 스트리밍 옵션인
                    <Tag text="duplex: 'half'" is-skill /> 를 활용해
                    <span class="font-semibold">대용량 파일도 안정적으로 업로드</span>할 수 있도록 구현했습니다.
                    <br />
                    Proxy 서버가 파일을 직접 메모리에 적재하지 않고
                    스트림 형태로 백엔드에 전달하여
                    메모리 점유율을 줄이고 중단 없는 업로드 경험을 제공했습니다.
                </div>
            </li>
            <li>
                <p class="mb-1 font-medium">
                    useMemo 기반 연산 메모이징으로 필터 UI 렌더링 성능 최적화
                </p>
                <img src="" />
                <div class="text-base leading-7">
                    검색 조건이 많아질 때 필터 태그 UI가 매번 전체 재계산되는 문제를 해결하기 위해
                    React의
                    <Tag text="useMemo" is-skill /> 훅을 활용하여
                    필터 라벨·값 매핑 로직을 메모이징하고, 의존 값이 변할 때만 재계산하도록 구조를 설계했습니다.
                    그 결과, <span class="font-semibold">불필요한 렌더 반복을 최소화</span>했습니다.
                    <br />
                    또한
                    <Tag text="useCallback" />과 조합하여
                    동일 데이터에 대해 컴포넌트가 재렌더링되지 않도록 구조를 개선함으로써
                    <span class="font-semibold">검색 옵션이 많아져도 UI가 부드럽고 안정적으로 동작하는 환경</span>을 구현했습니다.
                </div>
            </li>
            <li>
                <p class="font-medium mb-1">Zustand 기반 전역 상태 관리로 화면 간 일관성 향상</p>
                <div class="leading-7 text-base">
                    화면 이동이 많고 여러 기능이 유기적으로 연결되는 BaaS 플랫폼 특성상,
                    네트워크 목록, 사용자 정보, UI 열림/닫힘 상태와 같이
                    여러 페이지에서 반복적으로 사용되는 공통 상태가 존재했습니다.
                    <br /><br />

                    이러한 상태를 효율적으로 관리하기 위해
                    <Tag text="Zustand" is-skill />를 도입하여
                    <span class="font-semibold">networkStore / userInfoStore / uiStore</span>로 기능 단위의 전역 상태를 분리했습니다.

                    <ul class="list-disc pl-5 mt-1 text-gray-700">
                        <li><span class="font-medium">networkStore</span>: 네트워크 목록 persist, 타입 카운트, 선택된 네트워크, endpoint 등
                            관리</li>
                        <li><span class="font-medium">userInfoStore</span>: 로그인 사용자 정보를 persist로 저장하고 전역에서 일관되게 공유</li>
                        <li><span class="font-medium">uiStore</span>: 사이드바 열림/닫힘 등 UI 상태를 단일 소스로 관리</li>
                    </ul>

                    이 구조를 통해 페이지 전환 시에도 상태가 초기화되지 않고 유지되며,
                    여러 화면에서 동일한 상태를 참조할 때 발생할 수 있는 불일치를 방지했습니다.
                    또한 불필요한 <span class="font-semibold">prop drilling</span> 없이
                    컴포넌트가 필요한 값만 직접 조회할 수 있어
                    개발 편의성과 유지보수성이 크게 향상되었습니다.
                </div>
            </li>
            <li>
                <p class="mb-1 font-medium">
                    MDX 기반 문서 플랫폼 구축 및 정적 페이지 자동 생성 시스템 개발
                </p>
                <div class="text-base leading-7">
                    Next.js의 SSG 기능(
                    <Tag text="getStaticProps" />,
                    <Tag text="getStaticPaths" />)과
                    <Tag text="MDX" is-skill />를 조합하여
                    외부 CMS 없이도 문서를 자동 생성·배포할 수 있는
                    <span class="font-semibold">독립적인 문서 플랫폼</span>을 구축했습니다.
                    <br />
                    Markdown 파일을 파일시스템에서 읽어 frontMatter를 파싱하고,
                    메뉴·라우팅·본문 렌더링을 자동화하여
                    문서 추가만으로 즉시 페이지가 생성되는
                    <span class="font-semibold">확장성과 유지보수성이 높은 구조</span>를 완성했습니다.
                </div>
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
